import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import API_KEY from '../../config'

class ProductsController {
  public static async list (req: Request, res: Response): Promise<void> {
	  try {
      let response: AxiosResponse = await axios.post(`https://alice-twi.myshopify.com/api/2022-01/graphql.json`, `
          {
            products(first: 3) {
              edges {
                node {
                  id
                  title
                  description
                  productType
                  images(first:1) {
                    edges {
                      node {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      {
        headers: {
          'X-Shopify-Storefront-Access-Token': API_KEY,
          'Content-Type': 'application/graphql'
        }
      });
      console.log(response.data);
      res.status(200).json(response.data.data.products.edges);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
}

export default ProductsController;