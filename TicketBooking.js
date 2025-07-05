import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const items = [
    { label: 'I am unable to go beyond search option. What do I do?' ,nav:'TB1'},
    { label: 'How to book a bus ticket on redBus?'  ,nav:'TB2'},
    { label: 'Where can I view the bus ticket that I have booked through redBus?'  ,nav:'TB3'},
    { label: 'How to check the availability of buses?'  ,nav:'TB4'},
    { label: 'Do I need to create an account to book bus tickets on redBus?'  ,nav:'TB5'},
    { label: 'How to sign-up or login to redBus?'  ,nav:'TB6'},
    { label: 'Can I book State Road Transport Corporation bus tickets from redBus?' ,nav:'TB7' },
    { label: 'Will I have to pay extra money for booking online tickets on redBus?' ,nav:'TB8' },
    { label: 'I am unable to select a specific seat/operator/date/route. What do I do?' ,nav:'TB9' }
  ];

  return (
    <ScrollView contentContainerStyle={{}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60,paddingRight:50,borderColor:'red',borderBottomWidth:1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('BusFAQ')}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Ticket Booking</Text>
      </View>
      {items.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() => navigation.navigate(item.nav)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 15,
              gap: 10
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, gap: 15,marginTop:20 }}>
              <Icon name="text-box-outline" size={25} color="black" />
              <Text style={{ fontSize: 18, color: 'black', flexShrink: 1 }}>{item.label}</Text>
            </View>
            <Icon name="chevron-right" size={25} color="black" />
          </TouchableOpacity>
          <Divider style={{ height: 1, backgroundColor: '#ccc', marginHorizontal: 20 }} />
        </View>
      ))}
    </ScrollView>
  );
};

export default App;
