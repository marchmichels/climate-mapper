import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

export default function LocationModal() {

  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [firstImage, setFirstImage] = useState({});
  const [secondImage, setSecondImage] = useState({});

  useEffect(() => {
    //subscribe to DataStore
    DataStore.subscribe(onModalChange);

  }, []);

  //when the modal changes, update information
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description">
            Id: {location.id}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {location.name}
          </Typography>

          <Typography id="modal-modal-title" variant="body1" component="h2">
            {location.location}
          </Typography>


          <ReactBeforeSliderComponent
            firstImage={firstImage}
            secondImage={secondImage}
          />

        </Box>
      </Modal>
    </div>
  );
}