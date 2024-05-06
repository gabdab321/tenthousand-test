import {Controller, useForm} from "react-hook-form";
import CustomInput from "../UI/CustomInput";
import {KeyboardAvoidingView, Text, View} from "react-native";
import CustomButton from "../UI/CustomButton";
import EyeSVG from "../../assets/Sign/eye";
import {useState} from "react";
import ErrorSVG from "../../assets/Sign/error_indicator";
import styles from "./formsStyles";
import {useTranslation} from "react-i18next";

export default function SignUpForm() {
    const [isSecure, setIsSecure] = useState(true)
    const {t} = useTranslation()
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
    const onSubmit = (data) => console.log(data)

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
                            placeholder={t("name")}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            label={t("name")}
                            customStyles={errors.name ? {borderColor: "#D63C41"}: {}}
                        >
                            {errors.name && <ErrorSVG/>}
                        </CustomInput>
                    )}
                    name="name"
                />
                {errors.name && <Text style={styles.errorMessage}>{t("formNameError")}</Text>}

                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                        required: true,
                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CustomInput
                            placeholder={t("email")}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            label={t("email")}
                            customStyles={errors.email ? {borderColor: "#D63C41"}: {}}
                        >
                            {errors.email && <ErrorSVG/>}
                        </CustomInput>
                    )}
                    name="email"
                />
                {errors.email && <Text style={styles.errorMessage}>{t("formEmailError")}</Text>}

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
                            placeholder={t("password")}
                            label={t("password")}
                            secureTextEntry={isSecure}
                            customStyles={errors.password ? {borderColor: "#D63C41"}: {}}
                        >
                            <EyeSVG onPress={toggleIsSecure}/>
                        </CustomInput>
                    )}
                    name="password"
                />
                {errors.password && <Text style={styles.errorMessage}>{t("formPasswordError")}</Text>}
            </View>

            <KeyboardAvoidingView behavior="height">
                <CustomButton title={t("continue")} onPress={handleSubmit(onSubmit)} />
            </KeyboardAvoidingView>
        </View>
    )
}