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
<View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 100, paddingRight: 50, borderColor: 'red', borderBottomWidth: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('OQ')}>
                    <Icon name="arrow-left" size={30} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>FAQ</Text>
            </View>
        <ScrollView contentContainerStyle={{}}>
            
            <Text style={{fontSize:25,fontWeight:'bold',marginTop:20,paddingHorizontal:20}}>What is the luggagae policy?</Text>
        {/* video */}
 <View
          style={{
            marginVertical: 20,
            alignItems: 'center',
            overflow: 'hidden',
            borderRadius: 30,
          }}
        >  <YoutubePlayer
    height={200}
    play={false}
    videoId={'GwABkKtIaH4'}
  />
</View>    
<View style={{ padding: 10, marginHorizontal: 20, marginTop: 20 }}>
  <Text style={{ fontSize: 18, color: 'black', marginBottom: 20 }}>
    Each passenger is allowed to carry one bag of up to 10 KG and one personal item such as a laptop bag, handbag, or briefcase of up to 5 KG.{"\n\n"}
    Passengers should not carry any goods like weapons, inflammable, firearms, ammunition, drugs, liquor, or any other articles that are prohibited under law. Bus Operators reserve the right to deny boarding or charge an additional amount in case a passenger is traveling with extra luggage than what is mentioned above.{"\n\n"}
    The above policy will be applicable to most buses unless a particular bus operator specifies otherwise in their terms and conditions. To check the operator specific luggage policy, you can follow the below steps:
  </Text>

  {[
    'Open the redBus App',
    'Choose the source and destination, and travel date.',
    'Tap the ‘‘Search Bus’’ option',
    'A roster of accessible buses will be displayed',
    'Pick your desired bus',
    'Select ‘‘Booking Policies’’',
    'Scroll downward to access the Luggage Policy section'
  ].map((text, index) => (
    <View key={index} style={{ flexDirection: 'row', marginBottom: 15 }}>
      <Text style={{ width: 30, fontSize: 18, color: 'black' }}>{index + 1}.</Text>
      <Text style={{ flex: 1, fontSize: 18, color: 'black' }}>{text}</Text>
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