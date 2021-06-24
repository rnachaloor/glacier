import React, { useState, Component, useEffect, useContext, useCallback } from "react";
import { StyleSheet, View, Text, Switch, TouchableOpacity, Modal, Button } from "react-native";
import { Input, Avatar } from "react-native-elements";
import firestore, { firebase } from '@react-native-firebase/firestore';
import EntypoIcon from "react-native-vector-icons/Entypo";
import { AuthContext } from "../AuthProvider";
import ChatList from "../components/ChatList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GiftedChat } from "react-native-gifted-chat";
/*
const getRecipient = async () => {
    let token = await AsyncStorage.getItem("recipient");
    return token;
}

const getUsername = async () => {
    let token = await AsyncStorage.getItem("username");
    return token;
}

let data = [];

const getMessages = async () => {
    let username = await getUsername();
    let recipient = await getRecipient();
    const getRef = await firestore().collection('chats').where('users', 'in', [[username, recipient]]).get();
    let i = 1;
    let j = 1;
    let docId = ""
    getRef.forEach(doc => {
        docId = doc.id;
    })

    const getMessageRef = await firestore().collection('chats').doc(docId).collection('messages').orderBy('sentTime', 'asc').get()
    getMessageRef.forEach(doc => {
        console.log(doc.data().sender)
        if (doc.data().sender == username) {
            j = 1
        } else {
            j = 2
        }
        data.push({
            _id: i,
            text: doc.data().content,
            createdAt: doc.data().sentTime.toDate(),
            user: {
                _id: j ,
                name: doc.data().sender,
                avatar: 'https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg',
            }
        })
        console.log(i)
        console.log(j)
        i+=2
        j+=2
    })
}*/

const ChatScreen = ({navigation}) => {
    const [messages, setMessages] = useState([]);

    let messageOne = {
        _id: 1,
        text: 'Hello',
        createdAt: new Date(),
        user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'
    },
    };

    let messageTwo = {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg',
        },
    };

    useEffect(() => {
        setMessages([
            messageOne, 
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
            _id: 1,
        }}
        />
    )
}
    


export default ChatScreen;