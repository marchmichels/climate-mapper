import React, { useEffect } from 'react';
import ThreeScene from "./components/ThreeScene";
import LocationModal from "./components/LocationModal";
import { DataStore } from './data/DataStore';


//the climate mapper React application
export default function App() {

    //hydrate datastore from fake API JSON response
    useEffect(() => {
        DataStore.fetchData();
    }, []);

    return (
        <div>
            <LocationModal />
            <ThreeScene />

        </div>
    )

}