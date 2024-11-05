import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setLoadingOff, setLoadingOn } from "./auth";

const url = "http://localhost:4006/product";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
    },
    reducers: {
        addproduct: (state, action) => {
            state.data.push(action.payload);
        },
        getproduct: (state, action) => {
            state.data = action.payload;
        }
    }
});

export const addproductAsync = (product) => async (dispatch) => {
    dispatch(setLoadingOn())
    await axios.post(url, product).then((res) => {
        dispatch(addproduct(res.data));
        dispatch(setLoadingOff());
    }).catch((err) => {
        console.log(err);
        dispatch(setLoadingOff());
    })
};

export const getproductAsync = () => async (dispatch) => {
    dispatch(setLoadingOn());
    await axios.get(url).then((res) => {
        dispatch(getproduct(res.data));
        dispatch(setLoadingOff());
    }).catch((err) => {
        console.log(err);
        dispatch(setLoadingOff());
    })
};


export const { addproduct, getproduct, deleteproduct } = productSlice.actions;
export const selectProduct = (state) => state.product.data;
export default productSlice.reducer;