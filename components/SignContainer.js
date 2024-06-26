import {Dimensions, StyleSheet, Text, View} from "react-native";
import UserSVG from "../assets/Sign/createUser";
import SignInForm from "./SignForms/SignInForm";
import SignUpForm from "./SignForms/SignUpForm";
import {useTranslation} from "react-i18next";

export default function SignContainer({variant}) {
    const windowHeight = Dimensions.get('window').height;
    const {t, i18n} = useTranslation();
    const isRTL = i18n.language === "ar"

    return (
        <View style={{...styles.contentContainer, height: windowHeight-100}}>
            <View style={{...styles.titleContainer, flexDirection: isRTL ? "row-reverse" : "row"}}>
                <UserSVG />
                <View style={{marginHorizontal: 10}}>
                    <Text style={styles.title}>{variant === "Sign Up" ? t("signUp") : t("signIn")}</Text>
                    <Text style={{...styles.title, color: "#606773"}}>{t("personalAccount")}</Text>
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