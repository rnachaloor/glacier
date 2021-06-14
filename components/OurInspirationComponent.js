import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Share, Image } from "react-native";
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-elements";
import firestore from '@react-native-firebase/firestore';
import Svg, { Ellipse } from "react-native-svg";

//class returns the blueprint for the OurInspiration screen
export default class OurInspiration extends React.Component {
    render(props) {
        return (
      <View style={styles.container}>
      <Text style={styles.text}>Our Inspiration</Text>
      <Text style={styles.version1}>
        Glaciers are infamous for possessing much more than what is seen on the
        surface. Industry professionals, for whom Glacier was designed, also
        exemplify this phenomenon. Glacier was designed. Giving users of Glacier
        the opportunity to find new jobs, enhance professional relationships, or
        even develop skills and techniques allow them to &quot;break the
        ice&quot; and as a paradigm, create a strong connection for future years
        to come.{"\n"}
        {"\n"}The intrinsic physical and digital phenomenon, in addition to this
        year&#39;s specification for mobile application development, made
        Glacier seem that much more of a fitting name.
      </Text>
      <View>
          <Image style={styles.logo} source={require('../glacier-logos_white.png')}/>
      </View>
    </View>
        );
    }
}

//styling
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
      version1: {
        fontFamily: "System",
        color: "rgba(255,255,255,1)",
        height: 251,
        width: 316,
        fontSize: 14,
        textAlign: "center",
        marginLeft: 30,
        left: 20
      },
      logo: {
        height: 150,
        width: 150,
        top: 25,
        left: 130
      }
});
