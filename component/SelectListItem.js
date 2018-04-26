import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet,Image,Dimensions} from 'react-native';

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
                <View style = {style.container}>
                    <Image style={style. coverImage}
                            source = {this.props.imageUrl}/>
                    <View style = {style.textContainer}>
                        <Text style={style.title}>{this.props.title}</Text>
                        <View style={{flexDirection:'row',flex:1}}>
                            <Text style = {style.content}>{this.props.content}</Text>
                        </View>
                        <View style = {style.bottom}>
                            <Text style = {style.price}>{this.props.price}</Text>
                            <Text style = {style.sellCount}>{this.props.sellCount}</Text>
                        </View>
                        <View style ={style.bottomLine}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const style = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width,
        height:70,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop:8,
    },

    textContainer:{
        flexDirection:'column',
        alignSelf:'stretch',
        justifyContent:'flex-start',
        flex:1,
    },

    title:{
        fontSize:16,
        fontWeight:'bold',
    },

    content:{
        flex:1,
        flexWrap:'wrap',
        fontSize:12,
        marginTop:8,
        marginRight:8,
    },


    coverImage:{
        width:108,
        height:72,
        margin:8,
    },

    bottom:{
        flexDirection:'row',
        justifyContent:'space-between',
    },

    price:{
        color:'#f4511e',
        fontSize:10,
    },

    sellCount:{
        color:'#9e9e9e',
        fontSize:10,
        marginRight:8,
    },

    bottomLine:{
        height:1,
        alignSelf:'stretch',
        backgroundColor:'#9e9e9e',
        marginRight:8,
    },
});