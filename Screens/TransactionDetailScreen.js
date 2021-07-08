import * as React from 'react';
import { StyleSheet ,View, Text,Image, TouchableOpacity,navigation, TextInput } from 'react-native';
import { Dimensions } from 'react-native';

function TransactionDetailScreen  ({navigation}) {
  return (
    <View style={styles.container}>
       <View style={styles.SuccessBox}>
           <Text style={styles.title}>
                Success !!!
           </Text>
            <Image
                source={require('../assets/success.png')}
                style={styles.logo}
                resizeMode="stretch"
            />
            <View >
                <Text style={styles.text_info}>From : </Text>
                <Text style={styles.text_info}>From : </Text>
                <Text style={styles.text_info}>To : </Text>
                <Text style={styles.text_info}>Type : </Text>
                <Text style={styles.text_info}>Total Amount : </Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.signIn}>
                    <Text style={[styles.textSign,{color:'#fff'}]}>Go to Sign In</Text>
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
    logo:{
        width: height_logo,
        height: height_logo,
    },
    InfoBox:{
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:5,
    },
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

  export default TransactionDetailScreen;