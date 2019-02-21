/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import  AppNavigator  from "./js/navigator/AppNavigator"
import {createAppContainer} from 'react-navigation'

import App from './App';
import HomePage from './js/page/HomePage';
import WelcomePage from './js/page/WelcomePage';

import {name as appName} from './app.json';
const AppStackNavigatorContainer = createAppContainer(AppNavigator)

AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
