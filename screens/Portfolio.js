import {Text, View} from "react-native";
import NavigationTab from "../components/NavigationTab";

export default function Portfolio() {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Portfolio</Text>
            <NavigationTab/>
        </View>
    )
}