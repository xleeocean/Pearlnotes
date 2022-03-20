import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import { AppContext, IProduct } from '../AppContext'


export default function CartItem (props: any) {
  const { selectedProducts, updateCartItemQuantity } = useContext(AppContext);

  const findPrice = (merchandiseId: string) => {
    for (var p of selectedProducts) {
      if (p.merchandiseId === merchandiseId) {
        return p.price;
      }
    }
    return 0;
  }

  const findImage = (merchandiseId: string) => {
    for (var p of selectedProducts) {
      if (p.merchandiseId === merchandiseId) {
        return p.image;
      }
    }
    return '';
  }

  const findTitle = (merchandiseId: string) => {
    for (var p of selectedProducts) {
      if (p.merchandiseId === merchandiseId) {
        return p.title;
      }
    }
    return '';
  }

  return (
    <div className='cartItem'>
        {console.log(props.item)}
      <div className='cartPic'>
        <img src={findImage(props.item.merchandiseId)}
          width='80px'
          height='80px'
          loading="lazy" />
      </div>
      <div className='cartDetail'>
        <p>{findTitle(props.item.merchandiseId)}</p>
        <div >
          <p>Price:  $ {findPrice(props.item.merchandiseId)}</p>
        </div>
        <div className='adjustQuatity '>

          <IconButton 
            onClick={() => {updateCartItemQuantity && updateCartItemQuantity(props.item.merchandiseLineId, props.item.quantity - 1)}}>
            <IndeterminateCheckBoxOutlinedIcon />
          </IconButton>
          <p>{props.item.quantity}</p>
          <IconButton
            onClick={() => {updateCartItemQuantity && updateCartItemQuantity(props.item.merchandiseLineId, props.item.quantity + 1)}}>
            <AddBoxOutlinedIcon />
          </IconButton>
        </div>
      </div>

    </div>
  );
}