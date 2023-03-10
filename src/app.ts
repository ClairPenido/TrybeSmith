import express from 'express';
import productRouter from './routers/product.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';
import loginRouter from './routers/login.router';
import errorGenerator from './middlewares/errorGenerator';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

app.use(errorGenerator);

export default app;
