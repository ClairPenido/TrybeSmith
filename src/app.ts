import express from 'express';
import productRouter from './routers/product.router';
import errorGenerator from './middlewares/errorGenerator';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use(errorGenerator);

export default app;
