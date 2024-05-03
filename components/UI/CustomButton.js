import {Text, Pressable, StyleSheet} from "react-native";

export default function CustomButton(props) {
    const {variant, title, marginTop, customStyles} = props

    if(variant === "blank") {
        return (
            <Pressable {...props} style={{...styles.button, ...customStyles, backgroundColor: "transparent"}}>
                <Text style={{...styles.text, color: "#00A36D"}}>{title}</Text>
            </Pressable>
        )
    } else {
        return (
            <Pressable {...props} style={{...styles.button, ...customStyles,backgroundColor: "#00B28C"}}>
                <Text style={{...styles.text, color: "#fff"}}>{title}</Text>
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 16,
        elevation: 0,
    },
    text: {
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 24,
    }
})