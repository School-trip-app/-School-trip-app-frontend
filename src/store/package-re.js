import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://sophisticated-steel-production.up.railway.app/package";


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
    axios.get(url).then((res) => {
        dispatch(getpackages(res.data));
    });
}

export const { getpackages  } = packagesSlice.actions;   
export const selectpackages = (state) => state.packages.data;
export default packagesSlice.reducer;