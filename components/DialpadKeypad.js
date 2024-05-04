import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from "react-native";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPin, deletePin} from "../store/slices/pinSlice";
import BackspaceSVG from "../assets/PinCode/backspace";


export default function DialpadKeypad({dialPadSize, dialPadTextSize}) {
    const dispatch = useDispatch()

    const {
        code,
        dialPadContent,
        pinLength
    } = useSelector(state => state.pin)

    function handlePress(item) {
        if (item === "backspace") {
            dispatch( deletePin() )
        } else {
            if (code.length === pinLength) {
                return
            }
            dispatch(addPin(item))
        }
    }

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
                        onPress={() => handlePress(item)}
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
                            {item === "backspace"
                                ?
                                    <BackspaceSVG/>
                                :
                                <Text
                                    style={[{ fontSize: dialPadTextSize }, styles.dialPadText]}
                                >
                                    {item}
                                </Text>
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
        color: "#606773",
    },
});