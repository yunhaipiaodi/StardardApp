import React from 'react';
import {View, Image, StyleSheet, Dimensions, StatusBar, Text, Alert,} from 'react-native';
import TagView from "../component/TagView";
import CommentList from "../component/CommentList";

export default class Detail extends React.Component{

    static navigationOptions = {

    }

    _topBackImageWidth = Dimensions.get('window').width;

    render(){
        const {params} = this.props.navigation.state;
        const id = params?params.id:null;
        return(
            <View style = {styles.container}>
                <Image
                    style = {{width:this._topBackImageWidth,height:240,}}
                    source = {{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524575212834&di=65ab038eb22e97762d694c7c4d691d65&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fphotoblog%2F6%2F9%2F2%2F5%2F6925974%2F200812%2F10%2F1228890708900.jpg'}}
                />
                <View style={styles.infoContainer}>
                    <Text style = {styles.title}>广式生蚝</Text>
                    <Text style={styles.priceText}>13.9元</Text>
                </View>

                <View style = {styles.starContainer}>
                    <Image
                        source = {require('../icon/star_focus.png')}/>
                    <Image
                        source = {require('../icon/star_focus.png')}/>
                    <Image
                        source = {require('../icon/star_focus.png')}/>
                    <Image
                        source = {require('../icon/star_focus.png')}/>
                    <Image
                        source = {require('../icon/star_unfocus.png')}/>

                    <Text style = {styles.starScore}>4.6分</Text>

                    <Text style = {styles.scorePeople}>23人打分</Text>
                </View>

                <View style ={styles.tagContainer}>
                   <TagView
                       tagText = '优惠'/>
                    <TagView
                        tagText = '粤菜'
                    />
                </View>

                <View style={styles.cutLine}/>

                <Text style = {styles.commentTitle}>评论</Text>

                <CommentList/>
            </View>
            );
    };
}

const styles = StyleSheet.create({
        container:{
            flexDirection:'column',
        },

        title:{
            fontSize:24,
            fontWeight:'bold',
        },

        priceText:{
            fontSize:24,
            fontWeight:'bold',
            color:'#f4511e',
        },

        infoContainer:{
            flexDirection:'row',
            margin:16,
            justifyContent:'space-between',
        },

        starContainer:{
            flexDirection:'row',
            marginLeft:16,
        },

        starScore:{
            fontSize:16,
            marginLeft:8,
            color:'#f4511e',
        },

        scorePeople:{
            fontSize:16,
            marginLeft:8,
            color:'#9e9e9e',
        },

        tagContainer:{
            flexDirection:'row',
            marginLeft:16,
            marginTop:16,
        },

        cutLine:{
            alignSelf:'stretch',
            height:1,
            backgroundColor:'#9e9e9e',
            margin:16,
        },

        commentTitle:{
           fontSize:18,
           marginLeft:16,
        },

        comment:{
            marginLeft:16,
            marginRight:16,
        },
});