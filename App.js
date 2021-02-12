/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'; //always first
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import SettingScreen from "./screens/SettingScreen";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import PostScreen from './screens/PostScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const PostStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#9E34EB'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name="NewPost" component={PostScreen} options={{title: 'New Post'}} />
    </Stack.Navigator>
  );
}

const SettingStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'orange'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name="Settings" component={SettingScreen} options={{title: 'Settings'}} />
    </Stack.Navigator>
  );
}

const LoginStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'green'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login'}}/>
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingScreen}/>
    </Stack.Navigator>
  );
}

const HomeStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#0DE5EF'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
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
      }
    }}>
      <Stack.Screen name="Sign Up" component={SignUpScreen}  options={{title: 'Sign Up'}}/>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Settings" component={SettingScreen}/>
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
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
            tabBarColor: '#0DE5EF',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Sign Up"
          component={SignUpStackScreen}
          options={{
            tabBarLabel: 'Sign Up',
            tabBarColor: 'red',
            tabBarIcon: ({ color }) => (
              <Icon name="person" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="NewPost"
          component={PostStackScreen}
          options={{
            tabBarLabel: 'New Post',
            tabBarColor: '#9E34EB',
            tabBarIcon: ({ color }) => (
              <Icon name="add-circle-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginStackScreen}
          options={{
            tabBarLabel: 'Login',
            tabBarColor: 'green',
            tabBarIcon: ({ color }) => (
              <Icon name="key-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingStackScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarColor: 'orange',
            tabBarIcon: ({ color }) => (
              <Icon name="cog-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
