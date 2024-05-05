import {SafeAreaView, Text, StyleSheet, ScrollView, View} from "react-native";
import CustomButton from "../components/UI/CustomButton";
import {logout} from "../services/auth";
import {useDispatch, useSelector} from "react-redux";
import {LinearGradient} from "expo-linear-gradient";
import PersonalAdvisor from "../components/PersonalAdvisor";
import BeforeStart from "../components/BeforeStart";

export default function Home() {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)

    return (
        <ScrollView style={styles.container}>
            <LinearGradient style={styles.linearGradient} colors={["#38AB9C", "#02726E"]}>
                <Text style={styles.text}>Your name</Text>
                <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
            </LinearGradient>

            <PersonalAdvisor/>
            <BeforeStart/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F3F5"
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