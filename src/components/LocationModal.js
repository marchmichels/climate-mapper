import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DataStore } from '../data/DataStore';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



//the LocationModal component displays a single data object when a point on earth is clicked
export default function LocationModal() {

  const [open, setOpen] = useState(false);                //boolean//is the modal open?
  const [location, setLocation] = useState({
    "id": null,
    "coordinates": { "lat": null, "long": null },
    "name": null,
    "location": null,
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


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>

          <Grid container spacing={2}>

            <Grid item xs={8}>
              <Typography variant="h6" component="h2">
                {location.name}
              </Typography>
              <Typography variant="body1" component="h2">
                {location.location}
              </Typography>
            </Grid>

            <Grid item xs={4}>


            </Grid>




          </Grid>





          <ReactBeforeSliderComponent
            firstImage={firstImage}
            secondImage={secondImage}
            currentPercentPosition={"1"}
          />









          <Grid container spacing={2}>

            <Grid item xs={6}>

              <Typography variant="body1" component="h2">
                {location.years[0].year}
              </Typography>



            </Grid>

            <Grid item xs={6}>

              <Typography variant="body1" component="h2" align='right'>
                {location.years[1].year}
              </Typography>


            </Grid>




          </Grid>















        </Box>
      </Modal>
    </div>
  );
}