import * as React from 'react';
import { StyleSheet ,View, Text,Alert, TouchableOpacity,navigation, TextInput } from 'react-native';
import {Component} from 'react';
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
// MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
function OTPconfirmScreen ({route,navigation}) {
 
        const  IdTrans  = route.params;
        const [data, setData] = React.useState({
            OTP:0,
            ID:"",
        });
    

    function OtpConfirm  () {
        return fetch(global.url+'payment/process-tx', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'token': global.token,
          },
          body: JSON.stringify({
            txid: global.txID,
            OTP: Number(data.OTP),
          })
        })
        .then((response) => {
          const statusCode = response.status;
          const res = response.json();
          return Promise.all([statusCode, res]);
        })
        .then(([responseJson,res] ) => {
            console.log(responseJson)
            console.log(res)
            if(responseJson == 200){
                navigation.navigate('SuccessScreen')
            }
            else{
                Alert.alert("Thông báo!","Bạn đã đăng ký không thành công!");
            }
        })
        .catch((error) =>{
          console.error(error.error);
        });
      }

  
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>OTP Confirmation</Text>
                <Text></Text>
                <View style={styles.BorderInput}>
                        <TextInput
                            placeholder="Input OTP here to Confirm !!!"
                            keyboardType = 'numeric'
                            style={styles.TextInput}
                            autoCapitalize="none"
                            maxFontSizeMultiplier ={5}
                            textAlign="center"
                            maxLength = {6}
                            onChangeText={(val) => setData({
                                ...data,
                                OTP:val
                            })}
                        />
                </View>
                <Text style={{marginTop:10,fontSize:20}}> 
                    If you don't get OTP, press below
                </Text>
                <Text>{global.txID}</Text>
                <TouchableOpacity onPress={ ()=>{}} >
                    <Text style={[styles.textSign,{color:'#F39C12',fontSize:18}]}>Here</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={OtpConfirm} style={styles.signUp}>
                    <Text style={[styles.textSign,{color:'#fff'}]}>CONFIRM</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
    
            </View>
        </View>
      );
    }
    
  


const styles = StyleSheet.create({
    container: {
     flex:1,
     backgroundColor:'#009387'
    },
    footer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    header:{
        flex:2,
        backgroundColor:'#fff',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,
        // justifyContent:'center',
        alignItems:'center',
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold',
    },
    text_header: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 30
    },
    Text:{
        color:'grey',
        marginTop:5,
    },
    button:{
        alignItems:'flex-end',
        marginTop:30,
    },
    textInput: {
        width:280,
        height:40,
        color: '#05375a',
        fontSize: 100,
        
    },
    BorderInput:{
        marginTop:10,
        width:300,
        height:60,
        borderWidth : 2,
        borderRadius: 5 ,
        borderColor: '#000',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#979A9A'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    signUp: {
        marginTop:10,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:'#009387'
    },
  });

  export default OTPconfirmScreen;