"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const zod_1 = require("zod");
const OrderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address"),
    product: zod_1.z.string().refine((id) => mongoose_1.Types.ObjectId.isValid(id), // Validate that the string is a valid ObjectId
    {
        message: "Invalid product ID",
    }),
    quantity: zod_1.z.number().min(1, "Quantity must be at least 1").int(),
    totalPrice: zod_1.z.number().min(0, "Total price must be at least 0").nonnegative(),
});
exports.default = OrderValidationSchema;
