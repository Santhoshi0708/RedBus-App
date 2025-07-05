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
  I want to know the terms & conditions regarding usuage of redBus wallet  </Text>


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
    videoId={'p_At89qWhVY'}
  />
</View>

  <Text style={{ fontSize: 20, color: 'black', marginBottom: 15 }}>
    Follow the below simple steps to read the terms and conditions regarding your redBus wallet:
  </Text>

  {[
    "Open the redBus App",
    "Under the account section, click on Wallet",
    "You can view the 'Your Cash and Offer Cash' balance",
    "Click on (i) icon to know more about 'Your Cash and Offer Cash'",
    "Read the 'Your Cash' and 'Offer Cash' details regarding the expiry",
    "Click on the FAQ section to read the FAQ/T&C regarding the wallet"
  ].map((text, index) => (
    <View key={index} style={{ flexDirection: 'row', marginBottom: 15 }}>
      <Text style={{ width: 30, fontSize: 20, color: 'black' }}>{index + 1}.</Text>
      <Text style={{ flex: 1, fontSize: 20, color: 'black' }}>{text}</Text>
    </View>
  ))}

  <Text style={{ fontSize: 20, color: 'black', marginTop: 10 }}>
    Was it helpful?
  </Text>
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