/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { LogBox } from "react-native";
import LoginStackScreen from './screens/LoginScreen'
import Routes from "./Routes";
import {name as appName} from './app.json';
import { AuthProvider } from './AuthProvider';
import React from 'react';

const Providers = () => {
    return (
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    )
}

LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => Providers);
