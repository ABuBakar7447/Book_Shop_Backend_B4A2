"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const bookValidationSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .max(20, { message: 'Title cannot be more than 20 characters' }),
    author: zod_1.z
        .string()
        .max(20, { message: 'Author cannot be more than 20 characters' }),
    price: zod_1.z
        .number()
        .nonnegative({ message: 'Price must be a non-negative number' }),
    category: zod_1.z.enum(['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'], {
        message: 'This is not a valid category',
    }),
    description: zod_1.z
        .string()
        .min(10, {
        message: 'Minimum 10 characters are required for the description',
    }),
    quantity: zod_1.z
        .number()
        .nonnegative({ message: 'Quantity must be a non-negative number' }),
    inStock: zod_1.z.boolean().default(true),
});
exports.default = bookValidationSchema;
