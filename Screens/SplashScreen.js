import * as React from 'react';
import { StyleSheet ,View, Text,Image, TouchableOpacity,navigation } from 'react-native';
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
// MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
function SplashScreen  ({navigation}) {
  return (
    <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#E26E43', '#F8CE0E']}
        style={styles.background}
      />
        <View style={styles.header}>
            <Animatable.Image
            animation="bounceIn"
            duration={1500}
            source={require('../assets/icon.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
        animation="fadeInUpBig"
        duration={1500}
        style={styles.footer}>
            <Text style={styles.title}>Stay connected with everyone!</Text>
            <Text style={styles.Text}>Sign in with account</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}> 
                <LinearGradient
                    colors={['#E26E43', '#F8CE0E']}
                    style={styles.signIn}
                >
                    <Text style={{color:'#fff'}}>Get Started </Text>
                    <MaterialIcons
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
                   
            </TouchableOpacity> 
            </View>
        </Animatable.View>      
    </View>
   
  );
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
     flex:1,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: height,
      },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,
    },
    logo:{
            width: height_logo,
            height: height_logo,
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold',
    },
    Text:{
        color:'grey',
        marginTop:5,
    },
    button:{
        alignItems:'flex-end',
        marginTop:30,
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row',
        backgroundColor:'#009387'
    },
    textSign:{
            color:'white',
            fontWeight:'bold'
    }
  });

  export default SplashScreen;