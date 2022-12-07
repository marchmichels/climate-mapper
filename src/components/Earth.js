import React, { useRef, Suspense, useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Points from './Points';
import { DataStore } from "../data/DataStore";


//the Earth component is a sphere in Three.js
export default function Earth(props) {

    //red or green points on Earth
    const [points, setPoints] = useState(<Points />)

        //subscribe to DataStore changes
        useEffect(() => {
            DataStore.subscribe(onPointsChange);
        }, []);
    
        //when DataStore modal property changes, update information
        function onPointsChange() {
            setPoints(<Points />);
        }
    
    //ref to animate earth
    const earth = useRef();

    //earth texture
    const earthMap = useLoader(TextureLoader, './three_textures/earth.jpg')

    return (
        <Suspense fallback={null}>

            <mesh ref={earth} rotation={[0, 10.5, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial map={earthMap} />
                {points}
            </mesh>

        </Suspense>
    )

}