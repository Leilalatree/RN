
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

class PopularTab extends Component {
    render() {
        // const {tablabel={}} = this.props

        return (
            <View style={styles.container}>
                <Text>1111</Text>
            </View>)
    }
}
class PopularTab2 extends Component {
    render() {
        // const {tablabel={}} = this.props

        return (
            <View style={styles.container2}>
                <Text>2222</Text>
            </View>)
    }
}
const TabNavigator = createMaterialTopTabNavigator({
    PopularTab1: {
        screen: PopularTab,
        navigationOptions: {
            tabBarLabel: '个人中心',
        }
    },
    PopularTab2: {
        screen: PopularTab2,
        navigationOptions: {
            tabBarLabel: '设置',
        }
    },
}, {
        initialRouteName: 'PopularTab2',
        animationEnabled: true
    })

const Tabs = createAppContainer(TabNavigator)

export default class PopularPage extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <Tabs />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
