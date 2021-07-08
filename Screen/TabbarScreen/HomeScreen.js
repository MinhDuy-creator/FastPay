

import * as React from 'react';
import {Component} from 'react';
import { StyleSheet,View, Text,Platform, TextInput, TouchableOpacity,StatusBar,Alert,Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

class HomeScreen extends Component {
    constructor(props){
      super(props);
      this.state={
        token:global.token,
        fullname:"",
        current_money:"",
        Prev_fullname:"",
        Prev_current_money:"",
        checkLogin:0,
        validate_field:false,
        secureTextEntry:true,
      }
    }

     componentDidMount () {
       this.getData()
     }

    //  componentDidUpdate() {
    //     this.setState(
    //         {Prev_fullname:this.state.fullname}
    //     );
    //     this.setState(
    //         {Prev_current_money:this.state.current_money}
    //     );
    //     this.getData;
    //     if (this.state.fullname != this.state.Prev_fullname) {
    //       this.fetchData(this.props.userID);
    //     }
    //   }

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
                this.setState(
                    {fullname:res.data.fullname}
                );
                this.setState(
                    {current_money:res.data.budget}
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
        const { navigation } = this.props;
        // this.getData();
        return (
            <Animatable.View style={styles.container}
            sleep={3000}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#E26E43', '#F8CE0E']}
                style={styles.background}
            />
                 <View style={styles.header}>
                  <Animatable.View 
                    animation="bounceIn"
                    sleep={3000}
                    style={{alignItems:'center'}}>
                  <Text style={styles.title}>Hi!</Text>
                      <Text style={styles.text_header}>{this.state.fullname} </Text>
                  </Animatable.View>
                 </View>
                 <Animatable.View
                 animation="bounceIn"
                 sleep={3000}
                 style={styles.footer}>
                     <View style={{flexDirection:'row-reverse',alignItems:'center',justifyContent:'center',backgroundColor:'#009387',height:50, marginHorizontal:10,borderRadius:10}}>
                      <Text style={styles.text_footer}>Current Money:{this.state.current_money} đ</Text>
                     </View>
                          <View style={styles.ButtonBox}>
                              <View style={styles.miniButtonBox}>
                              <TouchableOpacity
                               style={{alignItems:'center'}}
                               onPress={() => navigation.navigate('RechargeScreen')}
                               >                          
                                  <FontAwesome
                                  name="arrow-circle-right"
                                  color="black"
                                  size={80}
                                  />
                              </TouchableOpacity>
                              <Text style={styles.text_footer}>Recharge</Text>
                              <TouchableOpacity
                               style={{alignItems:'center',marginTop:60}}
                               onPress={() => navigation.navigate('TransferScreen')}
                               >
                                  <FontAwesome
                                  name="random"
                                  color="black"
                                  size={80}
                                  />
                              </TouchableOpacity>
                              <Text style={styles.text_footer}>Transfer</Text>
                              </View>
                              <View style={styles.miniButtonBox}>
                              <TouchableOpacity
                               style={{alignItems:'center'}}
                               onPress={() => navigation.navigate('WithdrawalScreen')}
                               >
                                  <FontAwesome
                                  name="arrow-circle-left"
                                  color="black"
                                  size={80}
                                  transform={{ rotate: 42 }}
                                  // style={}
                                  />
                              </TouchableOpacity>
                              <Text style={styles.text_footer}>Withdraw</Text>
                              <TouchableOpacity
                               style={{alignItems:'center',marginTop:60}}
                               onPress={() => navigation.navigate('HistoryTransScreen')}
                               >
                                  <FontAwesome
                                  name="history"
                                  color="black"
                                  size={80}
                                  // style={}
                                  />
                              </TouchableOpacity>
                              <Text style={styles.text_footer}>Transaction History</Text>
                              </View>
                          </View>
                 </Animatable.View>
            </Animatable.View>
        );
    }
    
}

  export default HomeScreen;

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
        justifyContent: 'flex-end',
        // alignItems:'center',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        marginTop:5,
        color: '#05375a',
        fontSize: 18
    },
    ButtonBox:{
        flexDirection:'row',
        flex:1,
        paddingHorizontal: 20,
    },
    miniButtonBox:{
        margin:40,
        justifyContent:'center',
        alignItems:'center'
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
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        marginTop:10,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:'#009387'
    },
    signUp: {
      marginTop:10,
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor:'#fff',
      borderWidth: 4,
      borderColor: "#009387",
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