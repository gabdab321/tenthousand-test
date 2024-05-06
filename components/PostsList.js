import {useQuery} from "@tanstack/react-query";
import {getPosts} from "../services/posts";
import {View, Text, StyleSheet} from "react-native";
import PostItem from "./PostItem";
import {useTranslation} from "react-i18next";

export default function PostsList() {
    const { t , i18n} = useTranslation()
    const isRTL = i18n.language === "ar"
    const perPage = 3
    const { isLoading, isError, data} = useQuery({
        queryKey: ['posts', perPage],
        queryFn: () => getPosts(perPage),
        keepPreviousData: true
    })

    return (
        <View style={styles.container}>
            <Text style={{...styles.title, textAlign: isRTL ? "right": "left"}}>{t("posts")}</Text>
            <Text>{isLoading ? "Loading..." : ""}</Text>
            {data?.map(post => <PostItem key={post.id} post={post}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 16,
        color: "#606773",
    },
})