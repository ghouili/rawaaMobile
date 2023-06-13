import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DisplayQR from "../screens/displayQR/DisplayQR";
import HomeScreen from "../screens/home/HomeScreen";

const Stack = createStackNavigator();

export default AchatNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="List" component={HomeScreen} />
      <Stack.Screen name="QRcode" component={DisplayQR} />
    </Stack.Navigator>
  );
};
