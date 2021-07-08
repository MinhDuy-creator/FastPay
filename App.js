
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RootStackScreen from './Screens/RootStackSreen'
// import AppContext from './components/AppContext';
import './Components/Global';

const Stack = createStackNavigator();

export default function App() {
  // console.log(token);
  return (
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
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
