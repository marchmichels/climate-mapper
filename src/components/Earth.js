import React, { useRef, Suspense } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Points from './Points';

//the the Earth component is a sphere in Three.js
export default function Earth(props) {

    //ref to animate earth
    const earth = useRef();

    //rotate earth
    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        //earth.current.rotation.y = a / 4; //comment to pause earth rotation for testing

    });

    //earth texture
    const earthMap = useLoader(TextureLoader, './three_textures/earth.jpg')

    return (
        <Suspense fallback={null}>

            <mesh ref={earth} rotation={[0, 10.5, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial map={earthMap} />
                <Points />
            </mesh>

        </Suspense>
    )

}