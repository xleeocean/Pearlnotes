# PearlNotes

![typescript](https://img.shields.io/badge/TyprScript-20232A?style=for-the-badge&logo=typescript&logoColor=3178C6)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![HTML5](https://img.shields.io/badge/Html5-20232A?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/Css3-20232A?style=for-the-badge&logo=css3&logoColor=white)
![MUI](https://img.shields.io/badge/Mui-20232A?style=for-the-badge&logo=mui&logoColor=#007FFF)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![Axios](https://img.shields.io/badge/-axios-20232A?style=for-the-badge&logo=axios&logoColor=yellow)
![GitHub](https://img.shields.io/badge/github-20232A?style=for-the-badge&logo=github&logoColor=white)
![Shopify](https://img.shields.io/badge/Shopify-20232A?style=for-the-badge&logo=shopify&logoColor=#7AB55C)

## Overview

PearlNotes is an e-commerce application that allows customer to browse and purchase pearl jewelries online. The application provides a clean and elegant look that match the contemporary design of the jewelries. There are three main feathers in the application: menu, product list, and cart. 

The menu feather navigates users to category of products by pearl type and jewelry type. Users can easily switch to other category using the side menu. 

The product list feather displays the photos and introduction of the products. List can be sorted by price ascending or descending. Users can also add products in cart.

The cart feather shows the in cart products and the total price.  Users can adjust quantity and check out  in the cart.

## Requirement Fulfilled
* Use a modern JS Library/Framework like React, Angular, etc.

PearlNotes front-end is fully based on latest React library with Typescript.

* Create an application that can be interacted with in a minimum of three different ways by the user.

User will be able to do the following things: 
  1. User can view the Jewelries by selecting different types.
  2. User can add Jewelries to the shopping cart.
  3. User can increase/descrease the quantity of the Jewelries. 

* The usage of a special architectural pattern:


* Integration with a backend service developed by you with CRUD:

User can manipulate their Jewelry items inside the shopping cart. All the traffic are handled by backend service and Shopify REST APIs. That includes:
1. Create shopping cart with a global unique ID when a user add first jewelry into the cart
2. Retrieve existing cart if the user already has the cart ID.
3. Increase and describe the quantity of the items inside the shopping cart.
4. Once the quantity of one item is zero. The item will be removed from shopping cart.

* Integration wtih a 3rd party RESTFUL API:

Integrated with Shopify APIs.

* Usage of at least 5 UI components from material-ui/@core:


* An example of a resuable component that you have created and used in the app:


## Architecture

<img width="624" alt="Screen Shot 2022-03-20 at 06 46 28" src="https://user-images.githubusercontent.com/80747028/159166289-9eada34c-b1da-4fb4-9aad-0491936beb93.png">

## Front-end
Tech Stack: React with Typescript, Maria UI

Architectural Overview:

![image](https://user-images.githubusercontent.com/80747028/159154109-da7680fa-8ee4-4842-b28c-289232a794c3.png)

The application is created in React framework with customized MUI components. Such as Button, IconButton, Box, Drawer, List,  ToolBar and AppBar. There are also self-built reusable components such as cartItem. React context is used for data communication between components. Responsive design was used in UI to  ensure content consistency across devices. 

## Back-end
Our back-end service play an intermedia role between our front-end UI and the Shopify APIs. It converts the complex data format from Shopify, extract and simplify the structure for our front-end web apps. It provides the following APIs:

### List Products by Type
Get a list of jewelry products by given type. Could use reverse flag to sort products by price.
**URL**: `/product/list?type={STRING}&reverse={BOOLEAN STRING}`
**METHOD**: `GET`
**Auth required**: No
#### Success Response
**Code** : `200 OK`
**Content examples**
```json
[{
  id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc2MjAyMTkxNDIzOTc=",
  title: "Akoya Cultured Single Pearl Pendant in 18K Yellow Gold",
  image: "https://cdn.shopify.com/s/files/1/0631/5645/3629/products/mrq10045axxw.jpg?v=1647625859",
  typeStr: "Ring",
  description: "Akoya cultured pearl 8mm 18K Yellow Gold",
  price: '950.0,
  merchandiseId: string,
}, {
  ...
}
```

### Shopping Cart Create
Create shopping cart with a global unique ID. It will be triggered when adding first item into the cart.
**URL**: `/cart/create`
**METHOD**: `POST`
**Data constraints**
```json
{
  merchandiseId: 'GlmeS9Qcm9kdWN0Lzc2Mj',
  quantity: 2
}
```

#### Success Response
**Code** : `201 OK`
**Content examples**
```json
{
  id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc2MjA=",
  totalAmount: '1000',
  products: [
    {
      merchandiseId: 'GlmeS9Qcm9kdWN0L',
      merchandiseLineId: 'vc2hvcGlmeS9',
      quantity: 1,
    }
  ]
}
```

### Add Item into Shopping Ceate
Adding a product into the existing shopping cart
**URL**: `/cart/add`
**METHOD**: `POST`
**Data constraints**
```json
{
  cartid: 'm9kdWN0Lzc2Mj',
  merchandiseId: 'GlmeS9Qcm9kdWN0Lzc2Mj',
  quantity: 2
}
```

#### Success Response
**Code** : `201 OK`
**Content examples**
```json
{
  id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc2MjA=",
  totalAmount: '1000',
  products: [
    {
      merchandiseId: 'GlmeS9Qcm9kdWN0L',
      merchandiseLineId: 'vc2hvcGlmeS9',
      quantity: 2,
    }
  ]
}
```

### Update item quantity in the Cart
Update the quantity of a product insidethe cart.
**URL**: `/cart/update`
**METHOD**: `POST`
**Data constraints**
```json
{
  cartid: 'm9kdWN0Lzc2Mj',
  merchandiseId: 'GlmeS9Qcm9kdWN0Lzc2Mj',
  quantity: 3
}
```

#### Success Response
**Code** : `201 OK`
**Content examples**
```json
{
  id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc2MjA=",
  totalAmount: '1000',
  products: [
    {
      merchandiseId: 'GlmeS9Qcm9kdWN0L',
      merchandiseLineId: 'vc2hvcGlmeS9',
      quantity: 3
    }
  ]
}
```


## Setup
For server:
Adding your access token into `config.ts` file under the `/server` path.
Running following commend cd server; npm install; npm run build; npm run start;

For client:
cd client; npm install; npm run start;
