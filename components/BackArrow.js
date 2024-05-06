import {TouchableOpacity} from "react-native";
import BackArrowSVG from "../assets/backArrow";
import {useNavigation} from "@react-navigation/native";

export default function BackArrow() {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 15, marginVertical: 20}}>
            <BackArrowSVG/>
        </TouchableOpacity>
    )
}