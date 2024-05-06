import {Provider} from "react-redux";
import store, {persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import AppNavigation from "./AppNavigation";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createAsyncStoragePersister} from "@tanstack/query-async-storage-persister";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "./i18n";
import {createContext, useEffect, useState} from "react";
import i18next from "i18next";
import {I18nManager} from "react-native";
const queryClient = new QueryClient()


const asyncStoragePersistor = createAsyncStoragePersister({
    storage: AsyncStorage,
});

// persist the React Query state
queryClient.setQueryData('root', asyncStoragePersistor);
export const RTLContext = createContext()

export default function App() {
    const [isRTL, setIsRTL] = useState(false)

    useEffect(() => {
        if(i18next.language) {
            setIsRTL(i18next.language === "ar")
        }
    }, [i18next]);

    return (
        <RTLContext.Provider value={isRTL}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <QueryClientProvider client={queryClient}>
                        <AppNavigation/>
                    </QueryClientProvider>
                </PersistGate>
            </Provider>
        </RTLContext.Provider>
    );
}
