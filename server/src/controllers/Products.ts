import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import API_KEY from '../../config'

interface Product {
  id: string,
  title: string,
  image: string,
  typeStr: string,
  description: string,
  price: string,
  merchandiseId: string,
}

class ProductsController {
  public static async list (req: Request, res: Response): Promise<void> {
    console.log(req.url);
    let reverse: boolean = req.query.reverse === 'true';
	  try {
      let payload = `
        {
          products(first: 6, sortKey: PRICE, reverse: ${reverse}, query:"tag:${req.query.type}") {
            edges {
              node {
                id
                title
                description
                productType
                variants(first: 1) {
                  edges {
                    node {
                      id
                    }
                  }
                }
                priceRange {
                  minVariantPrice {
                    amount
                  }
                }
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
      `

      let response: AxiosResponse = await axios.post(
        `https://alice-twi.myshopify.com/api/2022-01/graphql.json`, 
        payload
        ,
        {
          headers: {
            'X-Shopify-Storefront-Access-Token': API_KEY,
            'Content-Type': 'application/graphql'
          }
        });
      console.log(response.status);
      const products: Product[] = [];
      await response.data.data.products.edges.forEach((item: any) => {
        products.push({
          id: item['node']['id'],
          title: item['node']['title'],
          image: item['node']['images']['edges'][0]['node']['url'],
          typeStr: item['node']['productType'],
          description: item['node']['description'],
          price: item['node']['priceRange']['minVariantPrice']['amount'],
          merchandiseId: item['node']['variants']['edges'][0]['node']['id'],
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