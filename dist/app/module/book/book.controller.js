"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const book_service_1 = require("./book.service");
const book_zod_validation_1 = __importDefault(require("./book.zod.validation"));
const createABook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookdata = req.body;
        const zodParseData = book_zod_validation_1.default.parse(bookdata); //data validation using zod
        const result = yield book_service_1.BookService.createBook(zodParseData);
        res.status(200).json({
            message: 'Book created successfully',
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            message: err.message || 'Book data not created successfully',
            success: false,
            err,
            stack: err === null || err === void 0 ? void 0 : err.stack,
        });
    }
});
const getAllBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.getBooks();
        res.status(200).json({
            message: 'Books retrieved successfully',
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(404).json({
            message: err.message || 'No data found',
            success: false,
            error: err,
            stack: err === null || err === void 0 ? void 0 : err.stack,
        });
    }
});
const getSingleBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield book_service_1.BookService.getBookByID(id);
        res.status(200).json({
            message: 'Books retrieved successfully',
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(404).json({
            message: err.message || 'No data found',
            success: false,
            error: err,
            stack: err === null || err === void 0 ? void 0 : err.stack,
        });
    }
});
const updateBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const data = req.body;
        const result = yield book_service_1.BookService.updateBook(id, data);
        res.status(200).json({
            message: 'Book updated successfully',
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            message: err.message || 'No book data found for update',
            success: false,
            error: err,
            stack: err === null || err === void 0 ? void 0 : err.stack,
        });
    }
});
const deleteBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield book_service_1.BookService.deleteBook(id);
        res.status(200).json({
            message: 'Book deleted successfully',
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            message: err.message || 'No similar data has found for deleteting',
            success: false,
            error: err,
            stack: err === null || err === void 0 ? void 0 : err.stack,
        });
    }
});
exports.bookController = {
    createABook,
    getAllBook,
    getSingleBookById,
    updateBookById,
    deleteBookById,
};
