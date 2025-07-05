import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
 const [feedback, setFeedback] = useState(null); // 'positive' | 'negative' | null

  const handleFeedback = (type) => {
    setFeedback(type);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60, paddingRight: 50, borderColor: 'red', borderBottomWidth: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('JF')}>
          <Icon name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>FAQ</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 20, paddingHorizontal: 20 }}>How do I check my latest PNR status?</Text>
        <Text style={{ fontSize: 18, marginTop: 20, paddingHorizontal: 20 }}>
          You can check your latest PNR status on the redBus/redRail mobile app in the following ways -
        </Text>
        <Text style={{ fontSize: 16, marginTop: 20, paddingHorizontal: 20 }}>
          1. Option 1: On the Home Page -> Under PNR Status Tab
        </Text>
        <Text style={{ fontSize: 16, marginTop: 20, paddingHorizontal: 20 }}>
          2. Option 2: Go to My bookings -> Select relevant booking -> Check latest PNR status
        </Text>

       <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Was it helpful?</Text>

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
