import {SafeAreaView, StyleSheet} from "react-native";
import SplashSVG from "../assets/splash";
import {useEffect} from "react";
import {useSelector} from "react-redux";

export default function Splash({navigation}) {
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        setTimeout(() => {
            if(auth.token) {
                navigation.navigate('ExistingPinCode');
            } else {
                navigation.navigate('Welcome')
            }
        }, 3000);
    }, []);

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