import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const items = [
    { icon: 'ticket-confirmation-outline', label: 'Ticket Booking',nav1: 'TicketBooking' },
    { icon: 'clock-outline', label: 'Ticket Reschedule / Cancellation',nav1:'TR' },
    { icon: 'bus-clock', label: 'Bus Cancellation',nav1:'BC' },
    { icon: 'percent-outline', label: 'Offers',nav1:'Off' },
    { icon: 'wallet-outline', label: 'Payments & Refund',nav1:'PR'},
    { icon: 'cash-refund', label: 'redBus Wallet' ,nav1:'RW'},
    { icon: 'security', label: 'Refund Guarantee Program',nav1:'RGP'},
    { icon: 'shield-star', label: 'Trip Rewards',nav1:'TRP' },
    { icon: 'text-box-outline', label: 'Other Queries',nav1:'OQ' },
    { icon: 'routes', label: 'routePass' ,nav1:'RP'},
  ];

  return (
    <ScrollView contentContainerStyle={{}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60,paddingRight:50,borderColor:'red',borderBottomWidth:1 }}>
              <TouchableOpacity onPress={() => navigation.navigate('help')}>
                <Icon name="arrow-left" size={30} color="white" />
              </TouchableOpacity>
              <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Bus FAQ</Text>
            </View>
     {items.map((item, index) => (
  <View key={index}>
    <TouchableOpacity
      onPress={() => navigation.navigate(item.nav1)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 25,
        minHeight: 60, 
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
        <Icon name={item.icon} size={30} color="black" />
        <Text style={{ fontSize: 18, color: 'black' }}>{item.label}</Text>
      </View>
      <Icon name="chevron-right" size={30} color="black" />
    </TouchableOpacity>
    <Divider style={{ height: 1, backgroundColor: '#ccc' }} />
  </View>
))}
    </ScrollView>
  );
};

export default App;
