import {View, StyleSheet, Text} from "react-native";

export default function CommentItem({comment}) {
    console.log(comment.name)

    return(
        <View style={styles.container}>
            <Text style={styles.name}>{comment.name}</Text>
            <Text style={styles.email}>{comment.email}</Text>
            <Text style={styles.body}>{comment.body}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginHorizontal: 15,
        marginVertical: 5,
        padding: 15,
        borderRadius: 16
    },
    name: {
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 24,
        color: "#000"
    },
    email: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
        color: "#3E3E3E",
    },
    body: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 19,
        color: "#06070A",
        marginTop: 5
    }
})