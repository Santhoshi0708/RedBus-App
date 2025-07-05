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
                <TouchableOpacity onPress={() => navigation.navigate('PR')}>
                    <Icon name="arrow-left" size={25} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>FAQ</Text>
            </View>
            <ScrollView contentContainerStyle={{}}>

<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingHorizontal: 20 }}>
  {/* leadingIcon */}
  <Icon name="help-circle" size={25} color="black" />
  <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 10 }}>FAQ</Text>
</View>

<Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 20, paddingHorizontal: 20 }}>
  I am unable to select payment option. What do I do?
</Text>

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
    videoId={'aogFtVrHNjU'}
  />
</View>

<View style={{ padding: 10, marginHorizontal: 20, marginTop: 20 }}>
  {[
    "While on the payment page, you'll find various payment methods listed. If you're facing issue with a specific payment method, please try with an alternative payment option.",
    "If the issue persists, consider the following steps:",
    "Ensure your redBus app is up-to-date: Confirm that you have the latest version of the redBus app installed on your device.",
    "Check for the error message: Take note of any error messages displayed.",
    "Check if you can access different payment methods successfully.",
    "Check your internet connection: Ensure that you have a stable internet connection.",
    "Clear the app's cache: Clearing the app's cache can help resolve temporary glitches.",
    "Restart your device: Sometimes, a simple device restart can rectify minor problems.",
    "Reach out to redBus support: If the problem continues, it's advisable to directly contact redBus customer support for assistance."
  ].map((text, index) => (
    <View key={index} style={{ flexDirection: 'row', marginBottom: 15 }}>
      {index >= 2 ? (
        <Text style={{ width: 30, fontSize: 16, color: 'black' }}>{index - 1}.</Text>
      ) : (
        <Text style={{ width: 30 }} />
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