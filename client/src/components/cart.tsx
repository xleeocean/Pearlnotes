import React, { useContext, useState } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CartItem from './CartItem';
import Button from '@mui/material/Button';
import { AppContext, ICarItemProfile } from '../AppContext';

export default function Cart () {
  const { cart } = useContext(AppContext);


  return (
    <div className='cart'>
      <div>
        <List> 
        {console.log('products', cart.products)}
        {
          cart.products.map((item: ICarItemProfile, i: number) => (
            <CartItem item={item} key={i} />
          ))
        }
        </List>
        <Divider />
        <div>
          <p>Subtotal: {cart.totalAmount} </p>
        </div>
        <Button>Check Out</Button>
      </div>
    </div>
  );
};