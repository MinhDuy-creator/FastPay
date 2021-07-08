import * as React from 'react';
import {Component} from 'react';
import { StyleSheet,View,Alert, Text,Platform, TextInput, TouchableOpacity,Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';

class SignInScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      phonenum:"",
      password:"",
      checkLogin:0,
      validate_field:false,
      secureTextEntry:true,
    }
  }
  
  checkvalidate_field=()=>{
    const { phonenum} = this.state.phonenum;
    const { password} = this.state.password;
    if(phonenum == "" || password == ""){
      this.setState({
        validate_field:false
      })
    } else{
      this.setState({
        validate_field:true
      })
    }
  }

  updateSecureTextEntry  = () =>{
      this.setState({
        secureTextEntry : !this.state.secureTextEntry
      })
  }

  _login = () =>{
    return fetch(global.url+'login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        phone: this.state.phonenum,
        password: this.state.password,
      })
    })
    .then((response) => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then(([responseJson,data] ) => {
        this.setState({checkLogin:responseJson});
        // this.setState({validate_field:this.checkvalidate_field})
        // if(this.state.validate_field == false){
        //   Alert.alert("Please do not leave it blank!!!");
        // } else{
          if(this.state.checkLogin == 200){
            // console.log("promise",data.data);
              global.token = data.data;
              console.log(global.token);
  
              Alert.alert("Logged in successfully!");
              this.props.navigation.navigate("HomeScreen");
          }
          else{
             console.warn(data);
              Alert.alert("Logged in Fail");
          }
        // }
    })
    .catch((error) =>{
        console.error(error);
    });
  }
  render(){
    const { navigation } = this.props;
    console.log(token);
    return (
      <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#E26E43', '#F8CE0E']}
        style={styles.background}
        />
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
          <Text>{this.state.validate_field}</Text>
        </View>
        <Animatable.View style={styles.footer}
          duration={1500}
          animation="fadeInUpBig"
        >
          <Text style={styles.text_footer}>PhoneNum</Text>
          <View style={styles.action}>
            <FontAwesome
              name="phone"
              color="#05375a"
              size={20}
              style={{marginRight:5}}
            />
             <TextInput
              keyboardType = 'numeric'
              placeholder="Your Phone Number"
              style={styles.TextInput}
              autoCapitalize="none"
              onChangeText={
                (phonenum) => this.setState({phonenum:phonenum})
              }
             />
          </View>
          <Text style={styles.text_footer}>Password</Text>
          <View style={styles.action}>
            <FontAwesome
              name="lock"
              color="#05375a"
              size={20}
              style={{marginRight:5}}
            />
             <TextInput
              placeholder="Password"
              style={styles.TextInput}
              autoCapitalize="none"
              secureTextEntry={this.state.secureTextEntry ? true : false}
              onChangeText={
                (password) => this.setState({password:password})
              }
             />
             <TouchableOpacity
             onPress={this.updateSecureTextEntry}>
              <Feather
                name="eye-off"
                color="green"
                size={20}
                style={{marginLeft:250}}
              />
             </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <LinearGradient style={styles.signIn}
            colors={['#E26E43', '#F8CE0E']}>
              <TouchableOpacity onPress={this._login} >
                <Text style={[styles.textSign,{color:'#fff'}]}>Sign In</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient 
            colors={['#E26E43', '#F8CE0E']}
            style={{marginTop:10,padding:5,borderRadius: 20,width: '50%',
            }}
            >
            <View style={styles.signUp}>
              <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={[styles.textSign,{color:'#E26E43'}]}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            </LinearGradient>
          </View>
        </Animatable.View>
      </View>
      
    );
  }
  }
  

  export default SignInScreen;

  const {height} = Dimensions.get("screen");
  const height_logo = height * 0.28;

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
        alignItems:'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        marginTop:35,
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },

    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        marginTop:10,
        padding:10,
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor:'#009387'
    },
    signUp: {
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      backgroundColor:'#fff'
  },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });