import {Text, StyleSheet, ScrollView} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {LinearGradient} from "expo-linear-gradient";
import PersonalAdvisor from "../components/PersonalAdvisor";
import BeforeStart from "../components/BeforeStart";
import PostsList from "../components/PostsList";
import NavigationTab from "../components/NavigationTab";
import {useTranslation} from "react-i18next";
import {useContext} from "react";
import {RTLContext} from "../App";

export default function Home() {
    const {user} = useSelector(state => state.auth)
    const {t, i18n} = useTranslation()

    return (
        <>
            <ScrollView style={styles.container}>
                <LinearGradient style={styles.linearGradient} colors={["#38AB9C", "#02726E"]}>
                    <Text style={styles.text}>{t("yourName")}</Text>
                    <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
                </LinearGradient>

                <PersonalAdvisor/>
                <BeforeStart/>
                <PostsList/>

            </ScrollView>
            <NavigationTab/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F3F5",
        marginBottom: 80
    },
    linearGradient: {
        flex: 1,
        width: "100%",
        height: 400,
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
    },
    text: {
        color: "#fff",
        fontSize: 13,
        lineHeight: 16,
        fontWeight: "400"
    },
    name: {
        color: "#fff",
        fontSize: 28,
        lineHeight: 32,
        fontWeight: "700",
        marginTop: 10
    }
})