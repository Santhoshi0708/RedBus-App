import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const items = [
    { icon: 'ticket-confirmation-outline', label: 'Booking FAQs',nav1: 'BF' },
    { icon: 'text-box-outline', label: 'Tatkal FAQs',nav1:'TF' },
    { icon: 'text-box-outline', label: 'Journey FAQs',nav1:'JF' },
    { icon: 'cancel', label: 'Cancellation FAQs',nav1:'CF' },
    { icon: 'text-box-outline', label: 'TDR FAQs',nav1:'TDF'},
    { icon: 'currency-inr', label: 'Free Cancellation FAQs' ,nav1:'FF'},
    { icon: 'restart', label: 'Refund FAQs',nav1:'RF'},
    { icon: 'seat-passenger', label: 'Seat Guarantee',nav1:'SG' },
    { icon: 'text-box-outline', label: 'Rail Rewards' ,nav1:'RR'},
  ];

  return (
    <ScrollView contentContainerStyle={{}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60,paddingRight:50,borderColor:'red',borderBottomWidth:1 }}>
              <TouchableOpacity onPress={() => navigation.navigate('help')}>
                <Icon name="arrow-left" size={25} color="white" top={10} />
              </TouchableOpacity>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20,top:10 }}>Train FAQ</Text>
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
