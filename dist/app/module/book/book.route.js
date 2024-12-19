"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookrouter = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/', book_controller_1.bookController.createABook);
router.get('/:productId', book_controller_1.bookController.getSingleBookById);
router.put('/:productId', book_controller_1.bookController.updateBookById);
router.delete('/:productId', book_controller_1.bookController.deleteBookById);
router.get('/', book_controller_1.bookController.getAllBook);
exports.Bookrouter = router;
