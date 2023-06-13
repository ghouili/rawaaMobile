import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import ComingSoon from "../screens/home/ComingSoon";
import AchatNavigation from "./AchatNavigation";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={ComingSoon}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="creditcard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tempon"
        component={ComingSoon}
        options={{
          tabBarLabel: "Tempon",
          tabBarIcon: ({ color, size }) => (
            <Feather name="percent" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Offre"
        component={ComingSoon}
        options={{
          tabBarLabel: "Offre",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="present" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Gold"
        component={AchatNavigation}
        options={{
          tabBarLabel: "Gold",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="crown-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ComingSoon}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
