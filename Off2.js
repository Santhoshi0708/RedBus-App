import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from 'react-native-youtube-iframe';

const App = ({ navigation }) => {
  const [feedback, setFeedback] = useState(null); // 'positive' | 'negative' | null

  const handleFeedback = (type) => {
    setFeedback(type);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          backgroundColor: 'red',
          height: 60,
          borderBottomWidth: 1,
          borderColor: 'red',
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Off')}>
          <Icon name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>
          FAQ
        </Text>
      </View>

      <ScrollView>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 20, paddingHorizontal: 20 }}>
          I am unable to apply the offer code. What do I do?
        </Text>

        {/* Video */}
 <View
          style={{
            marginVertical: 20,
            alignItems: 'center',
            overflow: 'hidden',
            borderRadius: 30,
          }}
        >          <YoutubePlayer height={200} play={false} videoId={'aogFtVrHNjU'} />
        </View>

        {/* Answer Section */}
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 18, color: 'black', marginBottom: 15 }}>
            Open the redBus App and ensure that you are logged in to your account. Navigate to the
            Payment page, where you can input the offer code. After entering the code, click the
            ‘‘Apply’’ button.
          </Text>

          <Text style={{ fontSize: 18, color: 'black', marginBottom: 10 }}>
            If you encounter an error message, review the following guidelines:
          </Text>

          {[
            'Check the terms and conditions for the applied offer.',
            'Note that all offers are exclusively valid for users who are logged into their accounts.',
            'Be aware that each offer code has a usage limit of one per customer email or mobile number.',
            'To access the terms and conditions, proceed to the offer section and select ‘‘View All.’’',
            'You will find a list of available offers; choose one and read through its terms and conditions.',
            'After understanding the terms, apply the chosen offer and finalize your booking.',
          ].map((item, index) => (
            <Text
              key={index}
              style={{ fontSize: 16, color: 'black', marginBottom: 10 }}
            >{`${index + 1}. ${item}`}</Text>
          ))}
        </View>

        {/* Feedback Section */}
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
