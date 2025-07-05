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

const laxmiRoomTypes = [
  {
    title: 'Economy Room',
    guests: '2 guests',
    bed: 'Single Bed',
    size: '140 sq.ft',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.80r1wNV4wUO90amQbnrajQHaFj&pid=Api&P=0&h=220',
    price: '₹450',
    oldPrice: '₹799',
    tax: '+₹55 taxes & service fees',
  },
  {
    title: 'Standard Room',
    guests: '3 guests',
    bed: 'Double Bed',
    size: '180 sq.ft',
    image:
      'https://tse3.mm.bing.net/th?id=OIP.fW0_KUnoQ-lMiyIszIp4uAHaFj&pid=Api&P=0&h=220',
    price: '₹699',
    oldPrice: '₹1099',
    tax: '+₹75 taxes & service fees',
  },
  {
    title: 'Deluxe Room',
    guests: '4 guests',
    bed: 'Queen Bed',
    size: '220 sq.ft',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.K-xwgvWO2x90BXriDNZkUgHaE7&pid=Api&P=0&h=220',
    price: '₹999',
    oldPrice: '₹1499',
    tax: '+₹120 taxes & service fees',
  },
];

const laxmiReviews = [
  {
    text: 'Excellent hospitality and clean rooms.',
    user: 'Suresh',
    date: 'May 20, 2025',
    rating: '* 5',
  },
  {
    text: 'Nice location and great food options nearby.',
    user: 'Meena',
    date: 'May 18, 2025',
    rating: '* 4',
  },
  {
    text: 'Comfortable beds but slow room service.',
    user: 'Arjun',
    date: 'May 13, 2025',
  },
  {
    text: 'Great value for the price.',
    user: 'Rita',
    date: 'May 10, 2025',
    rating: '* 4',
  },
];

const HotelLaxmiParadise = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header Image */}
      <Image
        source={{
          uri: 'https://tse1.mm.bing.net/th?id=OIP.IkxiGJB84lFZDjQOZ9M3twHaE8&pid=Api&P=0&h=220',
        }}
        style={{ width: '100%', height: 220, borderBottomLeftRadius: 10, borderBottomRightRadius:10,position: 'absolute' }}
      />
      <Icon
        onPress={() => navigation.navigate('HotelNear')}
        name="arrow-left"
        size={40}
        color="white"
        style={{ position: 'absolute', top: 15, left: 15 }}
      />

      {/* Title and Rating */}
      <View style={{ flex: 1, marginTop: 220, marginHorizontal: 10, padding: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Hotel Laxmi Paradise</Text>
        <Text style={{ color: 'gray', marginTop: 4 }}>Resort · Mantralayam</Text>
        <Text style={{ marginTop: 6, fontSize: 16, color: '#444' }}>
          4.2 ★ (20 ratings) - Very Good
        </Text>
      </View>

      {/* Features */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin:10,
        }}
      >
        {['Free Wi-Fi', 'Breakfast Included', 'Swimming Pool', '24/7 Room Service'].map(
          (tag, index) => (
            <Text
              key={index}
              style={{
                backgroundColor: 'lavender',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 20,
                marginRight: 8,
                marginTop: 6,
              }}
            >
              {tag}
            </Text>
          )
        )}
      </View>

      {/* Room Types */}
      <View style={{ marginTop: 20, padding: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Room Types</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {laxmiRoomTypes.map((room, index) => (
            <View
              key={index}
              style={{
                backgroundColor: '#f9f9f9',
                padding: 15,
                borderRadius: 10,
                marginRight: 15,
                elevation: 2,
                width: Dimensions.get('window').width * 0.7,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{room.title}</Text>
              <Text style={{ color: '#666', marginVertical: 2 }}>{room.guests}</Text>
              <Image
                source={{ uri: room.image }}
                style={{ height: 120, borderRadius: 8, marginVertical: 10 }}
              />
              <Text>
                {room.bed} · {room.size}
              </Text>
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
      <View style={{ marginTop: 20, padding: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Location</Text>
        <Text>Near Mantralayam Temple, 400m from Bus Stand</Text>
        <Text>Main Street, Mantralayam, Andhra Pradesh</Text>
        <Image
          source={{
            uri: 'https://tse2.mm.bing.net/th?id=OIP.-9dtLrMmiT1Sm7r-zJwUcAHaEK&pid=Api&P=0&h=220',
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
      <View style={{ marginTop: 20, padding: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Property Rules</Text>
        <Text>✔ Check-in from 12 PM</Text>
        <Text>✔ Govt ID mandatory for all guests</Text>
        <Text>✔ Pets allowed with extra charges</Text>
      </View>

      {/* Reviews */}
      <View style={{ marginTop: 20, padding: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Reviews</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {laxmiReviews.map((review, index) => (
            <View
              key={index}
              style={{
                height: 150,
                backgroundColor: 'lavender',
                padding: 15,
                borderRadius: 10,
                marginRight: 15,
                width: Dimensions.get('window').width * 0.7,
              }}
            >
              {review.rating && (
                <Text
                  style={{
                    fontStyle: 'italic',
                    color: 'white',
                    backgroundColor: 'black',
                    width: '15%',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  {review.rating}
                </Text>
              )}
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
          marginHorizontal: 15,
          padding: 15,
          borderRadius: 10,
          alignItems: 'center',
          marginVertical: 30,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
          Proceed - ₹450 + ₹55 tax
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HotelLaxmiParadise;