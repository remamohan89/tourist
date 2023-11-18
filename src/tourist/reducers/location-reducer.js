import { createSlice } from "@reduxjs/toolkit";
import locations from '../data/locations.json'; 

const locationsSlice = createSlice({
 name: 'locations',
 initialState: locations,
 reducers: {
    /**
        if the user clicks on the like button of a location, 
        the likes count increases by one and the heart turns red, 
        and if the user unlike the location, 
        the likes count decreases by one and the heart turns black.
     */
    likeLocation(state, action) {
        const location = state.find((location) => location._id === action.payload._id);
        /* Complete this function */
      },
 }
});

export const {likeLocation} = locationsSlice.actions;
export default locationsSlice.reducer;
