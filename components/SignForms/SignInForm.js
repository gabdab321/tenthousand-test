import {Controller, useForm} from "react-hook-form";
import CustomInput from "../UI/CustomInput";
import {KeyboardAvoidingView, Text, View} from "react-native";
import CustomButton from "../UI/CustomButton";
import EyeSVG from "../../assets/Sign/eye";
import {useState} from "react";
import ErrorSVG from "../../assets/Sign/error_indicator";
import styles from "./formsStyles";
import {useNavigation} from "@react-navigation/native";
import {authenticate} from "../../services/auth";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

export default function SignInForm() {
    const {t} = useTranslation();
    const [isSecure, setIsSecure] = useState(true);
    const [authError, setAuthError] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const navigation = useNavigation();
    const dispatch = useDispatch();

    async function onSubmit(data) {
        const authResult = await authenticate(dispatch, data.email, data.password);

        if (authResult) {
            setAuthError(false);
            navigation.navigate("PinCode", {type: "Enter"});
        } else {
            setAuthError(true);
        }
    }

    function toggleIsSecure() {
        setIsSecure(!isSecure);
    }

    return (
        <View style={{...styles.formContainer, justifyContent: "flex-start"}}>
            <View>
                {authError && (
                    <Text style={styles.errorMessage}>
                        {t("formInvalidError")}
                    </Text>
                )}
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100,
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <CustomInput
                            placeholder={t("email")}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            label={t("email")}
                            customStyles={authError ? {borderColor: "#D63C41"} : {}}
                        >
                            {errors.email && <ErrorSVG />}
                        </CustomInput>
                    )}
                    name="email"
                />

                <Controller
                    control={control}
                    rules={{
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
                            customStyles={authError ? {borderColor: "#D63C41"} : {}}
                        >
                            <EyeSVG onPress={toggleIsSecure} />
                        </CustomInput>
                    )}
                    name="password"
                />
            </View>

            <KeyboardAvoidingView style={{marginTop: 30}} behavior="height">
                <CustomButton
                    title={t("continue")}
                    onPress={handleSubmit(onSubmit)}
                />
                <CustomButton
                    onPress={() => navigation.navigate("SignUp")}
                    customStyles={{marginTop: 10}}
                    title={t("createAccount")}
                    variant="blank"
                />
            </KeyboardAvoidingView>
        </View>
    );
}