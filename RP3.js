import React,{useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Divider, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from "react-native-youtube-iframe";



const App = ({ navigation }) => {
   const [feedback, setFeedback] = useState(null); // 'positive' | 'negative' | null

  const handleFeedback = (type) => {
    setFeedback(type);
  };
      
    return (
                <View style={{flex:1}}>
         <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60, paddingRight: 50, borderColor: 'red', borderBottomWidth: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('RP')}>
                    <Icon name="arrow-left" size={25} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>FAQ</Text>
            </View>
        <ScrollView contentContainerStyle={{}}>
           
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 20, paddingHorizontal: 20 }}>
    How to participate in the routePass program?
  </Text>
  <Text style={{ fontSize: 18, marginTop: 20, paddingHorizontal: 20 }}>
    This program is for a selected set of users. If you are eligible - then while booking a ticket, look for the ‘routePass’ banner on the search result page and unlock the routePass program while you book the ticket.{"\n\n"}
    If eligible, your routePass program can be unlocked while booking the ticket, on the home page, or on the ticket page (My Bookings &gt; Ticket).
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