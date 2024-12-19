"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    product: { type: mongoose_1.Types.ObjectId || String, required: true }, //this one is refering to the book that has been ordered
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 }, // TOTAL PRICE = price * quantity
}, {
    timestamps: true, // in order create time automatically
});
exports.OrderModel = (0, mongoose_1.model)('order', orderSchema);
