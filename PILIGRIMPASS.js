import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const Data1 = [
    { id: 10, t1: '12% off in select cities', t2: 'Valid till: 30 Apr', t3: 'PILGRIMPASS', colour: 'lavender', t4: 'Hotel', card: 'PILGRIMPAS' }
  ];
  const item = Data1[0];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center', padding: 10 }}>PILGRIMPASS</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginVertical:140 }}>
        <Card style={{ backgroundColor: item.colour, width: 320, height: 250, borderRadius: 15, overflow: 'hidden', marginTop: 10 }}>
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

      {/* ScrollView for Terms & Conditions */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={{ marginTop: 20, padding: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 20 }}>TERMS & CONDITIONS</Text>
          <View style={{ marginTop: 30 }}>
            {[
              "Use Code PILGRIMPASS and enjoy Flat 12% instant discount on Hotels.",
              "The offer can be availed once per user only and is applicable for select cities.",
              "This offer is applicable for Hotel Bookings on the redBus app only.",
              "Maximum discount that can be availed through this offer is Rs 5000.",
              "This offer is only valid for logged-in users who verify their mobile number with OTP.",
              "Redbus India Pvt Ltd reserves the right to end any or all offers at its discretion without any prior notice."
            ].map((term, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 12 }}>
                <Text style={{ fontSize: 16, width: 25 }}>{index + 1}.</Text>
                <Text style={{ fontSize: 16, flex: 1, lineHeight: 22, textAlign: 'justify' }}>{term}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, width: '100%' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: "white" }}>Copy offer code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
