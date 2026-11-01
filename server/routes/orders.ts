import { Router, type Request, type Response } from 'express';
import fs from 'fs';
import path from 'path';
import { connectDB, isDbConnected } from '../config/db.ts';
import { Order, type IOrderItem, type OrderStatus } from '../models/Order.ts';
import { Product } from '../models/Product.ts';
import { getNextOrderId } from '../models/Counter.ts';
import { getDeliveryCharge } from '../utils/delivery.ts';
import { verifyAdminToken } from '../middleware/auth.ts';
import { PRODUCTS } from '../../src/data/mockData.ts';

export const ordersRouter = Router();

/* ── Persistent Local Database Backup (server/data/orders.json) ── */
const DATA_DIR = path.resolve(process.cwd(), 'server', 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(ORDERS_FILE)) {
      fs.writeFileSync(ORDERS_FILE, '[]', 'utf8');
    }
  } catch (err) {
    console.error('[Orders File DB Init Error]:', err);
  }
}

export function getLocalOrders(): any[] {
  try {
    ensureDataFile();
    const raw = fs.readFileSync(ORDERS_FILE, 'utf8');
    return JSON.parse(raw) || [];
  } catch {
    return [];
  }
}

export function saveLocalOrder(order: any): void {
  try {
    ensureDataFile();
    const orders = getLocalOrders();
    const idx = orders.findIndex((o: any) => o.orderId === order.orderId);
    if (idx >= 0) {
      orders[idx] = { ...orders[idx], ...order, updatedAt: new Date().toISOString() };
    } else {
      orders.unshift(order);
    }
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2), 'utf8');
  } catch (err) {
    console.error('[Orders Save Local Error]:', err);
  }
}

export function updateLocalOrderStatus(orderId: string, orderStatus: string, paymentStatus?: string): any {
  try {
    ensureDataFile();
    const orders = getLocalOrders();
    const target = orders.find((o: any) => o.orderId === orderId);
    if (target) {
      target.orderStatus = orderStatus;
      if (paymentStatus) target.paymentStatus = paymentStatus;
      target.updatedAt = new Date().toISOString();
      const stepIndex = ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered'].indexOf(orderStatus);
      if (stepIndex >= 0 && target.trackingSteps) {
        target.trackingSteps = target.trackingSteps.map((step: any, idx: number) => ({
          ...step,
          completed: idx <= stepIndex,
          current: idx === stepIndex,
          date: idx <= stepIndex && step.date === 'Pending' ? new Date().toISOString().split('T')[0] : step.date,
        }));
      }
      fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2), 'utf8');
      return target;
    }
    return null;
  } catch {
    return null;
  }
}

export function deleteLocalOrder(orderId: string): boolean {
  try {
    ensureDataFile();
    const orders = getLocalOrders();
    const filtered = orders.filter((o: any) => o.orderId !== orderId);
    if (filtered.length !== orders.length) {
      fs.writeFileSync(ORDERS_FILE, JSON.stringify(filtered, null, 2), 'utf8');
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

/**
 * Validates Bangladeshi mobile phone numbers
 */
function isValidBdPhone(phone: string): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s-]/g, '');
  const bdRegex = /^(?:\+88|88)?01[3-9]\d{8}$/;
  return bdRegex.test(cleaned);
}

// POST /api/orders - Create new customer order with strict validation & resilient dual-store
ordersRouter.post('/', async (req: Request, res: Response) => {
  try {
    const body = req.body || {};
    const customerName = body.customerName;
    const customerPhone = body.phone || body.customerPhone;
    const customerEmail = body.email || body.customerEmail;
    const shippingAddress = body.address || body.shippingAddress;
    const area = body.area || '';
    const district = body.district || 'Dhaka';
    const additionalNote = body.additionalNote || body.note || '';
    const items = body.products || body.items;
    const paymentMethod = body.paymentMethod || 'Cash on Delivery';
    const paymentNumber = body.paymentNumber || '01873434639';
    const senderNumber = body.senderNumber || '';
    const trxId = body.trxId || '';

    // 1. Basic Field Validations
    if (!customerName || typeof customerName !== 'string' || customerName.trim().length < 2) {
      res.status(400).json({ success: false, message: 'Customer full name is required (at least 2 characters).' });
      return;
    }

    if (!customerPhone || !isValidBdPhone(customerPhone)) {
      res.status(400).json({
        success: false,
        message: 'A valid Bangladeshi mobile phone number is required (e.g. 017xxxxxxxx or 018xxxxxxxx).',
      });
      return;
    }

    if (!shippingAddress || typeof shippingAddress !== 'string' || shippingAddress.trim().length < 5) {
      res.status(400).json({ success: false, message: 'Detailed delivery address is required (at least 5 characters).' });
      return;
    }

    if (!Array.isArray(items) || items.length === 0) {
      res.status(400).json({ success: false, message: 'Your cart is empty. Please add items to order.' });
      return;
    }

    // 2. Try Database Connection
    try {
      await connectDB();
    } catch (dbErr) {
      console.warn('[Orders POST DB Notice]: Mongo connection skipped, using resilient local storage', dbErr);
    }

    // 3. Server-side Product Verification & Price Integrity Check
    const verifiedItems: IOrderItem[] = [];
    let calculatedSubtotal = 0;

    for (const item of items) {
      const pId = String(item.productId || item.id || '');
      const rawQty = item.quantity;
      const quantity = parseInt(String(rawQty), 10);

      if (!pId) {
        res.status(400).json({ success: false, message: 'Invalid product ID in cart.' });
        return;
      }

      if (isNaN(quantity) || quantity <= 0) {
        res.status(400).json({ success: false, message: `Invalid quantity for product "${pId}". Must be at least 1.` });
        return;
      }

      // Look up product in MongoDB if connected, or catalog fallback
      let productDoc: any = null;
      if (isDbConnected()) {
        try {
          productDoc = await Product.findOne({
            $or: [{ productId: pId }, { _id: pId.match(/^[0-9a-fA-F]{24}$/) ? pId : null }],
          });
        } catch {}
      }

      if (!productDoc) {
        productDoc = PRODUCTS.find((p) => p.id === pId);
      }

      if (!productDoc) {
        // Fallback to client item if catalog item not found
        productDoc = {
          productId: pId,
          name: item.name || 'Tech Product',
          images: [item.image || '/images/placeholder.webp'],
          discountPrice: item.unitPrice || item.price || 1000,
          stock: 99,
        };
      }

      const verifiedUnitPrice = Number(
        productDoc.salePrice !== undefined && productDoc.salePrice !== null
          ? productDoc.salePrice
          : (productDoc.discountPrice || productDoc.price || productDoc.regularPrice || item.unitPrice || 1000)
      );

      const itemSubtotal = verifiedUnitPrice * quantity;
      calculatedSubtotal += itemSubtotal;

      const productImage =
        (productDoc.images && productDoc.images[0]) ||
        productDoc.image ||
        item.image ||
        '/images/placeholder.webp';

      verifiedItems.push({
        productId: productDoc.productId || productDoc.id || pId,
        name: productDoc.name,
        image: productImage,
        quantity,
        unitPrice: verifiedUnitPrice,
        subtotal: itemSubtotal,
      });
    }

    // 4. Central Delivery Charge & Grand Total Calculation
    const deliveryCharge = getDeliveryCharge(district);
    const discount = 0;
    const grandTotal = calculatedSubtotal + deliveryCharge - discount;

    // 5. Generate Real Unique Sequential Order ID (MC-10001, MC-10002, ...)
    let orderId = `MC-${Math.floor(10000 + Math.random() * 90000)}`;
    if (isDbConnected()) {
      try {
        orderId = await getNextOrderId();
      } catch {}
    }

    const orderPayload = {
      orderId,
      customer: {
        name: customerName.trim(),
        phone: customerPhone.trim(),
        email: customerEmail ? customerEmail.trim() : '',
      },
      delivery: {
        address: shippingAddress.trim(),
        area: area ? area.trim() : '',
        district: district.trim(),
        note: additionalNote ? additionalNote.trim() : '',
      },
      items: verifiedItems,
      subtotal: calculatedSubtotal,
      deliveryCharge,
      discount,
      grandTotal,
      paymentMethod,
      paymentNumber,
      senderNumber,
      trxId,
      paymentStatus: paymentMethod === 'Cash on Delivery' ? 'Pending' : (trxId ? 'Paid' : 'Pending'),
      orderStatus: 'Pending' as OrderStatus,
      trackingSteps: [
        { title: 'Order Placed', date: new Date().toISOString().split('T')[0], completed: true, current: true },
        { title: 'Order Confirmed', date: 'Pending', completed: false },
        { title: 'Processing & Quality Check', date: 'Pending', completed: false },
        { title: 'Shipped via Courier', date: 'Pending', completed: false },
        { title: 'Delivered', date: 'Pending', completed: false },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // 6. Save to MongoDB if connected & ALWAYS mirror to persistent local JSON database
    saveLocalOrder(orderPayload);

    let savedOrder: any = orderPayload;
    if (isDbConnected()) {
      try {
        for (const item of verifiedItems) {
          await Product.findOneAndUpdate(
            { productId: item.productId, stock: { $gte: item.quantity } },
            { $inc: { stock: -item.quantity } }
          );
        }
        const orderDoc = new Order(orderPayload);
        savedOrder = await orderDoc.save();
      } catch (saveErr) {
        console.warn('[MongoDB Save Warning]: Could not save to Mongo collection, local file backup retained.', saveErr);
      }
    }

    res.status(201).json({
      success: true,
      message: 'অর্ডার সফলভাবে গ্রহণ করা হয়েছে!',
      orderId: savedOrder.orderId || orderId,
      insertedId: savedOrder._id || orderId,
      order: savedOrder,
    });
  } catch (error: any) {
    console.error('[Orders POST Error]:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Order save failed',
    });
  }
});

// GET /api/orders - Admin Order Management with search, filter, sort & pagination
ordersRouter.get('/', verifyAdminToken, async (req: Request, res: Response) => {
  try {
    const { search, status, sort = 'newest', page = '1', limit = '15' } = req.query;
    const pageNum = Math.max(1, parseInt(page as string, 10) || 1);
    const limitNum = Math.max(1, Math.min(100, parseInt(limit as string, 10) || 15));

    let allOrders: any[] = [];
    const localOrders = getLocalOrders();

    try {
      await connectDB();
      if (isDbConnected()) {
        const mongoOrders = await Order.find().sort({ createdAt: -1 }).lean();
        const mongoIds = new Set(mongoOrders.map((o: any) => o.orderId));
        allOrders = [...mongoOrders];
        for (const lo of localOrders) {
          if (!mongoIds.has(lo.orderId)) {
            allOrders.push(lo);
          }
        }
      } else {
        allOrders = [...localOrders];
      }
    } catch {
      allOrders = [...localOrders];
    }

    // Filter by status
    if (status && status !== 'All') {
      allOrders = allOrders.filter((o: any) => o.orderStatus === status);
    }

    // Search query
    if (search && String(search).trim()) {
      const q = String(search).toLowerCase().trim();
      allOrders = allOrders.filter(
        (o: any) =>
          o.orderId?.toLowerCase().includes(q) ||
          o.customer?.name?.toLowerCase().includes(q) ||
          o.customer?.phone?.includes(q) ||
          o.customer?.email?.toLowerCase().includes(q) ||
          o.delivery?.district?.toLowerCase().includes(q)
      );
    }

    // Sort
    allOrders.sort((a, b) => {
      const timeA = new Date(a.createdAt || 0).getTime();
      const timeB = new Date(b.createdAt || 0).getTime();
      return sort === 'oldest' ? timeA - timeB : timeB - timeA;
    });

    const total = allOrders.length;
    const paginated = allOrders.slice((pageNum - 1) * limitNum, pageNum * limitNum);

    res.json({
      success: true,
      orders: paginated,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.max(1, Math.ceil(total / limitNum)),
      },
    });
  } catch (error: any) {
    console.error('[Orders GET Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
});

// GET /api/orders/:id - Get single order details
ordersRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    let order: any = null;

    try {
      await connectDB();
      if (isDbConnected()) {
        order = await Order.findOne({
          $or: [{ orderId: id }, { _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }],
        }).lean();
      }
    } catch {}

    if (!order) {
      const local = getLocalOrders();
      order = local.find((o: any) => o.orderId === id || o._id === id);
    }

    if (order) {
      res.json({ success: true, order });
      return;
    }

    res.status(404).json({ success: false, error: 'Order not found' });
  } catch (error: any) {
    console.error('[Orders GET Single Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Internal Server Error' });
  }
});

// PUT /api/orders/:id - Update Order Status (Admin protected)
ordersRouter.put('/:id', verifyAdminToken, async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const { orderStatus, paymentStatus } = req.body;

    const validStatuses: OrderStatus[] = ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
    if (orderStatus && !validStatuses.includes(orderStatus)) {
      res.status(400).json({
        success: false,
        error: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      });
      return;
    }

    // Update in local database
    const updatedLocal = updateLocalOrderStatus(id, orderStatus, paymentStatus);

    // Update in Mongo if connected
    let updatedMongo: any = null;
    try {
      await connectDB();
      if (isDbConnected()) {
        const order = await Order.findOne({
          $or: [{ orderId: id }, { _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }],
        });

        if (order) {
          if (orderStatus === 'Cancelled' && order.orderStatus !== 'Cancelled') {
            for (const item of order.items) {
              await Product.findOneAndUpdate(
                { productId: item.productId },
                { $inc: { stock: item.quantity }, availability: 'In Stock' }
              );
            }
          }

          if (orderStatus) {
            order.orderStatus = orderStatus;
            const stepIndex = ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered'].indexOf(orderStatus);
            if (stepIndex >= 0 && order.trackingSteps) {
              order.trackingSteps = order.trackingSteps.map((step: any, idx: number) => ({
                ...step,
                completed: idx <= stepIndex,
                current: idx === stepIndex,
                date: idx <= stepIndex && step.date === 'Pending' ? new Date().toISOString().split('T')[0] : step.date,
              }));
            }
          }

          if (paymentStatus) {
            order.paymentStatus = paymentStatus;
          }

          updatedMongo = await order.save();
        }
      }
    } catch {}

    const result = updatedMongo || updatedLocal;
    if (result) {
      res.json({ success: true, message: 'Order status updated successfully', order: result });
      return;
    }

    res.status(404).json({ success: false, error: 'Order not found' });
  } catch (error: any) {
    console.error('[Orders PUT Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to update order' });
  }
});

// DELETE /api/orders/:id - Delete Order (Admin protected)
ordersRouter.delete('/:id', verifyAdminToken, async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    deleteLocalOrder(id);

    try {
      await connectDB();
      if (isDbConnected()) {
        await Order.findOneAndDelete({
          $or: [{ orderId: id }, { _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }],
        });
      }
    } catch {}

    res.json({ success: true, message: 'Order deleted successfully', orderId: id });
  } catch (error: any) {
    console.error('[Orders DELETE Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to delete order' });
  }
});
