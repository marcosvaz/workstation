/**
 * Login
 * https://github.com/marcosvaz/workstation
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableNativeFeedback,
} from 'react-native';

import theme from '../config/AppTheme';

import { data } from '../config/mock'
const { companies } = data

const Login = ({ navigation }) => {
    const { navigate } = navigation;

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const [validacaoEmail, setValidacaoEmail] = useState(false)
    const [validacaoPass, setValidacaoPass] = useState(false)


    const valida = (email, pass) => {
        if(!companies.find(company => company.administrator.email === email)){
            setValidacaoEmail(true)
            console.log('Email incorreto!')
        } else {
            setValidacaoEmail(false)
        }
        if (companies.find(company => company.administrator.email === email && company.administrator.password === pass)) {
            navigate('Home')
        } else {
            setValidacaoPass(true)
            console.log('Senha incorreta!')
        }
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ECEFF1' }}>
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    <View style={[styles.home_top, {flex: 1}]}>
                        <Text style={styles.home_text}>WORKSTATION</Text>
                    </View>

                    <View style={{flex: 2}}>
                        <TextInput placeholder="E-mail" style={[styles.input, { borderColor: validacaoEmail ? 'red' : theme.inative }]} onChangeText={(text)=>setEmail(text)} keyboardType="email-address" />
                        <TextInput placeholder="Senha" style={[styles.input, { borderColor: validacaoPass ? 'red' : theme.inative }]} secureTextEntry={true} onChangeText={(text)=>setPass(text)}/>
                        <TouchableNativeFeedback onPress={() => valida(email, pass)}>
                            <Text style={{textAlign: 'center', marginHorizontal: 20, marginTop: 20, backgroundColor: theme.colorSecondary, paddingVertical: 20, color: 'white', textTransform: 'uppercase'}}>Entrar</Text>
                        </TouchableNativeFeedback>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    home_top: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    home_text: {
        color: theme.colorSecondary,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    input: {
        borderBottomWidth: 2,
        marginBottom: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
    }
});

export default Login;
