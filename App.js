import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./Navigations/drawnavigation";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation></DrawerNavigation>
    </NavigationContainer>
  );
}

