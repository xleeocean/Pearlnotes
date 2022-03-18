import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ProductMenu from './ProductMenu';
import ProductList from './ProductList';
import Cart from './Cart';

type Anchor = 'left' | 'right';

export default function MainBox() {
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const [filter, setFilter] = React.useState("b");

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width:250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Cart/>
    </Box>
  );


  return (
    <div className="MainBox">
      {(['left', 'right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>right</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      {filter ? <ProductList/> : <ProductMenu/>}
      {/* if (!view[list]) {
        <ProductMenu/>
      } else {
        <ProductList/>
      } */}




    </div>
  );
}

