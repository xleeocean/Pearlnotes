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

export default function ProductList() {
  const [ sortReverse, setSortReverse ] = React.useState<string>('false');
  const { selected, setSelected, pearlTypes, jewelryTypes, products, fetchProducts } = useContext(AppContext);

  const handleChange = (event: SelectChangeEvent) => {
    setSortReverse(event.target.value);
    if (fetchProducts) {
      fetchProducts(event.target.value, selected);
    }
  };

  // const handleFilter = (event: SelectChangeEvent<typeof pearl>) => {
  //   const {
  //     target: { value },
  //   } = event;

  //   setPearl(
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };

  return (
    <div className='contentBox'>
      <Toolbar className='ToolBar' sx={{ flexGrow: 1 }}>
        {/* Sort */}
        <SortOutlinedIcon sx={{ color: 'rgb(58, 76, 76)' }}/>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sortReverse}
          onChange={handleChange}
          label="sort"
        >
          <MenuItem value='false'>Price low to high</MenuItem>
          <MenuItem value='true'>Price high to low</MenuItem>
        </Select>


        {/* Filter */}
        {/*<FilterAltOutlinedIcon sx={{ color: 'rgb(58, 76, 76)' }}/>
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
        </Select>*/}
      </Toolbar>

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
              <div><h4>{item.title}</h4></div>
              <div><p>{item.description}</p></div>

              <div className='addToCart'>
                <h5>${item.price}</h5>
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

