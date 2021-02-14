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
import PostForm from "../components/PostForm"

const PostScreen = ({navigation}) => {

  return (<PostForm/>);}

export default PostScreen;
