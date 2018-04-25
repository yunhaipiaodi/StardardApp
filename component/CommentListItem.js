import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet,Image,Dimensions} from 'react-native';

export default class CommentListItem extends React.Component{

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
                <View style = {styles.container}>
                    <View style = {styles.imageContainer}>
                        <Image style={styles. circleImage}
                               source = {this.props.imageUrl}/>
                    </View>

                    <View style = {styles.textContainer}>
                        <View style = {styles.userInfoTopContainer}>
                            <Text style={styles.userName}>{this.props.userName}</Text>
                            <Text style={styles.time}>{this.props.time}</Text>
                        </View>

                        <View style={{flexDirection:'row',flex:1}}>
                            <Text style = {styles.comment}>{this.props.comment}</Text>
                        </View>
                        <View style ={styles.bottomLine}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width,
        height:70,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop:8,
        marginLeft:16,
        marginRight:16,
    },

    imageContainer:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignSelf:'stretch',
    },

    textContainer:{
        flexDirection:'column',
        alignSelf:'stretch',
        justifyContent:'flex-start',
        flex:1,
        marginLeft:8,
    },

    userInfoTopContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'stretch',
    },

    userName:{
        fontSize:16,
        fontWeight:'bold',
    },

    time:{
        fontSize:12,
        color:'#9e9e9e',
    },

    comment:{
        flex:1,
        flexWrap:'wrap',
        fontSize:12,
        marginTop:8,
        marginRight:8,
    },


    circleImage:{
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#795548',
    },

    bottomLine:{
        height:1,
        alignSelf:'stretch',
        backgroundColor:'#9e9e9e',
        marginRight:8,
    },
});