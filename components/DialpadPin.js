import { StyleSheet, View } from "react-native";
import React from "react";
import {useSelector} from "react-redux";

const DialpadPin = () => {
    const {
        dialPadContent,
        code,
        pinLength
    } = useSelector(state => state.pin)

    return (
        <View style={styles.dialPadPinContainer}>
            {Array(pinLength)
                .fill()
                .map((_, index) => {
                    const item = dialPadContent[index];
                    const isSelected =
                        typeof item === "number" && code[index] !== undefined;
                    return (
                        <View
                            key={index}
                            style={{
                                width: 24,
                                height: 24,
                                borderRadius: 50,
                                overflow: "hidden",
                                margin: 10,
                                backgroundColor: !isSelected ? "#C1C4CB" : "#00B28C",
                            }}
                        >
                        </View>
                    );
                })}
        </View>
    );
};

export default DialpadPin;

const styles = StyleSheet.create({
    dialPadPinContainer: {
        flexDirection: "row",
        marginTop: 30,
        alignItems: "flex-end",
    },
    pinContentContainer: {
        flex: 1,
        backgroundColor: "#C1C4CB",
        justifyContent: "center",
        alignItems: "center",
    },
    pinContent: {
        backgroundColor: "#00B28C",
    },
});