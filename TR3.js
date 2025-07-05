import React, { useRef, useState } from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated'; // Make sure this is at the top
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const App = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
const [feedback, setFeedback] = useState(null); // 'positive' | 'negative' | null

  const handleFeedback = (type) => {
    setFeedback(type);
  };  const sheetRef = useRef(null);
  const snapPoints = ['10%'];

  const data = [
    {
      image: require('../Images/tr7.jpg'),
      text: '1. Tap on My Bookings tab on the app home page. Tap on the ticket which you want to cancel.',
    },
    {
      image: require('../Images/tr8.jpg'),
      text: '2. On the page, tap on the cancel button below the ticket details section.',
    },
    {
      image: require('../Images/tr9.jpg'),
      text: '3. A popup will come. Select Cancel Ticket to proceed with Cancelation.',
    },
    {
      image: require('../Images/tr10.jpg'),
      text: '4. On the next screen, Tap on the review Refund Details.',
    },
    {
      image: require('../Images/tr11.jpg'),
      text: '5. Review the details on the next screen and confirm your Cancellation by clicking on Confirm Cancellation button. Note: Review the cancellation policy before canceling the ticket by tapping on view cancellation policy.',
    },
    
  ];

  const handleScroll = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
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
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          backgroundColor: 'red',
          height: 60,
          borderBottomWidth: 1,
          borderColor: 'red',
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('TR')}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <Text
          style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}
        >
          FAQ
        </Text>
      </View>
<Text style={{fontSize:25,fontWeight:'bold',paddingHorizontal:25,marginTop:10}}>How to reschedule a ticket?</Text>

      {/* ScrollView Content */}
      <ScrollView>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={{ backgroundColor: 'white' }}
        >
          {data.map((item, index) => (
            <View
              key={index}
              style={{
                width,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
              }}
            >
              
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 15,
                  color: 'black',
                  textAlign: 'center',
                }}
              >
                {item.text}
              </Text>
              <Image
                source={item.image}
                style={{
                  marginTop:30,
                  width:'80%',
                  height: 450,
                  borderRadius: 15,
                  resizeMode: 'cover',
                }}
              />
            </View>
          ))}
        </ScrollView>

        

        {/* Feedback Section */}
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
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
      )}        </View>
      </ScrollView>
    </View>
  );
};

export default App;
