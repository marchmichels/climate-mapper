import React, {useRef} from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function Moon(props) {

    const moon = useRef();


    const moonMap = useLoader(TextureLoader, './three_textures/moon.jpg')


    return(
        <mesh {...props} ref={moon}>
            <sphereGeometry args={[.5, 32, 32]} />
            <meshStandardMaterial map={moonMap} />
        </mesh>
    );

}