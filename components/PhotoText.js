//Imports
import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Share } from "react-native";
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-elements";
import firestore from '@react-native-firebase/firestore';
import Svg, { Ellipse } from "react-native-svg";

export default class PhotoText extends React.Component {

    constructor(props) {
        super(props);
    }

    render(props) {

        //JSX
        return(
        <View style={[styles.container, this.props.style]}>
            <View style={styles.ellipseRow}>
            <Avatar size="medium" rounded title={this.props.initial} overlayContainerStyle={styles.ellipse} activeOpacity={0.7} titleStyle={styles.avatarText}/>
                <View style={styles.usernameStackColumn}>
                <View style={styles.usernameStack}>
                    <Text style={styles.username}>{"@" + this.props.username}</Text>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <Text style={styles.loremIpsum}>
                    {this.props.content}
                </Text>
                </View>
            </View>
        </View>)
    }
}

//Styling
const styles = StyleSheet.create({
  container: {},
  ellipse: {
    width: 53,
    height: 52
  },
  username: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "system",
    color: "rgba(255,255,255,1)",
    height: 21,
    width: 88
  },
  title: {
    top: 0,
    left: 82,
    position: "absolute",
    fontFamily: "system",
    color: "rgba(255,255,255,1)",
    height: 21,
    width: 81
  },
  usernameStack: {
    width: 163,
    height: 21
  },
  loremIpsum: {
    fontFamily: "system",
    color: "rgba(255,255,255,1)",
    height: 80,
    width: 244
  },
  usernameStackColumn: {
    width: 244,
    marginLeft: 15,
    marginTop: 5
  },
  ellipseRow: {
    height: 106,
    flexDirection: "row"
  },
  avatarText: {
    color: "white"
  }
})

//Allows post data to get passed through into the component
PhotoText.propTypes = {
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    initial: PropTypes.string.isRequired
}