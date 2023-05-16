
import { React, useCallback, useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text, Platform, Dimensions } from 'react-native';
import GlobalStyle from '../../GlobalStyle';
import AccountScreenStack from '../Homescreen/Group/AccountScreenStack';
import * as SecureStore from "expo-secure-store";
import HomeScreen from '../HomeScreen/HomeScreen';
let windowWidth = Dimensions.get('window').width;
const Tab = createBottomTabNavigator();
const MainScreen = () => {
  // State with boolean value used to render view on condition
  const [hasBaseImg, setHasBaseImg] = useState('');

  // Get hasBaseImg value form SecureStore and set into state
  let check = async () => {
    const HasBaseImg = await SecureStore.getItemAsync("hasBaseImg");
    
    setHasBaseImg(HasBaseImg);
  }

  // Call check() fuction on the first rendering
  useEffect(() => {
    check();
    
  })

  return (
    <Tab.Navigator
      initialRouteName="Ảnh mẫu"
      id='tab'
      keyboardDismissMode='none'
      screenOptions={
        {
          tabBarHideOnKeyboard: Platform.OS==="android"?true:false,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: Platform.OS === 'ios' ? '10%' : '10%',
            position: 'absolute',
          }
        }
      }
    >
      <Tab.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: 'center', width: windowWidth > 800 ? 100 : undefined }}>
              <Icon name="image" color={focused ? GlobalStyle.themeColor.color : color} size={size} />
              <Text allowFontScaling={false} style={{ color: focused ? GlobalStyle.themeColor.color : color, paddingTop: 5,fontSize:12, }}>Ảnh mẫu</Text>
            </View>
          ),
        }}
      />
     
     
        {/* <Tab.Screen
          name="Chấm công"
          component={CheckinStack}
          options={{
            unmountOnBlur: true,
            tabBarStyle: {
              display: 'none',
            },
            tabBarIcon: ({ size }) => (
              <View style={{
                alignItems: 'center',
                backgroundColor: GlobalStyle.themeColor.color,
                justifyContent: 'center',
                borderRadius: windowWidth > 800 ? 300 : 240,
                width: windowWidth > 800 ? 150 : 90,
                height: windowWidth > 800 ? 150 : 90,
                position: 'absolute',
                transform: [{ translateY: -20 }],
                borderWidth: 4,
                borderColor: '#EEEEEE', 
                
              }}>
                  <Icon name="camera" color={'white'} size={size} />
                  <Text allowFontScaling={false}  style={{  paddingTop: 3, color: 'white', fontSize: 12 }}>Chấm công</Text>
              </View>
            ),
          }}
        /> */}
      
      {/* <Tab.Screen
        name="Tài khoản"
        component={AccountScreenStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: 'center', width: windowWidth > 800 ? 100 : undefined }}>
              <Icon name="user" color={focused ? GlobalStyle.themeColor.color : color} size={size} />
              <Text allowFontScaling={false}  style={{ color: focused ? GlobalStyle.themeColor.color : color, paddingTop: 5,fontSize:12 }}>Tài khoản</Text>
            </View>
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: () => {
            navigation.navigate('Tài khoản', { screen: 'Thông tin' });
          },
        })}
      /> */}
    </Tab.Navigator>
  )
}

export default MainScreen