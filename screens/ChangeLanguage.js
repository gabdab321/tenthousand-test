import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LanguageSVG from "../assets/Settings/language";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import i18next from "i18next";

const isRTL = i18next.language?.startsWith('ar');

export default function ChangeLanguage() {
    const { t , i18n} = useTranslation()
    const isRTL = i18n.language === "ar"

    function handleLanguageChange(language) {
        i18n.changeLanguage(language)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{...styles.title, textAlign: isRTL ? "right" : "left"}}>{t("language")}</Text>

            <TouchableOpacity onPress={() => handleLanguageChange("en")}>
                <View style={{...styles.settingsBox, flexDirection: isRTL ? "row-reverse" : "row",}}>
                    <LanguageSVG/>
                    <Text style={styles.settingName}>{t("english")}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleLanguageChange("en")}>
                <View style={{...styles.settingsBox, flexDirection: isRTL ? "row-reverse" : "row",}}>
                    <LanguageSVG/>
                    <Text style={styles.settingName}>{t("arabic")}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: "600",
        lineHeight: 32,
        color: "#06070A",
        marginHorizontal: 10,
        marginTop: 30,

    },
    avatar: {
        width: 32,
        height: 32,
        backgroundColor: "#EBEFF5",
        borderRadius: 50
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
    }
})