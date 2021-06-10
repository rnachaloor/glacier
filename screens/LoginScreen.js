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
import Icon from "react-native-vector-icons/Ionicons";

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
    /*
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
      */
     /*
      <View style={styles.container}>
      <Text style={styles.loremIpsum}></Text>
      <View style={styles.rect1}>
        <View style={styles.image1Stack}>
          <TouchableOpacity onPress = {() => navigation.navigate("Sign Up")}>
            <Text  style={styles.signUp}>Sign Up</Text>
          </TouchableOpacity>  
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.signIn2}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.or1}>- OR -</Text>
      <Text style={styles.signInWith}>Sign in with</Text>
      <TouchableOpacity>
        <Icon name="logo-facebook" style={styles.icon2}/>
      </TouchableOpacity>  
      <TextInput
        style={styles.materialRightIconTextbox}
      ></TextInput>
      <TextInput
        style={styles.materialUnderlineTextbox}
      ></TextInput>
      <TouchableOpacity>
        <Icon name="logo-twitter" style={styles.icon3}/>
      </TouchableOpacity>
      <Text style={styles.signIn3}>Sign In</Text>
    </View>
    );
    */
    <View style={styles.container}>
    <Text style={styles.loremIpsum}></Text>
    <View style={styles.rect1Stack}>
      <View style={styles.rect1}></View>
      <TouchableOpacity>
      <Text style={styles.signUp}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => submit()} style={styles.button}>
      <Text style={styles.signIn2}>Sign In</Text>
    </TouchableOpacity>
    <Text style={styles.or1}>- OR -</Text>
      <Text style={styles.signInWith}>Sign in with</Text>
    <TouchableOpacity>
        <Icon name="logo-facebook" style={styles.icon2}/>
    </TouchableOpacity>
    <TouchableOpacity>
        <Icon name="logo-twitter" style={styles.icon3}/>
    </TouchableOpacity>
    <Text style={styles.signIn3}>Sign In</Text>
    <View style={styles.rect2}></View>
    <TextInput onChangeText={(value) => setUsername(value)} placeholder="Username" placeholderTextColor = "white" style={styles.textInput}></TextInput>
    <TextInput onChangeText={(value) => setPassword(value)} placeholder="Password" placeholderTextColor = "white" style={styles.textInput1}></TextInput>
    <View style={styles.rect3}></View>
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
    /*
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
    */
   /*
    container: {
        flex: 1,
        backgroundColor: "rgba(21,67,96,1)",
      },
      loremIpsum: {
        fontFamily: "System",
        color: "#121212"
      },
      rect1: {
        top: 0,
        width: 500,
        height: 93,
        position: "absolute",
        backgroundColor: "rgba(84,153,199,1)",
        left: 0
      },
      image1: {
        top: 0,
        left: 0,
        width: 200,
        height: 62,
        position: "absolute"
      },
      signUp: {
        top: 18,
        left: 230,
        position: "absolute",
        fontFamily: "System",
        color: "rgba(5,11,56,1)",
        height: 44,
        width: 88,
        fontSize: 20,
        textAlign: "center"
      },
      image1Stack: {
        width: 300,
        height: 62,
        marginTop: 31,
        marginLeft: 88
      },
      button: {
        top: 276,
        left: 81,
        width: 212,
        height: 49,
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
        shadowRadius: 0
      },
      signIn2: {
        fontFamily: "System",
        color: "rgba(255,255,255,1)",
        fontSize: 18,
        marginTop: 14,
        marginLeft: 79
      },
      or1: {
        top: 368,
        left: 171,
        position: "absolute",
        fontFamily: "System",
        color: "rgba(255,255,255,1)"
      },
      signInWith: {
        top: 404,
        left: 157,
        position: "absolute",
        fontFamily: "System",
        color: "rgba(255,255,255,1)",
        fontSize: 12
      },
      icon2: {
        top: 429,
        left: 199,
        position: "absolute",
        color: "rgba(255,255,255,1)",
        fontSize: 50
      },
      materialRightIconTextbox: {
        height: 43,
        width: 302,
        position: "absolute",
        left: 37,
        top: 206
      },
      materialUnderlineTextbox: {
        height: 43,
        width: 302,
        position: "absolute",
        left: 37,
        top: 163
      },
      icon3: {
        top: 429,
        left: 139,
        position: "absolute",
        color: "rgba(255,255,255,1)",
        fontSize: 50
      },
      signIn3: {
        top: 118,
        flex: 1,
        alignItems: 'center',
        fontFamily: "System",
        color: "rgba(255,255,255,1)",
        height: 45,
        width: 135,
        fontSize: 28
      }
      */
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
      or1: {
        top: 375,
        left: 186,
        position: "absolute",
        fontFamily: "System",
        fontWeight: "bold",
        color: "rgba(255,255,255,1)"
      },
      signInWith: {
        top: 411,
        left: 174,
        position: "absolute",
        fontFamily: "System",
        color: "rgba(255,255,255,1)",
        fontWeight: "bold",
        fontSize: 12
      },
      // Facebook
      icon2: {
        top: -5,
        left: 213,
        position: "absolute",
        color: "rgba(255,255,255,1)",
        fontSize: 50
      },
      // Twitter
      icon3: {
        top: -5,
        left: 158,
        position: "absolute",
        color: "rgba(255,255,255,1)",
        fontSize: 50
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
        height: 24,
        width: 120,
        fontSize: 16, 
      },
      textInput1: {
        top: 225,
        left: 55,
        position: "absolute",
        fontFamily: "System",
        color: "rgba(255,255,255,1)",
        height: 24,
        width: 83,
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
