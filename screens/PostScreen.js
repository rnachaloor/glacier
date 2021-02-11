import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

function PostScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.postTitleContainer}>
        <Text style={styles.postTitleHeading}>Post Title:</Text>
        <TextInput
          placeholder="Post Title"
          style={styles.postTitle}
        ></TextInput>
      </View>
      <View style={styles.group}>
        <Text style={styles.postContentHeading}>Post Title:</Text>
        <TextInput
          placeholder="Post Title"
          numberOfLines={7}
          maxLength={250}
          style={styles.postContent}
        ></TextInput>
      </View>
      <View style={styles.group2}>
        <TouchableOpacity style={styles.button}>
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
    marginTop: 80,
    alignSelf: "center"
  },
  postTitleHeading: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24
  },
  postTitle: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 332,
    height: 45
  },
  group: {
    width: 332,
    height: 383,
    marginTop: 2,
    marginLeft: 22
  },
  postContentHeading: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24
  },
  postContent: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 332,
    height: 462
  },
  group2: {
    width: 332,
    height: 58,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 113,
    marginLeft: 22
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
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 20,
    marginLeft: 151
  }
});

export default PostScreen;
