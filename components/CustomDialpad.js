import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Dimensions, TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import DialpadKeypad from "../components/DialpadKeypad";
import BackspaceSVG from "../assets/PinCode/backspace";
import {useNavigation} from "@react-navigation/native";
import DialpadPin from "./DialpadPin";

const { width, height } = Dimensions.get("window");
const dialPadContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, <BackspaceSVG/>];

const dialPadSize = width * 0.3;
const dialPadTextSize = dialPadSize * 0.27;

const pinLength = 5;
const pinContainerSize = width / 2;
const pinSize = pinContainerSize / pinLength;

export default function CustomDialpad() {
    const navigation = useNavigation();
    const [code, setCode] = useState([]);

    return (
        <View style={styles.container}>
            <DialpadPin
                pinLength={pinLength}
                pinSize={pinSize}
                code={code}
                dialPadContent={dialPadContent}
            />
            <View style={styles.textContainer}>
                {/*<TouchableOpacity*/}
                {/*    onPress={() => navigation.goBack()}*/}
                {/*    style={{ position: "absolute", top: -5, left: 10 }}*/}
                {/*>*/}
                {/*</TouchableOpacity>*/}
                <DialpadKeypad
                    dialPadContent={dialPadContent}
                    pinLength={pinLength}
                    dialPadSize={dialPadSize}
                    dialPadTextSize={dialPadTextSize}
                    setCode={setCode}
                    code={code}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        alignItems: "center",
        marginTop: 40,
        position: "relative",
    }
})