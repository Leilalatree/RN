
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer
} from "react-navigation";
import FavoritePage from './FavoritePage';
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import MyPage from './MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from'react-native-vector-icons/Feather';
import Entypo from'react-native-vector-icons/Feather'



type Props = {};
export default class  HomePage extends Component<Props> {
    _tabNavigation = () => {
        return   createBottomTabNavigator({
            PopularPage:{
                screen:PopularPage,
                navigationOptions:{
                    title:"最热",
                    tabBarIcon:({tintColor,focusd})=>(
                    <MaterialIcons
                        name={'whatshot'}
                        size={23}
                        style={{color: tintColor}}
                    />)
                }
            },
            FavoritePage:{
                screen:FavoritePage,
                navigationOptions:{
                    title:"收藏",
                    tabBarIcon:({tintColor,focusd})=>(
                        <MaterialIcons
                            name={'favorite'}
                            size={23}
                            style={{color: tintColor}}
                        />)
                }
            },
            TrendingPage:{
                screen:TrendingPage,
                navigationOptions:{
                    title:"趋势",
                    tabBarIcon:({tintColor,focusd})=>(
                        <Feather
                            name={'trending-up'}
                            size={23}
                            style={{color: tintColor}}
                        />)
                }
            },
            MyPage:{
                screen:MyPage,
                navigationOptions:{
                    title:"我的",
                    tabBarIcon:({tintColor,focusd})=>(
                        <Entypo
                            name={'user'}
                            size={23}
                            style={{color: tintColor}}
                        />)
                }
            }
        });
        // return createAppContainer({AppBottomTabNavigator})
    }
    render() {
        const Tab = createAppContainer(this._tabNavigation());
        return <Tab/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
