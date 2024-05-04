import { configureStore } from '@reduxjs/toolkit'
import {pinReducer} from "./slices/pinSlice";

const store = configureStore({
    reducer: {
        pin: pinReducer
    },
})

export default store