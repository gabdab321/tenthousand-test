import {Text, View} from "react-native";
import NavigationTab from "../components/NavigationTab";

export default function Search() {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Search</Text>
            <NavigationTab/>

        </View>
    )
}