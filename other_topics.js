import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const items = [
    { icon: 'alert-circle-outline', label: 'Technical Issues',nav:'Chat1' },
    { icon: 'cellphone-message', label: 'redBus referral help',nav:'Chat2' },
    { icon: 'gesture-tap-hold', label: 'New bus booking help' ,nav:'Chat3'},
    { icon: 'star-circle', label: 'Offers',nav:'Chat4' },
    { icon: 'wallet-outline', label: 'redBus wallet help',nav:'Chat5' },
  ];

  return (
    <ScrollView contentContainerStyle={{backgroundColor:'white'}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60,paddingRight:50,borderColor:'red',borderBottomWidth:1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('help')}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Other Topics</Text>
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
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15,marginTop:10 }}>
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
