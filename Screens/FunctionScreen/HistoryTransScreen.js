

import * as React from 'react';
import { StyleSheet,View, Text,Platform, TextInput, TouchableOpacity,StatusBar, ScrollView ,FlatList} from 'react-native';
import { Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HistoryTransListItem from '../../Components/HistoryTranListItem';
import { LinearGradient } from 'expo-linear-gradient';
import { Component } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Feather from 'react-native-vector-icons/Feather';

class HistoryTransScreen extends Component   {
    constructor(props){
        super(props);
        this.state={
            transHistories :[
            ],
            mode:"",
            show: false,
            show1:false,
            Start: "",
            End: "",
        }
      }

    //   componentDidMount () {
    //     fetch(global.url+'payment/get-tx-history?start-date='+this.state.Start+'&end-date='+this.state.End, {
    //       method: 'GET',
    //       headers: {
    //        'Content-Type': 'application/json',
    //        'token': global.token,
    //      },
    //    })
    //    .then((response) =>  {
    //        const statusCode = response.status;
    //        const res = response.json();
    //        return Promise.all([statusCode, res]);
    //      })
    //    .then(([responseJson,res]) => {
  
    //       console.log(responseJson);
    //        if(responseJson == 200){
    //           console.log(res.data)
    //           // this.setState({PreBudget:res.})
    //           this.setState({transHistories:res.data})
    //       }
    //          else{
    //            Alert.alert("Loading  Fail");
    //          }
    //    })
    //    .catch((error) =>{
    //       console.error(error.data);
    //   }); 
    //  }

      getListHis = () =>  {
        fetch(global.url+'payment/get-tx-history?start-date='+this.state.Start+'&end-date='+this.state.End, {
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
    
            console.log(responseJson);
             if(responseJson == 200){
                console.log(res.data)
                // this.setState({PreBudget:res.})
                this.setState({transHistories:res.data})
            }
               else{
                 Alert.alert("Loading  Fail");
               }
         })
         .catch((error) =>{
            console.error(error.data);
        });
      }

      showMode = () => {
        this.setState({
          show: true
        })
      };
    
      showMode1 = () => {
        this.setState({
          show1: true
        })
      };

      onChange = (event, selectedDate) => {
        this.setState({
          show: false
        })
        const currentDate = selectedDate ;
        const date = selectedDate.getDate().toString();
        var day = "";
        var getmonth = "";
        if( Number(date) <= 9){
          day = "0"+date;
        }else{
          day= date
        }
        const month = selectedDate.getMonth()+1;
        if( Number(month) <= 9){
          getmonth = "0"+month;
        }else{
          getmonth = month;
        }
        const year = selectedDate.getFullYear();
        this.setState({Start:year+'-'+getmonth+'-'+day})
        
      };

      onChange1 = (event, selectedDate) => {
        this.setState({
          show1: false
        })
        const currentDate = selectedDate ;
        const date = selectedDate.getDate();
        var day = "";
        var getmonth = "";
        if( Number(date) <= 9){
          day = "0"+date;
        }else{
          day= date
        }
        const month = selectedDate.getMonth()+1;
        if( Number(month) <= 9){
          getmonth = "0"+month;
        }else{
          getmonth = month;
        }
        const year = selectedDate.getFullYear();
        this.setState({End:year+'-'+getmonth+'-'+day})
        
      };

      render(){
          const {transHistories} = this.state;
          const { navigation } = this.props;
        return (
            <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#2E3192', '#1BFFFF']}
                style={styles.background}
            />
                <View style={styles.header}>
                    <Text style={styles.text_header}>History Transaction</Text>
                    <FontAwesome
                        name="history"
                        color="black"
                        size={80}
                    />
                    
                </View>
                <View style={styles.footer}>
                  <View style={styles.PickDayBox}>
                    <View 
                    style={{width:300,height:100,marginLeft:145}}
                    >
                      <LinearGradient style={styles.signIn}
                        colors={['#2E3192', '#1BFFFF']}>
                          <TouchableOpacity
                                onPress={this.showMode}
                                style={{width:300,height:100,alignItems:'center',justifyContent:'center'}}
                                >
                                  <Feather
                                    name="calendar"
                                    color="#fff"
                                    size={20}
                                    style={{marginTop:5}}
                                  />
                                  <Text style={[styles.textSign,{color:'#fff'}]}>Start date</Text>
                          </TouchableOpacity>
                      </LinearGradient>
                          { this.state.show ?
                          <DateTimePicker
                          testID="dateTimePicker"
                          value={new Date()}
                          mode="date"
                          is24Hour={true}
                          display="spinner"
                          onChange={
                            this.onChange
                          }
                        />:null
                        }
                      <Text>{this.state.Start}</Text>    
                    </View>
                    <View 
                    style={{width:300,height:100}}
                    >
                      <LinearGradient style={styles.signIn}
                        colors={['#2E3192', '#1BFFFF']}>
                        <TouchableOpacity
                        style={{width:300,height:100,alignItems:'center',justifyContent:'center'}}
                        onPress={this.showMode1}
                        >
                          <Feather
                            name="calendar"
                            color="#fff"
                            size={20}
                            style={{marginTop:5}}
                          />
                          <Text style={[styles.textSign,{color:'#fff'}]}>End date</Text>
                        </TouchableOpacity>
                      </LinearGradient>
                      { this.state.show1 ?
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={new Date()}
                        mode="date"
                        is24Hour={true}
                        display="spinner"
                        onChange={
                          this.onChange1
                        }
                      />:null}
                      <Text>{this.state.End}</Text>    
                    </View>       
                  </View>                     
                  <LinearGradient style={styles.signIn}
                  colors={['#2E3192', '#1BFFFF']}>
                    <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}}
                    onPress={this.getListHis} >
                      <Text style={[styles.textSign,{color:'#fff'}]}>Get List History</Text>
                    </TouchableOpacity>
                  </LinearGradient>    
                  <FlatList
                    data={transHistories}
                    renderItem={({ item }) => <HistoryTransListItem transhistory={item}
                    onPress={() => navigation.navigate('HomeScreen')}
                    />}
                    keyExtractor={item => item.transaction_id.toString()}
                    
                  />
                </View>
            </View>
          );
        }
      }
  

  export default HistoryTransScreen;

  const {height} = Dimensions.get("screen");
  const height_logo = height * 0.28;
  const {width} = Dimensions.get("screen");

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
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
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    footer: {
        alignItems:'center',
        justifyContent: 'center',
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    PickDayBox: {
      width:width,
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      // backgroundColor:'black'
      // width:width
    },
    text_header: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 30
    },
    signIn: {
      marginTop:10,
      width: '50%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      padding:5
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
},
 








  });

