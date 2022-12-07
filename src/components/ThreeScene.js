
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Earth from "./Earth";
import "./scene.css";
import Moon from './Moon';
import { OrbitControls, Stars, PerspectiveCamera } from "@react-three/drei";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

//a Three.js scene
export default function ThreeScene() {

  //orbit controls auto-rotate
  const [spin, setSpin] = useState(true);
  //welcome text
  const [visible, setVisible] = useState("visible");

  //stop auto-rotate and hide welcome text on mouseClick
  function screenClick() {
    setSpin(false);
    setVisible("hidden");
  }

  //popover anchor
  const [anchorEl, setAnchorEl] = React.useState(null);

  //set popover anchor
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //close popover
  const handleClose = () => {
    setAnchorEl(null);
  };

  //is the popover open?
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div id="threeContent"
      onClick={(e) => {
        screenClick();
      }}>

      <div id="title">Climate Mapper</div>

      <Canvas>
        <PerspectiveCamera makeDefault position={[-3, 0, -1]}>
          <directionalLight intensity={.5} position={[-3, 0, 2]} />
        </PerspectiveCamera>
        <Earth position={[0, 0, 0]} />
        <Moon position={[10, .5, -2]} />
        <OrbitControls autoRotate={spin} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>

      <div style={{ visibility: visible }} id="info">Click a red dot to see evidence of climate change</div>

      <div id="about">
        <Button sx={{
          backgroundColor: '#808080',
          color: '#d3d3d3',
          '&:hover': {
            backgroundColor: '#d3d3d3',
            color: '#808080',
          }
        }} aria-describedby={id} variant="contained" onClick={handleClick}>
          About
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0)',
            }}
          >
            <Typography variant="h5" component="p" color="GhostWhite">
              Climate Mapper
            </Typography>
            <Typography variant="body1" component="p" color="GhostWhite">
              Created by Marc Michels
            </Typography>
            <Typography variant="body1" component="p" color="GhostWhite">
              NEWM-N320 | Fall 2022 | IUPUI
            </Typography>
            <Button target="_blank" href="http://www.marcmichels.com/">www.marcmichels.com</Button>
          </Box>
        </Popover>

      </div>

    </div>
  );
}