import express, { Request, Response } from 'express';
import ProductsRouter from './routers/Products';
import CartRouter from './routers/Cart';
const cors = require('cors')

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use('/products', ProductsRouter);
app.use('/cart', CartRouter);
app.listen(port, () => console.log(`Running on port ${port}`));
