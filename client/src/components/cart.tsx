import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CartItem from './CartItem';
import Button from '@mui/material/Button';



export default function Cart () {
  // const appContext = React.useContext(AppCtx);
  return (
    <div className='cart'>
      <List>
        <CartItem />
        <CartItem />
      </List>
      <Divider />
      <div>
        <p>Subtotal: </p>
      </div>
      <Button>Check Out</Button>
    </div>

  );
}