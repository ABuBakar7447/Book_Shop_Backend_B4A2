import { Types } from 'mongoose';
import { z } from 'zod';

const OrderValidationSchema = z.object({
  email: z.string().email("Invalid email address"),
  product: z.string().refine(
    (id) => Types.ObjectId.isValid(id), // Validate that the string is a valid ObjectId
    {
      message: "Invalid product ID",
    }
  ),
  quantity: z.number().min(1, "Quantity must be at least 1").int(),
  totalPrice: z.number().min(0, "Total price must be at least 0").nonnegative(),
});

export default OrderValidationSchema;
