import {NavigationContainer} from "@react-navigation/native";
import Splash from "./components/Splash";
import Welcome from "./screens/Welcome";
import SignIn from "./screens/SignScreens/SignIn";
import SignUp from "./screens/SignScreens/SignUp";
import PinCode from "./screens/PinCode";
import {StatusBar} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useSelector} from "react-redux";
import Home from "./screens/Home";
import ExistingPinCode from "./screens/ExistingPinCode";
import Post from "./screens/Post";
import Profile from "./screens/Profile";
import Search from "./screens/Search";
import Portfolio from "./screens/Portfolio";
import ChangeLanguage from "./screens/ChangeLanguage";

const Stack = createNativeStackNavigator()

// TODO: fix splash screen
function AppNavigation() {
    const auth = useSelector(state => state.auth);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                />
                {auth.token && auth.createdPin
                    ?
                    <>
                        <Stack.Screen
                            name="ExistingPinCode"
                            component={ExistingPinCode}
                        />
                        <Stack.Screen name="Home" component={Home}/>
                        <Stack.Screen name="Post" component={Post}/>
                        <Stack.Screen name="Portfolio" component={Portfolio}/>
                        <Stack.Screen name="Search" component={Search}/>
                        <Stack.Screen name="Profile" component={Profile}/>
                        <Stack.Screen name="ChangeLanguage" component={ChangeLanguage}/>
                    </>
                    :
                    <>
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
                    </>
                }
            </Stack.Navigator>
            <StatusBar barStyle="dark-content"/>
        </NavigationContainer>
    )
}

export default AppNavigation