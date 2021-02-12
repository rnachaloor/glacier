import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Post from "../components/PostComponent";

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Glacier</Text>
        <Post title="Hello" content="It's me" postId=" " />
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