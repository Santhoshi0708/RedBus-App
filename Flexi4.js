import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton, IconButton, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const [clicked, setclicked] = useState();
  const [selectedState, setSelectedState] = useState('');

  const FAQ = [
    { q: 'How referral works?', a: 'Share your unique referral code with your friends, ask your friend to download the redBus app & earn rewards when your friend completes their first trip with redBus.' },
    { q: 'How should I opt for a lightning fast refund?', a: 'We process all refunds via lightning fast mode by default. No action required from the user.' },
    { q: 'Will my friend get a discount when they use my referral code?', a: 'Yes of course! Once your friend signs up with your referral code, they can use code FIRST to get 10% off up to ₹100 off and ₹100 flat cashback on completion of the first journey with redBus.' },
  ];

  const states = [
    'Andhra Pradesh',
    'Telangana',
    'Karnataka',
    'Tamil Nadu',
    'Kerala',
    'Maharashtra',
    'Gujarat',
    'Rajasthan',
    'Uttar Pradesh',
    'West Bengal',
  ];
const handleState =()=>{
   
}
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'brown', height: 60, paddingRight: 50, borderColor: 'red', borderBottomWidth: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
          <Icon name="close" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Select State</Text>
      </View>

      <Text style={{ fontSize: 22, marginLeft: 20, marginTop: 20 }}>Find Bus Timings between cities in your state</Text>
      <Text style={{ fontSize: 20, color: 'grey', marginLeft: 20, marginVertical: 20 }}>PICK YOUR STATE</Text>

      <View style={{ marginHorizontal: 20 ,}}>
        <RadioButton.Group onValueChange={value => setSelectedState(value)} value={selectedState}>
          {states.map((state, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center',gap:15, marginBottom: 20,borderBottomWidth:1,borderColor:'lightgrey' }}>
              <RadioButton color="red" value={state} />
              <Text style={{ fontSize: 20 }}>{state}</Text>
            </View>
          ))}
        </RadioButton.Group>
      </View>

      <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 40 }}>
        <TouchableOpacity  style={{ backgroundColor: 'brown', paddingHorizontal: 60, borderRadius: 10,paddingVertical:10}} onPress={() => {
  if (selectedState.trim() !== '') {
    navigation.navigate('Next', { selectedState });
  } else {
    alert('Please select a State before continuing.');
  }
}}

        >
          <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default App;
