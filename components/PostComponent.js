import React, { Component, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/Ionicons";
import firestore from '@react-native-firebase/firestore';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        let likesIconName = "thumbs-up-outline"
        let likesIconColor = "black"
        return (
            <View style={[styles.container]}>
              <View style={styles.rect}>
                <Text style={styles.insertTitleHere}>{this.props.title}</Text>
                <Text style={styles.insertContentHere}>{this.props.content}</Text>
                <View style={styles.rect2Row}>
                  <Icon style={styles.rect2} name={likesIconName} color={likesIconColor} size={26} />
                  <Text style={styles.likes0}>Likes: 0</Text>
                  <Text style={styles.userName}>UserName</Text>
                </View>
              </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {},
    rect: {
      width: 345,
      height: 191,
      backgroundColor: "rgba(196,234,249,1)"
    },
    insertTitleHere: {
      fontFamily: "System",
      color: "#121212",
      fontSize: 18,
      height: 24,
      width: 328,
      textAlign: "center",
      marginTop: 10,
      marginLeft: 8
    },
    insertContentHere: {
      fontFamily: "System",
      color: "#121212",
      fontSize: 14,
      width: 329,
      height: 106,
      marginTop: 6,
      marginLeft: 7
    },
    rect2: {
      marginTop: 5
    },
    likes0: {
      fontFamily: "System",
      color: "#121212",
      fontSize: 16,
      marginLeft: 9,
      marginTop: 12
    },
    userName: {
      fontFamily: "System",
      color: "#121212",
      fontSize: 16,
      height: 20,
      width: 204,
      textAlign: "right",
      marginLeft: 16,
      marginTop: 12
    },
    rect2Row: {
      height: 43,
      flexDirection: "row",
      marginLeft: 8,
      marginRight: 9
    }
  });

Post.propTypes = {
    title: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}