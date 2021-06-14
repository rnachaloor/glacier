//Imports
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import PropTypes from 'prop-types';
import firestore, { firebase } from '@react-native-firebase/firestore';
import {loggedIn, userId, user, name, firstName, lastName} from "../screens/LoginScreen";
import Icon from "react-native-vector-icons/Ionicons";

export default class Version extends React.Component {

    constructor(props) {
      super(props)
    }

    render(props) {
      return (
        <View style={styles.container}>
      <Text style={styles.text}>Version and License</Text>
      <Text style={styles.version11}>Version: 1.1 - 6/15/2021</Text>
      <Text style={styles.licenseGpl30}>
        License: General Public License v3.0 (GPL 3.0)
      </Text>
      <Image
        source={require('../glacier-logos_white.png')}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
        
      );
    }
}

//Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(20,29,40,1)"
      },
      text: {
        fontFamily: "System",
        color: "rgba(255,255,255,1)",
        height: 56,
        width: 375,
        fontSize: 35,
        textAlign: "center",
        marginTop: 24,
        left: 20, 
        fontWeight: "bold"
      },
      version11: {
        fontFamily: "System",
        color: "rgba(255,255,255,1)",
        height: 21,
        width: 375,
        fontSize: 14,
        textAlign: "center",
        left: 20
      },
      licenseGpl30: {
        fontFamily: "System",
        color: "rgba(255,255,255,1)",
        height: 21,
        width: 375,
        fontSize: 14,
        textAlign: "center",
        left: 20
      },
      image: {
        width: 200,
        height: 200,
        marginTop: 1,
        marginLeft: 88,
        left: 20
      }
  });