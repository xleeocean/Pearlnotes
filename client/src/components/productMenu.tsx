import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';


const images1 = [
  {
    src: '/assets/Tahitian2.jpeg',
    title: 'Tahitian',
    width: '30%',
  },
  {
    src: '/assets/SouthSeaGold1.jpeg',
    title: 'South Sea Gold',
    width: '40%',
  },
  {
    src: '/assets/freshwater.jpg',
    title: 'Freshwater',
    width: '30%',
  },
  {
    src: '/assets/akoya.jpeg',
    title: 'Akoya',
    width: '50%',
  },
  {
    src: '/assets/baroque.jpeg',
    title: 'Baroque',
    width: '50%',
  },
];

const images2 = [
  {
    src: '/assets/Necklace.jpeg',
    title: 'Necklace',
    width: '50%',
  },
  {
    src: '/assets/Bracelets.jpeg',
    title: 'Bracelets',
    width: '50%',
  },
  {
    src: '/assets/Pendant.jpeg',
    title: 'Pendants',
    width: '30%',
  },
  {
    src: '/assets/earrings.jpeg',
    title: 'Eearrings',
    width: '40%',
  },
  {
    src: '/assets/ring2.jpeg',
    title: 'Rings',
    width: '30%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Content() {
  return (
    <div className='content'>
      <div className='contentPic'>
        <img src= "/assets/mainPic.JPG" alt="mainPic" width="100%" />
      </div>

      <div className='contentBox'>
        <h3>PEARL TYPE</h3>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
          {images1.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.src})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>

        <h3>JEWELRY TYPE</h3>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
          {images2.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.src})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
      </div>


    </div>


  );
}


