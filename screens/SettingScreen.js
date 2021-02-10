import React, { useState, Component } from "react";
import { StyleSheet, View, Text, Switch, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

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
          <Svg viewBox="0 0 67 68" style={styles.avatar}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={34}
              cy={34}
              rx={34}
              ry={34}
            ></Ellipse>
          </Svg>
          <View style={styles.namePlaceholderColumn}>
            <Text style={styles.namePlaceholder}>Name Placeholder</Text>
            <Text style={styles.username}>Username</Text>
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
    fontFamily: "roboto-regular",
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
    height: 68
  },
  namePlaceholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    lineHeight: 14,
    fontSize: 24
  },
  username: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 5
  },
  namePlaceholderColumn: {
    width: 197,
    marginLeft: 26,
    marginTop: 20,
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
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center"
  }
});