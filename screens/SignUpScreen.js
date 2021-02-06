import React from "react";
import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const SignUpScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    let errors = "";

    function submit(pass, conf) {
        if (pass === conf) {
            console.log(password)
        }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Sign Up: </Text>
        <View style={styles.group}>
            <TextInput onChangeText={(value) => setName(value)} style={styles.textBoxes} placeholder="Your Name"/>
        </View>
        <View style={styles.group}>
            <TextInput onChangeText={(value) => setUsername(value)} style={styles.textBoxes} placeholder="Username"/>
        </View>
        <View style={styles.group}>
            <TextInput onChangeText={(value) => setPassword(value)} placeholder="Password" style={styles.passwordBox} secureTextEntry={true} textContentType="password"/>
        </View>
        <View style={styles.group}>
            <TextInput onChangeText={(value) => setConfirmPassword(value)} placeholder="Confirm Password" style={styles.passwordBox} secureTextEntry={true} textContentType="password"/>
        </View>
        <Text>{errors}</Text>
        <Button title="Go To Home" onPress={() => navigation.navigate("Home")}/>
        <Button title="Submit" onPress={submit(password, confirmPassword)}/>
      </View>
    );
  }

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
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
        marginBottom: 10
    }
})