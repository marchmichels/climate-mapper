
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Earth from "./Earth";
import "./map.css";
import Moon from './Moon';
import { OrbitControls, Stars, PerspectiveCamera } from "@react-three/drei";



export default function Map() {

  // const group = useRef();


  // extend({ OrbitControls });



  // const CameraControls = () => {
  //     // Get a reference to the Three.js Camera, and the canvas html element.
  //     // We need these to setup the OrbitControls class.
  //     // https://threejs.org/docs/#examples/en/controls/OrbitControls

  //     const {
  //       camera,
  //       gl: { domElement }
  //     } = useThree();

  //     // Ref to the controls, so that we can update them on every frame using useFrame
  //     const controls = useRef();
  //     useFrame(state => controls.current.update());
  //     return (
  //       <orbitControls
  //         ref={controls}
  //         args={[camera, domElement]}
  //         enableZoom={false}
  //         minPolarAngle={0}
  //         maxPolarAngle={180}
  //         autoRotate={false}

  //       />
  //     );
  //   };



  //  const scene = useRef();

  // // const [selectedBoxPos, setSelectedBoxPos] = useState({ x:0, y:0, z:0});
  // // const { earthRotation } = useSpring({ earthRotation: -selectedBoxPos.x });


  // useFrame(({ clock }) => {
  //     const a = clock.getElapsedTime();
  //     scene.current.rotation.y = a / 4;

  // });

  //moon pos 46, .5, -2



  return (
    <div id="threeContent">
      <Canvas>



        <PerspectiveCamera makeDefault position={[-3 , 0, -1]}>
          <directionalLight intensity={.5} position={[-3, 0, 2]} />


        </PerspectiveCamera>





        <Earth position={[0, 0, 0]} />
        <Moon position={[10, .5, -2]} />

        <OrbitControls autoRotate={true}/>


        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />




      </Canvas>
    </div>

  );
}