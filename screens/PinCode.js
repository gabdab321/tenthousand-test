import {SafeAreaView, Text, View, StyleSheet} from "react-native";
import CustomButton from "../components/UI/CustomButton";
import PhoneSVG from "../assets/PinCode/phone";
import CustomDialpad from "../components/CustomDialpad";
import DialpadPin from "../components/DialpadPin";
import {useDispatch, useSelector} from "react-redux";
import keychainPin from "../services/keychainPin";
import {clearPin} from "../store/slices/pinSlice";
import {useState} from "react";

export default function PinCode({route, navigation}) {
    const dispatch = useDispatch()
    const code = useSelector(state => state.pin.code)
    const {type} = route.params

    const [error, setError] = useState("")

    // used when pin screen is opened the first time
    async function createPin() {
        navigation.navigate("PinCode", {type: "Repeat"});
        await keychainPin.setPinCredentials(code.join(""))
        dispatch(clearPin()) // clear redux storage
    }

    // used when pin screen is opened second time
    async function submitPin() {
        const pinCode = await keychainPin.getPinCredentials()
        if(pinCode === code.join("")) {
            console.log("all is good, give us tour biometrics")
            setError("")
        } else {
            setError("Wrong pin code!")
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.topContainer}>

                <View style={styles.titleContainer}>
                    <View style={styles.iconContainer}>
                        <PhoneSVG/>
                    </View>
                    <Text style={styles.title}>{route.params.type} a pin code</Text>
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


                {type === "Enter"
                    ?
                    <CustomButton onPress={createPin} title="Continue" variant="filled" customStyles={{marginTop: 20}}/>
                    :
                    <CustomButton onPress={submitPin} title="Continue" variant="filled" customStyles={{marginTop: 20}}/>
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