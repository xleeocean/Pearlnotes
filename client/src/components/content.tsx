import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import MainPic from ;


// Grid of Pearl Gallery
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Content() {
  return (
    <div className='content'>
      <div className='contentPic'>
        <img src= "/assets/mainPic.JPG" alt="mainPic" width="100%" />
      </div>

      <div className='contentBox'>
        <h3>PEARL TYPE</h3>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={5}>
              <Item>Tahitian</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>South Sea Gold</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>Akoya</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>Freshwater</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>Baroque</Item>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div className='contentBox'>
        <h3>JEWELRY TYPE</h3>
        <Box sx={{ flexGrow: 2}}>
          <Grid container spacing={0}>
          <Grid item xs={3}>
              {/* <Item>Necklace</Item> */}
              <img src= "./assets/necklace1.jpeg" alt="necklace" height="150px" />
            </Grid>
            <Grid item xs={4}>
              <Item>Pendants</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>Bracelets</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Eearrings</Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Rings</Item>
            </Grid>

          </Grid>
        </Box>
      </div>


      <div> ListFilterBar </div>
      <div> ListOfProducts </div>

    </div>
  );
}


