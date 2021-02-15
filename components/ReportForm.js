import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert
} from "react-native";
import firestore, { firebase } from '@react-native-firebase/firestore';
import {loggedIn, userId, user, name, firstName, lastName} from "../screens/LoginScreen";
import Icon from "react-native-vector-icons/Ionicons";

export default class ReportForm extends React.Component {

    state = {
      spellingCheck: false,
      brokenCheck: false,
      wrongCheck: false,
      findCheck: false,
      userCheck: false,
      elaboration: "",
      brokenIcon: "stop-outline",
      spellingIcon: "stop-outline",
      wrongIcon: "stop-outline",
      findIcon: "stop-outline",
      userIcon: "stop-outline",
    }

    constructor(props) {
      super(props)
    }  

    brokenClick() {
      if (!this.state.brokenCheck) {
      this.setState({brokenCheck: !this.state.brokenCheck, brokenIcon: "stop"})
      } else {
        this.setState({brokenCheck: !this.state.brokenCheck, brokenIcon: "stop-outline"})
      }
    }

    spellingClick() {
      if (!this.state.spellingCheck) {
      this.setState({spellingCheck: !this.state.spellingCheck, spellingIcon: "stop"})
      } else {
        this.setState({spellingCheck: !this.state.spellingCheck, spellingIcon: "stop-outline"})
      }
    }

    wrongClick() {
      if (!this.state.wrongCheck) {
      this.setState({wrongCheck: !this.state.wrongCheck, wrongIcon: "stop"})
      } else {
        this.setState({wroingCheck: !this.state.wrongCheck, wrongIcon: "stop-outline"})
      }
    }

    findClick() {
      if (!this.state.findCheck) {
      this.setState({findCheck: !this.state.findCheck, findIcon: "stop"})
      } else {
        this.setState({findCheck: !this.state.findCheck, findIcon: "stop-outline"})
      }
    }

    userClick() {
      if (!this.state.userCheck) {
      this.setState({userCheck: !this.state.userCheck, userIcon: "stop"})
      } else {
        this.setState({userCheck: !this.state.userCheck, userIcon: "stop-outline"})
      }
    }
    
    submit() {
      firestore().collection('reports').add({
        spelling: this.state.spellingCheck,
        broken: this.state.brokenCheck,
        wrong: this.state.wrongCheck,
        find: this.state.findCheck,
        userError: this.state.userCheck,
        elaboration: this.state.elaboration
      })
      Alert.alert(
        "Submitted",
        'Thanks for your feedback. Swipe back or click the back button to go back.',
        [
            {
                text: 'Ok',
                onPress: () => console.log("")
            }
        ],
        {
            cancelable: false
        }
      );
    }

    render(props) {
      return (
        <View style={[styles.container]}>
          <Text style={styles.reportAProblem}>Report a problem</Text>
          <Text style={styles.loremIpsum}>Please select all that apply:</Text>
          <View style={styles.rect1Row}>
            <TouchableOpacity onPress={() => this.brokenClick()}>
              <Icon style={styles.rect1} name={this.state.brokenIcon} color="black" size={19} />
            </TouchableOpacity>
            <Text style={styles.somethingIsBroken2}>Something is broken</Text>
          </View>
          <View style={styles.rect2Row}>
            <TouchableOpacity onPress={() => this.spellingClick()}>
              <Icon style={styles.rect2} name={this.state.spellingIcon} color="black" size={19} />
            </TouchableOpacity>
            <Text style={styles.somethingIsBroken1}>
              There is a spelling/grammar mistake
            </Text>
          </View>
          <View style={styles.rect3Row}>
            <TouchableOpacity onPress={() => this.wrongClick()}>
              <Icon style={styles.rect3} name={this.state.wrongIcon} color="black" size={19} />
            </TouchableOpacity>
            <Text style={styles.somethingIsBroken3}>
              The information in a post is wrong/outdated
            </Text>
          </View>
          <View style={styles.rect4Row}>
            <TouchableOpacity onPress={() => this.findClick()}>
              <Icon style={styles.rect4} name={this.state.findIcon} color="black" size={19} />
            </TouchableOpacity>
            <Text style={styles.somethingIsBroken4}>
              I can&#39;t find what I&#39;m looking for
            </Text>
          </View>
          <View style={styles.group}>
            <TouchableOpacity onPress={() => this.submit()}>
              <View style={styles.rect5}>
                <View style={styles.submitFiller}></View>
                <Text style={styles.submit}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.loremIpsum1}>Please elaborate on the issue:</Text>
          <View style={styles.rect6Row}>
            <TouchableOpacity onPress={() => this.userClick()}>
              <Icon style={styles.rect6} name={this.state.userIcon} color="black" size={19} />
            </TouchableOpacity>
            <Text style={styles.somethingIsBroken5}>
              There is a user violating the terms and conditons
            </Text>
          </View>
          <View style={styles.group2}>
            <View style={styles.rect7}>
              <TextInput
                placeholder="Sample Issue"
                multiline={true}
                numberOfLines={7}
                style={styles.sampleIssue}
                onChangeText={(value) => this.setState({elaboration: value})}
              ></TextInput>
            </View>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: 20
  },
  reportAProblem: {
    fontFamily: "System",
    color: "#121212",
    fontSize: 28,
    marginLeft: 0
  },
  loremIpsum: {
    fontFamily: "System",
    color: "#121212",
    height: 35,
    width: 270,
    fontSize: 22,
    marginTop: 16
  },
  rect: {
    width: 17,
    height: 17,
    backgroundColor: "#E6E6E6",
    marginTop: 1
  },
  somethingIsBroken: {
    fontFamily: "System",
    color: "#121212",
    height: 19,
    width: 169,
    marginLeft: 12
  },
  rectRow: {
    height: 19,
    flexDirection: "row",
    marginTop: 13,
    marginRight: 112
  },
  rect1: {
    width: 17,
    height: 17,
  },
  somethingIsBroken2: {
    fontFamily: "System",
    color: "#121212",
    height: 19,
    width: 169,
    marginLeft: 12
  },
  rect1Row: {
    height: 19,
    flexDirection: "row",
    marginTop: 37,
    marginRight: 112
  },
  rect2: {
    width: 17,
    height: 17,
  },
  somethingIsBroken1: {
    fontFamily: "System",
    color: "#121212",
    height: 19,
    width: 235,
    marginLeft: 12
  },
  rect2Row: {
    height: 19,
    flexDirection: "row",
    marginTop: -47,
    marginRight: 46
  },
  rect3: {
    width: 17,
    height: 17,
    marginTop: 1
  },
  somethingIsBroken3: {
    fontFamily: "System",
    color: "#121212",
    height: 19,
    width: 281,
    marginLeft: 12
  },
  rect3Row: {
    height: 19,
    flexDirection: "row",
    marginTop: 35
  },
  rect4: {
    width: 17,
    height: 17,
    marginTop: 1
  },
  somethingIsBroken4: {
    fontFamily: "System",
    color: "#121212",
    height: 19,
    width: 281,
    marginLeft: 12
  },
  rect4Row: {
    height: 19,
    flexDirection: "row",
    marginTop: 9
  },
  group: {
    width: 142,
    height: 47,
    marginTop: 261,
    marginLeft: 0
  },
  rect5: {
    width: 142,
    height: 47,
    backgroundColor: "rgba(66,123,210,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 50
  },
  submitFiller: {
    flex: 1
  },
  submit: {
    fontFamily: "System",
    color: "#121212",
    height: 24,
    width: 67,
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 38
  },
  loremIpsum1: {
    fontFamily: "System",
    color: "#121212",
    height: 35,
    width: 310,
    fontSize: 22,
    marginTop: -252
  },
  rect6: {
    width: 17,
    height: 17,
    marginTop: 1
  },
  somethingIsBroken5: {
    fontFamily: "System",
    color: "#121212",
    height: 19,
    width: 281,
    marginLeft: 12
  },
  rect6Row: {
    height: 19,
    flexDirection: "row",
    marginTop: -82
  },
  group2: {
    width: 310,
    height: 153,
    marginTop: 63
  },
  rect7: {
    width: 310,
    height: 153,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 20
  },
  sampleIssue: {
    fontFamily: "System",
    color: "#121212",
    height: 140,
    width: 296,
    marginTop: 7,
    marginLeft: 7
  }
});