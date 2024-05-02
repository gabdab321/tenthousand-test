import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

export default function SignUp({navigation}) {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Sign Up
            </Text>
            <Text onPress={() => navigation.navigate("Login")} style={styles.link}>
                Already have an account?
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "red",
        fontWeight: "bold",
        fontSize: 60
    },
    link: {
        color: "blue",
        fontSize: 20,
        marginTop: 10
    }
});
