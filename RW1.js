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
                <TouchableOpacity onPress={() => navigation.navigate('RW')}>
                    <Icon name="arrow-left" size={25} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>FAQ</Text>
            </View>
            <ScrollView contentContainerStyle={{}}>
            <View style={{ padding: 10, marginHorizontal: 20, marginTop: 20 }}>
  <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 15 }}>
    My wallet shows incorrect balance. What do I do?
  </Text>

 <View
          style={{
            marginVertical: 20,
            alignItems: 'center',
            overflow: 'hidden',
            borderRadius: 30,
          }}
        >  <YoutubePlayer
    height={250}
    play={false}
    videoId={'qW80fffi5og'}
  />
</View>



  <Text style={{ fontSize: 20, color: 'black', marginBottom: 15 }}>
    Worry not! We've got you. Try following the below steps:
  </Text>

  {[
    "Open the redBus App",
    "Navigate to the ‘‘Wallet’’ option within the account section.",
    "If the displayed wallet balance is inaccurate,",
    "Under recent activity check if the wallet balance has expired, as offer cash typically has a validity period",
    "Read your cash and offer cash details to understand the expiry information.",
    "Access the FAQ section to read frequently asked questions and terms and conditions pertaining to the wallet.",
    "If you still have some concerns, please reach out to redBus support for assistance."
  ].map((text, index) => (
    <View key={index} style={{ flexDirection: 'row', marginBottom: 15 }}>
      <Text style={{ width: 30, fontSize: 20, color: 'black' }}>{index + 1}.</Text>
      <Text style={{ flex: 1, fontSize: 20, color: 'black' }}>{text}</Text>
    </View>
  ))}
</View>

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