import React from 'react';
import { View, Text, TouchableOpacity, ScrollView ,Image} from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const items = [
    { icon: 'text-box-outline', label: 'General FAQs',nav1: '' },
    { icon: 'text-box-outline', label: 'While Booking',nav1:'' },
    { icon: 'text-box-outline', label: 'After Booking',nav1:'' },
    { icon: 'percent-outline', label: 'Payment / Offers',nav1:'' },
    { icon: 'cancel', label: 'Cancellation / Reschedule' ,nav1:''},
    { icon: 'restart', label: 'Refund Related',nav1:''},
    { icon: 'text-box-outline', label: 'Need Further Help',nav1:'' },
    
  ];

  return (
    <ScrollView contentContainerStyle={{}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60,paddingRight:50,borderColor:'red',borderBottomWidth:1 }}>
              <TouchableOpacity onPress={() => navigation.navigate('help')}>
                <Icon name="arrow-left" size={30} color="white" />
              </TouchableOpacity>
              <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Hotels FAQ</Text>
            </View>

            <View style={{ alignItems: 'center', marginVertical: 20, paddingHorizontal: 10 }}>
                      <Image
                        source={{uri:'https://tse3.mm.bing.net/th?id=OIP.hf60xF-bTjfpQ6W0V24rfwHaE8&pid=Api&P=0&h=220'}}
                        style={{ height: 200, width: 300, borderRadius: 12 }}
                      />
                      <Text style={{ fontSize: 20, marginTop: 20 }}>For seamless booking management and</Text>
                      <Text style={{ fontSize: 20 }}>customer support</Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('help')}
                        style={{
                          backgroundColor: 'red',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingVertical: 15,
                          width: '90%',
                          borderRadius: 30,
                          marginVertical: 30,
                        }}
                      >
                        <View style={{flexDirection:'row',gap:10}}>
                        <Icon name="phone" size={24} color="white" top={5} />
                        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>call </Text>
                        </View>

                      </TouchableOpacity>
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
