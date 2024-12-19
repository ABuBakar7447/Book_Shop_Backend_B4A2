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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_model_1 = require("./book.model");
const createBook = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.BookModel.create(book);
    return result;
});
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.BookModel.find();
    return result;
});
const getBookByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.BookModel.findById({ _id: id });
    return result;
});
const updateBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.BookModel.findByIdAndUpdate(id, data, {
        new: true,
    });
    return result;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.BookModel.findByIdAndDelete(id);
    return result;
});
exports.BookService = {
    createBook,
    getBooks,
    getBookByID,
    updateBook,
    deleteBook,
};
