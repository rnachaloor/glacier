//Imports
import React, { useState, Component, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Switch, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { Avatar } from "react-native-elements";
import {loggedIn, userId, user, name, firstName, lastName, setLoggedIn} from "./LoginScreen";
import firestore from '@react-native-firebase/firestore';
import EntypoIcon from "react-native-vector-icons/Entypo";
import { AuthContext } from "../AuthProvider";

//Signs the user out by setting loggedIn boolean to false
//Reroutes back to login page
const signOut = () => {
  setLoggedIn(false)
  navigation.navigate("Login")
}

//When the Terms Of Service button is clicked, app reroutes to Terms Of Service page
const termsOfService = () => {
  navigation.navigate("ToS")
}

//When the Report A Problem button is clicked, app reroutes to Report A Problem page
const report = () => {
  navigation.navigate("Report")
}

//When the FAQ button is clicked, app reroutes to FAQ page
const question = () => {
  navigation.navigate("Question")
}

//When the Instructions button is clicked, app reroutes to Instructions page
const instructions = () => {
  navigation.navigate("Instructions")
}

//JSX
const SettingScreen = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
    <View style={styles.rect2}></View>
    <View style={styles.rect3StackStack}>
      <TouchableOpacity onPress = {() => navigation.navigate("Question")}>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}></View>
          <EntypoIcon name="chevron-right" style={styles.icon2}></EntypoIcon>
        </View>
        <Text style={styles.faq}>Frequently Asked Questions</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.rect4}></View>
    <View style={styles.rect5}></View>
    <View style={styles.rect6}></View>
    <View style={styles.rect7StackStack}>
      <TouchableOpacity>
        <View style={styles.rect7}></View>
        <View style={styles.rect7Stack}>
          <TouchableOpacity onPress = {() => navigation.navigate("Inspiration")}>
            <EntypoIcon name="chevron-right" style={styles.icon6}></EntypoIcon>
            <Text style={styles.ourInspiration}>Our Inspiration</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.instructionsRow}>
      <TouchableOpacity onPress = {() => navigation.navigate("Instructions")}>
      <Text style={styles.instructions}>Instructions</Text>
      <EntypoIcon name="chevron-right" style={styles.icon}></EntypoIcon>
      </TouchableOpacity>
    </View>
      <View style={styles.reportAProblemRow}>
        <TouchableOpacity onPress = {() => navigation.navigate("Report")}>
        <Text style={styles.reportAProblem}>Report A Problem</Text>
        <EntypoIcon name="chevron-right" style={styles.icon3}></EntypoIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.termsAndConditionsRow}>
        <TouchableOpacity onPress = {() => navigation.navigate("ToS")}>
        <Text style={styles.termsAndConditions}>Terms And Conditions</Text>
        <EntypoIcon name="chevron-right" style={styles.icon4}></EntypoIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.versionAndLicenseRow}>
      <TouchableOpacity onPress = {() => navigation.navigate("Version")}>
        <Text style={styles.versionAndLicense}>Version and License</Text>
        <EntypoIcon name="chevron-right" style={styles.icon5}></EntypoIcon>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
      onPress={() => {
        setLoggedIn(false);
        logout();
      }}>
        <Text style={styles.signOut}>Sign Out</Text>
      </TouchableOpacity>
  </View>
  );
}

//Exports screen
export default SettingScreen;

//Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(20,29,40,1)"
  },
  rect: {
    width: 375,
    height: 93,
    backgroundColor: "#2e425b"
  },
  rect2: {
    width: 500,
    height: 1,
    backgroundColor: "#E6E6E6",
    opacity: 0.1,
    marginTop: 107
  },
  rect3: {
    top: 43,
    left: 0,
    width: 500,
    height: 1,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0.1
  },
  icon2: {
    top: 2,
    left: 357,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    width: 40,
    height: 46
  },
  rect3Stack: {
    top: 0,
    left: 0,
    width: 375,
    height: 46,
    position: "absolute"
  },
  faq: {
    top: 5,
    left: 30,
    position: "absolute",
    fontFamily: "System",
    color: "rgba(255,255,255,1)",
    width: 300,
    height: 16,
    fontSize: 20, 
    paddingBottom: 100,
    fontWeight: "bold"
  },
  rect3StackStack: {
    width: 375,
    height: 46,
    marginTop: 46
  },
  rect4: {
    width: 500,
    height: 1,
    backgroundColor: "#E6E6E6",
    opacity: 0.1,
    marginTop: 87
  },
  rect5: {
    width: 500,
    height: 1,
    backgroundColor: "#E6E6E6",
    opacity: 0.1,
    marginTop: 89
  },
  rect6: {
    width: 500,
    height: 1,
    backgroundColor: "#E6E6E6",
    opacity: 0.1,
    marginTop: 89
  },
  rect7: {
    top: 43,
    left: 0,
    width: 500,
    height: 1,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0.1
  },
  icon6: {
    top: 0,
    left: 357,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    width: 40,
    height: 46
  },
  rect7Stack: {
    top: 0,
    left: 0,
    width: 375,
    height: 46,
    position: "absolute"
  },
  ourInspiration: {
    top: 4,
    left: 35,
    position: "absolute",
    fontFamily: "System",
    color: "rgba(255,255,255,1)",
    width: 250,
    height: 16,
    fontSize: 20, 
    paddingBottom: 100,
    fontWeight: "bold"
  },
  rect7StackStack: {
    width: 375,
    height: 46,
    marginTop: 46
  },
  instructions: {
    fontFamily: "System",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 5, 
    left: 20,
    fontWeight: "bold"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    left: 137,
    bottom: 26,
    marginLeft: 210
  },
  instructionsRow: {
    height: 34,
    flexDirection: "row",
    marginTop: -496,
    marginLeft: 11,
    marginRight: 18
  },
  reportAProblem: {
    fontFamily: "System",
    color: "rgba(255,255,255,1)",
    width: 250,
    height: 32,
    fontSize: 20,
    marginTop: 4, 
    left: 20,
    fontWeight: "bold"
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    left: 280,
    fontSize: 30,
    width: 40,
    height: 34,
    marginLeft: 66,
    bottom: 35
  },
  reportAProblemRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 146,
    marginLeft: 11,
    marginRight: 8
  },
  termsAndConditions: {
    fontFamily: "System",
    color: "rgba(255,255,255,1)",
    width: 250,
    height: 16,
    fontSize: 20,
    marginTop: 4, 
    left: 20, 
    paddingBottom: 100,
    fontWeight: "bold"
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    left: 280,
    bottom: 103,
    marginLeft: 66
  },
  termsAndConditionsRow: {
    height: 34,
    flexDirection: "row",
    marginTop: 54,
    marginLeft: 11,
    marginRight: 18
  },
  versionAndLicense: {
    fontFamily: "System",
    color: "rgba(255,255,255,1)",
    width: 250,
    height: 32,
    fontSize: 20,
    marginTop: 4, 
    left: 23,
    fontWeight: "bold"
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    width: 40,
    height: 34,
    left: 280, 
    bottom: 35,
    marginLeft: 66
  },
  versionAndLicenseRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 56,
    marginLeft: 11,
    marginRight: 8
  },
  signOut: {
    top: 145,
    fontFamily: "System",
    color: "rgba(232,9,38,1)",
    fontSize: 20,
    textAlign: "center",
    marginTop: 0,
    fontWeight: "bold"
  }
});
