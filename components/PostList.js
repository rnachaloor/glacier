import React, { PureComponent } from 'react';
//import your components from react-native 
import { View,Image,  FlatList, TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Post from './PostComponent';
import styles from "./PostListStyles";

export default class PostList extends React.Component {
    //Define your state for your component. 
    state = {
        //Assing a array to your postList state
        postList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true,
        refresh: false
    }
    
    //gathers post data from database
    async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            let data = []
            let i = 0
            const collection = await firestore().collection('posts').orderBy("time", 'desc').get()
            collection.forEach(doc => {
                i++
                let date = doc.data().time.toDate();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                let year = date.getFullYear();
                data.push({
                    content: doc.data().content,
                    name: doc.data().firstName + " " + doc.data().lastName,
                    initial: (doc.data().firstName.substring(0, 1) + doc.data().lastName.substring(0, 1)).toUpperCase(),
                    likes: doc.data().likes,
                    title: month + "-" + day + "-" + year,
                    username: doc.data().username,
                    id: doc.id,
                    key: doc.id
                })
            })
            this.setState({postList: data, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }
    
    //puts post data in the post component
    renderItem(data) {
        return <Post 
            content={data.item.content}
            name={data.item.name}
            initial={data.item.initial}
            likes={data.item.likes}
            title={data.item.title}
            username={data.item.username}
            postId={data.item.id}
            style={styles.post}
            key={data.item.key}
            />
    }
    
    //allows for the list to update for new posts
    async refreshFunc() {
        this.state.refresh=true
        this.componentDidMount()
        this.state.refresh=false
    }
    
    //renders list of posts
    render() {
        const { postList, loading } = this.state

        if(!loading) {
            return <FlatList 
                    data={postList}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.postId}
                    refreshing={false}
                    onRefresh={() => this.refreshFunc()} 
                    />
        } else {
            return <ActivityIndicator/>
        }
    }
}

