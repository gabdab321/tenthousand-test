import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    createdPin: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setCreatedPin: (state) => {
            state.createdPin = true
        },
        clearAuth: (state) => {
            state.user = null;
            state.token = null;
            state.createdPin = null
        },
    },
})

export const { setUser, setToken, clearAuth, setCreatedPin } = authSlice.actions;
export const authReducer = authSlice.reducer;