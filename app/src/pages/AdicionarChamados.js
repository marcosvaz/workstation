/**
 * AdicionarChamados
 * https://github.com/marcosvaz/workstation
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableNativeFeedback,
    TextInput,
} from 'react-native';

import theme from '../config/AppTheme'

const AdicionarChamados = ({ navigation }) => {
    const { navigate } = navigation

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.home_top}>

                    {/* Botão Menu */}
                    <Text>Menu</Text>

                    {/* Foto do usuário */}
                    <Image
                        source={{ uri: 'https://www.pngarts.com/files/3/Avatar-PNG-Picture.png' }}
                        style={{ width: 40, height: 40, borderRadius: 100 }}
                    />

                </View>

                {/* Título da Página */}
                <View style={styles.home_header}>

                    <Text style={styles.home_text}>Adicionar novo chamado</Text>

                </View>

                <ScrollView style={{ flex: 1, marginHorizontal: 20 }}>
                    <TextInput placeholder="Código" editable={false} style={[ styles.input, { backgroundColor: 'rgb(220, 220, 220)' } ]} />
                    <TextInput placeholder="Título" style={ styles.input } />
                    <TextInput placeholder="Responsável" style={ styles.input } />
                    <TextInput placeholder="Severidade" style={ styles.input } />
                    <TextInput placeholder="Descrição" multiline style={[ styles.input, { paddingBottom: 100 } ]} />
                    <TextInput placeholder="Atividades" style={ styles.input } />
                </ScrollView>


                {/* Action */}
                <TouchableNativeFeedback onPress={() => navigate('Home')} >

                    <View
                        style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 30, backgroundColor: theme.colorPrimary }}>

                        <Text style={styles.action_text}>Adicionar</Text>

                    </View>

                </TouchableNativeFeedback>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    home_top: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
    },

    home_header: {
        marginBottom: 10,
        marginLeft: 20,
        marginTop: 20,
    },

    home_text: {
        color: theme.colorPrimary,
        fontSize: 24,
        fontWeight: 'bold'
    },

    action_text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    input: {
        borderColor: theme.colorPrimary,
        borderWidth: 1,
        borderRadius: 3,
        marginBottom: 10,
        paddingLeft: 10
    }
});

export default AdicionarChamados;
