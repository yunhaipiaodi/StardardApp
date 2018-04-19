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
                    this._dataArray.push({id:i+'',title:'南屿',
                        imageUrl:{url:'http://pic.qqtn.com/up/2017-12/2017121117070577682.jpg'},content:'哇，好喜欢!'});
                    break;
                case 1:
                    this._dataArray.push({id:i+'',title:'若雨',
                        imageUrl:{url:'http://pic.qqtn.com/up/2017-11/2017112916595784853.jpg'},content:'嘻嘻嘻!'});
                    break;
                case 2:
                    this._dataArray.push({id:i+'',title:'静香',
                        imageUrl:{url:'http://pic.qqtn.com/up/2017-11/2017112812040936427.jpg'},content:'这个我喜欢!'});
                    break;
                case 3:
                    this._dataArray.push({id:i+'',title:'孤独的薰衣草',
                        imageUrl:{url:'http://pic.qqtn.com/up/2017-11/15108026434205778.jpg'},content:'哇!好酷啊'});
                    break;
                case 4:
                    this._dataArray.push({id:i+'',title:' 叶自飘林',
                        imageUrl:{url:'http://pic.qqtn.com/up/2017-11/15108026422338651.jpg'},content:'这个可以有'});
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