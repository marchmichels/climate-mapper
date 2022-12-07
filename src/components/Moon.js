import React, {useRef} from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

//the Moon component is a sphere in Three.js
export default function Moon(props) {

    const moon = useRef();

    //moon texture
    const moonMap = useLoader(TextureLoader, './three_textures/moon.jpg')

    return(
        <mesh {...props} ref={moon} rotation={[0, 10, 0]}>
            <sphereGeometry args={[.3, 32, 32]} />
            <meshStandardMaterial map={moonMap} />
        </mesh>
    );

}