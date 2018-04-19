import React from 'react';
import { StyleSheet,} from 'react-native';
import {StackNavigator,SwitchNavigator} from 'react-navigation';
import  LoadingPage from './page/LoadingPage.js';
import Login from './page/Login.js';
import Home from './page/Home.js'
import Detail from "./page/Detail";

export default StackNavigator({

    Loading:{
        screen:LoadingPage,
    },

    Login:{
        screen:Login,
    },

    Home:{
        screen:Home,
    },

    Detail:{
        screen:Detail,
    }


},{
    initialRouteName:'Loading',
    navigationOptions :{
        headerStyle:{
            backgroundColor:'#f4511e',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold',
        },
    },
    model:'card',
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    homeImage:{
        flex:1
    }
});
