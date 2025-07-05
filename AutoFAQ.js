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
              <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>AutoRide FAQ</Text>
            </View>

            
  <View>
    <TouchableOpacity
      onPress={() => navigation.navigate('')}
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
        <Icon name='text-box-outline' size={30} color="black" />
        <Text style={{ fontSize: 18, color: 'black' }}>General FAQ</Text>
      </View>
      <Icon name="chevron-right" size={30} color="black" />
    </TouchableOpacity>
    <Divider style={{ height: 1, backgroundColor: '#ccc' }} />
  </View>
    </ScrollView>
  );
};

export default App;
