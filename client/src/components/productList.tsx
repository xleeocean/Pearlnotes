import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Theme, useTheme } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import AddShoppingCartOutlined from '@mui/icons-material/AddShoppingCartOutlined';


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


export default function ProductList() {
  const [sort, setSort] = React.useState('');
  const [pearl, setPearl] = React.useState<string[]>([]);
  const [jewelry, setJewelry] = React.useState<string[]>([]);



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
        <InputLabel id="demo-simple-select-standard-label">Sort by:</InputLabel>
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

        <InputLabel id="demo-simple-select-standard-label">Filter:</InputLabel>
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
      <ImageList sx={{ width: 800, height: 450 }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"

            />
            <div>
              helloe
            </div>
          </ImageListItem>
        ))}
      </ImageList>

    </div>

  );
}

