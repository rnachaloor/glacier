/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LoginStackScreen from './screens/LoginScreen'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginStackScreen);
