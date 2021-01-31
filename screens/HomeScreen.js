import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Glacier</Text>
        <Button title="Go To Sign Up" onPress={() => navigation.navigate("Sign Up")}/>
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