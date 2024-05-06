import {View, Text, ScrollView, StyleSheet, Image, SafeAreaView} from "react-native";
import {useQuery} from "@tanstack/react-query";
import {getPostById} from "../services/posts";
import CommentItem from "../components/CommentItem";
import CustomButton from "../components/UI/CustomButton";
import {useTranslation} from "react-i18next";

export default function Post({route, navigation}) {
    const { t , i18n} = useTranslation()
    const isRTL = i18n.language === "ar"
    const {isLoading, isError, data} = useQuery({queryKey: ["postId", route.params.id], queryFn: () => getPostById(route.params.id)})

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <ScrollView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.postTitle}>{data?.post.title}</Text>
                    <Image style={styles.image} source={require("../assets/Post/mock_image.png")}/>
                </View>

                <Text style={{...styles.subtitle, marginTop: 20, textAlign: isRTL ? "right": "left" }}>{t("about")}</Text>
                <View style={styles.aboutSection}>
                    <Text style={styles.postBody}>{data?.post.body}</Text>
                </View>

                <Text style={{...styles.subtitle, marginTop: 40, textAlign: isRTL ? "right": "left" }}>{t("comments")}</Text>
                <View style={styles.commentsList}>
                    {data?.comments.map(comment => <CommentItem key={comment.id} comment={comment}/>)}
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <CustomButton variant="filled" title={t("back")} onPress={() => navigation.navigate("Home")} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F3F5",
    },
    postTitle: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "700",
        lineHeight: 32,
        color: "#000",
        marginTop: 20
    },
    titleContainer: {
        alignItems: "center",
        paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 40,
        backgroundColor: "#fff",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    image: {
        width: "100%",
        marginTop: 50
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 16,
        color: "#606773",
        marginHorizontal: 15
    },
    aboutSection: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 16,
        marginTop: 5,
        marginHorizontal: 15
    },
    postBody: {
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 32,
        color: "#06070A",
    },
    commentsList: {
      marginBottom: 10
    },
    buttonContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: "#fff"
    }
})