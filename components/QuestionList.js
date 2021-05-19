import React, { PureComponent } from 'react';
//import your components from react-native 
import { View,Image,  FlatList, TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FAQ from './FAQ_Component';
import styles from "./PostListStyles";

export default class QuestionList extends React.Component {
    state = {
        questionList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true
    }
    
    //gets list of questions
    async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            let data = 
            [
                {
                    question: "How to create an account?",
                    answer: "When you first launch Glacier, you will be directed with the app's login screen. If you are creating an account for the first time, click \"Sign Up Here!\". This will re-direct you to the sign up page, which may ask for your First and Last name, the Username that you want to be public, and a desired Password along with its confirmation.",
                    key: "1"
                },
                {
                    question: "How to create a post?",
                    answer: "To create a post, direct your attention to the navigation bar at the bottom of your screen. To create a post, click on the icon with a +. Here, you will automatically be set up with the post editor where you can add a title and comment what you want in the post content as long as it abides by our Terms of Service located in settings. After you have done that, you can click the Post button. To see your post, pull down on the home page to refresh the posts, and you should see your post.",
                    key: "2"
                },
                {
                    question: "How to share a post on glacier to another social media platform?",
                    answer: "To share a post on Glacier to another social media platform, click on the share button on the post, which is denoted by the paper airplane on the bottom-right hand side of the post. Once you do so, you can share the post to any social media platform that is installed on your device. You can also copy the text on the post by clicking copy or copy to clpboard on android and ios repsectively.",
                    key: "3"
                },
                {
                    question: "How to report a bug?",
                    answer: "To report a bug, navigate to the settings page on the navigation bar, denoted by the gear. Once there, you can click on Report a Problem, which will ask specifics on the error. Your feedback is valuable to us, and it allows us to make Glacier reliable and user friendly",
                    key: "4"
                },
                {
                    question: "How to sign out?",
                    answer: "To sign out, navigate to the settings page denoted by the gear. Click the Sign Out bar. This will re-direct you back to the login screen",
                    key: "5"
                },
                {
                    question: "How to view the source code?",
                    answer: "To find the source code, navigate to where you saved the folder titled \"glacier\". Once there, you can navigate to the screens folder to view the general screens that apeear on both android and ios. Please note that there are platform specific segments of code that wont translate to the other operating system.",
                    key: "6"
                }
            ]
            this.setState({questionList: data, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }
    
    //adds questions to the faq component
    renderItem(data) {
        return <FAQ
        question={data.item.question}
        answer={data.item.answer}
        style={styles.post}
        />
    }
    
    //renders list of questions
    render() {
        const { questionList, loading } = this.state

        if(!loading) {
            return <FlatList 
                    data={questionList}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.key}
                    contentContainerStyle={{
                        alignSelf: 'center',
                        alignItems: 'center',
                        alignContent: 'center',}}
                    />
        } else {
            return <ActivityIndicator/>
        }
    }
}

