import {Provider} from "react-redux";
import store, {persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import AppNavigation from "./AppNavigation";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createAsyncStoragePersister} from "@tanstack/query-async-storage-persister";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "./i18n";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import {loadLanguage} from "./services/cacheLanguage";
import {persistQueryClient} from "@tanstack/react-query-persist-client";


const queryClient = new QueryClient();

const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
    key: 'react-query-cache',
});

persistQueryClient({
    queryClient,
    persister: asyncStoragePersister,
});

export default function App() {
    const {i18n} = useTranslation()

    useEffect(() => {
        loadLanguage().then(lang => i18n.changeLanguage(lang))
    }, [])

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
