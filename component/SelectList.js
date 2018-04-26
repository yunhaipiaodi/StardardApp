import React from 'react';
import {FlatList,Text} from 'react-native';
import SelectListItem from "./SelectListItem";


export default class SelectList extends React.Component{
    _dataArray = new Array();
    constructor(props){
        super(props);
        this.state = {selected:(new Map():Map<String,Boolean>)};

        for(let i = 0;i<100;i++){
            let j = i<5?(i+ 5)%5:i%5;
            switch (j){
                case 0:
                    this._dataArray.push({id:i+'',title:'广式生蚝',
                        imageUrl:{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524575212834&di=65ab038eb22e97762d694c7c4d691d65&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fphotoblog%2F6%2F9%2F2%2F5%2F6925974%2F200812%2F10%2F1228890708900.jpg'},
                        content:'广式生蚝!要的就是鲜,现在订购,还有饮料送哦',
                         price:'￥68',
                         sellCount:'已售80份',});
                    break;
                case 1:
                    this._dataArray.push({id:i+'',title:'攸县香干',
                        imageUrl:{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524631131774&di=c9f1f487cea261d74b5c18b21522a2f6&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F3812b31bb051f819d13e9cc9d0b44aed2e73e71e.jpg'},
                        content:'攸县香干!最好吃的香干,快来尝尝吧',
                        price:'￥23',
                        sellCount:'已售43份',
                    });
                    break;
                case 2:
                    this._dataArray.push({id:i+'',title:'海鲜大盘菜',
                        imageUrl:{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524631287231&di=a4d6dd6c658cc2c1737cd5ac3abdde8f&imgtype=0&src=http%3A%2F%2Fimg.go007.com%2F2017%2F01%2F10%2Ff9bb317474259ba9_3.jpg'},
                        content:'惠州严府厨房招牌大盘菜客家大盘菜海鲜大盘菜!',
                        price:'￥998',
                        sellCount:'已售13份',
                    });
                    break;
                case 3:
                    this._dataArray.push({id:i+'',title:'平锅羊肉',
                        imageUrl:{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524631400855&di=329fa147b9f15df6bb58c155aea6afae&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8326cffc1e178a8227ec103efc03738da877e858.jpg'},
                        content:'西北传统羊肉美食,超值!',
                        price:'￥888',
                        sellCount:'已售21份',
                    });
                    break;
                case 4:
                    this._dataArray.push({id:i+'',title:'广西客家酿豆腐',
                        imageUrl:{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524631572431&di=ff87a4d2debb6ec4536ccced68e0e40f&imgtype=0&src=http%3A%2F%2Fimage3.cnpp.cn%2Fupload%2Fimages%2F20141010%2F15174440220_800x513.jpg'},
                        content:'老家的味道,快来尝尝吧',
                        price:'￥48',
                        sellCount:'已售133份',
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
        <SelectListItem
            id = { item.item.id }
            onPressItem = { this._onPressItem }
            selected = { this.state.selected.get(item.item.id) }
            title = { item.item.title }
            imageUrl = {item.item.imageUrl}
            content = {item.item.content}
            price = {item.item.price}
            sellCount = {item.item.sellCount}
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