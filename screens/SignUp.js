import {StyleSheet, Text, TextInput, View, ImageBackground} from 'react-native';
import {useForm, Controller} from "react-hook-form";
import CustomButton from "../components/UI/CustomButton";
import {LinearGradient} from "expo-linear-gradient";

export default function SignUp({navigation}) {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
        },
    })
    const onSubmit = (data) => console.log(data)

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#F2F3F5', '#252525']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}>
                <ImageBackground style={styles.bgImg} source={require("../assets/Sign/bg.png")} resizeMode="cover">
                    <View style={styles.contentContainer}>
                        <View style={styles.formContainer}>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                    maxLength: 64,
                                    minLength: 8,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="First name"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        style={styles.input}
                                    />
                                )}
                                name="firstName"
                            />
                            {errors.firstName && <Text>This is required.</Text>}

                            <Controller
                                control={control}
                                rules={{
                                    maxLength: 100,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder="Last name"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{...styles.input, marginTop: 10}}
                                    />
                                )}
                                name="lastName"
                            />

                            <CustomButton marginTop={20} title="Continue" onPress={handleSubmit(onSubmit)} />
                        </View>
                    </View>
                </ImageBackground>
            </LinearGradient>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: "100%",
        justifyContent: 'flex-end',
    },
    bgImg: {
        width: "100%",
        height: "100%",

    },
    text: {
        color: "red",
        fontWeight: "bold",
        fontSize: 60
    },
    link: {
        color: "blue",
        fontSize: 20,
        marginTop: 10
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
        fontSize: 15
    },
    contentContainer: {
        width: "100%",
        height: "100%",
        marginTop: 120,
        padding: 20,
        backgroundColor: "#fff",
        position: "absolute",
        borderRadius: 27,
        elevation: 12
    },
    formContainer: {
    }
});
