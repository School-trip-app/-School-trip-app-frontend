import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:4005/product";


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

export const addproductAsync = (product) => (dispatch) => {
    axios.post(url, product).then((res) => {
        dispatch(addproduct(res.data));
    });
};

export const getproductAsync = () => (dispatch) => {
    axios.get(url).then((res) => {
        dispatch(getproduct(res.data));
    });
};


export const { addproduct, getproduct, deleteproduct } = productSlice.actions;
export const selectProduct = (state) => state.product.data;
export default productSlice.reducer;