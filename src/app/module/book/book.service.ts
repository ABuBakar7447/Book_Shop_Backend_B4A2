import { IBook } from './book.interface';
import { BookModel } from './book.model';

const createBook = async (book: IBook) => {
  const result = await BookModel.create(book);
  return result;
};

const getBooks = async () => {
  const result = await BookModel.find();
  return result;
};

const getBookByID = async (id: string) => {
  const result = await BookModel.findById({ _id: id });
  return result;
};

const updateBook = async (id: string, data: IBook) => {
  const result = await BookModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

const deleteBook = async (id: string) => {
  const result = await BookModel.findByIdAndDelete(id);
  return result;
};

export const BookService = {
  createBook,
  getBooks,
  getBookByID,
  updateBook,
  deleteBook,
};
