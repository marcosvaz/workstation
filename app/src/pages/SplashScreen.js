/**
 * SplashScreen
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

const SplashScreen = ({ navigation }) => {
  const navigate = navigation.navigate // Navegação entre telas

  setTimeout(() => { navigate('Login') }, 3000) // Tempo para trocar de tela

  return (
    <>
      <SafeAreaView style={styles.splashScreen_container }>

        <Text style={ styles.splashScreen_text }>Workstation</Text>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  splashScreen_container: {
    alignItems: 'center',
    backgroundColor: theme.colorPrimary,
    flex: 1,
    justifyContent: 'center',
  },

  splashScreen_text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default SplashScreen;
