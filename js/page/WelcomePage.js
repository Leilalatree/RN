
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NaviigationUtil from "../navigator/NavigationUtil"
type Props = {};

export default class WelcomePage extends Component<Props> {
    componentDidMount(): void {
        this.timer = setTimeout(()=>{
            NaviigationUtil.resetToHomePage({
                navigation: this.props.navigation
            })

            // this.props.navigation.navigate("Main")

        },100)
    }
    componentWillMount() {
        console.disableYellowBox = true
    }
    componentWillUnMount(): void {
        this.timer && clearTimeout(this.timer)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>WelcomePage</Text>
            </View>
        );
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
