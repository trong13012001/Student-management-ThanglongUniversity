import{React,useEffect,useState} from "react"
import { View, Image, StyleSheet, ActivityIndicator, Alert,StatusBar } from "react-native";
const SplashScreen=({navigation}) => {
    const [loading, setLoading] = useState(true);
    const statusBarStyle = Platform.OS === 'ios' ? 'dark-content':'light-content';

    useEffect(() => {
        // load();
        const timeoutID = setTimeout(() => {
            navigation.replace("LoginScreen");
          }, 10000);
          return () => {
            clearTimeout(timeoutID);
          

    }}, []);
    return(
        <View style={styles.Container}>
            <StatusBar barStyle={statusBarStyle}/>
            <Image
                source={require("../../assets/logo_tlu1.png")}
                style={{
                    height:100,
                    resizeMode:'contain',
                    alignSelf:'center',
                }}
            ></Image>
            <ActivityIndicator
                animating={loading}
                color="gray"
                size="large"
                style={styles.activityIndicator}
            />
        </View>
    );
}
export default SplashScreen;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
        alignItems: "center",
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
});