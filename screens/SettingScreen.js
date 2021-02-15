import React, { useState, Component, useEffect } from "react";
import { StyleSheet, View, Text, Switch, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { Avatar } from "react-native-elements";
import {loggedIn, userId, user, name, firstName, lastName, setLoggedIn} from "./LoginScreen";
import firestore from '@react-native-firebase/firestore';


const SettingScreen = ({navigation}) => {
  
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledTwo, setIsEnabledTwo] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitchTwo = () => setIsEnabledTwo(previousState => !previousState);

  const signOut = () => {
    setLoggedIn(false)
    navigation.navigate("Login")
  }

  const termsOfService = () => {
    navigation.navigate("ToS")
  }

  const report = () => {
    navigation.navigate("Report")
  }

  const question = () => {
    navigation.navigate("Question")
  }

  return (
    <View style={styles.container}>
      <View style={styles.notifGroup}>
      </View>
      <View style={styles.profileName}>
        <View style={styles.avatarRow}>
          <Avatar size="large" rounded title={(firstName.substring(0,1) + lastName.substring(0,1)).toUpperCase()} overlayContainerStyle={styles.avatar} activeOpacity={0.7} titleStyle={styles.avatarText}/>
          <View style={styles.namePlaceholderColumn}>
            <Text style={styles.namePlaceholder}>{name}</Text>
            <Text style={styles.username}>{user}</Text>
          </View>
        </View>
      </View>
      <View style = {styles.buttonStyle}>
      <TouchableOpacity style={styles.reportButton} onPress={() => report()}>
        <Text style={styles.reportAProblem}>Report a Problem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOutButton} onPress={() => signOut()}>
        <Text style={styles.signOut}>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.termsOfService} onPress = {() => termsOfService()}>
        <Text style={styles.termsOfService2}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.instructions}>Instructions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group2} onPress={() => question()}>
        <Text style={styles.faq}>Frequently Asked Questions</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
  }

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  notifGroup: {
    width: 292,
    height: 23,
    flexDirection: "row",
    marginTop: 171,
    marginLeft: 42
  },
  notifications: {
    fontFamily: "System",
    color: "#121212",
    fontSize: 18,
    marginTop: 1
  },
  switch: {
    marginLeft: 134
  },
  profileName: {
    width: 289,
    height: 68,
    marginTop: -129,
    marginLeft: 43
  },
  avatar: {
    width: 67,
    height: 68,
    marginLeft: 5,
    backgroundColor:"#BDBDBD",
    padding: 38
  },
  namePlaceholder: {
    fontFamily: "System",
    color: "#121212",
    lineHeight: 14,
    fontSize: 24,
    padding: 8
  },
  username: {
    fontFamily: "System",
    color: "#121212",
    fontSize: 18,
    marginTop: 5,
    marginLeft: 8
  },
  namePlaceholderColumn: {
    width: 197,
    marginLeft: 26,
    marginTop: 15,
    marginBottom: 8
  },
  avatarRow: {
    height: 68,
    flexDirection: "row",
    marginRight: -1
  },
  reportButton: {
    position: "absolute",
    width: 289,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0)",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000000",
    justifyContent: "center",
    marginTop: 235,
    marginLeft: 50
  },
  reportAProblem: {
    fontFamily: "System",
    color: "#121212",
    alignSelf: "center"
  },
  signOutButton: {
    position: "absolute",
    width: 289,
    height: 40,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 50,
    justifyContent: "center",
    marginTop: 292,
    marginLeft: 50
  },
  signOut: {
    fontFamily: "System",
    color: "#121212",
    alignSelf: "center"
  },
  termsOfService: {
    position: "absolute",
    width: 289,
    height: 40,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 50,
    justifyContent: "center",
    marginTop: 178,
    marginLeft: 50
  },
  termsOfService2: {
    fontFamily: "System",
    color: "#121212",
    alignSelf: "center"
  },
  group: {
    position: "absolute",
    width: 289,
    height: 40,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 50,
    justifyContent: "center",
    marginTop: 60,
    marginLeft: 50.3
  },
  instructions: {
    fontFamily: "System",
    color: "#121212",
    alignSelf: "center"
  },
  group2: {
    position: "absolute",
    width: 289,
    height: 40,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 50,
    justifyContent: "center",
    marginTop: 120,
    marginLeft: 50.2
  },
  faq: {
    fontFamily: "System",
    color: "#121212",
    alignSelf: "center"
  },
  group3: {
    width: 289,
    height: 40,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 50,
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 50
  },
  avatarText: {
    color: "white"
  },
});