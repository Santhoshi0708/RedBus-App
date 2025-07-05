import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const App = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('bookings');
  const [busDetails, setBusDetails] = useState([]);

  useEffect(() => {
    const getBusDetails = async () => {
      try {
        const storedData = await AsyncStorage.getItem('busDetails');
        if (storedData) {
          const parsed = JSON.parse(storedData);
          if (Array.isArray(parsed)) {
            setBusDetails(parsed);
          } else {
            console.warn('Stored bus details is not an array:', parsed);
          }
        } else {
          console.log('No bus data found.');
        }
      } catch (e) {
        console.error('Failed to fetch bus details:', e);
      }
    };

    getBusDetails();
  }, []);

  const handleRemove = async (indexToRemove) => {
    const updatedList = busDetails.filter((_, index) => index !== indexToRemove);
    setBusDetails(updatedList);
    await AsyncStorage.setItem('busDetails', JSON.stringify(updatedList));
  };

  const handleNavigate = (screen, tab) => {
    setSelectedTab(tab);
    navigation.navigate(screen);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>My Bookings</Text>
        <Icon  name="arrow-u-right-top" size={25} color="black" />
      </View>

      <ScrollView>
        {/* Conditional Content */}
        {busDetails.length > 0 ? (
          busDetails.map((item, index) => (
            <View key={index} style={{ padding: 20, borderBottomWidth: 1 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'lightpink' }}>{item.name}</Text>
              <Text style={{ color: 'black',marginTop:10 }}>Time: {item.time}</Text>
              <Text style={{ color: 'black' }}>Duration: {item.duration}</Text>
              <Text style={{ color: 'black' }}>Seats: {item.seats}</Text>
              <Text style={{ color: 'black' }}>Price: {item.price}</Text>

              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    'Remove Booking',
                    'Are you sure you want to remove this booking?',
                    [
                      { text: 'Cancel', style: 'cancel' },
                      { text: 'Remove', style: 'destructive', onPress: () => handleRemove(index) },
                    ]
                  )
                }
                style={{
                  marginTop: 10,
                  padding: 10,
                  backgroundColor: 'black',
                  borderRadius: 10,
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <>
            {/* Booking Image */}
            <View style={{ alignItems: 'center', marginVertical: 10 }}>
              <Image
                source={require('../Images/trip.jpeg')}
                style={{ width: width * 0.9, height: 250, borderRadius: 12, resizeMode: 'cover' }}
              />
            </View>

            {/* No Bookings Text */}
            <View style={{ alignItems: 'center', marginVertical: 20 }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>No trips yet</Text>
              <Text style={{ fontSize: 16, color: 'grey', textAlign: 'center', marginTop: 10 }}>
                You have not booked any trips yet. Plan your next journey today!
              </Text>
            </View>
          </>
        )}

        {/* Book Now Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchBuses')}
          style={{
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            width: '60%',
            borderRadius: 30,
            alignSelf: 'center',
            marginTop: 20,
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Book Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default App;
