
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'
import OTPconfirmScreen from './OTPconfirmScreen'
import SuccessScreen from './SuccessScreen'
import RechargeScreen from './FunctionScreen/RechargeScreen';
import WithdrawalScreen from './FunctionScreen/WithdrawalScreen';
import TransferScreen from './FunctionScreen/TransferScreen';
import HistoryTransScreen from './FunctionScreen/HistoryTransScreen';
import Tabbar from './TabBarScreen';
import TransactionDetailScreen from './TransactionDetailScreen'

const RootStack = createStackNavigator();

export default function RootStackScreen() {
  return (
    <RootStack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
         
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="HomeScreen" component={Tabbar}/>
        <RootStack.Screen name="WithdrawalScreen" component={WithdrawalScreen}/>
        <RootStack.Screen name="RechargeScreen" component={RechargeScreen}/>
        <RootStack.Screen name="TransferScreen" component={TransferScreen}/>
        <RootStack.Screen name="HistoryTransScreen" component={HistoryTransScreen}/>
        <RootStack.Screen name="TransactionDetailScreen" component={TransactionDetailScreen}/>
        <RootStack.Screen name="OTPconfirmScreen" component={OTPconfirmScreen}/>
        <RootStack.Screen name="SuccessScreen" component={SuccessScreen}/>
    </RootStack.Navigator>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });