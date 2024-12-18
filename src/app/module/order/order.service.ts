
import { IOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrder = async (data: IOrder) => {
  const result = await OrderModel.create(data);
  return result;
};

const calculationofRevenue = async () => {

  //using aggregation to calculate the totalRevenue
  const result = await OrderModel.aggregate([
    {
      $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } },
    },
    {
      $project: { _id: 0, totalRevenue: 1 },
    },
  ]);
  return result;
};

export const OrderService = {
  createOrder,
  calculationofRevenue,
};
