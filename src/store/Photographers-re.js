import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setLoadingOff, setLoadingOn } from "./auth";
const url = "https://school-trip-app-backend.onrender.com/photographer";



export const photographerSlice = createSlice({
    name: "photographer",
    initialState: {
        data: [],
    },
    reducers: {
        addphotographer: (state, action) => {
            state.data.push(action.payload);
        },
        getphotographer: (state, action) => {
            state.data = action.payload;
        }

    }
});

export const addphotographerAsync = (photographer) => async (dispatch) => {
    dispatch(setLoadingOn());
    await axios.post(url, photographer).then((res) => {
        dispatch(addphotographer(res.data));
        dispatch(setLoadingOn());
    }).catch((err) => {
        console.log(err);
        dispatch(setLoadingOff());
    })
}

export const getphotographerAsync = () => async (dispatch) => {
    dispatch(setLoadingOn());
    await axios.get(url).then((res) => {
        dispatch(getphotographer(res.data));
        dispatch(setLoadingOff());
    }).catch((err) => {
        console.log(err);
        dispatch(setLoadingOff());
    });
}

export const { addphotographer, getphotographer } = photographerSlice.actions;
export const selectPhotographer = (state) => state.photographer.data;
export default photographerSlice.reducer;