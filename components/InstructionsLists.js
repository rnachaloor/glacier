import React from 'react';
//import your components from react-native 
import { FlatList, ActivityIndicator } from 'react-native';
import InstructionCard from './InstructionCard';
import styles from "./PostListStyles";

export default class InstructionsList extends React.Component {
    state = {
        instructionsList: [],
        loading: true
    }
    
    //retreives data
    async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            let data = 
            [
                {
                    instruction: "I. Logging In",
                    answer: "When you first open the app, you will be prompted to enter your login credentials. If you are a new user, click \"Sign up here!\". This will redirect you to the app's sign-in page. There, you will be asked to create your account. Remember, your information will be displayed across Glacier's wide array of professionals. Once you submit, you will be re-directed back to the login page, where you once again will be asked to enter your login credentials. Once you do, you will be sent to Glacier's home screen, which displays the posts of real people on the app.",
                    key: "1"
                },
                {
                    instruction: "II. Posts",
                    answer: "To create a post, navigate to the new post section, designated by a plus sign on the navigation bar. Here, you can create the post title and add the post content. When you click post, you can return to the home page and refresh the posts by pulling down and releasing the home page. Your post should appear momentarily. To like a post, you can click the heart sign located on the bottom left part of the post. You can also share the post to any social media platform by clicking the share button on the bottom right. You can share the post to any app that is present on your device",
                    key: "2"
                },
                {
                    instruction: "III. Settings",
                    answer: "Once done, you can also navigate to the settings page, denoted by a gear on the navigation bar. Once there, you can access a wide array of resources and services such as our terms and Conditions, FAQ, and our Terms and Conditions. To sign out, you can click the sign out button on the very bottom, which will re-direct you back to the login page.",
                    key: "3"
                }
            ]
            this.setState({instructionsList: data, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }
    
    //puts data in the card
    renderItem(data) {
        return (<InstructionCard
        question={data.item.instruction}
        answer={data.item.answer}
        style={styles.post}
        />)
    }
    
    //returns list of cards
    render() {
        const { instructionsList, loading } = this.state

        if(!loading) {
            return <FlatList 
                    data={instructionsList}
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

