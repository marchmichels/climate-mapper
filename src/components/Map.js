
import React, {useRef, useState} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {useSpring, animated} from "@react-spring/three";
import Earth from "./Earth";
import "./map.css";
import Moon from './Moon';

export default function Map() {

    // const scene = useRef();

    // const [selectedBoxPos, setSelectedBoxPos] = useState({ x:0, y:0, z:0});
    // const { earthRotation } = useSpring({ earthRotation: -selectedBoxPos.x });


    // useFrame(({ clock }) => {
    //     const a = clock.getElapsedTime();
    //     scene.current.rotation.y = a / 4;

    // });


    return(
        <div id="threeContent">
            <Canvas camera={{fov: 75, position: [0, 0, 2]}}>

                <directionalLight intensity={.5} position={[-3, 0, 2]} />

                <group>
                    <Earth position={[0, 0, 0]}  />
                    <Moon position={[-5, .5, 0]} />
                </group>

            </Canvas>
        </div>        

    );
}