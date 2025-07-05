import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const Data1 = [
    {
      id: 6,
      t1: 'Save up to Rs 50 on IntrCity SmartB...',
      t2: 'Valid till: 30 Apr',
      t3: 'INTRCITY',
      colour: 'lightblue',
      t4: 'Bus',
      card: 'of3',
    },
  ];
  const item = Data1[0];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center', padding: 10 }}>INTRCITY</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Card style={{ backgroundColor: item.colour, width: 320, height: 250, borderRadius: 15, overflow: 'hidden' }}>
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

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100, alignItems: 'flex-start' }}>
        <View style={{ width: '100%' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 20, marginBottom: 15 }}>TERMS & CONDITIONS</Text>
          {[
            "Use code INTRCITY to get 10% Discount up to Rs 50 on IntrCity SmartBus operator.",
            "redBus offer (INTRCITY) applicable for minimum ticket value of Rs 200.",
            "Offer valid only for bus ticket bookings.",
            "redBus offer is valid only for logged-in users who verify their mobile number with OTP (one time password).",
            "Redbus offer is applicable on all channels.",
            "redBus India Pvt Ltd reserves the right to end any or all offers at its discretion without any prior notice.",
            "All disputes are subject to New Delhi jurisdiction.",
          ].map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 12 }}>
              <Text style={{ fontSize: 16, width: 25 }}>{index + 1}.</Text>
              <Text style={{ fontSize: 16, flex: 1, lineHeight: 22, textAlign: 'justify' }}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, width: '100%' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>Copy offer code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
