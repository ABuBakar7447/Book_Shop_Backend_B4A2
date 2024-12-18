import { model, Schema } from 'mongoose';
import { IBook } from './book.interface';

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
      maxlength: [20, 'title can not be more than 20 characters'],
    },
    author: {
      type: String,
      required: true,
      maxlength: [20, 'title can not be more than 20 characters'],
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: {
        values: [
          'Fiction',
          'Science',
          'SelfDevelopment',
          'Poetry',
          'Religious',
        ],
        message: '{VALUE} is not valid category',
      },
      required: true,
    },
    description: {
      type: String,
      required: true,
      min: [10, 'minimun 10 character needs to explain in the description'],
    },
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true, // in order to create and update time automatically
  },
);

export const BookModel = model<IBook>('Book', bookSchema);
