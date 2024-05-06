import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, I18nManager} from "react-native";
import NavigationTab from "../components/NavigationTab";
import {useDispatch, useSelector} from "react-redux";
import LanguageSVG from "../assets/Settings/language";
import ArrowSVG from "../assets/Settings/arrow";
import LogoutSVG from "../assets/Settings/logout";
import {logout} from "../services/auth";
import {useTranslation} from "react-i18next";
import BackArrow from "../components/BackArrow";


export default function Profile({navigation}) {
    const { t , i18n} = useTranslation()
    const isRTL = i18n.language === "ar"
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={styles.container}>
            <BackArrow/>
            <Text style={{...styles.title, textAlign: isRTL ? "right": "left"}}>{t("settings")}</Text>

            <View style={styles.profile}>
                <View style={styles.avatar}/>
                <Text style={styles.username}>{user.firstName} {user.lastName}</Text>
            </View>

            <Text style={{...styles.subtitle, textAlign: isRTL ? "right": "left"}}>{t("basic")}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("ChangeLanguage")}>
                <View style={{...styles.settingsBox, flexDirection: isRTL ? "row-reverse" : "row",}}>
                    <LanguageSVG/>
                    <Text style={styles.settingName}>{t("language")}</Text>
                    <ArrowSVG style={{...styles.arrow, transform: [{rotate: isRTL ? "180deg" : "0deg"}]}}/>
                </View>
            </TouchableOpacity>

            <Text style={{...styles.subtitle, textAlign: isRTL ? "right": "left"}}>{t("other")}</Text>
            <TouchableOpacity onPress={() => logout(dispatch)}>

                <View style={{...styles.settingsBox, flexDirection: isRTL ? "row-reverse" : "row",}}>
                    <LogoutSVG/>
                    <Text style={styles.settingName}>{t("logout")}</Text>
                    <ArrowSVG style={{...styles.arrow, transform: [{rotate: isRTL ? "180deg" : "0deg"}]}}/>
                </View>
            </TouchableOpacity>

            <NavigationTab/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "#CED5E0",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    title: {
        fontSize: 22,
        fontWeight: "600",
        lineHeight: 32,
        color: "#06070A",
        marginHorizontal: 10,
    },
    username: {
        marginLeft: 10
    },
    avatar: {
        width: 32,
        height: 32,
        backgroundColor: "#EBEFF5",
        borderRadius: 50
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 16,
        color: "#606773",
        marginHorizontal: 10,

    },
    settingsBox: {
        alignItems: "center",
        margin: 10,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "#CED5E0",
        padding: 15,
    },
    settingName: {
        margin: 10
    },
    arrow: {
        marginLeft: "auto",
    }
})