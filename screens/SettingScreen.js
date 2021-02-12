import React, { useState, Component } from "react";
import { StyleSheet, View, Text, Switch, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { Avatar } from "react-native-elements";
import {loggedIn, userId, user, name, firstName, lastName} from "./LoginScreen";
import firestore from '@react-native-firebase/firestore';

const SettingScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledTwo, setIsEnabledTwo] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitchTwo = () => setIsEnabledTwo(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.notifGroup}>
        <Text style={styles.notifications}>Notifications</Text>
        <Switch value={true} style={styles.switch}></Switch>
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
      <TouchableOpacity style={styles.reportButton}>
        <Text style={styles.reportAProblem}>Report a Problem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOut}>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.termsOfService}>
        <Text style={styles.termsOfService2}>Terms of Service</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group}>
        <Text style={styles.connectToGoogle}>Connect to Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group2}>
        <Text style={styles.connectToFacebook}>Connect to Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.group3}>
        <Text style={styles.connectToTwitter}>Connect to Twitter</Text>
      </TouchableOpacity>
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
    width: 289,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,0)",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000000",
    justifyContent: "center",
    marginTop: 315,
    marginLeft: 44
  },
  reportAProblem: {
    fontFamily: "System",
    color: "#121212",
    alignSelf: "center"
  },
  signOutButton: {
    width: 289,
    height: 40,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 50,
    justifyContent: "center",
    marginTop: 19,
    marginLeft: 44
  },
  signOut: {
    fontFamily: "System",
    color: "#121212",
    alignSelf: "center"
  },
  termsOfService: {
    width: 289,
    height: 40,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 50,
    justifyContent: "center",
    marginTop: -159,
    marginLeft: 44
  },
  termsOfService2: {
    fontFamily: "System",
    color: "#121212",
    alignSelf: "center"
  },
  group: {
    width: 289,
    height: 40,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 50,
    justifyContent: "center",
    marginTop: -215,
    marginLeft: 44
  },
  connectToGoogle: {
    fontFamily: "System",
    color: "#121212",
    alignSelf: "center"
  },
  group2: {
    width: 289,
    height: 40,
    backgroundColor: "rgba(230,230, 230,0)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 50,
    justifyContent: "center",
    marginTop: 17,
    marginLeft: 44
  },
  connectToFacebook: {
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
    marginLeft: 43
  },
  connectToTwitter: {
    fontFamily: "System",
    color: "#121212",
    alignSelf: "center"
  },
  avatarText: {
    color: "white"
  }
});