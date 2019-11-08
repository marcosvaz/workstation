/**
 * Home
 * https://github.com/marcosvaz/workstation
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';

import theme from '../config/AppTheme'

const Home = () => {
    return (
        <>
            <SafeAreaView style={styles.home}>
                <Text style={styles.home_text}>Home</Text>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    home: {
        alignItems: 'center',
        backgroundColor: theme.colorPrimary,
        flex: 1,
        justifyContent: 'center',
    },
    home_text: {
        color: 'white',
        fontSize: 18,
        textTransform: 'uppercase',
    },
});

export default Home;
