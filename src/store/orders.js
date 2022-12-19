import { createSlice } from '@reduxjs/toolkit';


const initialState={
  order:{
      packId:null,
      photId:null,
      prodectId:[],
    } 
};

const orderSlice = createSlice({
    name:'orderSlice',
    initialState,
    reducers:{
        setPackId:(state,action)=>{
            state.order={...state.order, packId:action.payload};
        },
        setPhotId:(state,action)=>{
            state.order={...state.order, photId:action.payload};
            console.log(state.order)

        },
        setProdectId:(state, action)=>{
            state.order={...state.order, prodectId:[...state.order.prodectId,action.payload]};
            console.log(state.order.prodectId);
        }
    }
});
export const stateOrder=(state)=>state.order.order;
export const {setPackId , setPhotId, setProdectId}=orderSlice.actions;
export default orderSlice.reducer;
