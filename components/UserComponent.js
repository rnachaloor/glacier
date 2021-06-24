import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Share } from "react-native";
import PropTypes from 'prop-types';
import PhotoText from './PhotoText'
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-elements";
import firestore from '@react-native-firebase/firestore';
import Svg, { Ellipse } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

export default class UserItem extends React.Component {
  //renders the blueprint for the post
  render(props) {

      return (
        <View style={[styles.container]}>
            <View style={styles.rect}>
              <View style={styles.content}>
                <View style={styles.ellipseRow}>
                <Avatar size="medium" rounded title={this.props.initial} overlayContainerStyle={styles.ellipse} activeOpacity={0.7} titleStyle={styles.avatarText}/>
                  <Text style={styles.nameOfUser}>{this.props.username}</Text>
                </View>
              </View>
            </View>
        </View>
      );
      
      
  }
}

//styles
const styles = StyleSheet.create({
    container: {},
    rect: {
      width: 316,
      height: 66
    },
    content: {
      width: 50,
      height: 50,
      flexDirection: "row",
      marginTop: 8,
      marginLeft: 9
    },
    ellipse: {
      width: 50,
      height: 50,
      backgroundColor: "gray"
    },
    nameOfUser: {
      fontFamily: "System",
      color: "rgba(255,255,255,1)",
      fontSize: 21,
      marginLeft: 10,
      marginTop: 13
    },
    ellipseRow: {
      height: 50,
      flexDirection: "row",
      flex: 1,
      marginRight: -141
    }
});

//parameters
UserItem.propTypes = {
    username: PropTypes.string.isRequired,
    initial: PropTypes.string.isRequired
}
