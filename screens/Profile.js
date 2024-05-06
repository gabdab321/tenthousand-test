import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import NavigationTab from "../components/NavigationTab";
import {useDispatch, useSelector} from "react-redux";
import LanguageSVG from "../assets/Settings/language";
import ArrowSVG from "../assets/Settings/arrow";
import LogoutSVG from "../assets/Settings/logout";
import {logout} from "../services/auth";

export default function Profile({navigation}) {
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Settings</Text>

            <View style={styles.profile}>
                <View style={styles.avatar}/>
                <Text style={styles.username}>{user.firstName} {user.lastName}</Text>
            </View>

            <Text style={styles.subtitle}>Basic</Text>
            <TouchableOpacity onPress={() => navigation.navigate("ChangeLanguage")}>
                <View style={styles.settingsBox}>
                    <LanguageSVG/>
                    <Text style={styles.settingName}>Language</Text>
                    <ArrowSVG style={{marginLeft: "auto"}}/>
                </View>
            </TouchableOpacity>

            <Text style={styles.subtitle}>Other</Text>
            <TouchableOpacity onPress={() => logout(dispatch)}>
                <View style={styles.settingsBox}>
                    <LogoutSVG/>
                    <Text style={styles.settingName}>Log Out</Text>
                    <ArrowSVG style={{marginLeft: "auto"}}/>
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
        marginTop: 30
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
        marginLeft: 10
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