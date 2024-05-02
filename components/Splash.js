import {Image, SafeAreaView, StyleSheet} from "react-native";
import SplashSVG from "../assets/splash";
import {useEffect} from "react";

export default function Splash({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Welcome');
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