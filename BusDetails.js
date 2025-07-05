import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BusDetails = ({ route, navigation }) => {
  const { bus } = route.params;

  // Store bus data in AsyncStorage when the component mounts
 useEffect(() => {
  const storeData = async () => {
    try {
      const existing = await AsyncStorage.getItem('busDetails');

      let busList = [];

      if (existing) {
        try {
          const parsed = JSON.parse(existing);
          if (Array.isArray(parsed)) {
            busList = parsed;
          }
        } catch (err) {
          console.warn('Could not parse stored data. Overwriting.', err);
        }
      }

      busList.push(bus); // Add new bus
      await AsyncStorage.setItem('busDetails', JSON.stringify(busList));
    } catch (error) {
      console.error('Error saving bus details:', error);
    }
  };

  storeData();
}, [bus]);



  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bus Details</Text>
      </View>

      {/* Journey Info */}
      <View style={styles.card}>
        <Text style={styles.time}>{bus.time}</Text>
        <Text style={styles.subText}>{bus.duration} • {bus.seats}</Text>
        <Text style={styles.name}>{bus.name}</Text>
      </View>

      {/* Rating & Reviews */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Icon name="star" size={20} color="#FFD700" />
          <Text style={styles.rating}>{bus.rating}</Text>
          <Text style={styles.reviews}>{bus.reviews} reviews</Text>
        </View>
      </View>

      {/* Discounts */}
      {bus.discount && (
        <View style={styles.card}>
          <Text style={styles.discount}>Exclusive Discount: {bus.discount}</Text>
        </View>
      )}
      {bus.womenDiscount && (
        <View style={styles.card}>
          <Text style={styles.womenDiscount}>Women Discount: {bus.womenDiscount}</Text>
        </View>
      )}

      {/* Pricing */}
      <View style={styles.card}>
        <Text style={styles.price}>{bus.price}</Text>
        {bus.originalPrice && (
          <Text style={styles.originalPrice}>{bus.originalPrice}</Text>
        )}
      </View>

      {/* Book Now */}
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => {
          navigation.navigate('Bookings');
        }}
      >
        <Text style={styles.bookText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    shadowColor:'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
        shadowColor:'white'

  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  card: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 16,
    marginBottom: 15,
    elevation: 2,
    shadowColor:'white'

  },
  time: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  name: {
    fontSize: 16,
    color: '#000',
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  reviews: {
    fontSize: 14,
    color: '#777',
    marginLeft: 10,
  },
  discount: {
    fontSize: 16,
    color: '#DAA520',
  },
  womenDiscount: {
    fontSize: 16,
    color: '#C71585',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginTop: 4,
  },
  bookButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  bookText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default BusDetails;
