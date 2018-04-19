import React from 'react'
import {TextInput,View,Image,ImageBackground,Button,Alert} from 'react-native'

export  default class Login extends React.Component{
    static navigationOptions = {
        header:null,
    }

    constructor(props){
        super(props);
        this.state = {
          userName:null,
          userPwd:null,
        };
    }

    render(){
        return(
            <ImageBackground source = {{url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523623247776&di=982b2de17cabdb541d4e46d51f420724&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015355579842c20000018c1be3b26c.png%40900w_1l_2o_100sh.jpg'}}
                             style = {{
                                 flex:1,
                                 justifyContent:'center',
                             }}>
                <Image
                    source = {{url :'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523624404766&di=0560b5b18f97333a95e9575eb0287767&imgtype=0&src=http%3A%2F%2Fis5.mzstatic.com%2Fimage%2Fpf%2Fus%2Fr30%2FPurple7%2Fv4%2Fe1%2Fa5%2Fd8%2Fe1a5d85a-d0c7-16b6-dbfc-2f667f25ff82%2Fmzl.dhqlovjv.jpg'}}
                    style = {{height:100,width:100, alignSelf:'center',}}
                    backgroundColor = 'transparent'/>
                <TextInput
                    style = {{height:40,borderColor:'white',borderWidth:1,borderRadius:4,marginLeft:20,marginRight:20,marginTop:20}}
                    placeholder = '请输入账号'
                    placeholderTextColor = 'white'
                    onChangeText = {(text) =>{
                        this.state.userName = text;
                    }}/>
                <TextInput
                    style = {{height:40,borderColor:'white',borderWidth:1,borderRadius:4,marginLeft:20,marginRight:20,marginTop:20}}
                    placeholder = '请输入密码'
                    placeholderTextColor = 'white'
                    secureTextEntry = {true}
                    onChangeText = {(text) =>{
                        this.state.userPwd = text;
                    }}/>
                <Button
                    title = "登陆"
                    color = 'white'
                    onPress = {()=>{
                        if(this.state.userName =='lyn' && this.state.userPwd == '123456'){
                           this.props.navigation.navigate("Home");
                        }else{
                            Alert.alert('账号或者密码错误!');
                        }
                    }}
                    style = {{marginTop:40}}/>
            </ImageBackground>

        );
    }
}