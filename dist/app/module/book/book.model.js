"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true, // in order to create and update time automatically
});
exports.BookModel = (0, mongoose_1.model)('Book', bookSchema);
