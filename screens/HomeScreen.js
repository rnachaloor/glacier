import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
// Importing containers from react-native
import { View, Text, Button, StyleSheet } from "react-native";

// Importing components
import Post from "../components/PostComponent";
import PostList from "../components/PostList";
import {user} from './LoginScreen'

// Creating the HomeScreen navigation for the app
const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <PostList/>
      </View>
    );
  }

// Exporting the HomeScreen 
export default HomeScreen;

// Assembling the StyleSheet for the HomeScreen
const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})
