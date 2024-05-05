import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {pinReducer} from "./slices/pinSlice";
import {authReducer} from "./slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistStore, persistReducer, FLUSH, REHYDRATE, PERSIST, PAUSE, PURGE, REGISTER} from "redux-persist";
import {navigationReducer} from "./slices/navigationSlice";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blacklist: ["pin", "navigation"]
}

const rootReducer = combineReducers({
    pin: pinReducer,
    auth: authReducer,
    navigation: navigationReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PERSIST, PAUSE, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(store)
export default store
