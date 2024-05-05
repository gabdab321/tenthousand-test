import {StyleSheet, View, Text, Pressable, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
export default function PostItem({post}) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Post", {id: post.id})}>
            <View style={styles.item}>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.body}>{post.body}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        width: "100%",
        borderRadius: 16,
        padding: 15,
        backgroundColor: "#fff",
        marginTop: 10
    },
    title: {
        color: "#171718",
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 22
    },
    body: {
        color: "#414141",
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 20,
        marginTop: 5
    }
})