import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const items = [
    { label: 'How to book a train ticket on redBus App?' ,nav:'BF1'},
    { label: 'I do not remember my IRCTC account password. How to book a ticket?'  ,nav:'BF2'},
    { label: 'How do I change my boarding point while booking a  train ticket?'  ,nav:'BF3'},
    { label: 'How do I change the boarding point after the train ticket is booked?'  ,nav:'BF4'},
    { label: 'How many people can I book on a single train ticket booking?'  ,nav:'BF5'},
    { label: 'Do I get to choose a seat or berth of my choice?'  ,nav:'BF6'},
    { label: 'Where can I view the traiin ticket that I have booked through redRail?' ,nav:'BF7' },
    { label: 'How do I pay for my online train ticket booking that is made through redRail?' ,nav:'BF8' },
  ];

  return (
    <ScrollView contentContainerStyle={{}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60,paddingRight:50,borderColor:'red',borderBottomWidth:1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('TrainFAQ')}>
          <Icon name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Booking FAQs</Text>
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
