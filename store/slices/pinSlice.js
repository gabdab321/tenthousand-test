import {createSlice} from "@reduxjs/toolkit";
import React from "react";

const initialState = {
    dialPadContent: [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "backspace"], // const vaue
    code: [],
    pinLength: 5 //const value
}

export const pinSlice = createSlice({
    name: "pin",
    initialState,
    reducers: {
        addPin: (state, action) => {
            console.log("adding")
            state.code.push(action.payload)
        },
        deletePin: (state) => {
            console.log("deleting")
            state.code.pop()
        },
        setCode: (state, action) => {
            console.log(`setting: ${action.payload}`)
            state.code = action.payload
        }
    }
})

export const pinReducer = pinSlice.reducer
export const {addPin, deletePin, setCode} = pinSlice.actions