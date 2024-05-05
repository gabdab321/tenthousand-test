import {Provider} from "react-redux";
import store, {persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import AppNavigation from "./AppNavigation";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createAsyncStoragePersister} from "@tanstack/query-async-storage-persister";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "./i18n";

const queryClient = new QueryClient()


const asyncStoragePersistor = createAsyncStoragePersister({
    storage: AsyncStorage,
});

// persist the React Query state
queryClient.setQueryData('root', asyncStoragePersistor);

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <AppNavigation/>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
}