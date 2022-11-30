import React, { useEffect } from 'react';
import Map from "./components/Map";
import LocationModal from "./components/LocationModal";
import { DataStore } from './data/DataStore';


//a react app
export default function App() {

    useEffect(() => {
        //populate DataStore from external JSON
        DataStore.fetchData();
    
    
      }, []);


    return (


        <div>
            <LocationModal />
            <Map />
        </div>

    )

}

