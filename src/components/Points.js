import { DataStore } from "../data/DataStore";
import React, { useState, useEffect } from "react";

export default function Points() {

    const [locations, setLocation] = useState([]);

    useEffect(() => {
        setLocation(DataStore.locations);
    }, []);


    //calculate position on globe from lat and long
    function calcPosFromLatLonRad(lat, long) {
        let phi = (90 - lat) * (Math.PI / 180);
        let theta = (long + 180) * (Math.PI / 180);
        let x = -(Math.sin(phi) * Math.cos(theta));
        let z = (Math.sin(phi) * Math.sin(theta));
        let y = (Math.cos(phi));
        return [x, y, z];
    }



    const points = locations.map((location) => (
        <mesh key={location.id} position={calcPosFromLatLonRad(location.coordinates.lat, location.coordinates.long)}
            onClick={(e) => {
                DataStore.updateModal(location);
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