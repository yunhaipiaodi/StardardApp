import React from 'react'
import {View,StyleSheet,StatusBar,Image,Text} from 'react-native';
import SelectList from "../component/SelectList";
import Banner from "../component/Banner";
import MoreCity from "./MoreCity";

export default class Home extends React.Component{
    static navigationOptions = {
        title:'订餐喽',
        headerLeft:(<MoreCity/>),
        headerRight:(<Image
            source = {require('../icon/search.png')}
            style = {{marginRight:8}}
        />),
    }

    _transToDetail = (id:String) =>{
        this.props.navigation.navigate("Detail",{id:id});
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

    headerLeft:{
        flexDirection:'row',
    },
})