import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DataStore } from '../data/DataStore';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LocationModal() {
  const [open, setOpen] = React.useState(false);
  const [location, setLocation] = React.useState({});


  useEffect(() => {
    //subscribe
    DataStore.subscribe(onModalChange);


  }, []);

  function onModalChange() {
    setLocation(DataStore.modal);
    setOpen(true);
  }



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
            {location.id}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {location.name}
          </Typography>

          <Typography id="modal-modal-description">
            {console.log(location)}
          </Typography>
          {/* <Typography id="modal-modal-description">
            {location.years[0].year}
          </Typography>
          <Typography id="modal-modal-description">
            {location.years[0].temprature}
          </Typography>

          <Typography id="modal-modal-description">
            {location.years[0].image}
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}