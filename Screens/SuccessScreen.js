import * as React from 'react';
import { StyleSheet ,View, Text,Image, TouchableOpacity,navigation, TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function SuccessScreen  ({navigation}) {
  return (
    <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#2E3192', '#1BFFFF']}
        style={styles.background}
        />
       <View style={styles.SuccessBox}>
           <Text style={styles.title}>
                Success !!!
           </Text>
            <Image
                source={require('../assets/success.png')}
                style={styles.logo}
                resizeMode="stretch"
            />
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.signIn}>
                    <Text style={[styles.textSign,{color:'#fff'}]}>Go to Main</Text>
                </TouchableOpacity>
            </View>
       </View>
    </View>
  );
}


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
     flex:1,
     backgroundColor:'#009387',
     justifyContent:'center',
        alignItems:'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: height,
      },
    logo:{
        width: height_logo,
        height: height_logo,
    },
    // footer:{
    //     flex:2,
    //     justifyContent:'center',
    //     alignItems:'center',
    // },
    // header:{
    //     flex:2,
    //     backgroundColor:'#fff',
    //     borderBottomLeftRadius:30,
    //     borderBottomRightRadius:30,
    //     paddingVertical:50,
    //     paddingHorizontal:30,
    //     // justifyContent:'center',
    //     alignItems:'center',
    // },
    SuccessBox:{
        backgroundColor:'#fff',
        borderRadius:30,
        width:320,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold',
        marginBottom:5,
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
    // BorderInput:{
    //     marginTop:10,
    //     width:300,
    //     height:60,
    //     borderWidth : 2,
    //     borderRadius: 5 ,
    //     borderColor: '#000',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     backgroundColor:'#979A9A'
    // },
    signIn: {
        // marginTop:10,
        marginBottom:10,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:'#009387'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal:5,
    }
  });

  export default SuccessScreen;