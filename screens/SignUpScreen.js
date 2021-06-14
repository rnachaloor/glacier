//Imports
import React, { useContext } from "react";
import { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';
import { TouchableOpacity } from "react-native";
import { AuthContext } from "../AuthProvider";
import { loggedIn, userId, user, firstName, lastName, name, setLoggedIn, setUser, updateName } from "./LoginScreen.js";

//User input from signup fields is taken in 
const SignUpScreen = ({navigation}) => {
    const [first, setFirstName] = useState("");
    const [last, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    
    const {register} = useContext(AuthContext);
    let errors = "";

    //Alerts user if password doesn't match confirm password
    //Requires every field to be filled out
    //If all fields are filled properly, new user is added to database
    function submit(pass, conf) {
        if (pass != conf) {
            Alert.alert(
                "Passwords Don't Match",
                'Please try again.',
                [
                    {
                        text: 'Ok',
                        onPress: () => console.log("Trying Again")
                    }
                ],
                {
                    cancelable: false
                }
            );
        } else if ((first == "") || (username == "") || (password == "") || (confirmPassword == "")) {
            Alert.alert(
                "Missing Fields",
                'Please fill out every field.',
                [
                    {
                        text: 'Ok',
                        onPress: () => console.log("Trying Again")
                    }
                ],
                {
                    cancelable: false
                }
            );
        } else {
            firestore().collection('userInfo').add({
                firstName: first,
                lastName: last, 
                password: password,
                username: username,
                email: email
            })
            setLoggedIn(true);
            setUser(username);
            setFirstName(first);
            setLastName(last);
            updateName();
            register(email, password);
            navigation.navigate("Login")
        }
    }

    //JSX
    return (
        
        <View style={styles.container}>
      <View style={styles.rect}>
        <TouchableOpacity onPress = {() => navigation.navigate("Login")}>
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signUp2}>Sign Up</Text>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}></View>
        <TextInput
          placeholder="First Name"
          placeholderTextColor = "white"
          style={styles.textInput}
          onChangeText={(value) => setFirstName(value)}
        ></TextInput>
      </View>
      
      <View style={styles.rect8Stack}>
        <TouchableOpacity onPress={() => submit(password, confirmPassword)}>
          <View style={styles.rect8}></View>
          <Text style={styles.signUp1}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TextInput placeholder="Last Name" placeholderTextColor = "white" style={styles.textInput1} onChangeText={(value) => setLastName(value)}></TextInput>
      <View style={styles.rect9}></View>
      <View style={styles.textInput2Stack}>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor = "white"
          style={styles.textInput2}
          onChangeText={(value) => setEmail(value)}
          autoCapitalize="none"
        ></TextInput>
        <View style={styles.rect10}></View>
      </View>
      <View style={styles.rect11}></View>
      <TextInput autoCapitalize="none" placeholder="Username" placeholderTextColor = "white" style={styles.textInput3} onChangeText={(value) => setUsername(value)}></TextInput>
      <TextInput autoCapitalize="none" placeholder="Password" placeholderTextColor = "white" style={styles.textInput4} onChangeText={(value) => setPassword(value)} secureTextEntry={true}></TextInput>
      <View style={styles.rect12}></View>
      <View style={styles.rect13Stack}>
        <View style={styles.rect13}></View>
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor = "white"
          style={styles.textInput5}
          onChangeText={(value) => setConfirmPassword(value)}
          secureTextEntry={true}
          autoCapitalize="none">
        </TextInput>
      </View>
    </View>
    );
  }

//Exports screen
export default SignUpScreen;

//Styling
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(20,29,40,1)"
    },
    rect: {
      width: 500,
      height: 93,
      backgroundColor: "rgba(46,66,91,1)"
    },
    signIn: {
      fontFamily: "System",
      color: "rgba(255,255,255,1)",
      height: 37,
      width: 84,
      textAlign: "center",
      fontSize: 20,
      marginTop: 56,
      marginLeft: 291, 
      left: 30
    },
    signUp2: {
      fontFamily: "System",
      color: "rgba(255,255,255,1)",
      height: 49,
      width: 375,
      textAlign: "center",
      fontSize: 35,
      marginTop: 28, 
      left: 20,
      fontWeight: "bold"
    },
    rect2: {
      top: 30,
      left: 20,
      width: 291,
      height: 1,
      position: "absolute",
      backgroundColor: "#E6E6E6",
      opacity: 0.5
    },
    textInput: {
      top: 0,
      left: 20,
      position: "absolute",
      fontFamily: "System",
      color: "rgba(255,255,255,1)",
      height: 31,
      width: 300,
      fontSize: 16
    },
    rect2Stack: {
      width: 291,
      height: 31,
      marginTop: 19,
      marginLeft: 42
    },
    rect8: {
      top: 0,
      left: 101,
      width: 212,
      height: 49,
      position: "absolute",
      backgroundColor: "rgba(84,152,197,1)",
      borderRadius: 100,
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 5,
      shadowOpacity: 1,
      shadowRadius: 0
    },
    signUp1: {
      top: 13,
      left: 19,
      position: "absolute",
      fontFamily: "System",
      color: "rgba(255,255,255,1)",
      height: 24,
      width: 375,
      textAlign: "center",
      fontSize: 20
    },
    rect8Stack: {
      width: 375,
      height: 49,
      marginTop: 210,
      marginLeft: 1
    },
    textInput1: {
      fontFamily: "System",
      color: "rgba(255,255,255,1)",
      height: 31,
      width: 300,
      fontSize: 16,
      marginTop: -257,
      marginLeft: 42, 
      left: 20
    },
    rect9: {
      width: 291,
      height: 1,
      backgroundColor: "#E6E6E6",
      opacity: 0.5,
      marginLeft: 42, 
      left: 20
    },
    textInput2: {
      top: 0,
      left: 20,
      position: "absolute",
      fontFamily: "System",
      color: "rgba(255,255,255,1)",
      height: 31,
      width: 300,
      fontSize: 16
    },
    rect10: {
      top: 30,
      left: 20,
      width: 291,
      height: 1,
      position: "absolute",
      backgroundColor: "#E6E6E6",
      opacity: 0.5
    },
    textInput2Stack: {
      width: 291,
      height: 31,
      marginTop: 3,
      marginLeft: 42
    },
    rect11: {
      width: 291,
      height: 1,
      backgroundColor: "#E6E6E6",
      opacity: 0.5,
      marginTop: 34,
      marginLeft: 42, 
      left: 20
    },
    textInput3: {
      fontFamily: "System",
      color: "rgba(255,255,255,1)",
      height: 31,
      width: 300,
      fontSize: 16,
      marginTop: -32,
      marginLeft: 42, 
      left: 20
    },
    textInput4: {
      fontFamily: "System",
      color: "rgba(255,255,255,1)",
      height: 31,
      width: 300,
      fontSize: 16,
      marginTop: 2,
      marginLeft: 42, 
      left: 20
    },
    rect12: {
      width: 291,
      height: 1,
      backgroundColor: "#E6E6E6",
      opacity: 0.5,
      marginLeft: 42, 
      left: 20
    },
    rect13: {
      top: 30,
      left: 20,
      width: 291,
      height: 1,
      position: "absolute",
      backgroundColor: "#E6E6E6",
      opacity: 0.5
    },
    textInput5: {
      top: 0,
      left: 20,
      position: "absolute",
      fontFamily: "System",
      color: "rgba(255,255,255,1)",
      height: 31,
      width: 300,
      fontSize: 16   
    },
    rect13Stack: {
      width: 291,
      height: 31,
      marginTop: 2,
      marginLeft: 42
    }
})
