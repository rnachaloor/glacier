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

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const PostStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#27538C'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: null
    }}>
      <Stack.Screen name="NewPost" component={PostScreen} options={{title: 'New Post'}} />
    </Stack.Navigator>
  );
}

const SettingStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#4886D9'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: null
    }}>
      <Stack.Screen name="Settings" component={SettingScreen} options={{title: 'Settings'}} />
      <Stack.Screen name="ToS" component={TermsOfServiceScreen} options={{title: 'Terms and Conditions'}} />
      <Stack.Screen name="Report" component={ReportScreen} options={{title: 'Report a Problem'}} />
      <Stack.Screen name="Question" component={QuestionScreen} options={{title: 'Frequently Asked Questions'}} />
    </Stack.Navigator>
  );
}

const HomeStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#26488C'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: null
    }}>
      <Stack.Screen name="Home" component={HomeScreen}  options={{title: 'Glacier'}}/>
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Settings" component={SettingScreen}/>
    </Stack.Navigator>
  );
}

const SignUpStackScreen = () => {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'red'
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerLeft: null
      }}>
        <Stack.Screen name="Sign Up" component={SignUpScreen}  options={{title: 'Sign Up'}}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Settings" component={SettingScreen}/>
      </Stack.Navigator>
  );
}

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
            tabBarColor: '#26488C',
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
            tabBarColor: '#27538C',
            tabBarIcon: ({ color }) => (
              <Icon name="add-circle-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingStackScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarColor: '#4886D9',
            tabBarIcon: ({ color }) => (
              <Icon name="cog-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    
  );
}

export default App;
