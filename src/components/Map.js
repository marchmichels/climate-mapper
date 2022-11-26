
import React, {useRef, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {useSpring, animated} from "@react-spring/three";
import Earth from "./Earth";
import "./map.css";
import Moon from './Moon';

export default function Map() {

    const [selectedBoxPos, setSelectedBoxPos] = useState({ x:0, y:0, z:0});
    const { stageRotation } = useSpring({ stageRotation: -selectedBoxPos.x });


    return(
        <div id="threeContent">
            <Canvas camera={{fov: 75, position: [0, 0, 5]}}>

                <directionalLight intensity={.5} position={[-3, 0, 2]} />

                <group >
                    <Earth position={[0, 0, 0]}  />
                    <Moon position={[-5, .5, 0]} />
                </group>

            </Canvas>
        </div>        

    );
}