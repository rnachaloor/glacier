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

export default class TermsOfService extends React.Component {

    constructor(props) {
      super(props)
    }

    render(props) {
      return (
        <View style={[styles.container]}>
          <Text style={styles.glacier}>
            Glacier was programmed and is owned by Rohit Nachaloor, Aakash Reddy,
            and Aryan Shah. Glacier was distributed under the GPL version 3 license,
            which is an open-source license that allows anyone to download and run,
            modify, freely redistribute, and distribute modified versions of the app
            as long as the modified works are also distributed under the same GPL
            license. The creators of this app are not responsible for any harassment
            that occurs on this app, although measures will be taken against
            offending users if harassment is reported. The creators of the app are
            also not responsible for any inappropriate use of this app. If you are
            concerned with a user's comments or remarks on the app, please
            mention this in our Report a Problem page under settings.{"\n"}
            {"\n"}Thank you!
          </Text>
          <Text style={styles.text}>Terms and Conditions</Text>
          <View>
            <Image style={styles.logo} source={require('../glacier-logos_white.png')}/>
          </View>
        </View>
        
      );
    }
}

//Styling
const styles = StyleSheet.create({
    container: {
      width: 312,
      height: 459,
      alignSelf: 'center',
      alignItems: 'center',
      alignContent: 'center',
      paddingTop: 20
    },
    glacier: {
      fontFamily: "System",
      color: "white",
      width: 312,
      height: 420,
      fontSize: 14,
      textAlign: "left",
      lineHeight: 23,
      marginTop: 61,
    },
    text: {
      fontFamily: "System",
      color: "white",
      fontSize: 25,
      marginTop: -459,
      marginLeft: 0
    },
    logo: {
      height: 100,
      width: 100,
      marginTop: 420,
      top: 20
    }
  });
