import React from 'react'
import {View,StyleSheet,StatusBar} from 'react-native';
import SelectList from "./SelectList";
import Banner from "./Banner";

export default class Home extends React.Component{
    static navigationOptions = {
        title:'首页',
        headerLeft:null,
    }

    _transToDetail = (id:String) =>{
        this.props.navigation.navigate("Detail");
    }

    render(){
        return(
            <View style = {styles.container}>
                <StatusBar hidden={false}/>
                <Banner/>
                <SelectList
                    transToDetail = {this._transToDetail}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
})