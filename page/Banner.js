import React from 'react';
import {Dimensions,View,Image } from 'react-native';
import Carousel from 'react-native-banner-carousel';

export default class Banner extends React.Component{
    _bannerWidth = Dimensions.get('window').width;
    _bannerHeight = 120;

    _images = ["http://img.zcool.cn/community/01670658bd0fcda801219c772faecb.png",
    "http://img.zcool.cn/community/01d7c05943a0e4a8012193a3b886da.jpg",
    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1587354225,3035840677&fm=27&gp=0.jpg",
    "http://img.mp.sohu.com/q_mini,c_zoom,w_640/upload/20170601/8122cee98c8341bd8c42b9a971a0bf6f_th.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524119869546&di=b4acd6b649b8dbdf0c26800506ce8576&imgtype=0&src=http" +
    "%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0113e1598db37700000021291ad0b6.jpg"];

    _renderPage = (image:String,index:int)=>{
        return (<View key = {index}>
            <Image style = {{width:this._bannerWidth,height:this._bannerHeight}}
                    source = {{uri:image}}/>
        </View>);
    }

    render(){
        return(<Carousel
                autoplay
                autoplayTimeout = {5000}
                loop
                index = {0}
                pageSize = {this._bannerWidth}>
            {this._images.map((image,index)=>this._renderPage(image,index))}
        </Carousel>);
    }
}