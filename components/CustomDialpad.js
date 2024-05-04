import {
    StyleSheet,
    View,
    Dimensions,
} from "react-native";
import React, {useState} from "react";
import DialpadKeypad from "../components/DialpadKeypad";
import DialpadPin from "./DialpadPin";

const { width} = Dimensions.get("window")

const dialPadSize = width * 0.3
const dialPadTextSize = dialPadSize * 0.27

export default function CustomDialpad() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <DialpadKeypad
                    dialPadSize={dialPadSize}
                    dialPadTextSize={dialPadTextSize}
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