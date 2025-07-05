import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const topCards = [
  { key: 'zingbus', title: 'Zingbus', subtitle: 'Get Discount Up to 12.5%', bgColor: '#7B61FF', color: '#fff' },
  { key: 'primo', title: 'Primo', subtitle: 'Rising Stars on redBus', bgColor: '#FDBA11', color: '#000' },
  { key: 'women', title: 'Women deals', subtitle: 'Exclusive discounts for women', bgColor: '#FFCEE0', color: '#000' },
];

const busData = [
  { name: 'Zingbus', time: '21:00 - 06:35', duration: '9h 35m', seats: '10 Seats (2 Single)', price: '₹1200', rating: '4.6', reviews: '550', discount: '₹100 OFF', originalPrice: '₹1300', womenDiscount: '₹100 OFF' },
  { name: 'Zingbus', time: '22:30 - 07:00', duration: '8h 30m', seats: '8 Seats (1 Single)', price: '₹1250', rating: '4.7', reviews: '600', discount: '₹120 OFF', originalPrice: '₹1370' },
  { name: 'Primo Travels', time: '23:00 - 07:40', duration: '8h 40m', seats: '6 Seats (2 Single)', price: '₹1100', rating: '4.8', reviews: '620' },
  { name: 'THAMARAI BUS TRANSPORTS', time: '20:00 - 05:30', duration: '9h 30m', seats: '7 Seats (1 Single)', price: '₹1180', rating: '4.5', reviews: '580', womenDiscount: '₹100 OFF' },
  { name: 'SHRI AANJANEYA TRAVELS', time: '19:45 - 05:20', duration: '9h 35m', seats: '5 Seats (2 Single)', price: '₹1220', rating: '4.3', reviews: '530' },
  { name: 'Primo Elite', time: '22:00 - 06:00', duration: '8h 0m', seats: '10 Seats (4 Single)', price: '₹1300', rating: '4.9', reviews: '700' },
  { name: 'SVT TRANZ', time: '21:15 - 06:30', duration: '9h 15m', seats: '6 Seats (2 Single)', price: '₹1190', rating: '4.4', reviews: '510', womenDiscount: '₹100 OFF' },
];
const App = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const filteredBuses = busData.filter((bus) => {
    if (!selectedFilter) return true;
    if (selectedFilter === 'zingbus') return bus.name.toLowerCase().includes('zingbus');
    if (selectedFilter === 'primo') return parseFloat(bus.rating) >= 4.7;
    if (selectedFilter === 'women') return bus.womenDiscount;
    return true;
  });
 
  return (
    <ScrollView style={{ padding: 10 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home1')}><Icon name="arrow-left" size={25} /></TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Search Buses</Text>
      </View>

      {/* Filter Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 20 }}>
        {topCards.map((card, idx) => (
          <TouchableOpacity key={idx} onPress={() => setSelectedFilter(card.key)} activeOpacity={0.8}>
            <View
              style={{
                backgroundColor: card.bgColor,
                padding: 15,
                borderRadius: 10,
                marginRight: 10,
                width: 150,
                height: 100,
                borderWidth: selectedFilter === card.key ? 2 : 0,
                borderColor: 'white',
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: card.color }}>{card.title}</Text>
              <Text style={{ fontSize: 12, color: card.color }}>{card.subtitle}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bus Cards */}
      {filteredBuses.map((bus, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('BusDetails', { bus })}
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 15,
            marginBottom: 15,
            shadowColor: 'white',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{bus.time}</Text>
          <Text style={{ fontSize: 14, color: '#555', marginVertical: 4 }}>
            {bus.duration} • {bus.seats}
          </Text>
          <Text style={{ fontSize: 16, color: '#000', marginBottom: 6 }}>{bus.name}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
            <Text
              style={{
                backgroundColor: '#4CAF50',
                color: '#fff',
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 5,
                fontSize: 14,
                marginRight: 5,
              }}
            >
              {bus.rating}
            </Text>
            <Text style={{ fontSize: 12, color: '#777' }}>{bus.reviews}</Text>
          </View>

          {bus.discount && <Text style={{ color: '#DAA520', marginBottom: 4 }}>Exclusive {bus.discount}</Text>}
          {bus.womenDiscount && <Text style={{ color: '#C71585', marginBottom: 4 }}>Women {bus.womenDiscount}</Text>}

          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>{bus.price}</Text>
          {bus.originalPrice && (
            <Text style={{ fontSize: 12, color: '#999', textDecorationLine: 'line-through' }}>
              {bus.originalPrice}
            </Text>
          )}

          <Text style={{ fontSize: 12, color: '#C71585', marginTop: 4 }}>
            Exclusive discounts available for women passengers
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default App;
