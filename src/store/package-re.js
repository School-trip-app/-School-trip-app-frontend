import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setLoadingOff, setLoadingOn } from './auth';

const url = "https://school-trip-app-backend.onrender.com/package";


export const packagesSlice = createSlice({
    name: "packages",
    initialState: {
        data: [],
    },
    reducers: {
        getpackages: (state, action) => {
            state.data = action.payload;
        }
    }
});



export const getpackagesAsync = () => (dispatch) => {
    dispatch(setLoadingOn());
    axios.get(url).then((res) => {
        dispatch(getpackages(res.data));
        dispatch(setLoadingOff());

    }).catch((err) => {
        dispatch(setLoadingOff());
        console.log(err)
    });

}

export const { getpackages } = packagesSlice.actions;
export const selectpackages = (state) => state.packages.data;
export default packagesSlice.reducer;