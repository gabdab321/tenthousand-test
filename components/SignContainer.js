import {Dimensions, StyleSheet, Text, View} from "react-native";
import UserSVG from "../assets/Sign/createUser";
import SignInForm from "./SignForms/SignInForm";
import SignUpForm from "./SignForms/SignUpForm";

export default function SignContainer({variant}) {
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={{...styles.contentContainer, height: windowHeight-100}}>
            <View style={styles.titleContainer}>
                <UserSVG />
                <View style={{marginLeft: 10}}>
                    <Text style={styles.title}>{variant}</Text>
                    <Text style={{...styles.title, color: "#606773"}}>Personal account</Text>
                </View>
            </View>

            <View style={{borderBottomColor: '#bcbcbe', borderBottomWidth: StyleSheet.hairlineWidth}}/>

            {variant === "Sign Up"
                ?
                <SignUpForm/>
                :
                <SignInForm/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: "500",
        lineHeight: 24,
    },
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    contentContainer: {
        width: "100%",
        // height: "87%",
        marginTop: 100,
        padding: 20,
        backgroundColor: "#fff",
        position: "absolute",
        borderTopRightRadius: 27,
        borderTopLeftRadius: 27,
        elevation: 12,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
})