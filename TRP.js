import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
    const items = [
       { id:'What are Trip Rewards? What are its benefits?',nav:'TRP1'},
        {id:'Is the Trip Rewards available for everyone? Am I eligible for the Trip Rewarrds program?',nav:'TRP2'},
        {id:'How to participate in the Trip Rewards program?',nav:'TRP3'},
        {id:'I have booked a ticket, but its not showing up in Trip Rewards program',nav:'TRP4'},
        {id:'Why am I not able to redeem my free ticket despite booking all of the required number of tickets?',nav:'TRP5'},
      ];
      

  return (
    <ScrollView contentContainerStyle={{}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60,paddingRight:50,borderColor:'red',borderBottomWidth:1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('BusFAQ')}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Trip Rewards</Text>
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
              <Text style={{ fontSize: 18, color: 'black', flexShrink: 1 }}>{item.id}</Text>
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
