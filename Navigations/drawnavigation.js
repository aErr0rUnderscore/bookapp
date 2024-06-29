import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./stacknavigation";
import Profile from "../screens/profile"
const Draw = createDrawerNavigator()

export default function DrawerNavigation() {
  return (
      <Draw.Navigator>
        <Draw.Screen 
        name = "Home"
        component={TabNavigation}
        options = {{headerShown:false}}
        />
        <Draw.Screen
        name = "profile"
        component={Profile}
        options = {{headerShown:false}}
        />
      </Draw.Navigator>
  );
}

