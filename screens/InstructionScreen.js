// Importing react and components
import React, { Component, useState } from "react";
import { View } from "react-native";
// Acquiring the InstructionsList component
import InstructionsList from "../components/InstructionsLists"

// Creating the Instruction Screen
const InstructionScreen = ({navigation}) => {
  return (
    <View>
        <InstructionsList/>
    </View>);}

// Exporting the InstructionScreen out
export default InstructionScreen;
