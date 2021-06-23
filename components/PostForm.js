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
import Svg, { Ellipse } from "react-native-svg";
import { CheckBox } from "react-native-elements";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class PostForm extends React.Component {

    constructor(props) {
      super(props)
    }

    state = {
        title: "",
        content: ""
    }
    
    async getData(param) {
      let token = await AsyncStorage.getItem(param);
      return token;
    }

    //takes the data in the form and puts it in the database
    async submit() {
        const first = await this.getData("first");
        const last = await this.getData("last")
        const user = await this.getData("username")

        let conditionOne = this.state.content == "" || this.state.content == " "
        if (conditionOne) {
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
            content: this.state.content, 
            firstName: first,
            lastName: last,
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
         <View style={styles.container}>
      <View style={styles.ellipseRow}>
      <Image style={styles.ellipse} source={require('../profile_icon.png')} resizeMode='contain'/>  
        <TextInput
          placeholder="Share your thoughts with the world..."
          placeholderTextColor = "white"
          style={styles.textInput1}
          multiline={true}
          onChangeText={(value) => this.state.content = value}
        ></TextInput>
      </View>
      
      <View style={styles.rect2Stack}>
        <TouchableOpacity style={styles.rect2} onPress={() => this.submit()}>
            <Text style={styles.post}>Post</Text>
        </TouchableOpacity>
      </View>
      
    </View>
      )}
}

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(20,29,40,1)"
  },
  ellipse: {
    position: 'absolute',
    left: -10,
    top: -300,
    width: 100
  },
  textInput1: {
    fontFamily: "System",
    position: "absolute",
    color: "rgba(255,255,255,1)",
    height: 330,
    width: 300,
    fontSize: 16,
    marginLeft: 11,
    marginTop: 4, 
    top: 35,
    left: 80,
    paddingRight: 10,
    ...Platform.select({
      ios: {
        top: 35,
        left: 80,
      },
      android: {
        top: -110,

      }
    })
  },
  ellipseRow: {
    height: 45,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 15,
    marginRight: 41
  },
  rect2: {
    top: 50,
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
    shadowRadius: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  post: {
    position: "absolute",
    fontFamily: "System",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold"
  },
  rect2Stack: {
    width:  375,
    height: 49,
    marginTop: 277,
    ...Platform.select({
      ios: {
        width: 375
      },
      android: {
       width: 400, 
       justifyContent: "center",
       alignItems: "center"
      }
    })
  },
  avatarText: {
    color: "white"
  }

});

//parameters
PostForm.propTypes = {
    style: PropTypes.object
}
