import { model, Schema, Types } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>(
  
  {
    email: { type: String, required: true},
    product: { type: Types.ObjectId || String, required: true }, //this one is refering to the book that has been ordered
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 }, // TOTAL PRICE = price * quantity
  },
  {
    timestamps: true, // in order create time automatically
  },
);

export const OrderModel = model<IOrder>('order', orderSchema);
