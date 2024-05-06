import {SafeAreaView, Text, View, StyleSheet, ScrollView, TextInput} from "react-native";
import NavigationTab from "../components/NavigationTab";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import SearchSVG from "../assets/BottomTab/search";
import {useQuery} from "@tanstack/react-query";
import {getUserPosts} from "../services/posts";
import BackArrow from "../components/BackArrow";

export default function Search() {
    const {t, i18n} = useTranslation()
    const isRTL = i18n.language === "ar"

    const [query, setQuery] = useState("")

    const {isLoading, data} = useQuery({
        queryKey: ['postsSearch', query],
        queryFn: () => getUserPosts(query),
        keepPreviousData: true
    })

    function handleChange(text) {
        setQuery(text)
    }

    console.log(data)

    return (
        <SafeAreaView style={styles.container}>
            <BackArrow />
            <Text style={styles.title}>{t("search")}</Text>
            <View style={styles.inputContainer}>
                <SearchSVG style={styles.icon} color="#606773"/>
                <TextInput
                    value={query}
                    onChangeText={handleChange}
                    style={styles.input}
                    keyboardType="number-pad"
                    placeholder={t("searchProducts")}
                />
            </View>

            <ScrollView style={styles.productsList}>
                {data?.map(post =>
                    <View key={post.id} style={styles.card}>
                        <Text style={styles.cardName}>{t("postId")} {post.id}, {t("userId")} {post.userId}</Text>
                        <Text style={styles.cardBody}>{t("name")}: {post.title}</Text>
                    </View>
                )}
            </ScrollView>

            <NavigationTab/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        marginHorizontal: 15,
        marginTop: 10,
        paddingVertical: 25,
        paddingHorizontal: 10
    },
    cardName: {
        fontSize: 15,
        fontWeight: "500",
        lineHeight: 24,
        color: "#06070A"
    },
    cardBody: {
        fontSize: 13,
        fontWeight: "400",
        lineHeight: 16,
        color: "#858C94"
    },
    container: {
        flex: 1,
        backgroundColor: "#F2F3F5"
    },
    title: {
        color: "#000",
        fontSize: 22,
        fontWeight: "600",
        lineHeight: 32,
        marginHorizontal: 15
    },
    inputContainer: {
        position: "relative",
    },
    icon: {
        position: "absolute",
        top: "50%",
        left: 30,
        transform: [
            {translateY: -8}
        ]
    },
    input: {
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "#CED5E0",
        marginHorizontal: 15,
        paddingVertical: 20,
        paddingLeft: 45,
        fontSize: 15,
        fontWeight: "400",
        marginTop: 15
    },
    productsList: {
        marginBottom: 70
    }
})