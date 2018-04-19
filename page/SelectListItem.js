import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet,Image} from 'react-native';

export default class SelectListItem extends React.Component{

    constructor(props){
        super(props);
        //this.state = {selected:false};
    }

    _onPress = ()=>{
        this.props.onPressItem(this.props.id);
        //this.state.selected = !this.state.selected;
        /*this.setState((state) =>{
           return {selected:!state.selected};
        });*/
    };

    render(){
        const backColor = this.props.selected? "gray" :"white";
        return(
            <TouchableOpacity onPress = {this._onPress}>
                <View style = {{
                    height:70,
                    flexDirection:'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    backgroundColor:backColor}}>
                    <Image style={style.circleImage}
                            source = {this.props.imageUrl}/>
                    <View style = {style.textContainer}>
                        <Text style={style.title}>{this.props.title}</Text>
                        <Text style = {style.content}>{this.props.content}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'stretch',
        justifyContent: 'center',
    },

    textContainer:{
        flexDirection:'column',
        alignSelf:'stretch',
        justifyContent:'space-between',
        marginLeft:16,
    },

    title:{
        fontSize:16,
        fontWeight:'bold',
        marginTop:14,
    },

    content:{
        fontSize:14,
        marginBottom:14,
    },

    circleImage:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:16,
    }
});