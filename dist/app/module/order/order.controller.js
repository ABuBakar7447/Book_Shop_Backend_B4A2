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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const book_model_1 = require("../book/book.model");
const order_zod_validation_1 = __importDefault(require("./order.zod.validation"));
const createOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { product, quantity } = data;
        ///before creating the order, checking the product is available or not
        const productdetails = yield book_model_1.BookModel.findById(product);
        /// checking products validity and quantity
        if (!(productdetails === null || productdetails === void 0 ? void 0 : productdetails.quantity) || productdetails.quantity < quantity) {
            throw new Error(productdetails ? 'Insufficient stock available' : 'product not found');
        }
        ///setting new product quantity after order
        productdetails.quantity -= quantity;
        // setting the instock to false if there is no product available
        if (productdetails.quantity === 0) {
            productdetails.inStock = false;
        }
        /// after reducing the quantity or changing the inStock state saving the data
        yield productdetails.save();
        //calculating order totalPrice
        data.totalPrice = data.quantity * productdetails.price;
        /// after checking the product availability needs to validate the data before saving the order
        const zodParseData = order_zod_validation_1.default.parse(data);
        const result = yield order_service_1.OrderService.createOrder(zodParseData);
        res.status(200).json({
            message: 'Order created successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message || 'Order not created successfully',
            success: false,
            error: error,
            stack: error === null || error === void 0 ? void 0 : error.stack,
        });
    }
});
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderService.calculationofRevenue();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message || 'no data found to calculate revenue',
            success: false,
            error: error,
            stack: error === null || error === void 0 ? void 0 : error.stack,
        });
    }
});
exports.OrderController = {
    createOrders,
    calculateRevenue,
};
