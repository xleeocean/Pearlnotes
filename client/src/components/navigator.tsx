import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketOutlined from '@mui/icons-material/ShoppingBasketOutlined';
import SideMenu from './SideMenu';
import Cart from './Cart';


type Anchor = 'menu' | 'cart';

export default function Navigator() {
  const [state, setState] = React.useState({
    menu: false,
    cart: false,
  });

  const toggleDrawer =
    (anchor: Anchor, isOpen: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: isOpen });
  };

  return (
    <div className='NavigatorContainer'>
      {/* Navigator */}
      <Box  className='NavigatorBox' sx={{ flexGrow: 1 }}>
        <AppBar className='NavigatorBar' position='relative' color='transparent' >
          <Toolbar >
            <IconButton onClick={toggleDrawer('menu', true)}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            </Typography>

            <IconButton onClick={toggleDrawer('cart', true)}>
              <ShoppingBasketOutlined/>
            </IconButton>

          </Toolbar>
        </AppBar>
      </Box>

      {/* Menu */}
      <React.Fragment key='menu'>
        <Drawer
          anchor={'left'}
          open={state['menu']}
          onClose={toggleDrawer('menu', false)}
        >
          <Box
            sx={{ width:300 }}
            role="presentation"
            onClick={toggleDrawer('menu', false)}
            onKeyDown={toggleDrawer('menu', false)}
          >
            <SideMenu />
          </Box>
        </Drawer>
      </React.Fragment>

      {/* Cart */}
      <React.Fragment key='cart'>
        <Drawer
          anchor='right'
          open={state['cart']}
          onClose={toggleDrawer('cart', false)}
        >

          <Box
            sx={{ width:320}}
            role="presentation"
            onClick={toggleDrawer('cart', false)}
            onKeyDown={toggleDrawer('cart', false)}
          >
            <Cart />
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

