import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const SignUpScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Sign Up: </Text>
        <View style={styles.group}>
            <Text style={styles.textStyle}>Your Name: </Text>
            <TextInput style={styles.textBoxes}/>
        </View>
        <View style={styles.group}>
            <Text style={styles.textStyle}>Username:  </Text>
            <TextInput style={styles.textBoxes}/>
        </View>
        <View style={styles.group}>
            <Text style={styles.textStyle}>Password:   </Text>
            <TextInput style={styles.passwordBox}/>
        </View>
        <Button title="Go To Home" onPress={() => navigation.navigate("Home")}/>
      </View>
    );
  }

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    group: {
        flexDirection: 'row'
    },
    textStyle: {
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 24
    },
    titleText: {
        alignItems: "center", //need to fix centering
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 32,
    },
    textBoxes: {
        height: 40, 
        width: 200,
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10
    },
    passwordBox: {
        height: 40, 
        width: 200,
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
    }
})