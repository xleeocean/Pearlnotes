import express, { Request, Response } from 'express';
import ProductsRouter from './routers/Products';

const app = express();
const port = 3000;

app.use('/products', ProductsRouter);
app.listen(port, () => console.log(`Running on port ${port}`));
