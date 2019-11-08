/**
 * Home
 * https://github.com/marcosvaz/workstation
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableNativeFeedback,
} from 'react-native';

import theme from '../config/AppTheme'

const Home = ({ navigation }) => {
    const { navigate } = navigation
    const data = [
        {
            id: 1,
            name: 'funcionarios',
            params: {
                ativos: 20,
                inativos: 12,
                total: 32,
            }
        },
        {
            id: 2,
            name: 'chamados',
            params: {
                atendidos: 20,
                pendentes: 12,
                atrasados: 11,
                total: 43
            }
        },
        {
            id: 3,
            name: 'ativos',
            params: {
                atendidos: 20,
                pendentes: 12,
                atrasados: 11,
                total: 43
            }
        },
        {
            id: 4,
            name: 'ativos',
            params: {
                atendidos: 20,
                pendentes: 12,
                atrasados: 11,
                total: 43
            }
        }
    ]

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>

                <View style={ styles.home_top }>

                    {/* Botão Menu */}
                    <Text>Menu</Text>

                    {/* Foto do usuário */}
                    <Image
                        source={{ uri: 'https://www.pngarts.com/files/3/Avatar-PNG-Picture.png' }}
                        style={{ width: 40, height: 40, borderRadius: 100 }}
                    />

                </View>
                
                {/* Título da Página */}
                <View style={ styles.home_header }>

                    <Text style={ styles.home_text }>Dashboard</Text>

                </View>
               
                {/* Gráficos e métricas */}
                <View style={{ marginHorizontal: 20, marginTop: 20, flex: 1 }}>
                    
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        
                        {
                            data.map(d => {

                                // Card
                                return (
                                    <View style={ styles.card_container } key={ d.id }>

                                        <Text style={ styles.card_text }>{ d.name }</Text>

                                    </View>
                                )

                            })
                        }

                    </View>

                </View>

                {/* Action */}
                <TouchableNativeFeedback onPress={() => navigate('AdicionarChamados')} >

                    <View
                        style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 30, backgroundColor: theme.colorPrimary }}>
                        
                        <Text style={ styles.action_text }>Adicionar novo chamado (+)</Text>
                    
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

    card_container: {
        backgroundColor: theme.colorPrimary,
        borderRadius: 10,
        height: 180,
        marginTop: 10,
        width: 180,
    },

    card_text: {
        color: 'white',
        fontSize: 16,
        marginLeft: 20,
        marginTop: 20,
        textTransform: 'capitalize',
    },

    action_text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default Home;
