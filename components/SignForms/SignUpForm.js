import {Controller, useForm} from "react-hook-form";
import CustomInput from "../UI/CustomInput";
import {KeyboardAvoidingView, Text, View} from "react-native";
import CustomButton from "../UI/CustomButton";
import EyeSVG from "../../assets/Sign/eye";
import {useState} from "react";
import ErrorSVG from "../../assets/Sign/error_indicator";
import styles from "./formsStyles";

export default function SignUpForm({navigation}) {
    const [isSecure, setIsSecure] = useState(true)
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })
    const onSubmit = (data) => console.log(data) // TODO: make something when both layouts are ready

    function toggleIsSecure() {
        setIsSecure(!isSecure)
    }

    return (
        <View style={styles.formContainer}>
            <View>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        maxLength: 40,
                        minLength: 2,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CustomInput
                            placeholder="Name"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            label={"Name"}
                            customStyles={errors.name ? {borderColor: "#D63C41"}: {}}
                        >
                            {errors.name && <ErrorSVG/>}
                        </CustomInput>
                    )}
                    name="name"
                />
                {errors.name && <Text style={styles.errorMessage}>Your name should contain from 2 to 40 symbols</Text>}

                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                        required: true,
                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CustomInput
                            placeholder="E-mail"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            label={"E-mail"}
                            customStyles={errors.email ? {borderColor: "#D63C41"}: {}}
                        >
                            {errors.email && <ErrorSVG/>}
                        </CustomInput>
                    )}
                    name="email"
                />
                {errors.email && <Text style={styles.errorMessage}>Please enter correct email</Text>}

                <Controller
                    control={control}
                    rules={{
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,64}$/i,
                        required: true,
                        maxLength: 64,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CustomInput
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Password"
                            label="Password"
                            secureTextEntry={isSecure}
                            customStyles={errors.password ? {borderColor: "#D63C41"}: {}}
                        >
                            <EyeSVG onPress={toggleIsSecure}/>
                        </CustomInput>
                    )}
                    name="password"
                />
                {errors.password && <Text style={styles.errorMessage}>Your password must be 8 to 64 characters long and include at least one special character, capital letter, small letter</Text>}
            </View>

            <KeyboardAvoidingView behavior="height">
                <CustomButton title="Continue" onPress={handleSubmit(onSubmit)} />
            </KeyboardAvoidingView>
        </View>
    )
}