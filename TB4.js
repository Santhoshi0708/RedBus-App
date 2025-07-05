import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Divider, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from "react-native-youtube-iframe";



const App = ({ navigation }) => {
    const [feedback, setFeedback] = useState(null); // 'positive' | 'negative' | null

  const handleFeedback = (type) => {
    setFeedback(type);
  };
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
                             <TouchableOpacity onPress={() => navigation.navigate('TicketBooking')}>
                                 <Icon name="arrow-left" size={25} color="white" />
                             </TouchableOpacity>
                             <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>FAQ</Text>
                         </View>
        <ScrollView contentContainerStyle={{}}>
           
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20, paddingHorizontal: 20 }}>How to check the availability of buses?</Text>
            <Text style={{ fontSize: 22, marginTop: 20, paddingHorizontal: 20 }}>Checking the availability of the buses is very simple and can be done in 5 easy steps as follows:
            </Text>
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
  {[
    "On the home page, enter the desired source, destination, and date of travel.",
    "All available buses will be shown to you to choose from. We show a lot of useful information such as fare, journey duration, amenities, bus ratings, etc so that you can choose the bus that you like the best.",
    "Once you select the bus that you like the best, you can check the available seats and choose the seat of your choice.",
    "In case there are no buses available for your requirement, you will see a “No services found” message on your screen.",
    "You can try changing the date or enter other nearby cities as source/destination, as per your requirement."
  ].map((item, index) => (
    <View key={index} style={{ flexDirection: 'row', marginBottom: 15 }}>
      <Text style={{ fontSize: 20, color: 'black', marginRight: 10 }}>{index + 1}.</Text>
      <Text style={{ fontSize: 20, color: 'black', flex: 1 }}>{item}</Text>
    </View>
  ))}
</View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
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