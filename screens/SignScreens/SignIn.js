import {View, ImageBackground} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import ArrowSVG from "../../assets/Sign/arrow";
import styles from "./signStyles";
import SignContainer from "../../components/SignContainer";

export default function SignIn({navigation}) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#F2F3F5', '#252525']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
                <ImageBackground style={styles.bgImg} source={require("../../assets/Sign/bg.png")} resizeMode="cover">
                    <ArrowSVG onPress={() => navigation.goBack()} style={{marginTop: 50, marginLeft: 10}}/>
                    <SignContainer variant="Sign In"/>
                </ImageBackground>
            </LinearGradient>
        </View>
    );
}

