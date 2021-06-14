// Imports
import React, { useContext } from "react";
import { useState } from "react";
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./SignUpScreen";
import App from "../App";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../AuthProvider";

// Exports
export let loggedIn = false;
export let userId = ""
export let user
export let name
export let firstName
export let lastName
export function setLoggedIn(boolean) {
    loggedIn = boolean
}

export function setUser(newUser) {
  user = newUser;
}

export function setFirstName(newUser) {
  firstName = newUser;
}

export function setLastName(newUser) {
  lastName = newUser;
}

export function updateName() {
  name = firstName + " " + lastName
}
// Exporting the LoginScreen
export const LoginScreen = ({navigation}) => {
    
    // Uses useState to have state variables in these functional components
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext);

    async function submit() {
      login(email, password);
      const userInfo = firestore().collection('userInfo');
      const userInfoRes = await userInfo.where('email', '==', email).get();

      userInfoRes.forEach(doc => {
        if ((doc.data().email == email) == (doc.data().password == password)) {
            // Affirms that the fields are all identified and true if the user and pass are confirmed
            loggedIn = true;
            userId = doc.id;
            user = doc.data().username;
            firstName = doc.data().firstName
            lastName = doc.data().lastName
            name = firstName + " " + lastName
            login(email, password);
        } else {
            // Alert message for when the selection above is not true
            Alert.alert(
                "Username or password not in the database",
                'Please check your username and password.',
                [
                    {
                        text: 'Ok',
                        // Writes "Try Again" to log on the debugging console
                        onPress: () => console.log("Trying Again")
                    }
                ],
                {
                    // Not cancellable
                    cancelable: false
                }
            );
          }
      })
    }

    // Returning an implicit submission
    async function submitOld() {
        if ((username == "") || (password == "")) {
            // Alert Message
            Alert.alert(
                "Missing Fields",
                'Please fill out every field.',
                [
                    {
                        text: 'Ok',
                        // Writes "Try Again" to log on the debugging console
                        onPress: () => console.log("Trying Again")
                    }
                ],
                {
                    // Not cancelable
                    cancelable: false
                }
            );
        } else {
            // Creating new constants
            const userInfo = firestore().collection('userInfo');
            const userInfoRes = await userInfo.where('email', '==', email).get();
            // Selection for when the information hasn't been procured
            if (userInfoRes.empty) {
                // Another alert message
                Alert.alert(
                    "Username or password not in the database",
                    'Please check your username and password.',
                    [
                        {
                            text: 'Ok',
                            // Writes "Try Again" to log on the debugging console
                            onPress: () => console.log("Trying Again")
                        }
                    ],
                    {
                        // Not cancelable
                        cancelable: false
                    }
                );
            } else {
                // Checks with the database for the correct username and password
                userInfoRes.forEach(doc => {
                    if ((doc.data().email == email) == (doc.data().password == password)) {
                        // Affirms that the fields are all identified and true if the user and pass are confirmed
                        loggedIn = true;
                        userId = doc.id;
                        user = doc.data().username;
                        firstName = doc.data().firstName
                        lastName = doc.data().lastName
                        name = firstName + " " + lastName
                        login(email, password);
                    } else {
                        // Alert message for when the selection above is not true
                        Alert.alert(
                            "Username or password not in the database",
                            'Please check your username and password.',
                            [
                                {
                                    text: 'Ok',
                                    // Writes "Try Again" to log on the debugging console
                                    onPress: () => console.log("Trying Again")
                                }
                            ],
                            {
                                // Not cancellable
                                cancelable: false
                            }
                        );
                    }
                })
            }
        }
    }

    // Shows the login form
    return (
    <View style={styles.container}>
    <Text style={styles.loremIpsum}></Text>
    <View style={styles.rect1Stack}>
      <View style={styles.rect1}></View>
      <TouchableOpacity onPress = {() => navigation.navigate("Sign Up")}>
      <Text style={styles.signUp}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => submit()} style={styles.button}>
      <Text style={styles.signIn2}>Sign In</Text>
    </TouchableOpacity>
    <Text style={styles.signIn3}>Sign In</Text>
    <View style={styles.rect2}></View>
    <TextInput autoCapitalize="none" onChangeText={(value) => setEmail(value)} placeholder="Email" placeholderTextColor = "white" style={styles.textInput}></TextInput>
    <TextInput autoCapitalize="none" onChangeText={(value) => setPassword(value)} placeholder="Password" placeholderTextColor = "white" style={styles.textInput1} secureTextEntry = {true}></TextInput>
    <View style={styles.rect3}></View>
  </View>
    );
  }

  // New navigator constant
  const Stack = createStackNavigator();

  // Returning the text boxes and links to the LoginScreen Page when accessed
  export const LoginStackScreen = () => {
    return (
      //used to be continer nav
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login'}}/>
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Home" component={App}/>
      </Stack.Navigator>
    );
  }

// Exporting the screen
export default LoginStackScreen

// Styling 
const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: "rgba(20,29,40,1)"
      },
      loremIpsum: {
        fontFamily: "System",
        color: "#121212",
      },
      
      rect1: {
        top: 0,
        width: 500,
        height: 93,
        position: "absolute",
        backgroundColor: "rgba(46,66,91,1)",
        left: 0
      },
      signUp: {
        top: 50,
        left: 317,
        position: "absolute",
        fontFamily: "System",
        color: "white",
        height: 44,
        width: 88,
        fontSize: 20,
        textAlign: "center"
      },
      rect1Stack: {
        top: 0,
        left: 0,
        width: 375,
        height: 94,
        position: "absolute"
      },
      // Central blue button
      button: {
        top: 293,
        width: 212,
        height: 49,
        left: 100,
        position: "absolute",
        backgroundColor: "rgba(84,153,199,1)",
        borderRadius: 100,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
          width: 3,
          height: 3
        },
        elevation: 5,
        shadowOpacity: 0.5,
        shadowRadius: 0,
        right: 81
      },
      signIn2: {
        fontFamily: "System",
        color: "rgba(255,255,255,1)",
        fontSize: 17,
        marginTop: 13,
        marginLeft: 79,
        fontWeight: "bold",
        marginRight: 77
      },
      // Top SignIN
      signIn3: {
        top: 118,
        position: "absolute",
        fontFamily: "System",
        color: "rgba(255,255,255,1)",
        height: 45,
        width: 135,
        fontSize: 35,
        textAlign: "center",
        left: 140,
        fontWeight: "bold",
      },
      // Bar under Username
      rect2: {
        top: 216,
        left: 55,
        width: 302,
        height: 1,
        position: "absolute",
        backgroundColor: "#E6E6E6",
        opacity: 0.5
      },
      textInput: {
        top: 187,
        left: 55,
        position: "absolute",
        fontFamily: "System",
        color: "rgba(255,255,255,1)",
        height: 24,
        width: 300,
        fontSize: 16, 
      },
      textInput1: {
        top: 225,
        left: 55,
        position: "absolute",
        fontFamily: "System",
        color: "rgba(255,255,255,1)",
        height: 24,
        width: 300,
        fontSize: 16
      },
      // Bar under password
      rect3: {
        top: 254,
        left: 55,
        width: 302,
        height: 1,
        position: "absolute",
        backgroundColor: "#E6E6E6",
        opacity: 0.5
      }
});
