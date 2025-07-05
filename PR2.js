import React,{useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Divider, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from "react-native-youtube-iframe";



const App = ({ navigation }) => {
    const [showFeedback, setShowFeedback] = useState(false);

    const feedback1 = () => {
        return (
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Icon name="check-circle" size={25} color="green" />
            <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>
              Thank you for giving your feedback
            </Text>
          </View>
        );
      };
      
    return (
        <View style={{flex:1}}>
<View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60, paddingRight: 50, borderColor: 'red', borderBottomWidth: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('PR')}>
                    <Icon name="arrow-left" size={25} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>FAQ</Text>
            </View>
            <ScrollView contentContainerStyle={{}}>



  

  <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20, paddingHorizontal: 20 }}>
    How do I check my refund status and details?
  </Text>

  <View style={{ margin: 20, borderRadius: 20, overflow: 'hidden' }}>
    <YoutubePlayer
      height={200}
      play={false}
      videoId={'d0-FpG-AWmI'}
    />
  </View>

  <View style={{ padding: 10, marginHorizontal: 20, marginTop: 20 }}>
  {[
    "Follow the below simple steps to check your refund status and details on the redBus App:",
    "Open the redBus App",
    "Access the ‘‘My Bookings’’ section",
    "Navigate to the ‘‘Cancelled’’ tab",
    "Choose the correct and appropriate booking",
    "Click on ‘‘Refund Details.’’",
    "Your refund status will be visible",
    "To view the complete details, click on ‘‘Show Details.’’",
    "The refund breakdown, total refund amount, cancellation time, and refund initiation and deposited details will be displayed."
  ].map((text, index) => (
    <View key={index} style={{ flexDirection: 'row', marginBottom: 15 }}>
      {index === 0 ? (
        <Text style={{ width: 30 }} />
      ) : (
        <Text style={{ width: 30, fontSize: 20, color: 'black' }}>{index}.</Text>
      )}
      <Text style={{ flex: 1, fontSize: 20, color: 'black' }}>{text}</Text>
    </View>
  ))}
</View>

<View style={{ alignItems: 'center', justifyContent: 'center' }}>
  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Was it helpful?</Text>

  <View style={{ flexDirection: 'row', gap: 20, marginTop: 15 }}>
    <IconButton
      onPress={() => {feedback1}}
      icon="thumb-up-outline"
      size={30}
      iconColor="black"
      style={{ backgroundColor: 'lightpink', borderRadius: 30 }}
    />
    <IconButton
      onPress={() => {feedback1}}
      icon="thumb-down-outline"
      size={30}
      iconColor="black"
      style={{ backgroundColor: 'lightpink', borderRadius: 30 }}
    />
  </View>
</View>


        </ScrollView>
        </View>
    );
};
export default App;