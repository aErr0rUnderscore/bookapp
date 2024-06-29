import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import TabNavigation from "./tabnavigation"
import Mstory from "../screens/mstory"

const Stack = createStackNavigator()
const StackNavigator =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name = "tab"  component = {TabNavigation}></Stack.Screen>
            <Stack.Screen name = "story"  component = {Mstory}></Stack.Screen>
        </Stack.Navigator>
    )
}
export default StackNavigator