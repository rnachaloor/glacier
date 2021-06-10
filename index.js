/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { LogBox } from "react-native";
import LoginStackScreen from './screens/LoginScreen'
import {name as appName} from './app.json';

LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => LoginStackScreen);
