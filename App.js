import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignIn from "./pages/SignIn";
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
                    name="SignIn"
                    component={SignIn}
                />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
            <StatusBar barStyle="dark-content"/>
        </NavigationContainer>
    );
}