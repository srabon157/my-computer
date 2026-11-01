import mongoose, { Schema, Document } from 'mongoose';

export interface IOrderItem {
  productId: string;
  name: string;
  image: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export interface ITrackingStep {
  title: string;
  date: string;
  completed: boolean;
  current?: boolean;
}

export type OrderStatus = 'Pending' | 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
export type PaymentMethod = 'Cash on Delivery' | 'bKash' | 'Nagad' | 'Rocket' | 'Upay';
export type PaymentStatus = 'Pending' | 'Paid';

export interface IOrder extends Document {
  orderId: string;
  customer: {
    name: string;
    phone: string;
    email?: string;
  };
  delivery: {
    address: string;
    area?: string;
    district: string;
    note?: string;
  };
  items: IOrderItem[];
  subtotal: number;
  deliveryCharge: number;
  discount: number;
  grandTotal: number;
  paymentMethod: PaymentMethod;
  paymentNumber?: string;
  senderNumber?: string;
  trxId?: string;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  trackingSteps: ITrackingStep[];
  createdAt: Date;
  updatedAt: Date;
}

const orderItemSchema = new Schema<IOrderItem>(
  {
    productId: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    unitPrice: { type: Number, required: true, min: 0 },
    subtotal: { type: Number, required: true, min: 0 },
  },
  { _id: false }
);

const trackingStepSchema = new Schema<ITrackingStep>(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    completed: { type: Boolean, default: false },
    current: { type: Boolean, default: false },
  },
  { _id: false }
);

const orderSchema = new Schema<IOrder>(
  {
    orderId: { type: String, required: true, unique: true, index: true },
    customer: {
      name: { type: String, required: true, trim: true },
      phone: { type: String, required: true, trim: true, index: true },
      email: { type: String, default: '', trim: true },
    },
    delivery: {
      address: { type: String, required: true, trim: true },
      area: { type: String, default: '', trim: true },
      district: { type: String, required: true, trim: true },
      note: { type: String, default: '', trim: true },
    },
    items: {
      type: [orderItemSchema],
      required: true,
      validate: {
        validator: (v: IOrderItem[]) => Array.isArray(v) && v.length > 0,
        message: 'Order must contain at least one item.',
      },
    },
    subtotal: { type: Number, required: true, min: 0 },
    deliveryCharge: { type: Number, required: true, min: 0 },
    discount: { type: Number, default: 0, min: 0 },
    grandTotal: { type: Number, required: true, min: 0 },
    paymentMethod: {
      type: String,
      enum: ['Cash on Delivery', 'bKash', 'Nagad', 'Rocket', 'Upay'],
      default: 'Cash on Delivery',
    },
    paymentNumber: { type: String, default: '01873434639' },
    senderNumber: { type: String, default: '' },
    trxId: { type: String, default: '' },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Paid'],
      default: 'Pending',
    },
    orderStatus: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',
      index: true,
    },
    trackingSteps: {
      type: [trackingStepSchema],
      default: () => [
        { title: 'Order Placed', date: new Date().toISOString().split('T')[0], completed: true, current: true },
        { title: 'Order Confirmed', date: 'Pending', completed: false },
        { title: 'Processing & Quality Check', date: 'Pending', completed: false },
        { title: 'Shipped via Courier', date: 'Pending', completed: false },
        { title: 'Delivered', date: 'Pending', completed: false },
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Compound and single indexes for fast queries
orderSchema.index({ createdAt: -1 });
orderSchema.index({ 'customer.phone': 1, createdAt: -1 });
orderSchema.index({ orderStatus: 1, createdAt: -1 });

export const Order = mongoose.models.Order || mongoose.model<IOrder>('Order', orderSchema);

