import React, { useState, useRef } from "react";
import {
  StyleSheet, TextInput, View, Text, ScrollView, Dimensions, Platform,
  Image, Keyboard, TouchableOpacity, KeyboardAvoidingView, Alert,StatusBar
} from "react-native"; 
import { SvgUri } from 'react-native-svg';
import Loader from "../../components/Loader";
const windowHeight=Dimensions.get('window').height;
const windowWidth=Dimensions.get('window').width;
const statusBarStyle = Platform.OS === 'ios' ? 'dark-content':'light-content';

const LoginScreen=({navigation})=>{
  
    const [userName,setUserName]=useState("");
    const [userPassword,setUserPassword]=useState("");
    const [loading, setLoading]=useState(false);
    const [hide,setHide]=useState("");
    const passwordInputRef=useRef();
    const userNameInputRef=useRef();
    let handleSubmitPress = async()=>{
        if(!userName){
            Alert.alert(
                "",
                "Vui long nhap ten.",
                [{text:"OK"}]
            );
            return;
        }
        if(!userPassword){
            Alert.alert(
                "",
                "Vui long nhap mat khau.",
                [{text:"OK"}]
            );
            return;
        }
        setLoading(true)
    };
    let moveToPasswordInput=()=>{
        passwordInputRef.current.focus();
    };
    return(
        <>
              <StatusBar barStyle={statusBarStyle}/>

        {/* background */}
        <View>
          <View style={{ height: windowHeight, width: windowWidth, position: 'absolute' }}>
            <Image source={require('../../assets/bg1.webp')} style={{ width: windowWidth, height: windowHeight }} />
          </View>
        </View>
  
        {/* loginform */}
        <View style={styles.mainBody}>
          <Loader loading={loading} />
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'flex-end',
              alignContent: "center",
            }}
          >
            <KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : undefined} >
              <View style={{
                backgroundColor: 'white',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                bottom: 0,
                zIndex: 2,
                elevation: 2,
              }}>
  
                <View style={{ alignItems: 'center', paddingTop:10 }}>
                <Image
                source={require("../../assets/logo_tlu1.png")}
                style={{
                    height:100,
                    resizeMode:'contain',
                    alignSelf:'center',
                }}
                ></Image>
                </View>
                <View style={styles.SectionStyle}>
                  <TextInput
                  allowFontScaling={false}
                    style={styles.inputStyle}
                    ref={userNameInputRef}
                    onChangeText={(UserName) => setUserName(UserName)}
                    placeholder="Nhập tài khoản"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    keyboardType="default"
                    returnKeyType="next"
                    onSubmitEditing={moveToPasswordInput}
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                  />
                </View>
                <View style={styles.SectionStyle}>
                  <TextInput
                    allowFontScaling={false}
                    style={styles.inputStyle}
                    onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                    placeholder="Nhập mật khẩu"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    keyboardType="default"
                    ref={passwordInputRef}
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                    secureTextEntry={hide ? true : false}
                    underlineColorAndroid="#f000"
                    returnKeyType="next" />
                  <TouchableOpacity
                    onPress={() => setHide(!hide)}
                    style={{ alignSelf: 'flex-end', position: 'absolute', padding: 20 }}>

                  </TouchableOpacity>
                </View>
  
  
                <TouchableOpacity
                
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={handleSubmitPress}
                >
                  <Text allowFontScaling={false} style={styles.buttonTextStyle}>Đăng nhập</Text>
                </TouchableOpacity>
  
                {/*Dang ky*/}
                {
                  Platform.OS === 'ios' ? (
                    <TouchableOpacity
                      style={{
                        height: 60,
                        marginBottom: 10,
                        marginLeft:45,
                        justifyContent: 'center',
                      }}
                      activeOpacity={0.5}
                    >
                      <Text allowFontScaling={false}><Text style={{
                        paddingVertical: 12,
                        fontSize: 14,
                      }}>Quên mật khẩu?</Text></Text>
  
                    </TouchableOpacity>
                  ) : (
                    <View style={{ alignSelf: 'center', marginTop: 32, bottom: 20 }} />
                  )}
                {/*Dang ky*/}
                 {/* <View style={{ alignSelf: 'center', paddingTop: 10, bottom: 20 }}>
                  <Text>Bản quyền thuộc về Viettel Software Service</Text>
                </View>  */}
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
  
        </View>
      </>

    )
    
}
export default LoginScreen;
const styles = StyleSheet.create({
    mainBody: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
    },
  
    SectionStyle: {
      // flexDirection: "row",
      height: 60,
      marginTop: 20,
      marginLeft: 40,
      marginRight: 40,
      margin: 10,
      justifyContent: 'center'
    },
    buttonStyle: {
      backgroundColor:"#ee242d",
      borderWidth: 0,
      color: "#FFFFFF",
      borderColor: "#7DE24E",
      height: 60,
      alignItems: "center",
      borderRadius: 12,
      marginLeft: 40,
      marginRight: 40,
      marginTop: 30,
      justifyContent: 'center',
    },
    buttonTextStyle: {
      color: "#FFFFFF",
      paddingVertical: 12,
      fontSize: 20,
      fontWeight:'500'
    },
    inputStyle: {
      flex: 1,
      color: "black",
      paddingLeft: 15,
      paddingRight: 50,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: "#dadae8",
      fontSize:16,
    },
  });