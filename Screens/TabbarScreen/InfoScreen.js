
import * as React from 'react';
import {Component} from 'react';
import { StyleSheet,View, Text,Platform, TextInput, TouchableOpacity,Dimensions,Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

class InfoScreen extends Component {
    constructor(props){
      super(props);
      this.state={
        token:global.token,
        DataFromServer:[],
        checkLogin:0,
        PreBudget:0,
        validate_field:false,
        secureTextEntry:true,
        
      }
    }

    
     componentDidMount () {
        this.getData();
        let intervalId = setInterval(
            this.getData, 3000)
        this.setState({ intervalId: intervalId })
     }

     componentWillUnmount(){
        clearInterval(this.state.intervalId)
      }

     getData = () => {
        fetch(global.url+'get-user', {
            method: 'GET',
            headers: {
             'Content-Type': 'application/json',
             'token': global.token,
           },
         })
         .then((response) =>  {
             const statusCode = response.status;
             const res = response.json();
             return Promise.all([statusCode, res]);
           })
         .then(([responseJson,res]) => {
             if(responseJson == 200){
                console.log(res.data)
                this.setState({DataFromServer:res.data})
            }
               else{
                 Alert.alert(res.data);
               }
         })
         .catch((error) =>{
            console.error(error);
        });
      }

    render(){
        const { UpdateInfo } = this.state;
        return (
            <View style={styles.container}>
                <LinearGradient
                // Background Linear Gradient
                colors={['#2E3192', '#1BFFFF']}
                style={styles.background}
                />
                 <View style={styles.header}>
                    <View style={styles.HeaderBar}>
                            <TouchableOpacity
                               style={{alignItems:'center'}}
                               onPress={this.LogOut}
                            >
                                <Feather
                                    name="log-out"
                                    color="#000"
                                    size={30}
                                />
                            </TouchableOpacity>            
                        <Text style={styles.title}>Hi {this.state.DataFromServer.fullname}</Text>
                            <TouchableOpacity
                               style={{alignItems:'center'}}
                               onPress={() => navigation.navigate('HistoryTransScreen')}
                            >
                                <FontAwesome
                                  name="history"
                                  color="black"
                                  size={30}
                                  />
                            </TouchableOpacity>            
                    </View>
                    <View style={styles.Box}>
                        <View style={styles.bottomBox}>
                            <View style={{flexDirection:'row' , justifyContent:'space-evenly',alignItems:'center'}}>
                                <View style={{alignItems:'center'}}>
                                    <Text style={styles.text_bottomBox}>Full Name : {this.state.DataFromServer.fullname} </Text>
                                </View>                                                                                                 
                            </View>
                            <View style={{flexDirection:'row' , justifyContent:'space-evenly',alignItems:'center'}}>
                                <View style={{alignItems:'center'}}>
                                    <Text style={styles.text_bottomBox}>Email : {this.state.DataFromServer.email} </Text>
                                </View>                                                                                               
                            </View>
                            <View style={{flexDirection:'row' , justifyContent:'space-evenly',alignItems:'center'}}>
                                <View style={{alignItems:'center'}}>
                                    <Text style={styles.text_bottomBox}>Phone Number : {this.state.DataFromServer.phone} </Text>
                                </View>                                                                                                   
                            </View>
                            <View style={{flexDirection:'row' , justifyContent:'space-evenly',alignItems:'center'}}>
                                <View style={{alignItems:'center'}}>
                                    <Text style={styles.text_bottomBox}>Current Money : {this.state.DataFromServer.budget} đ </Text>
                                </View>                                                                                                 
                            </View>
                        </View>
                    </View>
                </View>
                    <View style={styles.footer}>
                        <View style={styles.button}>
                            <LinearGradient style={styles.signIn}
                            colors={['#2E3192', '#1BFFFF']}>
                                <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}
                                        onPress={this._login} >
                                    <Text style={[styles.textSign,{color:'#fff'}]}>Update</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            <LinearGradient style={styles.signIn}
                                colors={['#2E3192', '#1BFFFF']}>
                                <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}
                                        onPress={this._login} >
                                    <Text style={[styles.textSign,{color:'#fff'}]}>LogOut</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
            </View>
        );
    }
    
}

    const {height} = Dimensions.get("screen");
  const height_headerbar = height * 0.1;
  const {width} = Dimensions.get("screen");
  const height_logo = height * 0.15;

  export default InfoScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
     
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: height,
      },
      header: {
        flex: 1,
        justifyContent: 'flex-start',
        // alignItems:'center',
        // paddingHorizontal: 20,
        // paddingBottom: 50
    },
    HeaderBar:{
        backgroundColor:'#fff',
        flexDirection:'row',
        width:width,
        height:height_headerbar,
        alignItems:'flex-end',
        paddingBottom:10,
        justifyContent:'space-around'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25
    },
    text_info: {
        color: '#000',
        fontSize: 14,
  
    },
    text_bottomBox: {
        // marginTop:5,
        color: '#fff',
        fontSize: 14,
        fontWeight:'bold',
        

    },
    Box:{
        margin:30,
        padding:10,
        borderRadius: 10,
        borderWidth:5,
        borderColor:'#1BFFFF',
    },
    topBox:{
        justifyContent:'space-evenly',
        alignItems:'center',
        marginBottom:10
    },
    bottomBox:{
        // margin:40,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        marginTop:10,
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold',
    },
  });