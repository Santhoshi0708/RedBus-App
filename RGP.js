import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
    const items = [
       { id:'What is Refund guarantee?',nav:'RGP1'},
        {id:'How does Refund guarantee work?',nav:'RGP2'},
        {id:'How do I opt-in for a refund guarantee for my nooking?',nav:'RGP3'},
        {id:'Can I cancel the refund guarantee after purchasing it?',nav:'RGP4'},
        {id:'What happens to my refund guarantee if I reschedule my booking?',nav:'RGP5'},
        {id:'Why am I still getting cancellatioon charges even thought I have purchased refund guarantee?',nav:'RGP6'},
        {id:'Will my refund guarantee be refunded when I cancel my ticket?',nav:'RGP7'},
      ];
      

  return (
    <ScrollView contentContainerStyle={{}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60,paddingRight:50,borderColor:'red',borderBottomWidth:1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('BusFAQ')}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Payment & Refunds</Text>
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
              <Icon name="text-box-outline" size={28} color="black" />
              <Text style={{ fontSize: 20, color: 'black', flexShrink: 1 }}>{item.id}</Text>
            </View>
            <Icon name="chevron-right" size={28} color="black" />
          </TouchableOpacity>
          <Divider style={{ height: 1, backgroundColor: '#ccc', marginHorizontal: 20 }} />
        </View>
      ))}
    </ScrollView>
  );
};

export default App;
