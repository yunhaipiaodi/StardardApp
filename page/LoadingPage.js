import React from 'react'
import {StyleSheet, View, StatusBar, Image, Dimensions, Alert} from 'react-native'

export default class LoadingPage extends React.Component{
    static navigationOptions = {
        header:null,            //没有顶部栏
    }

     timeoutHandler;           //延时句柄

    componentDidMount(){
        this.timeoutHandler = setTimeout(() => {
            this.props.navigation.navigate("Home");
        },2000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutHandler);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Image
                    source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525164110&di=b1405b2fe1f83c4356267e8124594743&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f600570b0b7e32f8751b3f338b9e.jpg'}}
                    style={styles.homeImage}
                    resizeMode = 'cover'
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    homeImage:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height,
}
});

