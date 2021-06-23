//Imports
import React, { useState, Component, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Switch, TouchableOpacity, Modal, Button } from "react-native";
import { Input, ListItem, Avatar } from "react-native-elements";
import firestore from '@react-native-firebase/firestore';
import EntypoIcon from "react-native-vector-icons/Entypo";
import { AuthContext } from "../AuthProvider";
import UserItem from "../components/UserComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getUsername = async () => {
    let token = await AsyncStorage.getItem("username");
    return token;
}

const ChatMenuScreen = async ({navigation}) => {
    const [popupOn, setPopupOn] = useState(false);
    const [recipient, setRecipient] = useState("")
    let list = []

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

    const collection = await firestore().collection('chats').orderBy("lastOpened", 'desc').get()
    collection.forEach(doc => {
        const usernames = getUsername()
        const firstName = ""
        const lastName = ""
        if (doc.data().users[0] == usernames) {
            const recipientInfoRes = firestore().collection('userInfo').where('username', '==', doc.data().users[1]);
            recipientInfoRes.forEach(document => {
                firstName = document.data().firstName.toString();
                console.log(firstName);
                lastName = document.data().lastName.toString();
            })
            list.push({
                recipient: doc.data().users[1],
                initials: firstName.substring(0, 1) + lastName.substring(0, 1)
            })
        } else if (doc.data().users[1] == usernames) {
            const recipientInfoRes = firestore().collection('userInfo').where('username', '==', doc.data().users[0]);
            recipientInfoRes.forEach(document => {
                firstName = document.data().firstName;
                lastName = document.data().lastName;
            })
            console.log(firstName);
            list.push({
                recipient: doc.data().users[0],
                initials: firstName.substring(0, 1) + lastName.substring(0, 1)
            })
        }
    })
    console.log(list);
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
            {
                list.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <Avatar rounded title={l.initials} />
                        <ListItem.Content>
                            <ListItem.Title>{l.recipient}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
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