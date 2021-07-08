
import * as React from 'react';
import {Component} from 'react';
import { StyleSheet,View, Text,Platform, TextInput, TouchableOpacity,StatusBar,Alert } from 'react-native';

class InfoScreen extends Component {
    constructor(props){
      super(props);
      this.state={
        token:global.token,
        fullname:"",
        current_money:"",
        email:"",
        UpdateInfo:[],
        phonenum:"",
        validate_field:false,
        secureTextEntry:true,
      }
    }

     componentDidMount () {
        setInterval(this.getData,1000)
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
                this.setState(
                    {UpdateInfo:res.data}
                    );
               }
               else{
                 Alert.alert("Loading  Fail");
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
                
                 <View style={styles.header}>
                    <View style={styles.Box}>
                        <View style={styles.topBox}>
                            <Text style={styles.text_header}>Account's Profile</Text>
                        </View >
                        <View style={styles.bottomBox}>
                            <View style={{flexDirection:'row' , justifyContent:'space-evenly',alignItems:'center'}}>
                                <View style={{alignItems:'center'}}>
                                    <Text style={styles.text_bottomBox}>Full Name : </Text>
                                </View>
                                <View style={{alignItems:'center',marginTop:2}}>
                                    <Text style={styles.text_info}>{UpdateInfo.fullname}</Text>
                                </View>                                                                                                    
                            </View>
                            <View style={{flexDirection:'row' , justifyContent:'space-evenly',alignItems:'center'}}>
                                <View style={{alignItems:'center'}}>
                                    <Text style={styles.text_bottomBox}>Email : </Text>
                                </View>
                                <View style={{alignItems:'center',marginTop:2}}>
                                    <Text style={styles.text_info}>{UpdateInfo.email}</Text>
                                </View>                                                                                                    
                            </View>
                            <View style={{flexDirection:'row' , justifyContent:'space-evenly',alignItems:'center'}}>
                                <View style={{alignItems:'center'}}>
                                    <Text style={styles.text_bottomBox}>Phone Number : </Text>
                                </View>
                                <View style={{alignItems:'center',marginTop:2}}>
                                    <Text style={styles.text_info}>{UpdateInfo.phonenum}</Text>
                                </View>                                                                                                    
                            </View>
                            <View style={{flexDirection:'row' , justifyContent:'space-evenly',alignItems:'center'}}>
                                <View style={{alignItems:'center'}}>
                                    <Text style={styles.text_bottomBox}>Current Money : </Text>
                                </View>
                                <View style={{alignItems:'center',marginTop:2}}>
                                    <Text style={styles.text_info}>{UpdateInfo.current_money} đ </Text>
                                </View>                                                                                                    
                            </View>
                        </View>
                    </View>
                </View>
                    <View style={styles.footer}>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={styles.signIn}>
                                <Text style={[styles.textSign,{color:'#fff'}]}>Edit Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={styles.signIn}>
                                <Text style={[styles.textSign,{color:'#fff'}]}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        );
    }
    
}

  export default InfoScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        paddingHorizontal: 20,
        // paddingBottom: 50
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
        color: '#000',
        fontSize: 18,
        fontWeight:'bold'

    },
    Box:{
        padding:10,
        borderRadius: 10,
        borderWidth:5,
    },
    topBox:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
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
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:'#009387'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
  });