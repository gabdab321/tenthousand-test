import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView} from "react-native";
import HomeSVG from "../assets/BottomTab/home";
import PortfolioSVG from "../assets/BottomTab/portfolio";
import SearchSVG from "../assets/BottomTab/search";
import ProfileSVG from "../assets/BottomTab/profile";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {setRoute} from "../store/slices/navigationSlice";
import {useTranslation} from "react-i18next";

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        paddingHorizontal: 30,
        paddingTop: 15,
        paddingBottom: 30,
        backgroundColor: "#fff"
    }
})

function TabItem({ title, Icon, isFocused, onPress }) {
    const color = isFocused ? "#009E81" : "#606773";

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Icon color={color} />
                <Text style={{ fontSize: 10, color }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

// Sorry for bad code practice, I should use bottom-tabs lib. But I am facing a large bug and have little time to fix it
export default function NavigationTab() {
    const { t } = useTranslation()

    const navigation = useNavigation();
    const dispatch = useDispatch()

    const {route} = useSelector(state => state.navigation)

    const handlePress = (tabName) => {
        dispatch(setRoute(tabName))
        navigation.navigate(tabName)
    };
    return (
        <View style={styles.tabBar}>
            <TabItem
                title={t("home")} // Translation key for "Home"
                Icon={HomeSVG}
                isFocused={route === 'Home'}
                onPress={() => handlePress('Home')}
            />
            <TabItem
                title={t("portfolio")} // Translation key for "Portfolio"
                Icon={PortfolioSVG}
                isFocused={route === 'Portfolio'}
                onPress={() => handlePress('Portfolio')}
            />
            <TabItem
                title={t("search")} // Translation key for "Search"
                Icon={SearchSVG}
                isFocused={route === 'Search'}
                onPress={() => handlePress('Search')}
            />
            <TabItem
                title={t("profile")} // Translation key for "Profile"
                Icon={ProfileSVG}
                isFocused={route === 'Profile'}
                onPress={() => handlePress('Profile')}
            />
        </View>
    )
}