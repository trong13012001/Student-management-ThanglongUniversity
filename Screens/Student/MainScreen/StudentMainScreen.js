import React, { useState, useRef } from "react";
import {
    StyleSheet, TextInput, View, Text, ScrollView, Dimensions, Platform,
    Image, Keyboard, TouchableOpacity, KeyboardAvoidingView, Alert,StatusBar
  } from "react-native"; 
import Icon from 'react-native-vector-icons/FontAwesome5';
import GlobalStyle from '../../../GlobalStyle';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentHomeScreen from "../HomeScreen/StudentHomeScreen";
import AccountScreen from "../AccountScreen.js/AccountScreen";
import TimeTable from "../../TimeTable/TimeTable"
let windowWidth = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();

const StudentMainScreen=()=>{
    return(
      <Tab.Navigator
      initialRouteName="Trang chủ"
      id='tab'
      keyboardDismissMode='none'
      screenOptions={
        {
          tabBarHideOnKeyboard: Platform.OS==="android"?true:false,
          headerShown: false,
          tabBarShowLabel: false,

          tabBarStyle: {
            height: Platform.OS === 'ios' ? '10%' : '10%',
            width:"90%",
            marginLeft:"5%",
            position: 'absolute',
            borderRadius:15
          }
        }
      }
    >
         <Tab.Screen
        name="Trang chủ"
        component={StudentHomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: 'center', width: windowWidth > 800 ? 100 : undefined }}>
              <Icon name="home" color={focused ? GlobalStyle.themeColor.color : GlobalStyle.textColor.color} size={size} />
              <Text allowFontScaling={false} style={{ color: focused ? GlobalStyle.themeColor.color : GlobalStyle.textColor.color,fontSize:12, }}>Trang chủ</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Thời khóa biểu"
        component={TimeTable}
        options={{
          tabBarIcon:({focused,color,size})=>(
            <View style={{alignItems:'center', width: windowWidth > 800 ? 100 : undefined}}>
               <Icon name="calendar" color={focused ? GlobalStyle.themeColor.color : GlobalStyle.textColor.color} size={size} />
              <Text allowFontScaling={false} style={{ color: focused ? GlobalStyle.themeColor.color : GlobalStyle.textColor.color,fontSize:12, }}>Thời khóa biểu</Text>
            </View>
          )
        }}
      
      />
       

      
   
        <Tab.Screen
        name="Tài khoản"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: 'center', width: windowWidth > 800 ? 100 : undefined }}>
              <Icon name="user" color={focused ? GlobalStyle.themeColor.color : GlobalStyle.textColor.color} size={size} />
              <Text allowFontScaling={false} style={{ color: focused ? GlobalStyle.themeColor.color : GlobalStyle.textColor.color,fontSize:12, }}>Tài khoản</Text>
            </View>
          ),
        }}
      />
</Tab.Navigator>

)
}
const styles = StyleSheet.create({
    container: {
      
      textAlign:"center",
    },
  });
export default StudentMainScreen;
