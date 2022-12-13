import { createSlice } from '@reduxjs/toolkit';

const initialState={
    auth:{
        isLogin:false,
    }
};

const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        setLogin:(state)=>{
            state.auth={...state.auth, isLogin:true};
        },
        setLogout:(state)=>{
            state.auth={...state.auth, isLogin:false};
        }
    }
});

export const stateAuth=(state)=>state.auth.auth;
export const {setLogin , setLogout}=authSlice.actions;
export default authSlice.reducer;
