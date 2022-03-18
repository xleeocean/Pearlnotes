import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';


export default function CartItem () {
  return (
    <div className='cartItem'>
      <div className='cartPic'>
        <img
        // src={`${item.img}?w=248&fit=crop&auto=format`}
        //       srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        //       alt={item.title}
              loading="lazy" />
      </div>
      <div className='cartDetail'>
        <h4>Title</h4>
        <div >
          <p>Price: </p>
        </div>
        <div className='adjustQuatity '>

          <IconButton>
            <IndeterminateCheckBoxOutlinedIcon />
          </IconButton>
          <p>item.amount</p>
          <IconButton>
            <AddBoxOutlinedIcon />
          </IconButton>
        </div>
      </div>

    </div>
  );
}