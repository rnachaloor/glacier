import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Share } from "react-native";
import PropTypes from 'prop-types';
import PhotoText from './PhotoText'
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-elements";
import firestore from '@react-native-firebase/firestore';
import Svg, { Ellipse } from "react-native-svg";

export default class Post extends React.Component {
  
  //sets up likes system
  state = {
    likes: this.props.likes,
    isLikeOn: false,
    likesIconName: "heart-outline"
  }

   constructor(props) {
      super(props);
    }

  increaseLikes = async () => {
    let newCount, newBool, newIcon
    const document = firestore().collection('posts').doc(this.props.postId)
    if (!this.state.isLikeOn){
      newCount = this.state.likes + 1
      newBool = true
      newIcon = "heart"
    }
    else {
      newCount = this.state.likes - 1
      newBool = false,
      newIcon = "heart-outline"
    }
    const res = await document.update({likes: newCount})
    this.setState({
      likes: newCount,
      isLikeOn: newBool,
      likesIconName: newIcon
    })
  }

  async onShare() {
    try {
      const result = await Share.share({
        message:
          this.props.title + " | " + this.props.content,
      });
    } catch (error) {
      alert(error.message);
    }
  }
  
  //renders the blueprint for the post
  render(props) {
      let likesIconColor = "black"
      return (
        <View style={[styles.container, this.props.style]}>
          <View style={styles.testPostStack}>
            <PhotoText 
              style={styles.testPost}
              content={this.props.content}
              title={this.props.title}
              username={this.props.username}
              initial={this.props.initial}
            />
            <TouchableOpacity onPress={() => this.increaseLikes()}>
              <Icon style={styles.icon3} name={this.state.likesIconName} color={likesIconColor} size={40} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onShare()}>
              <Icon style={styles.icon4} name="md-share" color={likesIconColor} size={40} />
            </TouchableOpacity>
            <Text style={styles.likeTally}>{this.state.likes}</Text>
          </View>
          <View style={styles.rect2}></View>
        </View>);
      
      
  }
}

//styles
const styles = StyleSheet.create({
  container: {},
  testPost: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 145,
    width: 328
  },
  icon2: {
    top: 115,
    left: 65,
    position: "absolute",
    color: "white",
    fontSize: 20
  },
  icon3: {
    top: 115,
    left: 64,
    position: "absolute",
    color: "white",
    fontSize: 20
  },
  icon4: {
    top: 114,
    left: 142.5,
    position: "absolute",
    color: "white",
    fontSize: 20
  },
  commentTally: {
    top: 114.5,
    left: 95,
    position: "absolute",
    fontFamily: "System",
    color: "white",
    height: 19,
    width: 16,
    fontSize: 16
  },
  likeTally: {
    top: 115.5,
    left: 94,
    position: "absolute",
    fontFamily: "System",
    color: "white",
    height: 19,
    width: 20,
    fontSize: 16
  },
  testPostStack: {
    width: 328,
    height: 145,
    marginLeft: 23,
  },
  rect2: {
    width: 375,
    height: 1,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 0.2,
    marginTop: 2
  }
});

//parameters
Post.propTypes = {
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    initial: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired
}
