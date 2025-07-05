import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const HotelData = [
    { id: 9, t1: 'Flat 15% Instant off', t2: 'Valid till: 30 Apr', t3: 'REDSTAYS', colour: 'pink', t4: 'Hotel' },
    { id: 10, t1: '12% off in select cities', t2: 'Valid till: 30 Apr', t3: 'PILGRIMPASS', colour: 'lightblue', t4: 'Hotel' }
  ];


  const renderItem4 = ({ item }) => (
    <View style={{ flex: 1, paddingVertical: 10, alignItems: 'center' }}>
      <Card style={{ backgroundColor: item.colour, marginHorizontal: 10, width: 350, height: 250, borderRadius: 15, overflow: 'hidden' }}>
        <Card.Content>
          <TouchableOpacity style={{ paddingVertical: 8, paddingHorizontal: 10, width: '30%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
            <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>{item.t4}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>{item.t1}</Text>
          <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', marginTop: 5 }}>{item.t2}</Text>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TouchableOpacity style={{ paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: 'white', width: 250, alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <Icon name="tag-outline" size={30} color="black" />
                <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>{item.t3}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 100 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Hotels')}>
          <Icon name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center', padding: 10 }}>Offers</Text>
      </View>

      <FlatList
        data={HotelData}
        renderItem={renderItem4}
        keyExtractor={(item) => item.id.toString()}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default App;
