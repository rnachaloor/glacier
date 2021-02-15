import React, { Component, useState } from "react";
import { View } from "react-native";
import InstructionsList from "../components/InstructionsLists"

const InstructionScreen = ({navigation}) => {

  return (
    <View>
        <InstructionsList/>
    </View>);}

export default InstructionScreen;