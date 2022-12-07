import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DataStore } from '../data/DataStore';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import Stack from '@mui/material/Stack';
import "./modal.css";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useSpring, animated } from 'react-spring'


//style for modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'rgba(43, 5, 125, 0.5)',
  boxShadow: 24,
  p: 4,
  maxHeight: '80vh'
};


//the LocationModal component displays a single data object when a point on earth is clicked
export default function LocationModal() {

  const [open, setOpen] = useState(false);                //boolean//is the modal open?
  const [location, setLocation] = useState({
    "id": null,
    "coordinates": { "lat": null, "long": null },
    "name": null,
    "location": null,
    "map": null,
    "years": [
      {
        "year": null,
        "image": null
      },
      {
        "year": null,
        "image": null
      }
    ]
  });           //object//a single data object representing a clicked point on earth
  const [firstImage, setFirstImage] = useState({});       //object//an object containing the image Url for the before image
  const [secondImage, setSecondImage] = useState({});     //object//an object containing the image Url for the after image


  //subscribe to DataStore changes
  useEffect(() => {
    DataStore.subscribe(onModalChange);
  }, []);

  //when DataStore modal property changes, update information
  function onModalChange() {
    setLocation(DataStore.modal);
    setFirstImage({
      imageUrl: DataStore.modal.years[0].image
    });
    setSecondImage({
      imageUrl: DataStore.modal.years[1].image
    });
    setOpen(true);
  }

  //close the modal
  const handleClose = () => setOpen(false);


  //style for before and after slider
  const delimiterIconStyles = {
    width: '50px',
    height: '50px',
    backgroundSize: 'cover',
    borderRadius: 'none',
    backgroundImage: 'url(./icons/arrows.jpg)'
  }


  //props for modal animation
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true

  })

  //animate the modal
  const AnimatedModal = animated(Modal);


  return (
    <div>

      <AnimatedModal
        open={open}
        onClose={handleClose}
        style={props}
      >
        <Box sx={style}>

          <Stack spacing={1}>

            <Grid container spacing={2}>

              <Grid item xs={11}>
                <Typography variant="h3" component="h2" color="snow">
                  {location.name}
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <IconButton aria-label="close" size='large' sx={{
                  color: 'snow',
                  ":hover": {
                    color: 'red',
                  },
                }}
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>

            </Grid>


            <Grid container spacing={2}>

              <Grid item xs={8}>
                <Typography variant="body1" component="p" color="SlateGray">
                  Location:
                </Typography>
                <Typography variant="h5" component="p" color="GhostWhite">
                  {location.location}
                </Typography>
                <Typography variant="body1" component="p" color="SlateGray">
                  Coordinates:
                </Typography>
                <Typography variant="h5" component="p" color="GhostWhite">
                  ({location.coordinates.lat}, {location.coordinates.lat})
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <img src={location.map} className="image" alt='detail map' />
              </Grid>

            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <ReactBeforeSliderComponent
                firstImage={firstImage}
                secondImage={secondImage}
                currentPercentPosition={"0"}
                delimiterIconStyles={delimiterIconStyles}
                className="image"
              />

            </Box>

            <Grid container spacing={2}>

              <Grid item xs={6}>
                <Typography variant="body1" component="h2" color="GhostWhite">
                  {location.years[0].year}
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body1" component="h2" align='right' color="GhostWhite">
                  {location.years[1].year}
                </Typography>
              </Grid>

            </Grid>

          </Stack>

        </Box>

      </AnimatedModal>

    </div>
  );
}