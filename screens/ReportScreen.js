//Imports
import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform
} from "react-native";
import firestore, { firebase } from '@react-native-firebase/firestore';
import {loggedIn, userId, user, name, firstName, lastName} from "./LoginScreen";
import { Tile } from "react-native-elements";

//Getting the component which essentially contains the code for the screen
import ReportForm from "../components/ReportForm"

const ReportScreen = ({navigation}) => {

  //Returning the component
  return (<ReportForm/>);}

//Exporting the screen
export default ReportScreen;
