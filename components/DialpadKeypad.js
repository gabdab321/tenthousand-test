import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import ArrowSVG from "../assets/arrow";
import backspace from "../assets/PinCode/backspace";

export default function DialpadKeypad({dialPadContent, pinLength, dialPadSize, dialPadTextSize, code, setCode}) {
    const navigation = useNavigation()

    return (
        <FlatList
            scrollEnabled={false}
            data={dialPadContent}
            numColumns={3} // set number of columns
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        disabled={item === ""} // make the empty space on the dialpad content unclickable
                        onPress={() => {
                            console.log(typeof item)
                            if (typeof item === "object") { // if item is a backspace
                                console.log(backspace)
                                setCode((prev) => prev.slice(0, -1));
                            } else {
                                if (code.length === pinLength - 1) {
                                    navigation.navigate("Welcome");
                                }
                                setCode((prev) => [...prev, item]);
                            }
                        }}
                    >
                        <View
                            style={[
                                {
                                    backgroundColor: item === "" ? "transparent" : "#fff",
                                    width: dialPadSize,
                                    height: dialPadSize/1.5,
                                },
                                styles.dialPadContainer,
                            ]}
                        >
                            {typeof item === "object" || true
                                ?
                                <Text
                                    style={[{ fontSize: dialPadTextSize }, styles.dialPadText]}
                                >
                                    {item}
                                </Text>
                                :
                                ""
                            }
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    dialPadContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        borderColor: "transparent",
        backgroundColor: 'transparent',
    },
    dialPadText: {
        color: "#3F1D38",
    },
});