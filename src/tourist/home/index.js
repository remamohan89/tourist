import React from 'react';
import {useSelector} from "react-redux";
import LocationItem from './location-item';

/* Load location information from json file --- to be used in Part B */
import locations from "../data/locations.json";

const HomeComponent= () => {

    /* location array loaded from the store --- to be used in Part C */
    const locArray = useSelector(state => state.locations);

    return (
        <>
            <div>
                <hr></hr>
                <h5>Top Tourist Locations</h5>
                <hr></hr>
            </div>
            <div className="row">
                <div className="col-4">
                    <LocationItem location = {locations[0]}/>
                </div>
                                                            
                <div className="col-4">
                    {/* TODO - Load the second location details */}
                </div> 
                
                <div className="col-4">
                    {/* TODO - Load the third location details */}
                </div> 
            </div>
            <hr></hr>
        </>
    );
};
export default HomeComponent;
