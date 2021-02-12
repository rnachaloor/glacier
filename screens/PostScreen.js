import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform
} from "react-native";
import firestore, { firebase } from '@react-native-firebase/firestore';
import {loggedIn, userId, user, name, firstName, lastName} from "./LoginScreen";
import { Tile } from "react-native-elements";

const PostScreen = ({navigation}) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("")

  function submit() {
    let conditionOne = content == "" || content == " "
    let conditionTwo = title == "" || title == " "
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
        title: title, 
        content: content, 
        firstName: firstName,
        lastName: lastName,
        username: user,
        likes: 0,
        time: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.postTitleContainer}>
        {/*<Text style={styles.postTitleHeading}>Post Title:</Text>*/}
        <TextInput
          placeholder="Post Title"
          style={styles.postTitle}
          onChangeText={(value) => setTitle(value)}
        ></TextInput>
      </View>
      <View style={styles.group}>
       {/* <Text style={styles.postContentHeading}>Post Content:</Text> */}
        <TextInput
          placeholder="Post Content"
          multiline={true}
          numberOfLines={7}
          maxLength={250}
          style={styles.postContent}
          onChangeText={(value) => setContent(value)}
        ></TextInput>
      </View>
      <View style={styles.group2}>
        <TouchableOpacity style={styles.button} onPress={() => submit()}>
          <Text style={styles.post2}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  postTitleContainer: {
    width: 332,
    height: 75,
    marginTop: 100,
    alignSelf: "center"
  },
  postTitleHeading: {
    fontFamily: "System",
    color: "#121212",
    fontSize: 24
  },
  postTitle: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 32,
    color: "#121212",
    width: 332,
    height: 45,
  },
  group: {
    width: 332,
    height: 383,
    marginTop: 2,
    marginLeft: 40
  },
  postContentHeading: {
    fontFamily: "System",
    color: "#121212",
    fontSize: 24
  },
  postContent: {
    fontFamily: "System",
    fontSize: 24,
    color: "#121212",
    width: 332,
    height: 462
  },
  group2: {
    width: 332,
    height: 58,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 10,
    marginLeft: 45
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
    fontSize: 24,
    color: "#121212",
    marginTop: 15,
    marginLeft: 140
  }
});

export default PostScreen;
