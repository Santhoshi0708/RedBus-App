import React,{useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Divider, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from "react-native-youtube-iframe";

import { Linking } from 'react-native';


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
            
            <Text style={{fontSize:22,fontWeight:'bold',marginTop:20,paddingHorizontal:20}}>Can I get discounts & offers on bus tickets at redBus?
</Text>
          <Text style={{ fontSize: 18, color: 'black', marginBottom: 15,marginTop:20,marginHorizontal:20}}>I have applied the promo code, but did not receive any cashback. What do I do?
          If you used a valid cashback coupon code while making a booking, then the corresponding cashback will be credited to redBus wallet within 3 days after completion of journey. Please check the terms and conditions.</Text>
<Text style={{ fontSize: 18, color: 'black', marginHorizontal: 20 }}>
  <Text
    style={{
      fontSize: 20,
      color: 'blue',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    }}
    onPress={() => Linking.openURL('https://www.redbus.in/info/OfferTerms#SUPERHIT')}
  >
    https://www.redbus.in/info/OfferTerms#SUPERHIT
  </Text>{' '}
  of the promotional offer carefully. If you have not received the cashback yet as per the terms and conditions, kindly select the trip for which you did not receive the cashback from Help section on the app and register a complaint by selecting “Offer related issue” for us to assist your further.
</Text>         <View style={{ alignItems: 'center', justifyContent: 'center' }}>
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