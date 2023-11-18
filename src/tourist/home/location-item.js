import React from 'react';
import {useDispatch} from "react-redux";
import { likeLocation } from '../reducers/location-reducer';

const LocationItem = ({location}) => {

    const dispatch = useDispatch();

    /* function to handle like-location --- to be used in Part C */
    const likeLocationHandler = (location) => {
        dispatch(likeLocation(location));
    }
     
    return (
        <>
        <div className="list-group">
            <div className="list-group-item location-padding">
                <img src={`/images/${location.image}`} className="location-img"/>
                {/* TODO - Complete the remaining location description */}
            </div>
        </div>
        </>
    );
};
export default LocationItem;
