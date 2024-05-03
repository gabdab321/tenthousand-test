import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native';
import {useForm, Controller} from "react-hook-form";
import CustomButton from "../components/UI/CustomButton";
import {LinearGradient} from "expo-linear-gradient";
import UserSVG from "../assets/Sign/createUser";
import CustomInput from "../components/UI/CustomInput";
import ArrowSVG from "../assets/Sign/arrow";
import SignUpForm from "../components/SignUpForm";

// TODO: make nicer keyboard avoiding behavior
export default function SignUp({navigation}) {



    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#F2F3F5', '#252525']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}>
                <ImageBackground style={styles.bgImg} source={require("../assets/Sign/bg.png")} resizeMode="cover">
                    <ArrowSVG onPress={() => navigation.goBack()} style={{marginTop: 50, marginLeft: 10}}/>
                    <View style={{...styles.contentContainer, height: windowHeight-100}}>
                        <View style={styles.titleContainer}>
                            <UserSVG />
                            <View style={{marginLeft: 10}}>
                                <Text style={styles.title}>Sign Up</Text>
                                <Text style={{...styles.title, color: "#606773"}}>Personal account</Text>
                            </View>
                        </View>
                        <View style={{borderBottomColor: '#bcbcbe', borderBottomWidth: StyleSheet.hairlineWidth}}/>
                        <SignUpForm/>
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
    title: {
        fontSize: 15,
        fontWeight: "500",
        lineHeight: 24,
    },
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    contentContainer: {
        width: "100%",
        // height: "87%",
        marginTop: 100,
        padding: 20,
        backgroundColor: "#fff",
        position: "absolute",
        borderTopRightRadius: 27,
        borderTopLeftRadius: 27,
        elevation: 12,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },

});