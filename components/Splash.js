import {SafeAreaView, StyleSheet} from "react-native";
import SplashSVG from "../assets/splash";
import {useEffect} from "react";
import {useSelector} from "react-redux";

export default function Splash({navigation, route}) {
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        const navigateToNextScreen = () => {
            let nextScreen;


            if(route.params && (auth.token && auth.createdPin)) { // if it is a manual navigation and user is authenticated
                const to = route.params.to

                switch (to) {
                    case 'Home':
                        nextScreen = 'Home';
                        break;
                    case 'Profile':
                        nextScreen = 'Profile';
                        break;
                    case 'Search':
                        nextScreen = 'Search';
                        break;
                    case 'Portfolio':
                        nextScreen = 'Portfolio';
                        break;
                    default:
                        nextScreen = 'Home'; // default screen for authenticated users
                        break;
                }
            } else if(!route.params && (auth.token && auth.createdPin)) { // if it is a starting screen for authenticated user
                nextScreen = "ExistingPinCode"
            } else if(!route.params && !(auth.token && auth.createdPin)) { // if it is a starting screen for non-authenticated user
                nextScreen = "Welcome"
            }

            navigation.replace(nextScreen);
        };

        // simulate loading time
        setTimeout(navigateToNextScreen, 2000);
    }, [auth.token, navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <SplashSVG/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})