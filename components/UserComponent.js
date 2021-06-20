import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Share } from "react-native";
import PropTypes from 'prop-types';
import PhotoText from './PhotoText'
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-elements";
import firestore from '@react-native-firebase/firestore';
import Svg, { Ellipse } from "react-native-svg";

export default class UserItem extends React.Component {
  //renders the blueprint for the post
  render(props) {
      return (
        <View style={[styles.container]}>
          <View style={styles.rect}>
            <View style={styles.content}>
              <View style={styles.ellipseRow}>
                <Svg viewBox="0 0 49.54 50.33" style={styles.ellipse}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(230, 230, 230,1)"
                    cx={25}
                    cy={25}
                    rx={25}
                    ry={25}
                  ></Ellipse>
                </Svg>
                <Text style={styles.nameOfUser}>Name Of User</Text>
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
      height: 50
    },
    nameOfUser: {
      fontFamily: "roboto-regular",
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
    
}
