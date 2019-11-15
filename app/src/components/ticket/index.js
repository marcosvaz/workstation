import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import theme from '../../config/AppTheme'
import IOSIcon from 'react-native-vector-icons/Ionicons'

const Ticket = ({ id, type, title, incharge, location, datetime, status }) => {
    return (
      <View style={[styles.ticket_card, {borderLeftColor: status}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.ticket_type}>{type}</Text>
          <Text style={styles.ticket_id}>#{id}</Text>
        </View>
        <Text style={styles.ticket_title}>{title}</Text>
        <View style={{flexDirection: 'row', alignContent: 'center'}}>
          <IOSIcon name="ios-man" color={theme.colorSecondary} size={24} />
          <Text style={styles.ticket_location}>{incharge}</Text>
        </View>
        <View style={{flexDirection: 'row', alignContent: 'center'}}>
          <IOSIcon name="ios-pin" color={theme.colorSecondary} size={24} />
          <Text style={styles.ticket_location}>{location}</Text>
        </View>
        <Text style={styles.ticket_time}>{datetime}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  ticket_card: {
    backgroundColor: '#FFF',
    borderLeftWidth: 5,
    borderRadius: 5,
    elevation: 3,
    marginRight: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  ticket_type: {
    color: '#E0E0E0',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 10,
    textTransform: 'uppercase',
  },

  ticket_id: {
    color: '#757575',
    fontWeight: 'bold',
  },

  ticket_title: {
    color: '#424242',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },

  ticket_location: {
    color: '#424242',
    fontSize: 16,
    marginBottom: 20,
    marginLeft: 10,
  },

  ticket_time: {
    color: '#E0E0E0',
    borderTopColor: '#EEEEEE',
    borderTopWidth: 1,
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 20,
  },
});

export default Ticket