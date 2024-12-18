import { ObjectId } from "mongoose";

export interface IOrder {
    email: string;
    product: ObjectId | string;
    quantity: number;
    totalPrice: number;
}
