/**
 * AdicionarChamados
 * https://github.com/marcosvaz/workstation
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../config/AppTheme'

const AdicionarChamados = ({ navigation }) => {
    const { navigate } = navigation
  const [data, setData] = useState({ ticketId: '', title: '', inCharge: '', severity: '', description: '', activities: ''})

    return (
      <>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.home_top}>
            {/* Botão Menu */}
            <TouchableWithoutFeedback onPress={() => console.log('Menu')}>
              <Icon name="navicon" size={40} color={theme.colorSecondary} />
            </TouchableWithoutFeedback>

            <Text style={styles.home_text}>Novo chamado</Text>

            {/* Foto do usuário */}
            <TouchableWithoutFeedback onPress={() => console.log('Perfil')}>
              <Image
                source={{
                  uri: 'https://www.pngarts.com/files/3/Avatar-PNG-Picture.png',
                }}
                style={{width: 40, height: 40, borderRadius: 100}}
              />
            </TouchableWithoutFeedback>
          </View>

          <ScrollView style={{flex: 1, marginHorizontal: 20, marginTop: 20}}>
            <TextInput
              placeholder="Código"
              editable={false}
              style={[styles.input, {backgroundColor: 'rgb(220, 220, 220)'}]}
            />
            <TextInput placeholder="Título" style={styles.input} onChangeText={(title)=>setData({...data, title: title})}/>
            <TextInput placeholder="Responsável" style={styles.input} onChangeText={(inCharge)=>setData({...data, inCharge: inCharge})} />
            <TextInput placeholder="Severidade" style={styles.input} onChangeText={(severity)=>setData({...data, severity: severity})} />
            <TextInput
              placeholder="Descrição"
              multiline
              style={[styles.input, {paddingBottom: 100}]}
              onChangeText={(description)=>setData({...data, description: description})}
            />
            <TextInput placeholder="Atividades" style={styles.input} onChangeText={(activities) => setData({ ...data, activities: activities})}/>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableWithoutFeedback onPress={()=>navigate('Home')}>
                <View style={[styles.button, styles.buttonSecondary]}>
                  <Text>Voltar</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={()=>console.log('dados formulário: ', data)}>
                <View style={[styles.button, styles.buttonPrimary]}>
                  <Text style={{color: 'white'}}>Enviar</Text>
                </View>
              </TouchableWithoutFeedback>
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
        borderRadius: 30,
        borderWidth: 1,
        paddingLeft: 20,
        marginBottom: 10,
    },
    button: {
        alignItems: 'center',
        borderColor: theme.colorPrimary,
        borderRadius: 30,
        borderWidth: 1,
        marginVertical: 20,
        paddingVertical: 10,
        width: 150,
    },
    buttonPrimary: {
      backgroundColor: theme.colorPrimary,
    }
});

export default AdicionarChamados;
