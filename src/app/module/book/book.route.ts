import express from 'express';
import { bookController } from './book.controller';

const router = express.Router();

router.post('/', bookController.createABook);
router.get('/:productId', bookController.getSingleBookById);
router.put('/:productId', bookController.updateBookById);
router.delete('/:productId', bookController.deleteBookById);
router.get('/', bookController.getAllBook);

export const Bookrouter = router;
