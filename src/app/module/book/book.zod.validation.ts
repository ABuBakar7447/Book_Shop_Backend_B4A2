import { z } from 'zod';

const bookValidationSchema = z.object({
  title: z
    .string()
    .max(20, { message: 'Title cannot be more than 20 characters' }),
  author: z
    .string()
    .max(20, { message: 'Author cannot be more than 20 characters' }),
  price: z
    .number()
    .nonnegative({ message: 'Price must be a non-negative number' }),
  category: z.enum(
    ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
    {
      message: 'This is not a valid category',
    },
  ),
  description: z
    .string()
    .min(10, {
      message: 'Minimum 10 characters are required for the description',
    }),
  quantity: z
    .number()
    .nonnegative({ message: 'Quantity must be a non-negative number' }),
  inStock: z.boolean().default(true),
});

export default bookValidationSchema;
