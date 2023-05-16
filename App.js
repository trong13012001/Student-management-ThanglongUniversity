import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';

import { StyleSheet, View } from 'react-native';
// import MainScreen from './screens/Main/MainScreen';
import SplashScreen from './Screens/Login/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/Login/LoginScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen'

// Creat stack for authentication ....
const Stack = createStackNavigator();

export default function App() {

  return (
      <View style={styles.container}>
        <NavigationContainer> 
          <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{ headerShown: false }}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
