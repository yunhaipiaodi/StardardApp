import React from 'react';
import {View,Image,Text,StyleSheet,} from 'react-native';

export default class MoreCity extends React.Component{
    render(){
        return(<View style = {styles.container}>
            <Image
                source = {require('../icon/more_unfold.png')}
            />
            <Text style = {styles.text}>广州</Text>
        </View>);
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginLeft:8,
    },


    text:{
        color:'white',
        marginTop:4,
    },
});