import React, { Component, useState } from "react";
import { View } from "react-native";
import QuestionList from "../components/QuestionList"

const QuestionScreen = ({navigation}) => {

  return (
    <View style={{flex: 1, }}>
      <QuestionList/>
    </View>
    );}

export default QuestionScreen;