import {Text, View, StyleSheet, Image} from "react-native";
import ArrowSVG from "../assets/Home/arrow";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import {useMemo} from "react";

const isRTL = i18next.language?.startsWith('ar');

// just a layout
export default function PersonalAdvisor() {
    const { t, i18n } = useTranslation()

    const isRTL = i18n.language === "ar"

    return (
        <View style={{...styles.container, flexDirection: isRTL ? "row-reverse": "row"}}>
            <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
                <Text style={styles.title}>{t("personalAdvisor")}</Text>
                <Text style={styles.name}>{t("advisorName")}</Text>
                <View style={styles.linkContainer}>
                    <Text style={styles.link}>{t("scheduleCall")}</Text>
                    <ArrowSVG style={{ marginLeft: 5 }} />
                </View>
            </View>
            <View>
                <Image source={require("../assets/Home/personalAdvisor.png")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 16,
        marginHorizontal: 15,
        marginVertical: 25,
        justifyContent: "space-between",
        padding: 10
    },
    title: {
        fontSize: 15,
        fontWeight: "500",
        lineHeight: 18,
        color: "#06070A",
    },
    name: {
        fontSize: 13,
        fontWeight: "400",
        lineHeight: 16,
        color: "#858C94",
        marginTop: 5
    },
    link: {
        fontSize: 15,
        fontWeight: "500",
        lineHeight: 24,
        color: "#009E81",
    },
    linkContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25
    }
})