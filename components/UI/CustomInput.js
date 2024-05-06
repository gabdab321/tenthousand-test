import {Text, TextInput, StyleSheet, View} from "react-native";
import React from "react";
import {useTranslation} from "react-i18next";

export default function CustomInput(props) {
    const {i18n} = useTranslation()
    const isRTL = i18n.language === "ar"
    const iconPosition = isRTL ? {left: 10} : {right: 10}

    const { customStyles, label, children, ...restProps } = props;

    // Check if children prop exists and clone it to apply styles.icon if present
    let styledChildren = null;
    if (children) {
        styledChildren = React.Children.map(children, child =>
            React.cloneElement(child, {
                style: {...styles.icon, ...iconPosition},
                ...child.props
            })
        );
    }

    if (label === '') {
        // If there's no label, render only the TextInput with custom styles
        return (
            <TextInput
                style={{ ...styles.input, ...customStyles}}
                {...restProps}
            />
        );
    } else {
        // If there's a label, render a View containing the label and input
        return (
            <View style={{ marginVertical: 10 }}>
                <Text style={{...styles.label, textAlign: isRTL ? "right" : "left"}}>{label}</Text>
                <View style={{ position: 'relative' }}>
                    <TextInput
                        style={{ ...styles.input, ...customStyles }}
                        {...restProps}
                        writingDirection={isRTL ? "rtl" : "ltr"}
                    />
                    {/* Render styled children if it exists */}
                    {styledChildren}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        position: "absolute",
        top: "50%",
        transform: [
            {translateY: -12} // according to figma design, all svg icons that can be put into input are always 24px, so -12px is -50%
        ]
    },
    label: {
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 24,
        color: "#606773",
        marginLeft: 12
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "#CED5E0",
        lineHeight: 16,
        paddingHorizontal: 20,
        paddingVertical: 14,
        color: "#06070A",
        fontSize: 15,
        marginTop: 5
    }
})