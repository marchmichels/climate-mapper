import React, { useRef, Suspense } from "react";
import { DataStore } from "../data/DataStore";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import Points from './Points';



export default function Earth(props) {

    const earth = useRef();


    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        //earth.current.rotation.y = a / 4; //comment to pause earth rotation for testing

    });

    //earth texture
    const earthMap = useLoader(TextureLoader, 'earth.jpg')







    // // convert the positions from a lat, lon to a position on a sphere.
    // function latLongToVector3(lat, lon, radius, heigth) {
    //     var phi = (lat) * Math.PI / 180;
    //     var theta = (lon - 180) * Math.PI / 180;

    //     var x = -(radius + heigth) * Math.cos(phi) * Math.cos(theta);
    //     var y = (radius + heigth) * Math.sin(phi);
    //     var z = (radius + heigth) * Math.cos(phi) * Math.sin(theta);

    //     return new THREE.Vector3(x, y, z);
    // }


    //     //testing
    // //a lat and long on earth
    // var position = latLongToVector3(y, x, 600, 2);








    return (
        <Suspense fallback={null}>


            <mesh ref={earth}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial map={earthMap} />
                <Points />
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

