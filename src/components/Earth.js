import React, { useRef, Suspense } from "react";
import { DataStore } from "../data/DataStore";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';


export default function Earth(props) {

    const earth = useRef();


    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        earth.current.rotation.y = a/4;

    });




    const earthMap = useLoader(TextureLoader, 'earth.jpg')

    return (
        <Suspense fallback={null}>


            <mesh ref={earth}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial map={earthMap} />
            </mesh>





        </Suspense>
    )






}






















    // const mesh = useRef();

    // return (
    //     <mesh {...props}
    //         ref={mesh}
    //         onClick={(e) => {
    //             //console.log(e);
    //             DataStore.updateModal(
    //                 {
    //                     id: 1,
    //                     coordinates: { x: 10, y: 20 },
    //                     name: "Glaicer National Park",
    //                     years: [
    //                         {
    //                             year: "1800",
    //                             temprature: "70F",
    //                             image: "imageURL"
    //                         },
    //                         {
    //                             year: "1900",
    //                             temprature: "80F",
    //                             image: "imageURL"
    //                         }
    //                     ]
    //                 }
    //             );
    //             //props.setBoxSelected(mesh.current.position);
    //         }}>
    //         <sphereGeometry args={[1.5, 32, 32]} />
    //         <meshStandardMaterial color={"blue"} />
    //     </mesh>
    // );

