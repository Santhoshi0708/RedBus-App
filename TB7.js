import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const [feedback, setFeedback] = useState(null); // 'positive' | 'negative' | null

  const handleFeedback = (type) => {
    setFeedback(type);
  };

  const srtcList = [
    'APSRTC - Andhra Pradesh State Road Transport Corporation',
    'TSRTC - Telangana State Road Transport Corporation',
    'HRTC - Himachal Road Transport Corporation',
    'MSRTC - Maharashtra State Road Transport Corporation',
    'RSRTC - Rajasthan State Road Transport Corporation',
    'BSRTC - Bihar State Road Transport Corporation',
    'UPSRTC - Uttar Pradesh State Road Transport Corporation',
    'KSRTC - Kerala State Road Transportation Corporation',
    'SBSTC - South Bengal State Transportation Corporation',
    'CTC - Calcutta Tramways Company',
    'PEPSU - Patiala and East Punjab States Union Transportation Corporation',
    'HPTDC - Himachal Pradesh Tourism Development Corporation',
    'KTCL - Kadamba Transport Corporation',
    'WBSTC - West Bengal State Transportation Corporation',
    'ASTC - Assam State Transport Corporation',
    'KSTDC - Karnataka State Tourism Development Corporation',
    'TSTDC - Telangana State Tourism Development Corporation',
    'NBSTC - North Bengal State Transport Corporation',
    'KAAC - Karbi Anglong Autonomous Council Transport',
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60, paddingRight: 50, borderBottomWidth: 1, borderColor: 'red' }}>
        <TouchableOpacity onPress={() => navigation.navigate('TicketBooking')}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>FAQ</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Divider style={{ marginVertical: 30 }} />

        <Text style={{ fontSize: 25, fontWeight: 'bold', paddingHorizontal: 20 }}>
          Can I book State Road Transport Corporation bus tickets from redBus?
        </Text>

        <Text style={{ fontSize: 20, marginTop: 20, paddingHorizontal: 20 }}>
          Yes, you can book SRTC (State Road Transport Corporation) bus tickets using redBus website or mobile app. Some of the major SRTCs include:
        </Text>

        <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
          {srtcList.map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', marginBottom: 10 }}>
              <View style={{ width: 30 }}>
                <Text style={{ fontSize: 20, color: 'black' }}>{index + 1}.</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20, color: 'black' }}>{item}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={{ fontSize: 20, color: 'black', paddingHorizontal: 20, marginTop: 15 }}>
          We are rapidly expanding our network with the other SRTC vendors as well. Stay tuned!
        </Text>

        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Was it helpful?</Text>
          <View style={{ flexDirection: 'row', gap: 20, marginTop: 15 }}>
           <IconButton
  onPress={() => handleFeedback('positive')}
  icon="thumb-up-outline"
  size={30}
  iconColor="black"
  style={{ backgroundColor: 'lightpink', borderRadius: 30 }}
/>
<IconButton
  onPress={() => handleFeedback('negative')}
  icon="thumb-down-outline"
  size={30}
  iconColor="black"
  style={{ backgroundColor: 'lightpink', borderRadius: 30 }}
/>

          </View>
          {feedback === 'positive' && (
        <Text style={{ color: 'green', marginTop: 10 }}>
          Thanks for your positive feedback!
        </Text>
      )}

      {feedback === 'negative' && (
        <Text style={{ color: 'red', marginTop: 10 }}>
          Sorry to hear that. We'll try to improve!
        </Text>
      )}
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
