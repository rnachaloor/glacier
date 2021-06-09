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
            <TouchableOpacity>
              <Icon style={styles.icon2} name="chatbox-outline" color={likesIconColor} size={40} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.increaseLikes()}>
              <Icon style={styles.icon3} name={this.state.likesIconName} color={likesIconColor} size={40} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onShare()}>
              <Icon style={styles.icon4} name="md-share" color={likesIconColor} size={40} />
            </TouchableOpacity>
            <Text style={styles.commentTally}>0</Text>
            <Text style={styles.likeTally}>0</Text>
          </View>
          <View style={styles.rect2}></View>
        </View>);
      {/*
        <View style={[styles.container, this.props.style]}>
          <View style={styles.rect}>
            <View style={styles.ellipseRow}>
            <Avatar size="medium" rounded title={this.props.initial} overlayContainerStyle={styles.ellipse} activeOpacity={0.7} titleStyle={styles.avatarText}/>
              <View style={styles.namePlaceholderColumn}>
                <Text style={styles.namePlaceholder}>{this.props.name}</Text>
                <Text style={styles.usernamePlaceholder}>{this.props.username}</Text>
              </View>
            </View>
            <Text style={styles.titlePlaceholder}>{this.props.title}</Text>
            <Text style={styles.contentPlaceholder}>{this.props.content}</Text>
            <View style={styles.rect2Row}>
              <View style={styles.rect2}>
                <TouchableOpacity onPress={() => this.increaseLikes()}>
                  <Icon style={styles.rect3} name={this.state.likesIconName} color={likesIconColor} size={40} />
                </TouchableOpacity>
              </View>
              <Text style={styles.likes0}>Likes: {this.state.likes}</Text>
              <TouchableOpacity onPress={() => this.onShare()}>
                  <Icon style={styles.share} name="paper-plane-outline" color={likesIconColor} size={40} />
              </TouchableOpacity>
            </View>
          </View>
      </View>*/}
      
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
    color: "rgba(128,128,128,1)",
    fontSize: 20
  },
  icon3: {
    top: 115,
    left: 157,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 20
  },
  icon4: {
    top: 115,
    left: 250,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 20
  },
  commentTally: {
    top: 117,
    left: 87,
    position: "absolute",
    fontFamily: "nunito-regular",
    color: "#121212",
    height: 19,
    width: 16,
    fontSize: 16
  },
  likeTally: {
    top: 117,
    left: 179,
    position: "absolute",
    fontFamily: "nunito-regular",
    color: "#121212",
    height: 19,
    width: 20,
    fontSize: 16
  },
  testPostStack: {
    width: 328,
    height: 145,
    marginLeft: 23
  },
  rect2: {
    width: 375,
    height: 1,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 0.2,
    marginTop: 2
  }
  /*
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
    padding: 25
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
  },
  share: {
    width: 40,
    height: 40,
    marginLeft: 145
  }*/
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
