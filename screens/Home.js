import {SafeAreaView, Text, StyleSheet} from "react-native";
import CustomButton from "../components/UI/CustomButton";
import {logout} from "../services/auth";
import {useDispatch} from "react-redux";

export default function Home() {
    const dispatch = useDispatch()

    return (
        <SafeAreaView>
            <Text>HOME</Text>
            <CustomButton onPress={() => logout(dispatch)} title="logout"/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})