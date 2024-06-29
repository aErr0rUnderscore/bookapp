import React from "react"
import {View, Text} from "react-native"
export default class StoryCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.cardcontainer}>
                    <Image style = {styles.storyimage} source = {require("../assets/story_image_1.png")}></Image>
                <View style = {styles.titlecontainer}>
                    <Text style = {style.storytitletext}>{this.props.story.title}</Text>
                    <Text style = {style.storyauthortext}>{this.props.story.author}</Text>
                    <Text style = {style.storydesctext}>{this.props.story.desc}</Text>
                </View>
                <View style = {styles.actioncontainer}>
                    <View style = {styles.likebutton}>
                        <Text style = {styles.liketext}>12k</Text>
                    </View>
                </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }, 
    cardcontainer:{
        margin:15, 
        backgroundColor:"#ff2288", 
        borderRadius:20, 
    },
    storyimage:{
        resizeMode:"contain",
        width:"95%",
        alignSelf:"center",
        height:250,
    },
    titlecontainer:{
        paddingLeft:20,
        justifyContent:"center",
    },
    storytitletext:{
        fontSize:18,
        color:"white",
    },
    storyauthortext:{
        fontSize:15,
        color:"white",
    },
    storydesctext:{
        fontSize:12,
        color:"white",
        paddingTop:10,
    },
    actioncontainer:{
        justifyContent:"center",
        alignItems:"center",
        padding:10,
    },
    likebutton:{
        width:160,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#110000",
        borderRadius:30,
    },
    liketext:{
        color:"white",
        fontSize:25,
        marginLeft:5,
    },
})