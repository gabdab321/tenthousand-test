import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LanguageSVG from "../assets/Settings/language";
import {useTranslation} from "react-i18next";
import {saveLanguage} from "../services/cacheLanguage";
import BackArrow from "../components/BackArrow";
import ActiveSVG from "../assets/Settings/active";
import UnActiveSVG from "../assets/Settings/unActive";

export default function ChangeLanguage() {
    const { t , i18n} = useTranslation()
    const isRTL = i18n.language === "ar"

    function handleLanguageChange(language) {
        saveLanguage(language)
        i18n.changeLanguage(language)
    }

    return (
        <SafeAreaView style={styles.container}>
            <BackArrow/>

            <Text style={{...styles.title, textAlign: isRTL ? "right" : "left"}}>{t("language")}</Text>

            <TouchableOpacity onPress={() => handleLanguageChange("en")}>
                <View style={{...styles.settingsBox, flexDirection: isRTL ? "row-reverse" : "row",}}>
                    <View style={{flexDirection: isRTL ? "row-reverse" : "row", alignItems: "center"}}>
                        <LanguageSVG/>
                        <Text style={styles.settingName}>{t("english")}</Text>
                    </View>
                    {i18n.language === "en" ? <ActiveSVG/> : <UnActiveSVG/>}
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleLanguageChange("ar")}>
                <View style={{...styles.settingsBox, flexDirection: isRTL ? "row-reverse" : "row",}}>
                    <View style={{flexDirection: isRTL ? "row-reverse" : "row", alignItems: "center"}}>
                        <LanguageSVG/>
                        <Text style={styles.settingName}>{t("arabic")}</Text>
                    </View>
                    {i18n.language === "ar" ? <ActiveSVG /> : <UnActiveSVG/>}
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    checked: {

    },
    title: {
        fontSize: 22,
        fontWeight: "600",
        lineHeight: 32,
        color: "#06070A",
        marginHorizontal: 10,
    },
    avatar: {
        width: 32,
        height: 32,
        backgroundColor: "#EBEFF5",
        borderRadius: 50
    },
    settingsBox: {
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "#CED5E0",
        padding: 15,
    },
    settingName: {
        margin: 10
    }
})