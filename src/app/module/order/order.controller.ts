import { Request, Response } from 'express';
import { OrderService } from './order.service';
import { BookModel } from '../book/book.model';
import OrderValidationSchema from './order.zod.validation';

const createOrders = async (req: Request, res: Response) => {
  
  try {
    const data = req.body;
    const { product, quantity } = data;

    ///before creating the order, checking the product is available or not
    const productdetails = await BookModel.findById(product);

    /// checking products validity and quantity
    if (!productdetails?.quantity || productdetails.quantity < quantity) {
      res.status(404).json({
        message: productdetails
          ? 'Insufficient stock available'
          : 'product not found',
        success: false,
      });
      throw new Error(
        productdetails ? 'Insufficient stock available' : 'product not found',
      );
    }

    ///setting new product quantity after order
    productdetails.quantity -= quantity;

    // setting the instock to false if there is no product available
    if (productdetails.quantity === 0) {
      productdetails.inStock = false;
    }

    /// after reducing the quantity or changing the inStock state saving the data
    await productdetails.save();

    //calculating order totalPrice
    data.totalPrice = data.quantity * productdetails.price;
    /// after checking the product availability needs to validate the data before saving the order

    const zodParseData = OrderValidationSchema.parse(data);

    const result = await OrderService.createOrder(zodParseData);

    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: 'Order not created successfully',
      success: false,
      error: error,
      stack: error?.stack,
    });
  }
};

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.calculationofRevenue();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message || 'no data found to calculate revenue',
      success: false,
      error: error,
      stack: error?.stack,
    });
  }
};

export const OrderController = {
  createOrders,
  calculateRevenue,
};
