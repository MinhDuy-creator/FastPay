import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './TabbarScreen/HomeScreen';
import InfoScreen from './TabbarScreen/InfoScreen';
import AboutUsScreen from './TabbarScreen/AboutUsScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

export default function Tabbar() {
  return (
      <Tab.Navigator
        tabBarOptions={{
          labelStyle:{
            fontSize:16,
            // color:'red'
            // position:'absolute'
          },
          activeTintColor:'#1BFFFF',
          inactiveTintColor:'black'
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarLabel:'Home',
          tabBarIcon: ({color}) => 
          <FontAwesome name='home' size={20} color={color}/>, 
          }}/>
        <Tab.Screen name="Person Info" component={InfoScreen} 
        options={{
          tabBarLabel:'Profile',
          tabBarIcon: ({color}) => 
          <FontAwesome name='user' size={20} color={color}/> 
          }}/>
        <Tab.Screen name="About Us" component={AboutUsScreen} 
        options={{
          tabBarLabel:'About Us',
          tabBarIcon: ({color}) => 
          <FontAwesome name='barcode' size={20} color={color}/> 
          }}/>
      </Tab.Navigator>
     
  );
}

