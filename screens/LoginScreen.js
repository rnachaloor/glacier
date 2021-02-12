import React from "react";
import { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Linking } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export let loggedIn = false;
export let userId = ""
export let user
export let name
export let firstName
export let lastName

const LoginScreen = ({navigation}) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function submit() {
        if ((username == "") || (password == "")) {
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
            const userInfo = firestore().collection('userInfo');
            const userInfoRes = await userInfo.where('username', '==', username).get();
            if (userInfoRes.empty) {
                Alert.alert(
                    "Username or password not in the database",
                    'Please check your username and password.',
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
                userInfoRes.forEach(doc => {
                    if ((doc.data().username == username) == (doc.data().password == password)) {
                        loggedIn = true;
                        userId = doc.id;
                        user = doc.data().username;
                        firstName = doc.data().firstName
                        lastName = doc.data().lastName
                        name = firstName + " " + lastName
                    } else {
                        Alert.alert(
                            "Username or password not in the database",
                            'Please check your username and password.',
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
                    }
                })
            }
        }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Login: </Text>
        <View style={styles.group}>
            <TextInput onChangeText={(value) => setUsername(value)} style={styles.textBoxes} placeholder="Username"/>
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

export default LoginScreen;

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
    }, 
    button: {
        alignItems: "center",
        width: 200,
        marginTop: 20,
        backgroundColor: "green",
        padding: 15,
        borderRadius: 50,
      },
})