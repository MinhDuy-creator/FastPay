import * as React from 'react';
import { StyleSheet ,View, Text,Alert, TouchableOpacity, TextInput, } from 'react-native';
import {Component} from 'react';
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';

class OTPconfirmScreen extends Component {

    constructor(props){
      super(props);
      this.state={
        otp:0,
      }
    }
    

    OtpConfirm = () => {
        return fetch(global.url+'payment/process-tx', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'token': global.token,
          },
          body: JSON.stringify({
            txid: global.txID,
            OTP: Number(this.state.OTP),
          })
        })
        .then((response) => {
          const statusCode = response.status;
          const res = response.json();
          return Promise.all([statusCode, res]);
        })
        .then(([responseJson,res] ) => {
            if(responseJson == 200){
                this.props.navigation.navigate('SuccessScreen');
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
      const { navigation } = this.props;
      return (
        <View style={styles.container}>
          <LinearGradient
                // Background Linear Gradient
                colors={['#2E3192', '#1BFFFF']}
                style={styles.background}
            />
            <View style={styles.header}>
                <Text style={styles.text_header}>OTP Confirmation</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.BorderInput}>
                        <TextInput
                            placeholder="Input OTP here to Confirm !!!"
                            keyboardType = 'numeric'
                            style={styles.TextInput}
                            autoCapitalize="none"
                            textAlign="center"
                            maxLength = {6}
                            onChangeText={(val) => this.setState({OTP:val})}
                        />
                </View>
                
                <TouchableOpacity onPress={ ()=>{}} >
                    <Text style={[styles.textSign,{color:'#F39C12',fontSize:14,marginTop:10}]}> If you don't get OTP, press below Here</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}
                  onPress={this.OtpConfirm} >
                    <LinearGradient style={styles.signIn}
                    colors={['#2E3192', '#1BFFFF']}>
                      <Text style={[styles.textSign,{color:'#fff'}]}>Submit</Text>
                    </LinearGradient>
                  </TouchableOpacity>
            </View>
        </View>
        
      );
    }
    }

    
  export default OTPconfirmScreen;

  const {height} = Dimensions.get("screen");
  const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
     flex:1,
     backgroundColor:'#009387'
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: height,
    },
    footer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,
    },
    header:{
        flex:1,
        // backgroundColor:'#fff',
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
    signIn: {
        marginTop:10,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:'#009387'
    },
  });

 