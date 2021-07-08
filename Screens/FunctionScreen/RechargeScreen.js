

import * as React from 'react';
import { StyleSheet,View, Text,Platform, TextInput, TouchableOpacity,StatusBar, ScrollView ,Alert} from 'react-native';
import { Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


function RechargeScreen  ({navigation}) {
    const [data, setData] = React.useState({
        Amount:0,
        ID:"",
    });
    
    
    function Recharge  ()  {
        return fetch(global.url+'payment/top-up', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'token':global.token,
          },
         body: JSON.stringify({
            from: data.From,
            amount: Number(data.Amount),
          })
        })
        .then((response) => {
          const statusCode = response.status;
          const res = response.json();
          return Promise.all([statusCode, res]);
        })
        .then(([responseJson,res] ) => {
            console.log(res.data)
              if(responseJson == 200){
                  global.txtID = res.data
                  console.log(global.token);
                // setData({
                //     ...data,
                //     ID:res.data
                // })
                navigation.navigate('OTPconfirmScreen')
              }
              else{
                 console.warn(responseJson);
                  Alert.alert("Transaction Fail");
              }
        })
        .catch((error) =>{
            console.error(error);
        });
      } 

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Recharge</Text>
            <FontAwesome
                name="arrow-circle-right"
                color="black"
                size={80}
            />
        </View>
        <View style={styles.footer}>
        <ScrollView>
            <View style={{alignItems:'center'}}>
                <Text style={styles.text_footer}>Amount Money</Text>
                <View style={styles.BorderInput}>
                    <TextInput
                        placeholder="0.0 đ"
                        keyboardType = 'numeric'
                        style={styles.TextInput}
                        autoCapitalize="none"
                        maxFontSizeMultiplier ={5}
                        textAlign="center"
                        onChangeText={(amount) => setData({
                            ...data,
                            Amount:amount
                        })}
                    />
                </View>
            <Text style={styles.text_footer}>Bank Account</Text>
            <View style={styles.BorderInput}>
                <TextInput
                    placeholder="Bank's Name"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    maxFontSizeMultiplier ={5}
                    textAlign="center"
                    onChangeText={(from) => setData({
                        ...data,
                        From:from
                    })}
                />
            </View>
            <View style={styles.BorderInput}>
                <TextInput
                    placeholder="Bank's Account"
                    keyboardType = 'numeric'
                    style={styles.TextInput}
                    autoCapitalize="none"
                    maxFontSizeMultiplier ={5}
                    textAlign="center"
                    // onChangeText={(val) => textInputChange(val)}
                />
            </View>
            <Text style={styles.text_footer}>Fee</Text>
            <View style={styles.BorderInput}>
                <Text>1000đ</Text>
            </View>
            <TouchableOpacity 
            onPress={Recharge} 
            style={styles.signIn}>
                <Text style={[styles.textSign,{color:'#fff'}]}>Perform</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
        </View>
    </View>
  );
}

  export default RechargeScreen;

  const {height} = Dimensions.get("screen");
  const height_logo = height * 0.28;

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        alignItems:'center',
        // justifyContent: 'center',
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    box_text:{
        borderRadius: 20,
        padding:10,
        margin:5,
        justifyContent: 'flex-end',
        borderWidth:5,
        borderColor : '#C0BFC0',
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text_box_left:{
        fontSize: 16,
        fontWeight:'bold'
    },
    text_box_right:{
        fontSize: 16,
        color:'#C0BFC0',
        paddingLeft:10
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
    BorderInput:{
        marginTop:10,
        width:300,
        height:60,
        borderWidth : 2,
        borderRadius: 5 ,
        borderColor: '#000',
        justifyContent:'center',
        alignItems:'center',
    },
    signIn: {
        marginTop:20,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor:'#009387'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
  });

