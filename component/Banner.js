import React from 'react';
import {Dimensions,View,Image } from 'react-native';
import Carousel from 'react-native-banner-carousel';

export default class Banner extends React.Component{
    _bannerWidth = Dimensions.get('window').width;
    _bannerHeight = 120;

    _images = ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524574187788&di=f9a87b8ccd19902e252bc80af34f5558&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01465058ddbe55a801219c77a9c5b6.png%401280w_1l_2o_100sh.png",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524574187788&di=be57fb3f134cf12be7d897babae7eb4f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01081a58bebd33a801219c77eae437.jpg%40900w_1l_2o_100sh.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524574187784&di=48bea4b35c6e3f3a1484dbe2cd0eb29f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b32657df980a0000018c1b2063dd.jpg%40900w_1l_2o_100sh.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524574187784&di=57e7e72be793cb3f48029800fa07ea98&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F019a9558ddd2c8a801219c77588f96.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524574307059&di=784c16bfd7657b50218799cd835de02e&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F18%2F27%2F62%2F24Q58PICUKI_1024.jpg" ];

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