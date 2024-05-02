import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function Welcome({navigation}) {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Welcome
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
