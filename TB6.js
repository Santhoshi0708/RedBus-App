import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from "react-native-youtube-iframe";

const App = ({ navigation }) => {
  const [feedback, setFeedback] = useState(null); // 'positive' | 'negative' | null

  const handleFeedback = (type) => {
    setFeedback(type);
  };

  const loginIssues = [
    "Confirm if you entered the correct phone number.",
    "Ensure your text message inbox is not full.",
    "Check if your phone is set to block messages from unknown senders.",
    "Verify if your phone carrier is blocking the message.",
    "Check for a stable internet connection.",
    "If the issue persists, attempt restarting your device.",
    "Ensure you have the latest version of the redBus App; update it if needed.",
    "Clear the app cache and retry the login process.",
    "For Google account users, reset the email password and attempt logging in again."
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60 }}>
        <TouchableOpacity onPress={() => navigation.navigate('TicketBooking')}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>FAQ</Text>
      </View>

      <ScrollView>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20, paddingHorizontal: 20 }}>
          How to sign-up or login to redBus?
        </Text>
        <View style={{ margin: 20, borderRadius: 20, overflow: 'hidden' }}>
  <YoutubePlayer height={250} play={false} videoId={'VUd1t1LgjP0'} />
</View>


        <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 30, paddingHorizontal: 20 }}>
          Login/Sign-up Issues
        </Text>
        <Text style={{ fontSize: 20, marginTop: 15, paddingHorizontal: 20 }}>
          It's very easy to sign-up or login on redBus App/Website using your mobile number and validating with an OTP.
          You can also login using your Google account. If the OTP is not received, investigate the following:
        </Text>

        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          {loginIssues.map((issue, index) => (
            <View key={index} style={{ flexDirection: 'row', marginBottom: 15 }}>
              <Text style={{ fontSize: 20, color: 'black', marginRight: 10 }}>{index + 1}.</Text>
              <Text style={{ fontSize: 20, color: 'black', flex: 1 }}>{issue}</Text>
            </View>
          ))}
        </View>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
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
      </ScrollView>
    </View>
  );
};

export default App;
