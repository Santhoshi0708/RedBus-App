
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
    title: 'Standard Room',
    guests: '2 guests',
    bed: 'Queen Bed',
    size: '160 sq.ft',
    image:
      'https://tse4.mm.bing.net/th?id=OIP.tyjyH3xb8lYrSVroz1lVhQHaDt&pid=Api&P=0&h=220',
    price: '₹799',
    oldPrice: '₹1199',
    tax: '+₹100 taxes & service fees',
  },
  {
    title: 'Premium Room',
    guests: '2 guests',
    bed: 'King Bed',
    size: '190 sq.ft',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.V8ZqqjtsJvolrnozW3eRcQHaE8&pid=Api&P=0&h=220',
    price: '₹999',
    oldPrice: '₹1499',
    tax: '+₹125 taxes & service fees',
  },
  {
    title: 'Sea View Room',
    guests: '2 guests',
    bed: 'King Bed',
    size: '210 sq.ft',
    image:
      'https://tse2.mm.bing.net/th?id=OIP._DKcRbyMPWXWI1tXjm8VUwHaEK&pid=Api&P=0&h=220',
    price: '₹1299',
    oldPrice: '₹1899',
    tax: '+₹140 taxes & service fees',
  },
];

const reviews = [
  {
    text: 'Amazing sea view and friendly staff!',
    user: 'Meena',
    date: 'May 18, 2025',
    rating: '* 5',
  },
  {
    text: 'Neat rooms and tasty breakfast.',
    user: 'Vikram',
    date: 'May 14, 2025',
    rating: '* 4',
  },
  { text: 'Could improve room service.', user: 'Priya', date: 'May 10, 2025' },
  {
    text: 'Loved the view and location.',
    user: 'Ramesh',
    date: 'May 6, 2025',
    rating: '* 5',
  },
];

const OceanViewRetreat = ({navigation}) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header Image */}
      <Image
        source={{
          uri: 'https://tse1.mm.bing.net/th?id=OIP.2I8BJm4FCLh1Ixl_HcmDjgHaEK&pid=Api&P=0&h=220',
        }}
        style={{ width: '100%', height: 230, borderBottomLeftRadius: 10, borderBottomRightRadius:10, position: 'absolute' }}
      />
      <Icon onPress={() => navigation.navigate('HotelNear')} name="arrow-left" size={40} color="white" />

      {/* Title and Rating */}
      <View style={{ flex: 1, marginTop: 190, marginHorizontal: 10, padding: 10}}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Laxmi Residency</Text>
        <Text style={{ color: 'gray', marginTop: 4 }}> Visakhapatnam</Text>
        <Text style={{ marginTop: 6, fontSize: 16, color: '#444' }}>
          4.1 ★ (20 ratings) - Excellent
        </Text>
      </View>

      {/* Features */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap',padding: 15, }}>
        {['Wi-Fi', 'Power Backup', 'Restaurant', 'AC Rooms','CCTV'].map((tag, index) => (
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
      <View style={{ padding: 15, }}>
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
      <View style={{ marginTop: 20, padding: 15, }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>
          Location
        </Text>
        <Text>Beach Road, 1.2 km from RK Beach</Text>
        <Text>Ocean View Lane, Visakhapatnam, Andhra Pradesh</Text>
        <Image
          source={{
            uri: 'https://tse2.mm.bing.net/th?id=OIP.-9dtLrMmiT1Sm7r-zJwUcAHaEK&pid=Api&P=0&h=220'
          }}
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
        <Text>✔ Check-in from 12 PM</Text>
        <Text>✔ Govt-issued ID required</Text>
        <Text>✖ Smoking not allowed in rooms</Text>
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
           padding: 15,
          padding: 15,
          borderRadius: 10,
          alignItems: 'center',
          marginVertical: 30,
          margin:10,
        }}>
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
          Proceed - ₹799 + ₹100 tax
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OceanViewRetreat;