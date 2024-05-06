import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import CustomButton from "../components/UI/CustomButton";
import PhoneSVG from "../assets/PinCode/phone";
import CustomDialpad from "../components/CustomDialpad";
import DialpadPin from "../components/DialpadPin";
import {useDispatch, useSelector} from "react-redux";
import secureStorageManager from "../services/secureStorageManager";
import {clearPin} from "../store/slices/pinSlice";
import {useState} from "react";
import * as LocalAuthentication from "expo-local-authentication";
import {useTranslation} from "react-i18next";
import {setCreatedPin} from "../store/slices/authSlice";

export default function PinCode({route, navigation}) {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const code = useSelector(state => state.pin.code)
    const {type} = route.params

    const [error, setError] = useState("")

    // used when pin screen is opened the first time
    async function createPin() {
        navigation.navigate("PinCode", {type: "Repeat"});
        await secureStorageManager.setPinCredentials(code.join(""))
        dispatch(clearPin()) // clear redux storage
    }

    // used when pin screen is opened second time
    async function submitPin() {
        const pinCode = await secureStorageManager.getPinCredentials()
        if(pinCode === code.join("")) {
            // getting biometrics
            const hasBiometricHardware = await LocalAuthentication.hasHardwareAsync();
            const isEnrolled = await LocalAuthentication.isEnrolledAsync();

            if(!hasBiometricHardware || !isEnrolled) {
                return
            }

            const result = await LocalAuthentication.authenticateAsync({
                promptMessage: t("authenticateBiometrics"),
            });

            dispatch(setCreatedPin())
            navigation.navigate("Home")
            setError("")
        } else {
            setError(t("pinError"))
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.topContainer}>

                <View style={styles.titleContainer}>
                    <View style={styles.iconContainer}>
                        <PhoneSVG/>
                    </View>
                    <Text style={styles.title}>{route.params.type === "Enter" ? t("enterPinCode") : t("repeatPinCode")}</Text>
                    {error && <Text style={styles.errorMessage}>{error}</Text>}
                </View>

                <View style={styles.codeContainer}>
                    <Text style={styles.subtitle}>{t("enterCode")}</Text>
                    <DialpadPin/>
                </View>

            </View>


            <View style={styles.bottomContainer}>

                <View style={{borderBottomColor: '#bcbcbe', borderBottomWidth: StyleSheet.hairlineWidth}}/>
                <CustomDialpad/>
                <View style={{borderBottomColor: '#bcbcbe', borderBottomWidth: StyleSheet.hairlineWidth}}/>


                {type === "Enter"
                    ?
                    <CustomButton onPress={createPin} title={t("continue")} variant="filled" customStyles={{marginTop: 20}}/>
                    :
                    <CustomButton onPress={submitPin} title={t("continue")} variant="filled" customStyles={{marginTop: 20}}/>
                }
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