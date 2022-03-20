import express, { Request, Response } from 'express';
import ProductsRouter from './routers/Products';
const cors = require('cors')

const app = express();
const port = 3002;

app.use(cors({
    origin: '*'
}));
app.use('/products', ProductsRouter);
app.listen(port, () => console.log(`Running on port ${port}`));
