import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from "react-native-youtube-iframe";

const { width } = Dimensions.get('window');

const App = ({ navigation }) => {
  const [feedback, setFeedback] = useState(null); // 'positive' | 'negative' | null

  const handleFeedback = (type) => {
    setFeedback(type);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          backgroundColor: 'red',
          height: 60,
          paddingRight: 50,
          borderColor: 'red',
          borderBottomWidth: 1,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('TicketBooking')}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>
          FAQ
        </Text>
      </View>
      <ScrollView>
        <Text
          style={{
            fontSize: 20, // smaller text size
            fontWeight: 'bold',
            marginTop: 20,
            paddingHorizontal: 20,
          }}
        >
          I am unable to go beyond
        </Text>
        <Text
          style={{
            fontSize: 20, // smaller text size
            fontWeight: 'bold',
            paddingHorizontal: 20,
          }}
        >
          search option. What do I
        </Text>

        {/* Centered video with rounded corners */}
        <View
          style={{
            marginVertical: 20,
            alignItems: 'center',
            overflow: 'hidden',
            borderRadius: 30,
          }}
        >
          <YoutubePlayer
            height={250}
            width={width * 0.9} // Responsive width (90% of screen width)
            play={false}
            videoId={'aogFtVrHNjU'}
          />
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          {[
            "1. Open the redBus App.",
            "2. Input the boarding and dropping location and search for your bus.",
            "3. Ensure your redBus app is up-to-date: Confirm that you have the most recent version installed.",
            "4. Check your internet connectivity.",
            "5. Clear app cache: Clearing the app's cache can help resolve temporary glitches.",
            "6. Restart your device: Occasionally, a straightforward restart can address minor concerns.",
          ].map((line, idx) => (
            <Text
              key={idx}
              style={{ fontSize: 16, color: 'black', marginBottom: 15 }} // smaller text size for steps
            >
              {line}
            </Text>
          ))}
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
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
