import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const roomTypes = [
  {
    title: 'Economy Room',
    guests: '2 guests',
    bed: 'Double Bed',
    size: '150 sq.ft',
    image:
      'https://tse2.mm.bing.net/th?id=OIP.bGarpFz8KF9KPplk-gQg0wHaE8&pid=Api&P=0&h=220',
    price: '₹499',
    oldPrice: '₹899',
    tax: '+₹60 taxes & service fees',
  },
  {
    title: 'Standard Room',
    guests: '2 guests',
    bed: 'Queen Bed',
    size: '170 sq.ft',
    image:
      'https://tse2.mm.bing.net/th?id=OIP.olGFsl2uLGsCpPX6ULx7swHaE8&pid=Api&P=0&h=220',
    price: '₹699',
    oldPrice: '₹1099',
    tax: '+₹80 taxes & service fees',
  },
  {
    title: 'Deluxe Room',
    guests: '2 guests',
    bed: 'King Bed',
    size: '200 sq.ft',
    image:
      'https://tse1.mm.bing.net/th?id=OIP._qb93xBBOD1_7neFpA-uPgHaE7&pid=Api&P=0&h=220',
    price: '₹899',
    oldPrice: '₹1399',
    tax: '+₹100 taxes & service fees',
  },
];

const reviews = [
  {
    text: 'Clean and budget-friendly.',
    user: 'Anil',
    date: 'May 19, 2025',
    rating: '* 4',
  },
  {
    text: 'Great location near the temple.',
    user: 'Lakshmi',
    date: 'May 17, 2025',
    rating: '* 5',
  },
  { text: 'Basic amenities but worth the price.', user: 'Rajeev', date: 'May 12, 2025' },
  {
    text: 'Comfortable stay, helpful staff.',
    user: 'Kavya',
    date: 'May 9, 2025',
    rating: '* 4',
  },
];

const HotelManthralaya = ({navigation}) => {
  return (
    <ScrollView style={{ flex: 1,  backgroundColor: '#fff' }}>
      {/* Header Image */}
      <Image
        source={{
          uri: 'https://tse1.mm.bing.net/th?id=OIP.KYog8plF3N1M0vedg3OyHgHaEK&pid=Api&P=0&h=220',
        }}
        style={{ width: '100%', height: 220, borderBottomLeftRadius: 10, borderBottomRightRadius:10, position: 'absolute' }}
      />
      <Icon onPress={() => navigation.navigate('HotelNear')} name="arrow-left" size={40} color="white" />

      {/* Title and Rating */}
      <View style={{ flex: 1, marginTop: 200, marginHorizontal: 10,paddingHorizontal:10 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Hotel Manthralaya</Text>
        <Text style={{ color: 'gray', marginTop: 4 }}>Lodge · Mantralayam</Text>
        <Text style={{ marginTop: 6, fontSize: 16, color: '#444' }}>
          4.0 ★ (16 ratings) - Very Good
        </Text>
      </View>

      {/* Features */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 15, }}>
        {['Parking', 'Hot Water', 'Power Backup', 'Room Service'].map((tag, index) => (
          <Text
            key={index}
            style={{
              backgroundColor: 'lavender',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 20,
              marginRight: 8,
              marginTop: 6,
            }}>
            {tag}
          </Text>
        ))}
      </View>

      {/* Room Types */}
      <View style={{  padding: 15,}}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>
          Room Types
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {roomTypes.map((room, index) => (
            <View
              key={index}
              style={{
                backgroundColor: '#f9f9f9',
                padding: 15,
                borderRadius: 10,
                marginRight: 15,
                elevation: 2,
                width: Dimensions.get('window').width * 0.7,
              }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{room.title}</Text>
              <Text style={{ color: '#666', marginVertical: 2 }}>{room.guests}</Text>
              <Image
                source={{ uri: room.image }}
                style={{ height: 120, borderRadius: 8, marginVertical: 10 }}
              />
              <Text>{room.bed} · {room.size}</Text>
              <Text style={{ textDecorationLine: 'line-through', color: 'gray' }}>
                {room.oldPrice}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#e53935' }}>
                {room.price}
              </Text>
              <Text style={{ color: 'gray' }}>{room.tax}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Location */}
      <View style={{ marginTop: 20, padding: 15,}}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>
          Location
        </Text>
        <Text>Near Raghavendra Swamy Temple, 300m from Bus Stand</Text>
        <Text>Temple Road, Mantralayam, Andhra Pradesh</Text>
        <Image
          source={{
            uri: 'https://tse2.mm.bing.net/th?id=OIP.-9dtLrMmiT1Sm7r-zJwUcAHaEK&pid=Api&P=0&h=220'}}
          style={{
            height: 140,
            width: '100%',
            borderRadius: 15,
            marginTop: 10,
          }}
        />
      </View>

      {/* Property Rules */}
      <View style={{ marginTop: 20, padding: 15, }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>
          Property Rules
        </Text>
        <Text>✔ Check-in from 11 AM</Text>
        <Text>✔ Govt ID mandatory for all guests</Text>
        <Text>✖ Pets are not allowed</Text>
      </View>

      {/* Reviews */}
      <View style={{ marginTop: 20 , padding: 15,}}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>
          Reviews
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {reviews.map((review, index) => (
            <View
              key={index}
              style={{
                height: 150,
                backgroundColor: 'lavender',
                padding: 15,
                borderRadius: 10,
                marginRight: 15,
                width: Dimensions.get('window').width * 0.7,
              }}>
              <Text
                style={{
                  fontStyle: 'italic',
                  color: 'white',
                  backgroundColor: 'black',
                  width: '15%',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {review.rating}
              </Text>
              <Text style={{ fontStyle: 'italic', marginTop: 20 }}>"{review.text}"</Text>
              <Text style={{ marginTop: 10, fontWeight: '600' }}>- {review.user}</Text>
              <Text style={{ color: 'gray' }}>{review.date}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity
        style={{
          backgroundColor: 'orange', 
          marginHorizontal:15,
          padding: 15,
          borderRadius: 10,
          alignItems: 'center',
          marginVertical: 30,
        }}>
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
          Proceed - ₹499 + ₹60 tax
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HotelManthralaya;