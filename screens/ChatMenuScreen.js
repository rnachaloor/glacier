//Imports
import React, { useState, Component, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Switch, TouchableOpacity, Modal, Button } from "react-native";
import { Input } from "react-native-elements";
import {loggedIn, userId, user, name, firstName, lastName, setLoggedIn} from "./LoginScreen";
import firestore from '@react-native-firebase/firestore';
import EntypoIcon from "react-native-vector-icons/Entypo";
import { AuthContext } from "../AuthProvider";
import UserItem from "../components/UserComponent";



const ChatMenuScreen = ({navigation}) => {
    const [popupOn, setPopupOn] = useState(false);
    const [recipient, setRecipient] = useState("")

    function onEnterUser() {
        firestore().collection('chats').add({
            users: [user, recipient],
            chatName: user + "_" + recipient,
            messages: []
        })
        setPopupOn(false);
    }

    return (
        <View>
            <Modal
            animationType="slide"
            transparent={true}
            visible={popupOn}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Input
                            placeholder="Recipient"
                            onChangeText={(value) => setRecipient(value)}
                        />
                        <Button title="Hi" onPress={() => onEnterUser()}></Button>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={() => setPopupOn(true)}>
                <View style={styles.submitRect}>
                <Text style={styles.submitText}>Create New Chat</Text>
                </View>
            </TouchableOpacity>
            <UserItem/>
        </View>
    )
}

export default ChatMenuScreen;

const styles = StyleSheet.create({
    submitRect: {
        backgroundColor: "skyblue",
        height: 50,
        width: 300,
        alignSelf: "center",
        borderRadius: 50,
        justifyContent:"center",
        marginTop: 10
    },
    submitText: {
        alignSelf: "center"
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        alignSelf: "center",
    },
    modalContent: {
        width: 300,
        backgroundColor: "white",
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        shadowColor: "black"
    }

})