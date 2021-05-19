import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Image
} from "react-native";
import PropTypes from 'prop-types';
import firestore, { firebase } from '@react-native-firebase/firestore';
import {loggedIn, userId, user, name, firstName, lastName} from "../screens/LoginScreen";

export default class PostForm extends React.Component {

    constructor(props) {
      super(props)
    }

    state = {
        title: "",
        content: ""
    }
  
    //takes the data in the form and puts it in the database
    submit() {
        let conditionOne = this.state.content == "" || this.state.content == " "
        let conditionTwo = this.state.title == "" || this.state.title == " "
        if (conditionOne || conditionTwo) {
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
          firestore().collection('posts').add({
            title: this.state.title, 
            content: this.state.content, 
            firstName: firstName,
            lastName: lastName,
            username: user,
            likes: 0,
            time: firebase.firestore.FieldValue.serverTimestamp()
          })
        }

        Alert.alert(
          "Success",
          'Please refresh home screen to see post.',
          [
              {
                  text: 'Ok',
                  onPress: () => console.log("")
              }
          ],
          {
              cancelable: false
          }
        );
      }
    
    //renders the form to create a post
    render(props) {

        return (
            <View style={[styles.container, this.props.style]}>
              <TextInput placeholder="Post Title" style={styles.postTitle} onChangeText={(value) => this.state.title = value}></TextInput>
              <TextInput
                placeholder="Post Content"
                numberOfLines={7}
                multiline={true}
                style={styles.placeholder}
                onChangeText={(value) => this.state.content = value}
              ></TextInput>
              <View style={styles.group2}>
                <TouchableOpacity onPress={() => this.submit()} style={styles.button}>
                  <Text style={styles.post2}>Post</Text>
                </TouchableOpacity>
              </View>
            </View>
        );
    }
}

//styles
const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 20
    },
    postTitle: {
      fontFamily: "System",
      color: "#121212",
      height: 60,
      width: 332,
      fontSize: 28,
      fontWeight: 'bold',
      borderWidth: 1,
      borderColor: '#bfbfbf'
    },
    placeholder: {
      fontFamily: "System",
      color: "#121212",
      height: 380,
      width: 332,
      fontSize: 24,
      textAlign: "left",
      marginTop: 12,
      borderWidth: 1,
      borderColor: '#bfbfbf'
    },
    group2: {
      width: 332,
      height: 58,
      marginTop: 31
    },
    button: {
      width: 332,
      height: 58,
      backgroundColor: "rgba(255,255,255,1)",
      borderWidth: 1,
      borderColor: "#000000",
      borderRadius: 50
    },
    post2: {
      fontFamily: "System",
      color: "#121212",
      marginTop: 20,
      marginLeft: 151
    }
});

//parameters
PostForm.propTypes = {
    style: PropTypes.object
}
