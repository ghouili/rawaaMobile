import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, SplashScreen } from "../screens/authentication";
import ScabQRCode from "../screens/ScabQRCode";

const Stack = createStackNavigator();

export default AuthNavigation = () => {
  return (
    <Stack.Navigator
        initialRouteName="Splach"
        screenOptions={{
          headerShown: false,
        }}
    >
      <Stack.Screen name="Splach" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ScanQR" component={ScabQRCode} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
