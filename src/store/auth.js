import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    auth: {
        isLogin: false,
        isLoading: false,
    }
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setLogin: (state) => {
            state.auth = { ...state.auth, isLogin: true };
        },
        setLogout: (state) => {
            state.auth = { ...state.auth, isLogin: false };
        },
        setLoadingOn: (state) => {
            state.auth = {
                ...state.auth, isLoading: true
            }
        },
        setLoadingOff: (state) => {
            state.auth = {
                ...state.auth, isLoading: false
            }
        }
    }
});

export const stateAuth = (state) => state.auth.auth;
export const { setLogin, setLogout, setLoadingOn ,setLoadingOff} = authSlice.actions;
export default authSlice.reducer;
