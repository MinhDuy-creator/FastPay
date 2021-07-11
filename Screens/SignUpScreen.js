

import * as React from 'react';
import { StyleSheet,View,Alert, Text,Platform, TextInput, TouchableOpacity,StatusBar ,ScrollView,Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Formik } from 'formik';
import {SignUpSchema} from '../Components/Validate'
import { LinearGradient } from 'expo-linear-gradient';

function SignUpScreen ({navigation}) {
  const [data, setData] = React.useState({
    secureTextEntry: true,
    confirm_secureTextEntry:true,
    checkSignup:0,
});

function Signup  (values) {
    return fetch(global.url+'register', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        phone: values.phonenum,
        password: values.password,
        fullname: values.fullname,
        email: values.email,
      })
    })
    .then((response) => {
      const statusCode = response.status;
      const res = response.json();
      return Promise.all([statusCode, res]);
    })
    .then(([responseJson,res] ) => {
      setData({
        ...data,
        checkSignup: responseJson,
      });
        if(data.checkSignup == 200){
           
            navigation.navigate('SignInScreen')
        }
        else{
            Alert.alert("Thông báo!","Bạn đã đăng ký không thành công!");
        }
    })
    .catch((error) =>{
      console.error(error.error);
    });
  }

const updateSecureTextEntry = () =>{
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }
const updateConfirmSecureTextEntry = () =>{
      setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry
      })
    }
      return(
        <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
          colors={['#E26E43', '#F8CE0E']}
          style={styles.background}
        />
        <View style={styles.header}>
          <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View style={styles.footer}
          animation="fadeInUpBig"
        >
          <Formik
          initialValues={{  fullname:"",
                            phonenum:"",
                            email:'',
                            password:'',
                            confirm_password:'',}}
          validationSchema={SignUpSchema}
          onSubmit={values => Signup(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values ,errors , touched} , secureTextEntry=true) => (
              <ScrollView>
                <Text style={styles.text_footer}>Fullname:</Text>
                <View style={styles.action}>
                  <FontAwesome
                    name="user"
                    color="#05375a"
                    size={20}
                    style={{marginRight:5}}
                  />
                  <TextInput
                    placeholder="Your Name"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    onChangeText={handleChange('fullname')}
                    onBlur={handleBlur('fullname')}
                    value={values.fullname}
                  />
                </View>
                {errors.fullname && touched.fullname ? (
                    <Text style={styles.text_error}>{errors.fullname}</Text>
                  ) : null}
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                  <FontAwesome
                    name="paper-plane"
                    color="#05375a"
                    size={20}
                    style={{marginRight:5}}
                  />
                  <TextInput
                    placeholder="Your Email"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                {errors.email && touched.email ? (
                    <Text style={styles.text_error}>{errors.email}</Text>
                ) : null}
                <Text style={styles.text_footer}>Phone Num</Text>
                <View style={styles.action}>
                  <FontAwesome
                    name="phone"
                    color="#05375a"
                    size={20}
                    style={{marginRight:5}}
                  />
                  <TextInput
                    keyboardType = 'numeric'
                    placeholder="Your Phone Num"
                    style={styles.TextInput}
                    maxLength={10}
                    autoCapitalize="none"
                    onChangeText={handleChange('phonenum')}
                    onBlur={handleBlur('phonenum')}
                    value={values.phonenum}
                  />
                </View>
                {errors.phonenum && touched.phonenum ? (
                    <Text style={styles.text_error}>{errors.phonenum}</Text>
                ) : null}
                <Text style={styles.text_footer}>Password</Text>
                <View style={styles.action}>
                  <FontAwesome
                    name="lock"
                    color="#05375a"
                    size={20}
                    style={{marginRight:5}}
                  />
                  <TextInput
                    placeholder="Your Password"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    secureTextEntry={data.secureTextEntry}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  <TouchableOpacity
                  onPress={updateSecureTextEntry}>
                    <Feather
                      name="eye-off"
                      color="green"
                      size={20}
                      style={{marginLeft:220}}
                    />
                  </TouchableOpacity>
                </View>
                {errors.password && touched.password ? (
                    <Text style={styles.text_error}>{errors.password}</Text>
                ) : null}
                <Text style={styles.text_footer}>Confirm Password</Text>
                <View style={styles.action}>
                  <FontAwesome
                    name="lock"
                    color="#05375a"
                    size={20}
                    style={{marginRight:5}}
                  />
                  <TextInput
                    placeholder="Confirm Your Password"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    secureTextEntry={data.confirm_secureTextEntry}
                    onChangeText={handleChange('confirm_password')}
                    onBlur={handleBlur('confirm_password')}
                    value={values.confirm_password}
                  />
                  <TouchableOpacity
                  onPress={updateConfirmSecureTextEntry}>
                    <Feather
                      name="eye-off"
                      color="green"
                      size={20}
                      style={{marginLeft:160}}
                    />
                  </TouchableOpacity>
                </View>
                {errors.confirm_password && touched.confirm_password ? (
                    <Text style={styles.text_error}>{errors.confirm_password}</Text>
                ) : null}
                <View style={styles.button}>
                  <LinearGradient 
                  colors={['#E26E43', '#F8CE0E']}
                  style={{marginTop:10,padding:5,borderRadius: 20,width: '50%',
                  }}
                  >
                    <View style={styles.signUp}>
                      <TouchableOpacity onPress={handleSubmit}>
                        <Text style={[styles.textSign,{color:'#E26E43'}]}>Submit</Text>
                      </TouchableOpacity>
                    </View>
                  </LinearGradient>
                </View>
              </ScrollView>
            )}
          </Formik>
        </Animatable.View>
      </View>
      )
  }
  

  export default SignUpScreen;

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
        marginTop:15,
        color: '#05375a',
        fontSize: 18
    },
    text_error: {
      color: "#FD0000",
      fontSize: 10
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
        marginTop: 5
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




  