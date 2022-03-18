import express, { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import API_KEY from '../config'

const app = express()
const port = 3000

// restful api call
app.get('/list', async (req: Request, res: Response) => {
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
      res.status(200).json(response.data.data.products.edges);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
})

app.listen(port, () => console.log(`Running on port ${port}`))


