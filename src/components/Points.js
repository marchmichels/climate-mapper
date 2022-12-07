import { DataStore } from "../data/DataStore";
import React, { useState, useEffect } from "react";

export default function Points() {

    //an array of location objects
    const [locations, setLocations] = useState(DataStore.locations);

    //subscribe to DataStore changes
    useEffect(() => {
        DataStore.subscribe(onLocationsChange);
    }, []);

    //when DataStore modal property changes, update information
    function onLocationsChange() {
        setLocations(DataStore.locations);
    }

    //calculate position on globe from lat and long
    function calcPosFromLatLonRad(lat, long) {
        let phi = (90 - lat) * (Math.PI / 180);
        let theta = (long + 180) * (Math.PI / 180);
        let x = -(Math.sin(phi) * Math.cos(theta));
        let z = (Math.sin(phi) * Math.sin(theta));
        let y = (Math.cos(phi));
        return [x, y, z];
    }

    //create a point for each object in locations array
    const points = locations.map((location) => (
        <mesh key={location.id} position={calcPosFromLatLonRad(location.coordinates.lat, location.coordinates.long)}
            onClick={(e) => {
                DataStore.updateModal(location);
            }}>
            <sphereGeometry args={[.02, 20, 20]} />
            <meshStandardMaterial color={location.color} />
        </mesh>
    ))

    return (
        <>
            {points}
        </>
    );
}