import React, { PureComponent } from 'react';
//import your components from react-native 
import { View,Image,  FlatList, TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import UserComponent from './UserComponent';

export default class extends React.Component {
    //Define your state for your component. 
    state = {
        //Assing a array to your postList state
        chatList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true,
        refresh: false
    }


}