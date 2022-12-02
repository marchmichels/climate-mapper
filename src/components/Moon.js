import React, {useRef} from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export default function Moon(props) {

    const moon = useRef();

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        moon.current.rotation.y = a/4;

    });

    const moonMap = useLoader(TextureLoader, './three_textures/moon.jpg')


    return(
        <mesh {...props}
        ref={moon}
        onClick={(e) => {
            console.log("Test");
            //props.setBoxSelected(mesh.current.position);
        }}>
            <sphereGeometry args={[.5, 32, 32]} />
            <meshStandardMaterial map={moonMap} />
        </mesh>
    );

}