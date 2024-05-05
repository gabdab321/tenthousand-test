import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    route: "Home"
}

const navigationSlice = createSlice({
    name: "navigationSlice",
    initialState,
    reducers: {
        setRoute: (state, action) => {
            state.route = action.payload
        }
    }
})

export const navigationReducer = navigationSlice.reducer
export const {setRoute} = navigationSlice.actions