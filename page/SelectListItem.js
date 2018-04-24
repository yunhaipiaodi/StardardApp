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
    }
});