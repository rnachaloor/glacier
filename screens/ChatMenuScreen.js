//Imports
import React, { useState, Component, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Switch, TouchableOpacity, Modal, Button } from "react-native";
import { Input, ListItem, Avatar } from "react-native-elements";
import firestore from '@react-native-firebase/firestore';
import EntypoIcon from "react-native-vector-icons/Entypo";
import { AuthContext } from "../AuthProvider";
import UserItem from "../components/UserComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ChatList from "../components/ChatList";

const getUsername = async () => {
    let token = await AsyncStorage.getItem("username");
    return token;
}

const ChatMenuScreen = ({navigation}) => {
    const [popupOn, setPopupOn] = useState(false);
    const [recipient, setRecipient] = useState("")

    async function onEnterUser() {
        const user = await getUsername();
        firestore().collection('chats').add({
            users: [user, recipient],
            chatName: user + "_" + recipient,
            messages: [],
            lastOpened: firebase.firestore.FieldValue.serverTimestamp()
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
            <ChatList navigation={navigation}/>
            <TouchableOpacity onPress={() => setPopupOn(true)}>
                <View style={styles.submitRect}>
                <Text style={styles.submitText}>Create New Chat</Text>
                </View>
            </TouchableOpacity>
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
        marginTop: 10,
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