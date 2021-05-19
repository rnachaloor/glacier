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

//Imports component which essentially contains all the code for the screen
import PostForm from "../components/PostForm"

const PostScreen = ({navigation}) => {

  //Returns component
  return (<PostForm/>);}

//Exports screen
export default PostScreen;
