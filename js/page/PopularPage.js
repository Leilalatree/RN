
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

class PopularTab extends Component {
    render() {
        // const {tablabel={}} = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>1111</Text>
            </View>)
    }
}
class PopularTab2 extends Component {
    render() {
        // const {tablabel={}} = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>2222</Text>
            </View>)
    }
}
const TabNavigator = createMaterialTopTabNavigator({
    PopularTab1: {
        screen: PopularTab
    },
    PopularTab2: {
        screen: PopularTab2,
    },
}, {
        initialRouteName: 'PopularTab1',
        animationEnabled: true
    })

export default class PopularPage extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TabNavigator />
                {/* <Text>123</Text> */}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
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
