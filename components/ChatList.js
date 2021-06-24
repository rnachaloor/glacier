import React, { PureComponent } from 'react';
//import your components from react-native 
import { View,Image,  FlatList, TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Post from './PostComponent';
import styles from "./PostListStyles";
import UserItem from './UserComponent';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class ChatList extends React.Component {
    //Define your state for your component. 
    state = {
        //Assing a array to your chatList state
        chatList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true,
        refresh: false
    }
    
    getUsername = async () => {
        let token = await AsyncStorage.getItem("username");
        return token;
    }

    //gathers post data from database
    async componentDidMount() {
        //Have a try and catch block for catching errors.

        const user = await this.getUsername();

        try {
            let data = []
            const collection = await firestore().collection('chats').orderBy("lastOpened", 'desc').get();
            collection.forEach( doc => {
                if(doc.data().users[0] == user) {
                    data.push({
                        initial: doc.data().initials[1],
                        username: doc.data().users[1],
                        key: doc.id
                    })
                } else if(doc.data().users[1] == user) {
                    data.push({
                        initial: doc.data().initials[0],
                        username: doc.data().users[0],
                        key: doc.id
                    })
                }
            })
            this.setState({chatList: data, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }
    
    //puts post data in the post component
    renderItem(data) {

        return <UserItem
            initial={data.item.initial}
            username={data.item.username}
            style={styles.post}
            chatId={data.item.key}
            key={data.item.key}
            />
    }
    
    //allows for the list to update for new posts
    async refreshFunc() {
        this.state.refresh=true
        this.componentDidMount()
        this.state.refresh=false
    }
    
    storeData = async (param, value) => {
        try {
          await AsyncStorage.setItem(param, value)
        } catch (e) {
          
        }
    }

    //renders list of posts
    render() {
        const { chatList, loading } = this.state
        const { navigation } = this.props

        if(!loading) {
            return <FlatList 
                    data={chatList}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => {
                            this.storeData("recipient", item.username)
                            navigation.navigate("Chat", {userName: item.username})}}>
                            <UserItem
                            initial={item.initial}
                            username={item.username}
                            style={styles.post}
                            chatId={item.key}
                            key={item.key}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.key}
                    refreshing={false}
                    onRefresh={() => this.refreshFunc()} 
                    />
        } else {
            return <ActivityIndicator/>
        }
    }
}

