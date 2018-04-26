import React from 'react';
import {View,StyleSheet,Text,}from 'react-native';

export default class TagView extends React.Component{
    render(){
        const tagText = this.props.tagText;
        return(<View style={styles.container}>
            <Text style={styles.tagText}>
                {tagText}
            </Text>
        </View>);
    }
}

const styles = StyleSheet.create({
        container:{
            height:24,
            borderRadius:12,
            borderWidth:1,
            borderColor:'#f4511e',
            justifyContent:'center',
            alignItems:'center',
            marginLeft:8,
        },

        tagText:{
            fontSize:16,
            color:'#9e9e9e',
            marginLeft:8,
            marginRight:8,
        },

});

