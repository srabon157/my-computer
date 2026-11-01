import mongoose, { Schema } from 'mongoose';

export interface ICounter {
  _id: string;
  seq: number;
}

const counterSchema = new Schema<ICounter>({
  _id: { type: String, required: true },
  seq: { type: Number, default: 10000 },
});

export const Counter = mongoose.models.Counter || mongoose.model<ICounter>('Counter', counterSchema);

/**
 * Atomically generates the next unique sequential order ID (e.g. MC-10001, MC-10002)
 */
export async function getNextOrderId(): Promise<string> {
  try {
    const counter = await Counter.findByIdAndUpdate(
      'orderId',
      { $inc: { seq: 1 } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    const seqNum = counter ? counter.seq : Math.floor(10000 + Math.random() * 90000);
    return `MC-${seqNum}`;
  } catch (error) {
    console.warn('[Counter] Fallback unique ID generator used:', error);
    return `MC-${Math.floor(10000 + Math.random() * 90000)}`;
  }
}
