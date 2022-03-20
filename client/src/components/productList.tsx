import React, { useContext, useEffect } from 'react';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import AddShoppingCartOutlined from '@mui/icons-material/AddShoppingCartOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import IconButton from '@mui/material/IconButton';
import axios, { AxiosResponse } from 'axios';
import { AppContext } from '../AppContext'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const pearltp = [
  'Tahitian',
  'South Sea Gold',
  'Freshwater',
  'Akoya',
  'Baroque',
];

const jewelrytp = [
  'Necklace',
  'Bracelets',
  'Pendants',
  'Eearrings',
  'Rings',
  ];

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
];

interface Product {
  id: string,
  title: string,
  image: string,
  typeStr: string,
}

export default function ProductList() {
  const [sort, setSort] = React.useState('');
  const [pearl, setPearl] = React.useState<string[]>([]);
  const [jewelry, setJewelry] = React.useState<string[]>([]);
  const { selected, setSelected } = useContext(AppContext);
  const [products, setProducts] = React.useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async() => {
      try {
        const response = await fetch('http://localhost:3002/products/list', {mode:'cors'});
        const products = await response.json();
        setProducts(products);
        console.log(products);
      } catch (err) {
        console.log(err);
      }
    }

    fetchProducts();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  const handleFilter = (event: SelectChangeEvent<typeof pearl>) => {
    const {
      target: { value },
    } = event;

    setPearl(
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <div className='contentBox'>
      <Toolbar className='ToolBar' sx={{ flexGrow: 1 }}>
        {/* Sort */}
        <SortOutlinedIcon sx={{ color: 'rgb(58, 76, 76)' }}/>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sort}
          onChange={handleChange}
          label="sort"
        >
          <MenuItem value="Newest">
            <em>Newest</em>
          </MenuItem>
          <MenuItem value="Price low to high">Price low to high</MenuItem>
          <MenuItem value="Price high to low">Price high to low</MenuItem>
        </Select>


        {/* Filter */}
        <FilterAltOutlinedIcon sx={{ color: 'rgb(58, 76, 76)' }}/>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={pearl}
          onChange={handleFilter}
          input={<OutlinedInput label="Pearl" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {pearltp.map((pearlSel) => (
            <MenuItem key={pearlSel} value={pearlSel}>
              <Checkbox checked={pearl.indexOf(pearlSel) > -1} />
              <ListItemText primary={pearlSel} />
            </MenuItem>
          ))}
        </Select>

      </Toolbar>

      {/* ProductList */}
      {/* <ImageList >
        {itemData.map((item) => (
          <ImageListItem key={item.image} sx={{width: 300}}>
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />

            <div className='listTag'>
              helloe
            </div>
          </ImageListItem>
        ))}

      </ImageList> */}

      <div className='flexbox'>
        {products ? products.map((item) => (
          <div className='flexbox-div' key={item.image} >
            <img className='productPic'
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"

            />
            <div className='listTag'>
              <h4>Golden South Sea Baroque Pearl and Diamond Pendant</h4>
              <p>South Sea Gold
              10.0-11.0 mm
              Gold
              AAA
              Round
              </p>

              <div className='addToCart'>
                <h5>$3000</h5>
                <IconButton style={{position:"absolute", left:'60px', bottom:"-8px"}}>
                  <AddShoppingCartOutlined fontSize="small"  />
                </IconButton>

              </div>

            </div>

          </div>
        )) : null}
      </div>

    </div>

  );
}

