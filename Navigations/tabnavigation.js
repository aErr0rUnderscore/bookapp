import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/feed";
import Mstory from "../screens/mstory";
import Profile from "../screens/profile"
const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
      <Tab.Navigator>
        <Tab.Screen 
        name = "Feed"
        component={Feed}
        options = {{headerShown:false}}
        />
        <Tab.Screen
        name = "Story"
        component={Mstory}
        options = {{headerShown:false}}
        />
      </Tab.Navigator>
  );
}

