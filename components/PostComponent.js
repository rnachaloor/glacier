import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-elements";
import firestore from '@react-native-firebase/firestore';
import Svg, { Ellipse } from "react-native-svg";

export default class Post extends React.Component {
  
  isLikeOn = false
  likesIconName = "heart-outline"
  
  constructor(props) {
        super(props);
    }
  
  state = {
    likes: this.props.likes
  }

  increaseLikes = () => {
    console.log("Likes");
  }
  
  render(props) {
      let likesIconColor = "black"
      return (
        <View style={[styles.container, this.props.style]}>
          <View style={styles.rect}>
            <View style={styles.ellipseRow}>
            <Avatar size="large" rounded title={this.props.initial} overlayContainerStyle={styles.ellipse} activeOpacity={0.7} titleStyle={styles.avatarText}/>
              <View style={styles.namePlaceholderColumn}>
                <Text style={styles.namePlaceholder}>{this.props.name}</Text>
                <Text style={styles.usernamePlaceholder}>{this.props.username}</Text>
              </View>
            </View>
            <Text style={styles.titlePlaceholder}>{this.props.title}</Text>
            <Text style={styles.contentPlaceholder}>{this.props.content}</Text>
            <View style={styles.rect2Row}>
              <View style={styles.rect2}>
                <TouchableOpacity onClick={this.increaseLikes}>
                  <Icon style={styles.rect3} name={this.likesIconName} color={likesIconColor} size={40} />
                </TouchableOpacity>
              </View>
              <Text style={styles.likes0}>Likes: {this.state.likes}</Text>
            </View>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 337,
    height: 270,
    backgroundColor: "rgba(243,243,243,1)",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000000"
  },
  ellipse: {
    width: 40,
    height: 40,
    opacity: 0.5,
    marginTop: 1,
    backgroundColor: '#BDBDBD',
    padding: 38
  },
  namePlaceholder: {
    fontFamily: "System",
    color: "#121212",
    fontSize: 18
  },
  usernamePlaceholder: {
    fontFamily: "System",
    color: "#121212",
    fontSize: 14,
    marginTop: 4
  },
  namePlaceholderColumn: {
    width: 239,
    marginLeft: 20  
  },
  ellipseRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 26,
    marginRight: 24
  },
  titlePlaceholder: {
    fontFamily: "System",
    color: "#121212",
    height: 25,
    width: 287,
    textAlign: "center",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 26
  },
  contentPlaceholder: {
    fontFamily: "System",
    color: "#121212",
    height: 114,
    width: 287,
    fontSize: 16,
    marginTop: 9,
    marginLeft: 26
  },
  rect2: {
    width: 40,
    height: 40,
  },
  rect3: {
    width: 40,
    height: 40,
  },
  likes0: {
    fontFamily: "System",
    color: "#121212",
    fontSize: 16,
    marginLeft: 8,
    marginTop: 11
  },
  rect2Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 26,
    marginRight: 209
  },
  avatarText: {
    color: "white"
  }
});

Post.propTypes = {
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    initial: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired
}