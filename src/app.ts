import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { Bookrouter } from './app/module/book/book.route';
import { OrderRouter } from './app/module/order/order.route';
const app: Application = express();
// const port = 3000;

//parser
app.use(express.json());
app.use(cors());

app.use('/api/products', Bookrouter);
app.use('/api/orders', OrderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello ttt World!');
});

export default app;
