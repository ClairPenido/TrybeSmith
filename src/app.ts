import express from 'express';
import productRouter from './routers/product.router';
import orderRouter from './routers/order.router';
import errorGenerator from './middlewares/errorGenerator';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/orders', orderRouter);

app.use(errorGenerator);

export default app;
