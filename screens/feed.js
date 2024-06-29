import React from "react"
import {View, Text} from "react-native"
import { FlatList } from "react-native-gesture-handler"
import StoryCard from "./storycard"
let stories = require("./temp_stories.json")
export default class Feed extends React.Component{
    constructor(props){
        super(props)
    }
    keyExtractor =(item, index)=>index.toString()
    renderItem =({item:story})=>{
        return<StoryCard story = {story}/>
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.apptitle}>
                    <View style = {styles.appicon}>
                        <Image source = {require("../assets/logo.png")} style = {styles.logo}/>
                    </View>
                    <View style = {styles.titletext}>
                        <Text style = {styles.apptitletext

                        }>Story Telling App</Text>
                    </View>
                </View>
                <View style = {styles.cardcontainer}>
                    <FlatList
                    keyExtractor={this.keyExtractor}
                    data={stories}
                    renderItem={this.renderItem}
                    />
                </View>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#002233"
    },
    apptitle:{
        flex:0.1,
        flexDirection:"row"
    },
    appicon:{
        flex:0.3,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    titletext:{
        flex:0.7,
        justifyContent:"center"
    },
    apptitletext:{
        color:"white",
        fontSize:30
    },
    cardcontainer:{
        flex:0.85
    }
})