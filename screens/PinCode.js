import {SafeAreaView, Text, View, StyleSheet} from "react-native";
import CustomButton from "../components/UI/CustomButton";
import PhoneSVG from "../assets/PinCode/phone";
import DialpadKeypad from "../components/DialpadKeypad";
import CustomDialpad from "../components/CustomDialpad";

export default function PinCode() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.topContainer}>

                <View style={styles.titleContainer}>
                    <View style={styles.iconContainer}>
                        <PhoneSVG/>
                    </View>
                    <Text style={styles.title}>Create a pin code</Text>
                </View>

                <View style={styles.codeContainer}>
                    <Text style={styles.subtitle}>enter 5 digit code:</Text>
                    <View style={styles.dotContainer}>
                        <View style={{...styles.dot, backgroundColor: "#00B28C"}}/>
                        <View style={{...styles.dot, backgroundColor: "#00B28C"}}/>
                        <View style={styles.dot}/>
                        <View style={styles.dot}/>
                        <View style={styles.dot}/>
                    </View>
                </View>

            </View>


            <View style={styles.bottomContainer}>

                <View style={{borderBottomColor: '#bcbcbe', borderBottomWidth: StyleSheet.hairlineWidth}}/>
                <CustomDialpad/>
                <View style={{borderBottomColor: '#bcbcbe', borderBottomWidth: StyleSheet.hairlineWidth}}/>


                <CustomButton title="Continue" variant="filled" customStyles={{marginTop: 20}}/>

            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },

    topContainer: {
        alignItems: "center",
        marginTop: 30
    },
    iconContainer: {
        width: 48,
        height: 48,
        backgroundColor: "##F2FAF7",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%"
    },
    titleContainer: {
        alignItems: "center"
    },
    title: {
        fontSize: 15,
        fontWeight: "500",
        lineHeight: 24,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 16,
        color: "#606773"
    },
    codeContainer: {
        marginTop: 45,
        alignItems: "center"
    },
    dotContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "start",
        width: 200,
        marginTop: 25
    },
    dot: {
        width: 24,
        height: 24,
        borderRadius: 50,
        backgroundColor: "#C1C4CB"
    },
    bottomContainer: {
        width: "100%",
        padding: 20,
    },
    numpad: {
    }
})