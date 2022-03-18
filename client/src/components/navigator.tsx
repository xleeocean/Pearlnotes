import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlined from '@mui/icons-material/ShoppingBasketOutlined';

import Cart from './Cart';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

type Anchor = 'types' | 'cart';

export default function Navigator() {
  const [state, setState] = React.useState({
    types: false,
    cart: false,
  });

  const toggleDrawer =
    (anchor: Anchor, isOpen: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: isOpen });
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
    <div className='NavigatorContainer'>
      <Box  className='NavigatorBox' sx={{ flexGrow: 1 }}>
        <AppBar className='NavigatorBar' position='relative' color='transparent' >
          <Toolbar >
            <IconButton onClick={toggleDrawer('types', true)}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'sans-serif-label': 'search' }}
              />
            </Search>

            <IconButton onClick={toggleDrawer('cart', true)}>
              <ShoppingBasketOutlined/>
            </IconButton>

          </Toolbar>
        </AppBar>
      </Box>
      {/*TODO: Replace with another component*/}
      <React.Fragment key='types'>
        <Drawer
          anchor={'left'}
          open={state['types']}
          onClose={toggleDrawer('types', false)}
        >
          {list('cart')}
        </Drawer>
      </React.Fragment>
      {/*TODO: Replace with another component*/}
      <React.Fragment key='cart'>
        <Drawer
          anchor='right'
          open={state['cart']}
          onClose={toggleDrawer('cart', false)}
        >
          {list('cart')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

