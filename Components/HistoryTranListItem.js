import * as React from 'react';
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native';

export default function HistoryTransListItem(props) {
    const {transhistory , onPress} = props;
    const [data, setData] = React.useState({
        Type:"",
    });

    function typeOfTrans (transhistory){
        switch(transhistory.transaction_type.toString()){
            case '1':
                return 'Top-Up';
            case '2':
                return 'Withdraw';
            case '3':
                return 'Transfer';
        }
    }
    return(
        <TouchableOpacity
            activeOpacity ={0.2} 
            onPress={onPress}
        >
            <View style={styles.container}>
            <View style={styles.view_item}>
                <Text style={styles.text_info}>To : {transhistory.to}</Text>
                <Text style={styles.text_info}>Type : {typeOfTrans(transhistory)}</Text>
                <Text style={styles.text_info}>Total Amount : {transhistory.total_amount}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical:5,
        flexDirection:'row',
        borderRadius:10,
        borderWidth:5,
        // width:300,
        justifyContent:'flex-start',
    },
    view_id:{
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        borderRightWidth:5,
        width:80
    },
    view_item:{
        alignItems:'center',
        justifyContent:'flex-end',
        width:250,
        paddingHorizontal:10,
        // paddingVertical:5,
        // borderWidth:5,
    },
    text_id:{
        fontSize:16,
        fontWeight:'bold'
    },
    text_info:{
        fontSize:12,
    }
  });

