import {ScrollView, StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import LinkSVG from "../assets/Home/link";
import ArrowStrictSVG from "../assets/Home/arrowStrict";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";

function Card({title, steps, gradientColors, textColor, secondaryColor, iconStroke, iconBg, marginLeft}) {
    const { t , i18n} = useTranslation()
    const isRTL = i18n.language === "ar"

    return (
        <LinearGradient colors={gradientColors} style={{...styles.card, marginLeft}}>
            <View style={{flexDirection: "row"}}>
                <View style={{...styles.imageContainer, backgroundColor: iconBg}}>
                    <LinkSVG stroke={iconStroke}/>
                </View>
                <Text style={{...styles.cardTitle, color: textColor, textAlign: isRTL ? "right": "left"}}>{title}</Text>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Text style={{...styles.cardSubtitle, color: secondaryColor, textAlign: isRTL ? "right": "left"}}>{steps} {t("steps")}</Text>
                <ArrowStrictSVG/>
            </View>
        </LinearGradient>
    )
}

// just a layout
export default function BeforeStart() {
    const { t, i18n } = useTranslation()
    const isRTL = i18n.language === "ar"

    return (
        <View style={styles.container}>
            <Text style={{...styles.title, textAlign: isRTL ? "right" : "left"}}>{t("beforeStart")}</Text>
            <ScrollView style={styles.scrollableContainer} horizontal={true}>
                <Card
                    title={t("linkBankAcc")}
                    steps={2}
                    gradientColors={["#38AB9C", "#02726E"]}
                    textColor="#fff"
                    secondaryColor="#fff"
                    iconStroke="#fff"
                    iconBg="#10C7A0"
                />
                <Card
                    title={t("addFunds")}
                    steps={3}
                    gradientColors={["#EBEE63", "#EBEE63"]}
                    textColor="#000"
                    secondaryColor="#606773"
                    iconStroke="#10C7A0"
                    iconBg="#FDFF85"
                    marginLeft={20}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15
    },
    title: {
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 16,
        color: "#606773",

    },
    scrollableContainer: {
        marginTop: 10
    },
    card: {
        width: 233,
        height: 152,
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingVertical: 20,
        justifyContent: "space-between",
        marginLeft: 10,
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: "500",
        lineHeight: 24,
        color: "#fff",
        marginLeft: 15,
        flex: 1,
        flexWrap: 'wrap',

    },
    imageContainer: {
        width: 48,
        height: 48,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#38AB9C"
    },
    cardSubtitle: {
        fontSize: 15,
        fontWeight: "500",
        lineHeight: 24,
        color: "#fff",

    }
})