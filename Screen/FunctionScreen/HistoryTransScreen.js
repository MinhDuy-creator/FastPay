

import * as React from 'react';
import { StyleSheet,View, Text,Platform, TextInput, TouchableOpacity,StatusBar, ScrollView ,FlatList} from 'react-native';
import { Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HistoryTransListItem from '../../Components/HistoryTranListItem';
import { Component } from 'react';

class HistoryTransScreen extends Component   {
    constructor(props){
        super(props);
        this.state={
            transHistories :[
                { id: 1, from:'Nguyen Van A',to:'Nguyen Van B',type:'Transfer',total_amount:'100000đ'},
                { id: 2, from:'Nguyen Van A',to:'Nguyen Van B',type:'Transfer',total_amount:'100000đ'},
                { id: 3, from:'Nguyen Van A',to:'Nguyen Van B',type:'Transfer',total_amount:'100000đ'},
                { id: 4, from:'Nguyen Van A',to:'Nguyen Van B',type:'Transfer',total_amount:'100000đ'},
                { id: 5, from:'Nguyen Van A',to:'Nguyen Van B',type:'Transfer',total_amount:'100000đ'},
                { id: 6, from:'Nguyen Van A',to:'Nguyen Van B',type:'Transfer',total_amount:'100000đ'},
                { id: 7, from:'Nguyen Van A',to:'Nguyen Van B',type:'Transfer',total_amount:'100000đ'},
            ]
        }
      }
      render(){
          const {transHistories} = this.state;
          const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>History Transaction</Text>
                    <FontAwesome
                        name="history"
                        color="black"
                        size={80}
                    />
                </View>
                <View style={styles.footer}>
                <FlatList
                  data={transHistories}
                  renderItem={({ item }) => <HistoryTransListItem transhistory={item}
                  onPress={() => navigation.navigate('HomeScreen')}
                  />}
                  keyExtractor={item => item.id.toString()}
                  
                />
                </View>
            </View>
          );
        }
      }
  

  export default HistoryTransScreen;

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
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
 








  });

