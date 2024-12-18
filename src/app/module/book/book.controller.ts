import { Request, Response } from 'express';
import { BookService } from './book.service';
import bookValidationSchema from './book.zod.validation';

const createABook = async (req: Request, res: Response) => {
  try {
    const bookdata = req.body;
    const zodParseData = bookValidationSchema.parse(bookdata);//data validation using zod

    const result = await BookService.createBook(zodParseData);
    
    res.status(200).json({
      message: 'Book created successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      message: err.message || 'Book data not created successfully',
      success: false,
      err,
      stack: err?.stack,
    });
  }
};

const getAllBook = async (req: Request, res: Response) => {
  try {
    const result = await BookService.getBooks();

    res.status(200).json({
      message: 'Books retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      message: err.message || 'No data found',
      success: false,
      error: err,
      stack: err?.stack,
    });
  }
};
const getSingleBookById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await BookService.getBookByID(id);

    res.status(200).json({
      message: 'Books retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(404).json({
      message: err.message || 'No data found',
      success: false,
      error: err,
      stack: err?.stack,
    });
  }
};

const updateBookById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const data = req.body;
    const result = await BookService.updateBook(id, data);

    res.status(200).json({
      message: 'Book updated successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      message: err.message || 'No book data found for update',
      success: false,
      error: err,
      stack: err?.stack,
    });
  }
};
const deleteBookById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;

    const result = await BookService.deleteBook(id);

    res.status(200).json({
      message: 'Book deleted successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      message: err.message || 'No similar data has found for deleteting',
      success: false,
      error: err,
      stack: err?.stack,
    });
  }
};

export const bookController = {
  createABook,
  getAllBook,
  getSingleBookById,
  updateBookById,
  deleteBookById,
};
