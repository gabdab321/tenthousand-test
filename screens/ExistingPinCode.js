import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import keychainPin from "../services/keychainPin";
import {clearPin} from "../store/slices/pinSlice";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import DialpadPin from "../components/DialpadPin";
import CustomDialpad from "../components/CustomDialpad";
import CustomButton from "../components/UI/CustomButton";
import UserSVG from "../assets/PinCode/user";
import * as LocalAuthentication from "expo-local-authentication";


// For the most part, this screen is a copy of PinCode, but there are differences in logic and rendering.
// I have made it into a separate component for convenience and better readability
export default function ExistingPinCode({navigation}) {
    const code = useSelector(state => state.pin.code)
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [error, setError] = useState("")

    useEffect(() => {
        async function checkBiometrics() {
            const hasBiometricHardware = await LocalAuthentication.hasHardwareAsync();
            const isEnrolled = await LocalAuthentication.isEnrolledAsync();

            if(!hasBiometricHardware || !isEnrolled) {
                return
            }

            const result = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Authenticate with biometrics',
            });

            if (result.success) {
                dispatch(clearPin())
                navigation.navigate("Home")
            }
        }

        checkBiometrics()
    }, [])

    async function checkPin() {
        const pinCode = await keychainPin.getPinCredentials()
        if(pinCode === code.join("")) {
            navigation.navigate("Home")
        } else {
            dispatch(clearPin())
            setError("Wrong pin code!")
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.topContainer}>

                <View style={styles.titleContainer}>
                    <View style={styles.iconContainer}>
                        <UserSVG/>
                    </View>
                    <Text style={styles.title}>{auth.user.email}</Text>
                    <Text style={styles.link}>Change Account</Text>
                    {error && <Text style={styles.errorMessage}>{error}</Text>}
                </View>

                <View style={styles.codeContainer}>
                    <Text style={styles.subtitle}>enter 5 digit code:</Text>
                    <DialpadPin/>
                </View>

            </View>


            <View style={styles.bottomContainer}>

                <View style={{borderBottomColor: '#bcbcbe', borderBottomWidth: StyleSheet.hairlineWidth}}/>
                <CustomDialpad/>
                <View style={{borderBottomColor: '#bcbcbe', borderBottomWidth: StyleSheet.hairlineWidth}}/>


                <CustomButton onPress={checkPin} title="Continue" variant="filled" customStyles={{marginTop: 20}}/>
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
    errorMessage: {
        color: "#D63C41",
        fontSize: 20,
        marginLeft: 12
    },
    topContainer: {
        alignItems: "center",
        marginTop: 30
    },
    link: {
        color: "#009E81",
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 16,
        marginTop: 10
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
    bottomContainer: {
        width: "100%",
        padding: 20,
    },
})