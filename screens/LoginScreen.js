// Imports
import React from "react";
import { useState } from "react";
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./SignUpScreen";
import App from "../App";

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
// Exporting the LoginScreen
export const LoginScreen = ({navigation}) => {
    
    // Uses useState to have state variables in these functional components
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Returning an implicit submission
    async function submit() {
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
            const userInfoRes = await userInfo.where('username', '==', username).get();
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
                    if ((doc.data().username == username) == (doc.data().password == password)) {
                        // Affirms that the fields are all identified and true if the user and pass are confirmed
                        loggedIn = true;
                        userId = doc.id;
                        user = doc.data().username;
                        firstName = doc.data().firstName
                        lastName = doc.data().lastName
                        name = firstName + " " + lastName
                        navigation.navigate("Home")
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
        <Text style={styles.titleText}>Login: </Text>
        <View style={styles.group}>
            
            <TextInput autoCapitalize="none" autoCorrect={false} onChangeText={(value) => setUsername(value)} style={styles.textBoxes} placeholder="Username"/>
        </View>
        
        <View style={styles.group}>
            <TextInput onChangeText={(value) => setPassword(value)} style={styles.textBoxes} placeholder="Password" style={styles.passwordBox} secureTextEntry={true} textContentType="password"/>
        </View>
        
        <Text onPress={() => navigation.navigate("Sign Up")}>
            Don't have an account? Sign up here!
        </Text>
        
        <TouchableOpacity  title="Submit" onPress={() => submit()} style={styles.button}>
            <Text>
                Submit
            </Text>
        </TouchableOpacity> 
      </View>
    );
  }

  // New navigator constant
  const Stack = createStackNavigator();

  // Returning the text boxes and links to the LoginScreen Page when accessed
  const LoginStackScreen = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login'}}/>
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Home" component={App}/>
      </Stack.Navigator>
      </NavigationContainer>
    );
  }

// Exporting the screen
export default LoginStackScreen

// Styling 
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
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
        alignItems: "center", 
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
    }, 
    button: {
        alignItems: "center",
        width: 200,
        marginTop: 20,
        backgroundColor: '#4886D9',
        padding: 15,
        borderRadius: 50,
    },
    logo: {
        height: 100,
        width: 100
    }
})
