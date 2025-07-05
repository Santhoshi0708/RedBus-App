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
                <TouchableOpacity onPress={() => navigation.navigate('Off')}>
                    <Icon name="arrow-left" size={30} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>FAQ</Text>
            </View>
        <ScrollView contentContainerStyle={{}}>
            
            <Text style={{fontSize:22,fontWeight:'bold',marginTop:20,paddingHorizontal:20}}>How do I apply the offer code?</Text>
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
  {[
    "Follow the below steps to apply the offer code:",
    "Open the redBus App and ensure that you are logged in to your account.",
    "Navigate to the redBus Payment page.",
    "The offer Code section will appear where you can enter the offer code accurately and click \"Apply\"",
    "Once the offer code is successfully applied, the discount will be reflected in your booking summary.",
    "Choose your preferred payment method and complete the payment."
  ].map((text, index) => (
    <View key={index} style={{ flexDirection: 'row', marginBottom: 15 }}>
      {index === 0 ? (
        <Text style={{ width: 30 }} />
      ) : (
        <Text style={{ width: 30, fontSize: 16, color: 'black' }}>{index}.</Text>
      )}
      <Text style={{ flex: 1, fontSize: 16, color: 'black' }}>{text}</Text>
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