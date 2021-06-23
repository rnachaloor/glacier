import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Share, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import PropTypes from 'prop-types';
import PhotoText from './PhotoText'
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-elements";
import firestore from '@react-native-firebase/firestore';
import Svg, { Ellipse } from "react-native-svg";
import { Platform } from "react-native";



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
            <Text style={styles.likeTally}>{this.state.likes}</Text>
            <TouchableOpacity style = {styles.finallikebutton} hitSlop = {styles.finallikehitslop} onPress={() => this.increaseLikes()}>
              <Icon style={styles.icon3} name={this.state.likesIconName} color={likesIconColor} size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.finalsharebutton} hitSlop = {styles.finalsharehitslop} onPress={() => this.onShare()}>
              <Icon style={styles.icon4} name="md-share" color={likesIconColor} size={40} />
            </TouchableOpacity>
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
    fontSize: 20,
    ...Platform.select({
      ios: {
        top: 115,
        left: 64
      },
      android: {
        top: 5, 
        left: 64
      }
    })
  },
  icon4: {
    top: 114,
    left: 142.5,
    position: "absolute",
    color: "white",
    fontSize: 20,
    ...Platform.select({
      ios: {
        top: 114, 
        left: 142.5
      },
      android: {
        top: 0,
        left: 142.5
      }
    })
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
  },
  buttonStyles: {
    ...Platform.select({
      ios: {

      },
      android: {
        flex: 1,
        backgroundColor: "red",
        width: 100,
        height: 100,
        zIndex: 10000
      }
    })
  },
  touchableopacityrange: {
    ...Platform.select({
      ios: {

      },
      android: {
        top: 1,
        bottom: 1, 
        left: 1,
        right: 1
      }
    })
   
  },
  likebuttonfixer: {
    ...Platform.select({
      ios: {

      },
      android: {
        zIndex: 1,
        position: "absolute"
      }
    })
  },
  likebuttonclick: {
    ...Platform.select({
    ios: {

    },
    android: {
      top: 115,
      left: 64,
      position: "absolute"
    }
  })
  },
  finallikebutton: {
    ...Platform.select({
    ios: {

    },
    android: {
      top: 110, 
      left: 0, 
      zIndex: 1,
      padding: 15
    }
  }) 
  },
  finallikehitslop: {
    ...Platform.select({
    ios: {

    },
    android: {
      right: -250, 
      left: -60
    }
  })
  },
  finalsharebutton: {
    ...Platform.select({
    ios: {

    },
    android: {
      top: 85, 
      left: 0, 
      zIndex: 1,
      padding: 10,
    }
  }) 
  },
  finalsharehitslop: {
    ...Platform.select({
    ios: {

    },
    android: {
      right: -155, 
      left: -135
    }
  })
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
