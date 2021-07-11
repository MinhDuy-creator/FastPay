

import * as React from 'react';
import {Component} from 'react';
import { StyleSheet,View, Text,Platform, TextInput, TouchableOpacity,StatusBar,Alert,Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';



class HomeScreen extends Component {
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
       
        // setInterval(
        //     this.getData, 5000)
     }

    //  refreshDataFromServer = () => {
    //      this.getData().then((data)=>{
    //         console.log(data);
    //         this.setState({DataFromServer:data});
    //         console.log(this.state.DataFromServer)
    //      }).catch((error) => {
    //         this.setState({DataFromServer:[]});
    //      });
    //  }

     LogOut = () => {
         global.token="";
         this.props.state.navigation.navigate('SignInScreen');
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
                // this.setState({PreBudget:res.})
                this.setState({DataFromServer:res.data})
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
        return (
            <View style={styles.container}
            >
            <LinearGradient
                // Background Linear Gradient
                colors={['#2E3192', '#1BFFFF']}
                style={styles.background}
            />
                 <View style={styles.header}>
                  <View 
                    style={{alignItems:'center'}}>

                    {/* Header Bar Here*/}
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
                        <Text style={styles.text_header}>Hi {this.state.DataFromServer.fullname}</Text>
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
                    <Animatable.Image
                        animation="bounceIn"
                        duration={1500}
                        source={require('../../assets/logo1.png')}
                        style={styles.logo}
                        resizeMode="stretch"
                        />
                    {/* Header Info */}
                    <View style={styles.HeaderInfo}>
                        
                        <View >
                            <Text style={{fontWeight:'bold'}}>Phone:{this.state.DataFromServer.phone}</Text>
                            <Text style={{fontWeight:'bold'}}>Email :{this.state.DataFromServer.email}</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight:'bold'}}>Budget :{this.state.DataFromServer.budget}</Text>
                        </View>
                    </View>
                  </View>
                 </View>
                 <Animatable.View
                 animation="bounceIn"
                 
                 style={styles.footer}>
                    <View style={styles.ButtonBox}>      
                              <TouchableOpacity
                               style={{alignItems:'center',borderWidth:2,borderRadius:10,padding:5,borderColor:'#1BFFFF'}}
                               onPress={() => navigation.navigate('RechargeScreen')}
                               >                          
                                    <FontAwesome
                                    name="arrow-circle-right"
                                    color="#2E3192"
                                    size={50}
                                    />
                                    <Text style={styles.text_footer}>Recharge</Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                               style={{alignItems:'center',borderWidth:2,borderRadius:10,padding:5,borderColor:'#1BFFFF'}}
                               onPress={() => navigation.navigate('TransferScreen')}
                               >
                                    <FontAwesome
                                    name="random"
                                    color="#2E3192"
                                    size={50}
                                    />
                                    <Text style={styles.text_footer}>Transfer</Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                              style={{alignItems:'center',borderWidth:2,borderRadius:10,padding:5,borderColor:'#1BFFFF'}}
                               onPress={() => navigation.navigate('WithdrawalScreen')}
                               >
                                    <FontAwesome
                                    name="arrow-circle-left"
                                    color="#2E3192"
                                    size={50}
                                    
                                    // style={}
                                    />
                                    <Text style={styles.text_footer}>Withdraw</Text>
                                </TouchableOpacity>       
                    </View>
                    
                 </Animatable.View>
            </View>
        );
    }
    
}

  export default HomeScreen;

  const {height} = Dimensions.get("screen");
  const height_headerbar = height * 0.1;
  const {width} = Dimensions.get("screen");
  const height_logo = height * 0.15;

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
    HeaderBar:{
        backgroundColor:'#fff',
        flexDirection:'row',
        width:width,
        height:height_headerbar,
        alignItems:'flex-end',
        paddingBottom:10,
        justifyContent:'space-around'
    },
    HeaderInfo:{
        backgroundColor:'transparent',
        flexDirection:'row',
        width:width,
        height:50 ,
        alignItems:'flex-end',
        paddingBottom:5,
        justifyContent:'space-around'
    },
    logo:{
        margin:10,
        width: height_logo,
        height: height_logo,
},
    header: {
        flex: 1,
        justifyContent: 'flex-start',
        // alignItems:'center',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    text_header: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25,
       
    },
    text_footer: {
        // marginTop:5,
        color: '#2E3192',
        fontSize: 18
    },
    ButtonBox:{
        flexDirection:'row',
        // backgroundColor:'#000',
        width:'100%',
        height:'30%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    underButtonBox:{
        flexDirection:'row',
        // backgroundColor:'#000',
        width:'100%',
        height:'30%',
        alignItems:'center',
        justifyContent:'space-around',
        marginLeft:45,
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