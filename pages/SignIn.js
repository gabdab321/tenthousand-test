import {StyleSheet, Text, SafeAreaView} from 'react-native';

export default function SignIn({navigation}) {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <Text style={styles.link} onPress={() => navigation.navigate("SignUp")}>
                Don't have an account?
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
