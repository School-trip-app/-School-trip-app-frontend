import { createSlice } from '@reduxjs/toolkit';


const initialState={
  order:{
      packId:null,
      photId:null,
      pricePackage:0,
      pricePhoto:0,
      priceProduct:[],
      prodectId:[],
      total:0,
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
        },
        removePackageId:(state)=>{
            state.order={...state.order, packId:null};
        },
        removePhotId:(state)=>{
            state.order={...state.order, photId:null};
        },
        removeProduct:(state, action)=>{
            state.order={...state.order, prodectId:state.order.prodectId.filter((num)=>num!==action.payload)};
        },
        addpricePackage:(state,action)=>{
          state.order={...state.order,pricePackage:action.payload};
        },
        removepricePackage:(state,action)=>{
          state.order={...state.order,pricePackage:action.payload};
        },
        addpricePhoto:(state,action)=>{
            state.order={...state.order,pricePhoto:action.payload};
          },
        removepricePhoto:(state,action)=>{
            state.order={...state.order,pricePhoto:action.payload};
          },
        addpriceProduct:(state,action)=>{
            console.log("PRODCDS>>>",action.payload)
            state.order={...state.order,priceProduct:Array.from(new Set([...state.order.priceProduct,action.payload]))};

          },
        removepriceProduct:(state,action)=>{
            state.order={...state.order,priceProduct:state.order.priceProduct.filter((num)=>num!==action.payload)};
          },
          addTotalPrice:(state,action)=>{
            console.log("TOTAL>>>",action.payload)
            state.order={...state.order,total:action.payload};

          },
        removeTotalPrice:(state,action)=>{
            state.order={...state.order,total:action.payload};
          }
    }
});
export const stateOrder=(state)=>state.order.order;
export const {setPackId , setPhotId,addpricePackage,addTotalPrice,removeTotalPrice,addpriceProduct,removepriceProduct,removepricePackage,addpricePhoto,removepricePhoto, setProdectId, removePackageId, removePhotId, removeProduct }=orderSlice.actions;
export default orderSlice.reducer;
