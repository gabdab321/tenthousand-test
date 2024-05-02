import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {StatusBar} from "react-native";
import Welcome from "./pages/Welcome";

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{title: "Welcome"}}
                />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
            <StatusBar barStyle="dark-content"/>
        </NavigationContainer>
    );
}