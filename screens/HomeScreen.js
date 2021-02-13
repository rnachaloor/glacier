import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Post from "../components/PostComponent";
import PostList from "../components/PostList";

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <PostList/>
      </View>
    );
  }

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})