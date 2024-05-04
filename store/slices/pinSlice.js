import {createSlice} from "@reduxjs/toolkit";
import React from "react";


const initialState = {
    dialPadContent: [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "backspace"], // const vaue
    code: [],
    pinLength: 5, //const value
}

export const pinSlice = createSlice({
    name: "pin",
    initialState,
    reducers: {
        addPin: (state, action) => {
            state.code.push(action.payload)
        },
        deletePin: (state) => {
            state.code.pop()
        },
        clearPin: (state) => { // deletes all pins
            state.code = []
        },
    }
})

export const pinReducer = pinSlice.reducer
export const {addPin, deletePin, clearPin} = pinSlice.actions