"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const book_route_1 = require("./app/module/book/book.route");
const order_route_1 = require("./app/module/order/order.route");
const app = (0, express_1.default)();
// const port = 3000;
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/products', book_route_1.Bookrouter);
app.use('/api/orders', order_route_1.OrderRouter);
app.get('/', (req, res) => {
    res.send('Hello ttt World!');
});
exports.default = app;
