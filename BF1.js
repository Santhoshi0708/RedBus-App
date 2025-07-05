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
  const [showFeedback, setShowFeedback] = useState(false);
  const sheetRef = useRef(null);
  const snapPoints = ['10%'];

  const data = [
    {
      image: require('../Images/BF1.jpg'),
      text: '1. On the redBus App Home Page, click on the redRail icon.',
    },
    {
      image: require('../Images/BF2.jpg'),
      text: '2. Enter origin, destination and date of journey and click on Search Trains.',
    },
    {
      image: require('../Images/BF2.jpg'),
      text: '3. Train list with availability numbers in each class will be displayed. Select a train and class to be booked.',
    },
    {
      image: require('../Images/BF3.jpg'),
      text: '4. Enter IRCTC user id, passenger details, select preferences ( if any) and click Proceed.',
    },
    {
      image: require('../Images/BF4.jpg'),
      text: '5. Select a payment method after reviewing booking details and make the payment.',
    },
    {
        image: require('../Images/BF5.jpg'),
        text: '6. Enter the IRCTC password on the IRCTC authentication page.',
      },
      {
        image: require('../Images/BF6.jpg'),
        text: '7. Thats it! Tickets are Booked.',
      },
      
  ];

  const handleScroll = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const [feedback, setFeedback] = useState(null); // 'positive' | 'negative' | null

  const handleFeedback = (type) => {
    setFeedback(type);
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
        <TouchableOpacity onPress={() => navigation.navigate('BF')}>
          <Icon name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text
          style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}
        >
          FAQ
        </Text>
      </View>
<Text style={{fontSize:22,fontWeight:'bold',paddingHorizontal:25,marginTop:10}}>How to book a train ticket on redBus App?</Text>
<Text style={{fontSize:18,paddingHorizontal:20,marginVertical:20}}>Booking a train ticket on redBus app is very simple and can be donein 5 easy steps as follows:</Text>
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
