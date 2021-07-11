import * as React from 'react';
import { StyleSheet ,View, Text,Image, TouchableOpacity,navigation } from 'react-native';
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
function AboutUsScreen  ({navigation}) {
  return (
    <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#2E3192', '#1BFFFF']}
        style={styles.background}
      />
        <View style={styles.header}>
            <Animatable.Image
            animation="bounceIn"
            duration={1500}
            source={require('../../assets/logo1.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
        animation="fadeInUpBig"
        // duration={1500}
        style={styles.footer}>
            <Text style={styles.title}>Development Team</Text>
            <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                <FontAwesome
                        name="user"
                        color="#05375a"
                        size={20}
                        style={{marginRight:5}}
                    />
                <Text style={styles.Text}>Dương Thành Khương -Project Manager</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                <FontAwesome
                        name="user"
                        color="#05375a"
                        size={20}
                        style={{marginRight:5}}
                    />
                <Text style={styles.Text}>Phạm Minh Duy - Front-End Developer</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                <FontAwesome
                        name="user"
                        color="#05375a"
                        size={20}
                        style={{marginRight:5}}
                    />
                <Text style={styles.Text}>Vương Quang Huy - Back-End Developer</Text>
            </View>
            
            
            
            <View style={styles.button}>
            
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
        justifyContent:'space-evenly',
        alignItems:'center'
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

  export default AboutUsScreen;