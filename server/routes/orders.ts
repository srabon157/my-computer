import { Router, type Request, type Response } from 'express';
import { connectDB, isDbConnected, getDbLastError } from '../config/db.ts';
import { Order, type IOrderItem, type OrderStatus } from '../models/Order.ts';
import { Product } from '../models/Product.ts';
import { getNextOrderId } from '../models/Counter.ts';
import { getDeliveryCharge } from '../utils/delivery.ts';
import { verifyAdminToken } from '../middleware/auth.ts';
import { PRODUCTS } from '../../src/data/mockData.ts';

export const ordersRouter = Router();

/**
 * Validates Bangladeshi mobile phone numbers (e.g. 01711000111, +8801711000111, 8801711000111)
 */
function isValidBdPhone(phone: string): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s-]/g, '');
  const bdRegex = /^(?:\+88|88)?01[3-9]\d{8}$/;
  return bdRegex.test(cleaned);
}

// POST /api/orders - Create new customer order with strict server validation & calculation
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

    // 2. Strict Database Availability Check - No Fake Fallbacks in Production
    await connectDB();
    if (!isDbConnected()) {
      const lastErr = getDbLastError();
      res.status(503).json({
        success: false,
        error: 'DATABASE_UNAVAILABLE',
        message: 'ডাটাবেজ সার্ভিস সাময়িকভাবে অনুপলব্ধ। অর্ডার গ্রহণ করা সম্ভব হয়নি। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।',
        details: lastErr ? `${lastErr.phase} (${lastErr.code}): ${lastErr.message}` : 'MongoDB Atlas is not connected.',
      });
      return;
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

      // Look up product in MongoDB or catalog fallback
      let productDoc: any = await Product.findOne({
        $or: [{ productId: pId }, { _id: pId.match(/^[0-9a-fA-F]{24}$/) ? pId : null }],
      });

      if (!productDoc) {
        productDoc = PRODUCTS.find((p) => p.id === pId);
      }

      if (!productDoc) {
        res.status(400).json({
          success: false,
          message: `Product with ID "${pId}" was not found in our catalog.`,
        });
        return;
      }

      // Stock availability check
      const currentStock = productDoc.stock !== undefined ? productDoc.stock : (productDoc.stockCount ?? 10);
      if (currentStock < quantity || productDoc.availability === 'Out of Stock' || productDoc.stockStatus === 'Out of Stock') {
        res.status(400).json({
          success: false,
          message: `Sorry, "${productDoc.name}" does not have enough stock. Available: ${currentStock}, Requested: ${quantity}.`,
        });
        return;
      }

      // Strict server-enforced pricing (client-supplied price is completely ignored)
      const verifiedUnitPrice = Number(
        productDoc.salePrice !== undefined && productDoc.salePrice !== null
          ? productDoc.salePrice
          : (productDoc.discountPrice || productDoc.price || productDoc.regularPrice)
      );

      const itemSubtotal = verifiedUnitPrice * quantity;
      calculatedSubtotal += itemSubtotal;

      const productImage =
        (productDoc.images && productDoc.images[0]) ||
        productDoc.image ||
        item.image ||
        '/images/placeholder.webp';

      verifiedItems.push({
        productId: productDoc.productId || productDoc.id,
        name: productDoc.name,
        image: productImage,
        quantity,
        unitPrice: verifiedUnitPrice,
        subtotal: itemSubtotal,
      });
    }

    // 4. Central Delivery Charge & Grand Total Calculation (Server Controlled)
    const deliveryCharge = getDeliveryCharge(district);
    const discount = 0;
    const grandTotal = calculatedSubtotal + deliveryCharge - discount;

    // 5. Generate Real Unique Sequential Order ID (MC-10001, MC-10002, ...)
    const orderId = await getNextOrderId();

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
      paymentStatus: paymentMethod === 'Cash on Delivery' ? 'Pending' : 'Paid',
      orderStatus: 'Pending' as OrderStatus,
      trackingSteps: [
        { title: 'Order Placed', date: new Date().toISOString().split('T')[0], completed: true, current: true },
        { title: 'Order Confirmed', date: 'Pending', completed: false },
        { title: 'Processing & Quality Check', date: 'Pending', completed: false },
        { title: 'Shipped via Courier', date: 'Pending', completed: false },
        { title: 'Delivered', date: 'Pending', completed: false },
      ],
    };

    // 6. Atomic Stock Decrement & Real MongoDB Document Save
    for (const item of verifiedItems) {
      const updated = await Product.findOneAndUpdate(
        { productId: item.productId, stock: { $gte: item.quantity } },
        { $inc: { stock: -item.quantity } },
        { new: true }
      );
      if (updated && updated.stock <= 0) {
        await Product.updateOne({ _id: updated._id }, { availability: 'Out of Stock' });
      }
    }

    const orderDoc = new Order(orderPayload);
    const savedOrder = await orderDoc.save();

    res.status(201).json({
      success: true,
      message: 'অর্ডার সফলভাবে গ্রহণ করা হয়েছে!',
      orderId: savedOrder.orderId,
      insertedId: savedOrder._id,
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
    const { search, status, sort = 'newest', page = '1', limit = '10' } = req.query;
    const pageNum = Math.max(1, parseInt(page as string, 10) || 1);
    const limitNum = Math.max(1, Math.min(100, parseInt(limit as string, 10) || 10));

    await connectDB();
    if (isDbConnected()) {
      const filter: Record<string, any> = {};

      if (status && status !== 'All') {
        filter.orderStatus = status;
      }

      if (search) {
        const regex = new RegExp((search as string).trim(), 'i');
        filter.$or = [
          { orderId: regex },
          { 'customer.name': regex },
          { 'customer.phone': regex },
          { 'customer.email': regex },
          { 'delivery.district': regex },
        ];
      }

      const sortOption: Record<string, 1 | -1> = sort === 'oldest' ? { createdAt: 1 } : { createdAt: -1 };

      const total = await Order.countDocuments(filter);
      const orders = await Order.find(filter)
        .sort(sortOption)
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum)
        .lean();

      res.json({
        success: true,
        source: 'mongodb',
        orders,
        pagination: {
          total,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(total / limitNum),
        },
      });
      return;
    }

    res.status(503).json({
      success: false,
      error: 'DATABASE_UNAVAILABLE',
      message: 'ডাটাবেজ সার্ভিস সাময়িকভাবে অনুপলব্ধ। অর্ডার তালিকা লোড করা যায়নি।',
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
    await connectDB();

    if (isDbConnected()) {
      const order = await Order.findOne({
        $or: [{ orderId: id }, { _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }],
      }).lean();

      if (order) {
        res.json({ success: true, order });
        return;
      }
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

    await connectDB();
    if (isDbConnected()) {
      const order = await Order.findOne({
        $or: [{ orderId: id }, { _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }],
      });

      if (!order) {
        res.status(404).json({ success: false, error: 'Order not found' });
        return;
      }

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

      await order.save();
      res.json({ success: true, message: 'Order status updated successfully', order });
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
    await connectDB();

    if (isDbConnected()) {
      const deleted = await Order.findOneAndDelete({
        $or: [{ orderId: id }, { _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }],
      });

      if (!deleted) {
        res.status(404).json({ success: false, error: 'Order not found' });
        return;
      }

      res.json({ success: true, message: 'Order deleted successfully', orderId: id });
      return;
    }

    res.status(404).json({ success: false, error: 'Order not found' });
  } catch (error: any) {
    console.error('[Orders DELETE Error]:', error);
    res.status(500).json({ success: false, error: error.message || 'Failed to delete order' });
  }
});
