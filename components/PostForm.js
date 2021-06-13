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
            /*<View style={[styles.container, this.props.style]}>
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
            */

           <View style={styles.container}>
           <View style={styles.rect1}>
             <View style={styles.resetRow}>
               <Text style={styles.reset}>Reset</Text>
               <Text style={styles.post}>Post</Text>
             </View>
           </View>
           <View style={styles.ellipseRow}>
             <Svg viewBox="0 0 45.43 44.57" style={styles.ellipse}>
               <Ellipse
                 stroke="rgba(230, 230, 230,1)"
                 strokeWidth={0}
                 fill="rgba(230, 230, 230,1)"
                 cx={23}
                 cy={22}
                 rx={23}
                 ry={22}
               ></Ellipse>
             </Svg>
             <TextInput
               placeholder="Enter text here"
               style={styles.textInput1}
             ></TextInput>
           </View>
         </View>
        );
    }
}

//styles
const styles = StyleSheet.create({
    /*container: {
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
    */

   container: {
    flex: 1,
    backgroundColor: "rgba(20,29,40,1)"
  },
  rect1: {
    width: 375,
    height: 93,
    backgroundColor: "rgba(46,66,91,1)",
    flexDirection: "row"
  },
  reset: {
    fontFamily: "System",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 84,
    textAlign: "center",
    fontSize: 20
  },
  post: {
    fontFamily: "System",
    color: "rgba(255,255,255,1)",
    height: 37,
    width: 84,
    textAlign: "center",
    fontSize: 20,
    marginLeft: 207
  },
  resetRow: {
    height: 37,
    flexDirection: "row",
    flex: 1,
    marginTop: 56
  },
  ellipse: {
    width: 45,
    height: 45
  },
  textInput1: {
    fontFamily: "System",
    color: "rgba(255,255,255,1)",
    height: 38,
    width: 263,
    fontSize: 16,
    marginLeft: 11,
    marginTop: 4
  },
  ellipseRow: {
    height: 45,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 15,
    marginRight: 41
  }

});

//parameters
PostForm.propTypes = {
    style: PropTypes.object
}
