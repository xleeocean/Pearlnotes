import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import API_KEY from '../../config'

interface IProductInCart {
  merchandiseId: string,
  merchandiseLineId: string,
  quantity: number,
}

interface ICart {
  id: string,
  products: IProductInCart[],
  totalAmount: string,
}

const SHOPIFY_CART_PAYLOAD = `
  {
    id
    createdAt
    updatedAt
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
            }
          }
        }
      }
    }
    estimatedCost {
      totalAmount {
        amount
      }
    }
  }
`

const SHOPIFY_USER_ERROR_PAYLOAD = `
  userErrors {
    field
    message
  }
`

class CartController {

  public static async convert(cart: any): Promise<ICart> {
    const products: IProductInCart[] = [];
    await cart['lines'].edges.forEach((item: any) => {
      products.push({
        merchandiseId: item.node.merchandise.id,
        quantity: item.node.quantity,
        merchandiseLineId: item.node.id,
      });
    });
    return {
      id: cart.id,
      products: products,
      totalAmount: cart.estimatedCost.totalAmount.amount
    }
  }

  public static async create (req: Request, res: Response): Promise<void> {
    console.log(req.url);
    let merchandiseId = req.body.merchandiseId;
    let quantity = parseInt(req.body.quantity);
    let payload = `
        mutation {
          cartCreate(
            input: {
              lines: [
                {
                  quantity: ${quantity}
                  merchandiseId: "${merchandiseId}"
                }
              ]
              attributes: { key: "cart_attribute", value: "test cart" }
            }
          ) { cart 
        ` + SHOPIFY_CART_PAYLOAD + SHOPIFY_USER_ERROR_PAYLOAD + '}}';
    try {
      let response: AxiosResponse = await axios.post(
        `https://alice-twi.myshopify.com/api/2022-01/graphql.json`, 
        payload,
        {
          headers: {
            'X-Shopify-Storefront-Access-Token': API_KEY,
            'Content-Type': 'application/graphql'
          }
        });
      let data = response.data;
      // console.log(JSON.stringify(data));
      let result: ICart = await CartController.convert(data.data.cartCreate.cart);
      res.status(201).json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }

  public static async retrieve (req: Request, res: Response): Promise<void> {
    console.log(req.url);
    let id = req.body.cartid;
    let payload = `
      query { 
        cart(
          id: "${id}"
        ) ` + SHOPIFY_CART_PAYLOAD + '}';
    try {
      let response: AxiosResponse = await axios.post(
        `https://alice-twi.myshopify.com/api/2022-01/graphql.json`, 
        payload,
        {
          headers: {
            'X-Shopify-Storefront-Access-Token': API_KEY,
            'Content-Type': 'application/graphql'
          }
        });
      let data = response.data;
      let result: ICart = await CartController.convert(data.data.cart);
      res.status(201).json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }

  public static async addItem (req: Request, res: Response): Promise<void> {
    console.log(req.url);
    let id = req.body.cartid;
    let merchandiseId = req.body.merchandiseId;
    let quantity = parseInt(req.body.quantity);
    let payload = `
      mutation {
        cartLinesAdd(
          cartId: "${id}"
          lines: {
            merchandiseId: "${merchandiseId}"
            quantity: ${quantity}
          }) { cart
      ` + SHOPIFY_CART_PAYLOAD + SHOPIFY_USER_ERROR_PAYLOAD + '}}';
    try {
      let response: AxiosResponse = await axios.post(
        `https://alice-twi.myshopify.com/api/2022-01/graphql.json`, 
        payload,
        {
          headers: {
            'X-Shopify-Storefront-Access-Token': API_KEY,
            'Content-Type': 'application/graphql'
          }
        });
      let data = response.data;
      let result: ICart = await CartController.convert(data.data.cartLinesAdd.cart);
      res.status(201).json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }

  public static async updateQuantity (req: Request, res: Response): Promise<void> {
    console.log(req.url);
    let id = req.body.cartid;
    let merchandiseLineId = req.body.merchandiseLineId;
    let quantity = parseInt(req.body.quantity);
    let payload = `
      mutation {
        cartLinesUpdate(
          cartId: "${id}"
          lines: {
            id: "${merchandiseLineId}"
            quantity: ${quantity}
          }
        ) { cart
      ` + SHOPIFY_CART_PAYLOAD + SHOPIFY_USER_ERROR_PAYLOAD + '}}';
    try {
      let response: AxiosResponse = await axios.post(
        `https://alice-twi.myshopify.com/api/2022-01/graphql.json`, 
        payload,
        {
          headers: {
            'X-Shopify-Storefront-Access-Token': API_KEY,
            'Content-Type': 'application/graphql'
          }
        });
      let data = response.data;
      let result: ICart = await CartController.convert(data.data.cartLinesUpdate.cart);
      res.status(201).json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

export default CartController;