import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://sophisticated-steel-production.up.railway.app/photographer";


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

export const addphotographerAsync = (photographer) => (dispatch) => {
    axios.post(url, photographer).then((res) => {
        dispatch(addphotographer(res.data));
        console.log(res.data);
    });
}

export const getphotographerAsync = () => (dispatch) => {
    axios.get(url).then((res) => {
        dispatch(getphotographer(res.data));
        console.log(res.data);
    });
}

export const { addphotographer , getphotographer } = photographerSlice.actions;
export const selectPhotographer = (state) => state.photographer.data;
export default photographerSlice.reducer;