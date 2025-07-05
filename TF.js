import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const items = [
    { label: 'Can I book a train ticket under the Tatkall quota through redRail?' ,nav:'TF1'},
    { label: 'What is the tatkal booking window for redRail?'  ,nav:'TF2'},
    { label: 'Why is Tatkal window different for redRail?'  ,nav:'TF3'},
    { label: 'Can I cancel a ticket booked under Tatkal Quota?'  ,nav:'TF4'},
   
  ];

  return (
    <ScrollView contentContainerStyle={{}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60,paddingRight:50,borderColor:'red',borderBottomWidth:1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('TrainFAQ')}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Tatkal FAQS</Text>
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
