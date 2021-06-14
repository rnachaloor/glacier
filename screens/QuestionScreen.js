//Imports 
import React, { Component, useState } from "react";
import { View } from "react-native";

//Imports component which essentially contains the code for the screen
import QuestionList from "../components/QuestionList"

const QuestionScreen = ({navigation}) => {

  return (
      <QuestionList/>
    );}

//Exports screen
export default QuestionScreen;
