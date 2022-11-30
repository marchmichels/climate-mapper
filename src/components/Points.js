import { DataStore } from "../data/DataStore";
import React, {useState, useEffect} from "react";

export default function Points() {

    const [locations, setLocation] = useState([]);

    useEffect (() => {
        setLocation(DataStore.locations);
    }, []);


    //get coordinates for each point on globe
    const coords = {
        lat: 40.023333,
        long: -105.647778
    }



    function calcPosFromLatLonRad(lat, long) {
        let phi = (90 - lat) * (Math.PI / 180);
        let theta = (long + 180) * (Math.PI / 180);
        let x = -(Math.sin(phi) * Math.cos(theta));
        let z = (Math.sin(phi) * Math.sin(theta));
        let y = (Math.cos(phi));
        return [x, y, z];
    }

    let pos = calcPosFromLatLonRad(coords.lat, coords.long);



    const points = locations.map((location) => (
        <mesh position={calcPosFromLatLonRad(location.coordinates.lat, location.coordinates.long)}
            onClick={(e) => {


                DataStore.updateModal(location);
                //props.setBoxSelected(mesh.current.position);
                //console.log(DataStore.modal)
            }}>
            <sphereGeometry args={[.015, 5, 5]} />
            <meshStandardMaterial color={"red"} />
        </mesh>

    ))




//console.log(points);



    return (
        <>
        {points}
        </>

        
    );
}