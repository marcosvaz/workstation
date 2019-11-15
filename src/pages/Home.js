/**
 * Home
 * https://github.com/marcosvaz/workstation
 *
 * @format
 * @flow
 */

import React from 'react';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PieChart} from 'react-native-svg-charts';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Ticket from '../components/ticket';

import theme from '../config/AppTheme';

import {data, tickets} from '../config/mock';

const Home = ({navigation}) => {
  const {navigate} = navigation;

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#ECEFF1'}}>
        <ScrollView>
          <View style={styles.home_top}>
            {/* Botão Menu */}
            <TouchableWithoutFeedback onPress={() => console.log('Menu')}>
              <Icon name="navicon" size={40} color={theme.colorSecondary} />
            </TouchableWithoutFeedback>

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

          {/* Título da Página */}
          <View style={styles.home_header}>
            <Text style={styles.home_text}>Dashboard</Text>
          </View>

          {/* Gráficos e métricas */}
          <View style={{marginHorizontal: 20, flex: 1}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}>
              {data.map(d => {
                // Card
                return (
                  <View style={styles.card_container} key={d.id}>
                    <Text style={styles.card_text}>{d.name}</Text>
                    <PieChart
                      valueAccessor={({item}) => item.value}
                      data={d.graph}
                      style={{height: 100, marginTop: 15}}
                    />
                  </View>
                );
              })}
            </View>
          </View>

          {/* Título da Página */}
          <View style={styles.home_header}>
            <Text style={styles.home_text}>Últimos chamados</Text>

            {/* Chamado */}
            {tickets.map(ticket => {
              return (
                <Ticket
                  key={ticket.id}
                  id={ticket.id}
                  type={ticket.type}
                  title={ticket.title}
                  incharge={ticket.incharge}
                  location={ticket.location}
                  datetime={ticket.datetime}
                  status={ticket.status}
                />
              );
            })}
          </View>
        </ScrollView>

        {/* Botão de ação */}
        <FloatingAction
          actions={[
            {
              color: 'white',
              icon: require('../assets/ticket.png'),
              name: 'AdicionarChamados',
              text: 'Adicionar novo chamado',
              position: 1,
            },
            {
              color: 'white',
              icon: require('../assets/list.png'),
              name: 'VerChamados',
              text: 'Ver todos os chamados',
              position: 2,
            },
            {
              color: 'white',
              icon: require('../assets/location.png'),
              name: 'VerFuncionarios',
              text: 'Localizar funcionários',
              position: 3,
            },
          ]}
          onPressItem={name => navigate(name)}
          color="#f39422"
        />
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
    marginBottom: 20,
  },

  home_header: {
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 20,
  },

  home_text: {
    color: theme.colorPrimary,
    fontSize: 24,
    fontWeight: 'bold',
  },

  card_container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 3,
    marginTop: 10,
    paddingBottom: 20,
    width: 180,
  },

  card_text: {
    color: theme.colorPrimary,
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
    textTransform: 'capitalize',
  },

  action_text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
