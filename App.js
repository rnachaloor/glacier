/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'; //always first
import React from 'react';
import { Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginStackScreen, {LoginScreen} from "./screens/LoginScreen";
import SettingScreen from "./screens/SettingScreen";
import TermsOfServiceScreen from "./screens/TermsOfServiceScreen"
import ReportScreen from "./screens/ReportScreen";
import InstructionScreen from "./screens/InstructionScreen"
import VersionScreen from "./screens/VersionScreen";
import InspirationScreen from "./screens/InspirationScreen";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import PostScreen from './screens/PostScreen';
import QuestionScreen from './screens/QuestionScreen';
import ChatMenuScreen from './screens/ChatMenuScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

//contains routes for post screen
const PostStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'rgba(46,66,91,1)'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: null
    }}>
      <Stack.Screen name="NewPost" component={PostScreen} options={{title: 'New Post', headerTitleStyle: {color: 'white', alignSelf: 'center'}}} />
    </Stack.Navigator>
  );
}

//contains routes for settings screen
const SettingStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'rgba(46,66,91,1)'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: null
    }}>
      {/**all the inner screens */}
      <Stack.Screen name="Settings" component={SettingScreen} options={{title: 'Settings', headerTitleStyle: {color: 'white', alignSelf: 'center'}}} />
      <Stack.Screen name="ToS" component={TermsOfServiceScreen} options={{headerTitle: (props) => (
        <Image style={{width: 91, height: 40}} source={require('./text_logo.jpg')} resizeMode='contain'/>),title: 'Terms and Conditions', headerTitleStyle: {color: 'white'}, cardStyle: {backgroundColor: "rgba(20,29,40,1)"}}} />
      <Stack.Screen name="Report" component={ReportScreen} options={{headerTitle: (props) => (
        <Image style={{width: 91, height: 40}} source={require('./text_logo.jpg')} resizeMode='contain'/>),title: 'Report a Problem', headerTitleStyle: {color: 'white'}}} />
      <Stack.Screen name="Question" component={QuestionScreen} options={{headerTitle: (props) => (
        <Image style={{width: 91, height: 40}} source={require('./text_logo.jpg')} resizeMode='contain'/>),title: 'Frequently Asked Questions', headerTitleStyle: {color: 'white'}, cardStyle: {backgroundColor: "rgba(20,29,40,1)"}}} />
      <Stack.Screen name="Instructions" component={InstructionScreen} options={{headerTitle: (props) => (
        <Image style={{width: 91, height: 40}} source={require('./text_logo.jpg')} resizeMode='contain'/>),title: 'Instructions', headerTitleStyle: {color: 'white'}, cardStyle: {backgroundColor: "rgba(20,29,40,1)"}}} />
      <Stack.Screen name="Version" component={VersionScreen} options={{headerTitle: (props) => (
        <Image style={{width: 91, height: 40}} source={require('./text_logo.jpg')} resizeMode='contain'/>),title: 'Version and License', headerTitleStyle: {color: 'white'}, cardStyle: {backgroundColor: "rgba(20,29,40,1)"}}} />
      <Stack.Screen name="Inspiration" component={InspirationScreen} options={{headerTitle: (props) => (
        <Image style={{width: 91, height: 40}} source={require('./text_logo.jpg')} resizeMode='contain'/>),title: 'Our Inspiration', headerTitleStyle: {color: 'white'}, cardStyle: {backgroundColor: "rgba(20,29,40,1)"}}} />
    </Stack.Navigator>
  );
}

export const HomeStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#2e425b' //p2
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: null,
      cardStyle: { backgroundColor: '#141D28' }
    }}>
      <Stack.Screen name="Home" component={HomeScreen}  
      options={{headerTitle: (props) => (
        <Image style={{width: 91, height: 40}} source={require('./text_logo.jpg')} resizeMode='contain'/>),
        headerTitleStyle: { flex: 1, alignSelf: 'center', justifyContent: 'center'},}}/>
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Settings" component={SettingScreen}/>
    </Stack.Navigator>
  );
}

//contains routes for chat menu screen
const ChatMenuStackScreen = () => {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'rgba(46,66,91,1)'
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerLeft: null
      }}>
        <Stack.Screen name="Chat Menu" component={ChatMenuScreen}  options={{title: 'Chat', headerTitleStyle: {color: 'white'}, cardStyle: {backgroundColor: "rgba(20,29,40,1)"}}}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Settings" component={SettingScreen}/>
      </Stack.Navigator>
  );
}

//contains routes for bottom bar screen
const App = ({navigation}) => {
  return (
    
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        shifting={true}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Glacier',
            tabBarColor: '#2e425b', //p1
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        
        <Tab.Screen
          name="NewPost"
          component={PostStackScreen}
          options={{
            tabBarLabel: 'New Post',
            tabBarColor: 'rgba(46,66,91,1)',
            tabBarIcon: ({ color }) => (
              <Icon name="add-circle-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatMenuStackScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarColor: 'rgba(46,66,91,1)',
            tabBarIcon: ({ color }) => (
              <Icon name="chatbubble-ellipses-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingStackScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarColor: 'rgba(46,66,91,1)',
            tabBarIcon: ({ color }) => (
              <Icon name="cog-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    
  );
}

export default App;
