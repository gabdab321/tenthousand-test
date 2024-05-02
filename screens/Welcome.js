import {Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CryptoSVG from "../assets/Welcome/crypto";
import CrowdLendingSVG from "../assets/Welcome/crowd_lending";
import EstateSVG from "../assets/Welcome/estate";
import CommoditiesSVG from "../assets/Welcome/commodities";
import EtfSVG from "../assets/Welcome/etf";
import CustomButton from "../components/UI/CustomButton";

// TODO: figure out how to properly make background image

export default function Welcome({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            {/*<ImageBackground*/}
            {/*    source={require("../assets/Welcome/bg.png")}*/}
            {/*    style={styles.bgImage}*/}
            {/*>*/}
                <View style={styles.blockContainer}>
                    <View style={styles.optionsContainer}>
                        <View style={{...styles.option, backgroundColor: "#00B28C"}} />
                        <View style={styles.option}>
                            <EstateSVG/>
                            <Text style={styles.optionTitle}>Crowd real estate</Text>
                        </View>
                        <View style={styles.option}>
                            <EtfSVG/>
                            <Text style={styles.optionTitle}>ETFs</Text>
                        </View>
                    </View>

                    <View style={{...styles.optionsContainer, marginTop: 136/2}}>
                        <View style={styles.option}>
                            <CrowdLendingSVG/>
                            <Text style={styles.optionTitle}>Crowd lending</Text>
                        </View>

                        <View style={styles.option}>
                            <CommoditiesSVG/>
                            <Text style={styles.optionTitle}>Commodities</Text>
                        </View>

                        <View style={styles.option}>
                            <CryptoSVG/>
                            <Text style={styles.optionTitle}>Crypto</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton onPress={() => navigation.navigate("SignIn")} variant="blank" title="Sign In"/>
                    <CustomButton onPress={() => navigation.navigate("SignUp")} marginTop={5} variant="filled" title="Sign Up"/>
                </View>
            {/*</ImageBackground>*/}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // bgImage: {
    //     width: "100%",
    //     height: "auto",
    //     position: "absolute",
    //     bottom: 0,
    //     resizeMode: "cover"
    // },
    container: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        flex: 1,
        backgroundColor: '#F2F3F5',
    },
    blockContainer: {
        display: "flex",
        flexDirection: "row"
    },
    optionsContainer: {
        display: "flex",
        alignItems: "center",
        width: "50%",
        height: "auto",
        padding: 10
    },
    option: {
        width: "100%",
        height: 136,
        borderRadius: 16,
        backgroundColor: "#fff",
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    optionTitle: {
        fontSize: 14,
        fontWeight:  "400",
        lineHeight: 16,
        marginTop: 10,
        color: "#606773"
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 10,
        marginBottom: 10
    }
});
