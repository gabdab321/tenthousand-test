import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LanguageSVG from "../assets/Settings/language";
import {useState} from "react";

export default function ChangeLanguage() {
    const [language, setLanguage] = useState("en")

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Language</Text>

            <TouchableOpacity>
                <View style={styles.settingsBox}>
                    <LanguageSVG/>
                    <Text style={styles.settingName}>English</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.settingsBox}>
                    <LanguageSVG/>
                    <Text style={styles.settingName}>Arabic</Text>
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
        marginTop: 30
    },
    avatar: {
        width: 32,
        height: 32,
        backgroundColor: "#EBEFF5",
        borderRadius: 50
    },
    settingsBox: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "#CED5E0",
        padding: 15,
    },
    settingName: {
        marginLeft: 10
    }
})