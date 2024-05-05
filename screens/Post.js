import {View, Text, ScrollView, StyleSheet} from "react-native";
import {useQuery} from "@tanstack/react-query";
import {getPostById} from "../services/posts";

export default function Post({route}) {
    const {isLoading, isError, data} = useQuery({queryKey: ["postId", route.params.id], queryFn: () => getPostById(route.params.id)})

    return (
        <ScrollView style={styles.container}>
            <Text>{isLoading ? "Loading..." : ""}</Text>
            <View>
                <Text style={styles.postTitle}>{data.title}</Text>
                <Image source={require("../assets/Post/mock_image.png")}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    postTitle: {

    }
})