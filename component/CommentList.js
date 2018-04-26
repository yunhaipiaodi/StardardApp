import React from 'react';
import {FlatList,Text} from 'react-native';
import CommentListItem from "./CommentListItem";


export default class CommentList extends React.Component{
    _dataArray = new Array();
    constructor(props){
        super(props);
        this.state = {selected:(new Map():Map<String,Boolean>)};

        for(let i = 0;i<100;i++){
            let j = i<5?(i+ 5)%5:i%5;
            switch (j){
                case 0:
                    this._dataArray.push({
                        id:i+'',
                        userName:'陈赫',
                        imageUrl:{uri:'http://www.qqzhi.com/uploadpic/2015-01-08/110614999.jpg'},
                        comment:'哈哈哈,太好吃了!作为一个吃货,不要错过哦',
                        time:'两分钟前',
                    });
                    break;
                case 1:
                    this._dataArray.push({
                        id:i+'',
                        userName:'邓超',
                        imageUrl:{uri:'http://tx.haiqq.com/uploads/allimg/170504/0924351430-2.jpg'},
                        comment:'欢迎来吃货伐木累,太美味了',
                        time:'十二分钟前',
                    });
                    break;
                case 2:
                    this._dataArray.push({
                        id:i+'',
                        userName:'李晨',
                        imageUrl:{uri:'http://img4.imgtn.bdimg.com/it/u=924694594,2486826005&fm=214&gp=0.jpg'},
                        comment:'不说话，默默吃!',
                        time:'半小时前',
                    });
                    break;
                case 3:
                    this._dataArray.push({
                        id:i+'',
                        userName:'angelababy',
                        imageUrl:{uri:'http://img0.imgtn.bdimg.com/it/u=589174103,1386018679&fm=27&gp=0.jpg'},
                        comment:'爽到本仙女了,下次叫上晓明过来',
                        time:'一小时前',
                    });
                    break;
                case 4:
                    this._dataArray.push({
                        id:i+'',
                        userName:'郑凯',
                        imageUrl:{uri:'http://img4.imgtn.bdimg.com/it/u=3815928189,2906474872&fm=214&gp=0.jpg'},
                        comment:'我靠,这帮吃货也太快了吧,小猎豹完全跟不上',
                        time:'两小时前',
                    });
                    break;
            }

        }
    }

    _keyExtractor = (item,index) => item.id;

    _onPressItem = (id:String) =>{
       /*this.setState((state)=>{
           const selected = new Map(state.selected);
           selected.set(id,!selected.get(id));
           return {selected};
       });*/
       this.props.transToDetail(id);
    }

    _renderItem = ((item) => (
        <CommentListItem
            id = { item.item.id }
            onPressItem = { this._onPressItem }
            selected = { this.state.selected.get(item.item.id) }
            userName = { item.item.userName }
            imageUrl = {item.item.imageUrl}
            comment = {item.item.comment}
            time = {item.item.time}
            />
        )
    );



    render(){
        return(
                <FlatList
                    data = {this._dataArray}
                    extraData = { this.state }
                    keyExtractor = {this._keyExtractor}
                    renderItem = { this._renderItem }
                />
        );
    }


}