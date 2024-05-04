import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignIn from "./screens/SignScreens/SignIn";
import SignUp from "./screens/SignScreens/SignUp";
import {StatusBar} from "react-native";
import Welcome from "./screens/Welcome";
import Splash from "./components/Splash";
import PinCode from "./screens/PinCode";
import {Provider} from "react-redux";
import store, {persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen
                            name="Splash"
                            component={Splash}
                        />
                        <Stack.Screen
                            name="Welcome"
                            component={Welcome}
                        />
                        <Stack.Screen
                            name="SignIn"
                            component={SignIn}
                        />
                        <Stack.Screen name="SignUp" component={SignUp} />
                        <Stack.Screen
                            name="PinCode"
                            component={PinCode}
                        />
                    </Stack.Navigator>
                    <StatusBar barStyle="dark-content"/>
                </NavigationContainer>
            </PersistGate>

        </Provider>
    );
}