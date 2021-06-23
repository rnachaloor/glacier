//Imports
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ScrollView
} from "react-native";
import firestore, { firebase } from '@react-native-firebase/firestore';
import {loggedIn, userId, user, name, firstName, lastName} from "../screens/LoginScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { CheckBox } from "react-native-elements";
import { Platform } from "react-native";

export default class ReportForm extends React.Component {

    //Takes user input from each button
    state = {
      spellingCheck: false,
      brokenCheck: false,
      wrongCheck: false,
      findCheck: false,
      userCheck: false,
      crashCheck: false,
      elaboration: ""
    }

    constructor(props) {
      super(props)
    }  

    //Functions update user input
    brokenClick() {
      this.setState({brokenCheck: !this.state.brokenCheck})
    }

    spellingClick() {
      this.setState({spellingCheck: !this.state.spellingCheck})
    }

    wrongClick() {
      this.setState({wrongCheck: !this.state.wrongCheck})
    }

    findClick() {
      this.setState({findCheck: !this.state.findCheck})
    }

    userClick() {
      this.setState({userCheck: !this.state.userCheck})
    }

    crashClick() {
      this.setState({crashCheck: !this.state.crashCheck})
    }
    
    submit() {
      firestore().collection('reports').add({
        spelling: this.state.spellingCheck,
        broken: this.state.brokenCheck,
        wrong: this.state.wrongCheck,
        find: this.state.findCheck,
        userError: this.state.userCheck,
        crash: this.state.crashCheck,
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

    //JSX
    render(props) {
      return (
        
        <ScrollView style={[styles.container]}>
          <Text style = {[styles.text]}>Report a Problem</Text>
          <View style={styles.checkboxView}>
            <CheckBox
              center 
              title='A feature is broken' 
              checked={this.state.brokenCheck} 
              iconType='material'
              checkedIcon='done' 
              uncheckedIcon='clear' 
              onPress={() => this.brokenClick()}
              checkedColor='lime'
              uncheckedColor='red'
              containerStyle={[{backgroundColor: "#141D28", borderColor: "#141D28"}, styles.checkbox1]}
              textStyle={{color: "white", fontSize: 20, fontWeight: "normal"}}/>
              
              <CheckBox 
              center 
              title='There is a spelling/grammar mistake' 
              checked={this.state.spellingCheck} 
              iconType='material'
              checkedIcon='done' 
              uncheckedIcon='clear' 
              onPress={() => this.spellingClick()}
              checkedColor='lime'
              uncheckedColor='red'
              containerStyle={[{backgroundColor: "#141D28", borderColor: "#141D28"}, styles.checkbox2]}
              textStyle={{color: "white", fontSize: 20, fontWeight: "normal"}}/>

              <CheckBox 
              center 
              title='Glacier has crashed spontaneously' 
              checked={this.state.crashCheck} 
              iconType='material'
              checkedIcon='done' 
              uncheckedIcon='clear' 
              onPress={() => this.crashClick()}
              checkedColor='lime'
              uncheckedColor='red'
              containerStyle={[{backgroundColor: "#141D28", borderColor: "#141D28"}, styles.checkbox3]}
              textStyle={{color: "white", fontSize: 20, fontWeight: "normal"}}/>

              <CheckBox 
              center 
              title='The information in Glacier is wrong/outdated' 
              checked={this.state.wrongCheck} 
              iconType='material'
              checkedIcon='done' 
              uncheckedIcon='clear' 
              onPress={() => this.wrongClick()}
              checkedColor='lime'
              uncheckedColor='red'
              containerStyle={[{backgroundColor: "#141D28", borderColor: "#141D28"}, styles.checkbox4]}
              textStyle={{color: "white", fontSize: 20, fontWeight: "normal"}}/>

              <CheckBox 
              center 
              title="I can't find what I'm looking for" 
              checked={this.state.findCheck} 
              iconType='material'
              checkedIcon='done' 
              uncheckedIcon='clear' 
              onPress={() => this.findClick()}
              checkedColor='lime'
              uncheckedColor='red'
              containerStyle={[{backgroundColor: "#141D28", borderColor: "#141D28"}, styles.checkbox5]}
              textStyle={{color: "white", fontSize: 20, fontWeight: "normal"}}/>

              <CheckBox 
              center 
              title='A user has violated the Terms and Conditions' 
              checked={this.state.userCheck} 
              iconType='material'
              checkedIcon='done' 
              uncheckedIcon='clear' 
              onPress={() => this.userClick()}
              checkedColor='lime'
              uncheckedColor='red'
              containerStyle={[{backgroundColor: "#141D28", borderColor: "#141D28"}, styles.checkbox6]}
              textStyle={{color: "white", fontSize: 20, fontWeight: "normal"}}/>
          </View>
          <View style={styles.group2}>
            <TextInput
              placeholder="Please elaborate on your issues or mention issues that aren't listed."
              multiline={true}
              numberOfLines={4}
              style={styles.sampleIssue}
              onChangeText={(value) => this.setState({elaboration: value})}
              placeholderTextColor="white"
            ></TextInput>
          </View>

          <TouchableOpacity onPress={() => this.submit()}>
            <View style={styles.submitRect}>
              <Text style={styles.submitText}>Submit</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        
      );
    }
}

//Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(20,29,40,1)"
  },
  text: {
    fontFamily: "System",
    color: "rgba(255,255,255,1)",
    height: 56,
    width: 375,
    fontSize: 35,
    textAlign: "center",
    marginTop: 24, 
    left: 20,
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        left: 20
      },
      android: {
        left: 10
      }
    })
  },
  submitRect: {
    backgroundColor: "rgba(84,152,197,1)",
    borderRadius: 100,
    width: 212,
    height: 49,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        
      },
      android: {
        bottom: 20
      }
    })
  },
  submitText: {
    alignSelf: "center",
    alignContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  sampleIssue: {
    color: "white",
    left: 20,
    height: 90,
    width: 370,
    ...Platform.select({
      ios: {

      },
      android: {
        bottom: 15
      }
    })
  },
  checkbox1: {
    left: -80,
    ...Platform.select({
      ios: {
        left: -80
      },
      android: {
        left: -77
      }
    })
  },
  checkbox2: {
    ...Platform.select({
      ios: {
        left: -6
      },
      android: {
        left: -1
      }
    })
  },
  checkbox3: {
    ...Platform.select({
      ios: {
        left: -10
      },
      android: {
        left: -7
      }
    })
  },
  checkbox4: {
    ...Platform.select({
      ios: {
        left: -9
      },
      android: {
        left: -1
      }
    })
  },
  checkbox5: {
    ...Platform.select({
      ios: {
        left: -30
      },
      android: {
        left: -26
      }
    })
  },
  checkbox6: {
    ...Platform.select({
      ios: {
        left: -13
      }, 
      android: {
        left: 0
      }
    })
  },
  checkboxView: {
    ...Platform.select({
      android: {
        marginLeft: 10
      }
    })
  }
});
