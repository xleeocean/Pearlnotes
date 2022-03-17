import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CartItem from './cartItem';
import Button from '@mui/material/Button';


export default function Cart () {
  return (
    <div className='cart'>
      <List>
        <CartItem />
        <CartItem />


      </List>
      <Divider />
      <div>
        Subtotal
      </div>
      <Button>Check Out</Button>
    </div>

  );
}