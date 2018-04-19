import React from 'react';
import {Image,StyleSheet,Dimensions}from 'react-native';

export default class Detail extends React.Component{

    _topBackImageWidth = Dimensions.get('window').width;

    render(){
        return(<Image
            style = {{width:this._topBackImageWidth,height:200,}}
            source = {{url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524141741036&di=11281eac6eb52d3f88337343758f95a5&imgtype=0&src=http%3A%2F%2Fpic10.nipic.com%2F20101019%2F5785618_163939002836_2.jpg'}}
        />);
    };
}

const styles = StyleSheet.create({

});