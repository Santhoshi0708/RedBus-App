
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
    title: 'Deluxe Non AC',
    guests: '2 guests',
    bed: 'King Bed',
    size: '169 sq.ft',
    image:
      'https://tse3.mm.bing.net/th?id=OIP.g5Kw4jETUs7bzJLwLnwRswHaE8&pid=Api&P=0&h=220',
    price: '₹533',
    oldPrice: '₹1020',
    tax: '+₹75 taxes & service fees',
  },
  {
    title: 'Deluxe Room',
    guests: '2 guests',
    bed: 'Queen Bed',
    size: '180 sq.ft',
    image:
      'https://tse3.mm.bing.net/th?id=OIP._XuZby4A43FdQhGGOy_avwHaEK&pid=Api&P=0&h=220',
    price: '₹699',
    oldPrice: '₹1299',
    tax: '+₹90 taxes & service fees',
  },
  {
    title: 'Executive Room',
    guests: '2 guests',
    bed: 'King Bed',
    size: '200 sq.ft',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.HbkdC0RrpUtKUcvgZn2_CgHaE8&pid=Api&P=0&h=220',
    price: '₹899',
    oldPrice: '₹1599',
    tax: '+₹110 taxes & service fees',
  },
  {
    title: 'Family Room',
    guests: '4 guests',
    bed: '2 Double Beds',
    size: '250 sq.ft',
    image:
      'https://tse3.mm.bing.net/th?id=OIP.j53a4jFXqyYCJLpRnrEC1AHaFB&pid=Api&P=0&h=220',
    price: '₹1199',
    oldPrice: '₹1999',
    tax: '+₹135 taxes & service fees',
  },
];

const reviews = [
  {
    text: 'Great stay and clean rooms!',
    user: 'Rahul',
    date: 'May 15, 2025',
    rating: '* 4',
  },
  {
    text: 'Very close to the beach, good service.',
    user: 'Sita',
    date: 'May 12, 2025',
    rating: '* 5',
  },
  { text: 'Decent for the price.', user: 'Arjun', date: 'May 8, 2025' ,rating: '* 4'},
  {
    text: 'Room was spacious and comfortable.',
    user: 'Divya',
    date: 'May 5, 2025',
    rating: '* 3',
  },
];
const screenWidth = Dimensions.get('window').width;

const SreeSuryaResidency = ({navigation}) => {
  return (
    

    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header Image */}
      <Image
        source={{
          uri: 'https://tse2.mm.bing.net/th?id=OIP.lF5VK1jCX1Jq0Im8ST1FFgHaE8&pid=Api&P=0&h=220',
        }}
        style={{ width: '100%', height: 200, borderBottomLeftRadius: 10, borderBottomRightRadius:10,position: 'absolute' }}
      />
      <Icon onPress={() => navigation.navigate('HotelNear')} name="arrow-left" size={40} color="white"></Icon>
      {/* Title and Rating */}
      <View style={{ flex: 1, marginTop: 170, marginHorizontal: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
          Sree Surya Residency
        </Text>
        <Text style={{ color: 'gray', marginTop: 4 }}>
          Lodge · Visakhapatnam
        </Text>
        <Text style={{ marginTop: 6, fontSize: 16, color: '#444' }}>
          3.2 ★ (11 ratings) - Good
        </Text>
      </View>

      {/* Features */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 10 }}>
        {['TV', 'Power Backup', 'CCTV', 'Room Service'].map((tag, index) => (
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
      <View style={{ marginTop: 20, marginHorizontal: 10 }}>
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
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
                width: Dimensions.get('window').width * 0.7,
              }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                {room.title}
              </Text>
              <Text style={{ color: '#666', marginVertical: 2 }}>
                {room.guests}
              </Text>
              <Image
                source={{ uri: room.image }}
                style={{ height: 120, borderRadius: 8, marginVertical: 10 }}
              />
              <Text>
                {room.bed} · {room.size}
              </Text>
              <Text
                style={{ textDecorationLine: 'line-through', color: 'gray' }}>
                {room.oldPrice}
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: '600', color: '#e53935' }}>
                {room.price}
              </Text>
              <Text style={{ color: 'gray' }}>{room.tax}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Location */}
      <View style={{ marginTop: 20, marginHorizontal: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>
          Location
        </Text>
        <Text>Dabagardens, 2.7 km from Ramakrishna Beach</Text>
        <Text>Door.no.30-12-22 Ranga Street, Maharani Peta, Visakhapatnam</Text>
        <Image
          source={{
            uri: 'https://tse2.mm.bing.net/th?id=OIP.-9dtLrMmiT1Sm7r-zJwUcAHaEK&pid=Api&P=0&h=220',
          }}
          style={{
            height: 140,
            width: '100%',
            borderRadius: 15,
            marginTop: 10,
          }}></Image>
      </View>

      {/* Property Rules */}
    <View style={{ marginTop: 20, marginHorizontal: 15 }}>
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
          marginLeft: index === 0 ? 5 : 0, // marginLeft ONLY for first card
          width: screenWidth * 0.7,
        }}
      >
        <Text
          style={{
            fontStyle: 'italic',
            color: 'white',
            backgroundColor: 'black',
            paddingHorizontal: 12,
            paddingVertical: 2,
            fontSize: 15,
            textAlign: 'center',
            fontWeight: 'bold',
            borderRadius: 6,
            alignSelf: 'flex-start',
          }}
        >
          {review.rating}
        </Text>
        <Text style={{ fontStyle: 'italic', marginTop: 20 }}>
          "{review.text}"
        </Text>
        <Text style={{ marginTop: 10, fontWeight: '600' }}>
          - {review.user}
        </Text>
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
          borderRadius: 10,
          alignItems: 'center',
          marginVertical: 30,
          marginHorizontal: 10,
        }}>
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
          Proceed - ₹533 + ₹75 tax
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SreeSuryaResidency;