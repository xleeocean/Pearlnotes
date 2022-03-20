import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import API_KEY from '../../config'

interface Product {
  id: string,
  title: string,
  image: string,
  typeStr: string,
}

class ProductsController {
  public static async list (req: Request, res: Response): Promise<void> {
	  try {
      let response: AxiosResponse = await axios.post(`https://alice-twi.myshopify.com/api/2022-01/graphql.json`, `
          {
            products(first: 20) {
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
      const products: Product[] = [];
      await response.data.data.products.edges.forEach((item: any) => {
        products.push({
          id: item['node']['id'],
          title: item['node']['title'],
          image: item['node']['images']['edges'][0]['node']['url'],
          typeStr: item['node']['productType'],
        });
      });

      res.status(200).json(products);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
}

export default ProductsController;