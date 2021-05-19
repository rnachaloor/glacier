import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Share, Image } from "react-native";
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-elements";
import firestore from '@react-native-firebase/firestore';
import Svg, { Ellipse } from "react-native-svg";

//returns blueprint for instructions card
export default class InstructionCard extends React.Component {
    render(props) {
        return (
            <View style={[styles.container, this.props.style]}>
              <View style={styles.logoStack}>
                <Image source={require('../glacier-logos_black.png')} style={styles.logo}/>
                <View style={styles.bg}>
                  <Text style={styles.questionPlaceholder}>{this.props.question}</Text>
                  <Text style={styles.answerPlaceholder}>{this.props.answer}</Text>
                </View>
              </View>
            </View>
        );
    }
}

//styles
const styles = StyleSheet.create({
    container: {},
    logo: {
      top: 7,
      left: 110,
      width: 100,
      height: 100,
      position: "absolute",
    },
    bg: {
      top: 0,
      width: 325,
      height: 350,
      position: "absolute",
      borderWidth: 1,
      borderColor: "#000000",
      left: 0
    },
    questionPlaceholder: {
      fontFamily: "System",
      color: "#121212",
      fontSize: 20,
      marginTop: 95,
      marginLeft: 11
    },
    answerPlaceholder: {
      fontFamily: "System",
      color: "#121212",
      height: 240,
      width: 310,
      fontSize: 14,
      marginLeft: 11
    },
    logoStack: {
      width: 325,
      height: 340
    }
});

//parameters
InstructionCard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}
