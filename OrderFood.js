import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking, Dimensions } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const trendingItems = [
  { name: 'Thali', image: 'https://tse2.mm.bing.net/th?id=OIP.oHGXEvRGH0RvdMywm45v9AHaE8&pid=Api&P=0&h=220' },
  { name: 'Biryani', image: 'https://tse2.mm.bing.net/th?id=OIP.wBu0Xsb774mtzvjhq1C3DgHaE8&pid=Api&P=0&h=220' },
  { name: 'Pizza', image: 'https://tse1.mm.bing.net/th?id=OIP.f4KsUS1N-qtIPyB6NS3L5QHaEo&pid=Api&P=0&h=220' },
  { name: 'Chinese', image: 'https://tse4.mm.bing.net/th?id=OIP.IRJugiXe28MmXEJM4EDyTgHaEK&pid=Api&P=0&h=220' },
  { name: 'Beverage', image: 'https://tse3.mm.bing.net/th?id=OIP.ioqVLlMLuTlAALVES5T4fQHaEo&pid=Api&P=0&h=220' },
  { name: 'Snacks', image: 'https://tse3.mm.bing.net/th?id=OIP.Rq6kYGkvNUdcKYn6VV-DbgHaEO&pid=Api&P=0&h=220' },
];

const OrderFoodScreen = ({ navigation }) => {
  const vegItems = ['Thali', 'Pizza', 'Biryani', 'Wrap', 'Aloo Paratha', 'Idli', 'Dosa', 'Rice Bowl', 'Sandwich', 'Dal Khichdi'];
  const nonVegItems = ['Non-Veg Pizza', 'Biryani', 'Non-Veg Thali', 'Bread Omelette', 'Chicken Curry', 'Egg Curry', 'Fish Curry'];
  const stations = ['Mumbai Central', 'Mathura Jn', 'CST', 'NDLS', 'Nagpur', 'Old Delhi', 'Bangalore', 'Itarsi', 'Chennai', 'Kanpur', 'Ratlam', 'Allahabad', 'Vijayawada', 'Varanasi', 'Lucknow'];

  const brandImages = {
    'Domino’s': 'https://tse1.mm.bing.net/th?id=OIP.8CnTp47TZhNaJucJOR795QHaHa&pid=Api&P=0&h=220',
    'Lunch Box': 'https://tse2.mm.bing.net/th?id=OIF.R6DM0LTFHvA7jfH4Jx8%2fHw&pid=Api&P=0&h=220',
    'Behrouz': 'https://tse2.mm.bing.net/th?id=OIP._24Rb4jjQ9e-eh7q7827ugHaDp&pid=Api&P=0&h=220',
  };

  const stepImages = [
    'https://cdn-icons-png.flaticon.com/512/727/727399.png', // PNR
    'https://cdn-icons-png.flaticon.com/512/1046/1046784.png', // Choose & Pay
    'https://cdn-icons-png.flaticon.com/512/1046/1046846.png', // Delivery
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ position: 'relative' }}>
        <Image
          source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.u-9x03jer1FMjl2HLck8gwHaE8&pid=Api&P=0&h=220' }}
          style={{ width: '100%', height: 180 }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 16, left: 16 }}>
          <Icon name="arrow-left" size={28} color="white" />
        </TouchableOpacity>
        <Text style={{
          position: 'absolute',
          bottom: 10,
          left: 16,
          fontSize: 22,
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.4)',
          paddingHorizontal: 10,
          borderRadius: 6
        }}>
          Order Food
        </Text>
      </View>

      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Trending food items</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 12 }}>
          {trendingItems.map((item, index) => (
            <View key={index} style={{ alignItems: 'center', marginRight: 16 }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
              <Text style={{ marginTop: 6 }}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order from the best brands</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 }}>
          {Object.keys(brandImages).map((brand, index) => (
            <View key={index} style={{ alignItems: 'center' }}>
              <Image
                source={{ uri: brandImages[brand] }}
                style={{ width: 60, height: 60, borderRadius: 8 }}
              />
              <Text style={{ marginTop: 4 }}>{brand}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>How it works</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
          {[
            'Enter PNR & explore restaurants for your journey',
            'Choose your food & schedule your order paying online or COD',
            'Enjoy your meal delivered to your seat'
          ].map((text, index) => (
            <View key={index} style={{ width: '30%', alignItems: 'center' }}>
              <Image source={{ uri: stepImages[index] }} style={{ width: 40, height: 40 }} />
              <Text style={{ marginTop: 6, textAlign: 'center', fontSize: 12 }}>{text}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Food Delivery on Train with IRCTC eCatering</Text>
        <Text style={{ marginTop: 8, fontSize: 14 }}>
          You can order food in train online with our official website or Food on Track app and get it right to your seat at the station of your choice! Isn’t that amazing?
        </Text>
        <Text style={{ marginTop: 8, fontSize: 14 }}>
          Get excellent and efficient food delivery on train service with this revolutionary mobile app. All you need to do is enter your PNR number to view the available restaurants & food options for your journey & place your order.
        </Text>
        <Text style={{ marginTop: 8, fontSize: 14 }}>
          This efficient method of food ordering in train promises not only delicious food at your seat but also a varied and vast food menu from the widest nexus of brands and restaurants, making your train journey a lot more enjoyable.
        </Text>
      </View>

      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Benefits of placing an online food order in train with IRCTC eCatering</Text>
        <View style={{ marginTop: 8 }}>
          {[
            'This is the official IRCTC website and app. Hence it comes with the trust of IRCTC, offering reliable & well-established service.',
            'Freedom from the hassle of carrying food.',
            'The widest hub of restaurants and brands offers myriad delicious and hygienic meal options for your train journey.',
            'Eliminates the risk of missing the train while finding food at stations.'
          ].map((point, index) => (
            <Text key={index} style={{ fontSize: 14, marginBottom: 4 }}>• {point}</Text>
          ))}
        </View>
      </View>

      <View style={{ padding: 10 }}>
        <Card style={{ marginBottom: 10 }}>
          <Card.Content>
            <Title>IRCTC eCatering - Food on Track</Title>
            <Paragraph>Order hot and hygienic meals directly to your train seat using the IRCTC Food on Track app, website, or helpline 1323.</Paragraph>
          </Card.Content>
        </Card>

        <Card style={{ marginBottom: 10 }}>
          <Card.Content>
            <Title>How to Order Food in Train</Title>
            {[
              '1. Visit www.ecatering.irctc.co.in',
              '2. Enter your 10-digit PNR number',
              '3. Browse restaurants and select meals',
              '4. Confirm your order and pay online or on delivery',
              '5. Food gets delivered to your seat at your selected station'
            ].map((line, i) => (
              <Paragraph key={i}>{line}</Paragraph>
            ))}
          </Card.Content>
        </Card>

        <Card style={{ marginBottom: 10 }}>
          <Card.Content>
            <Title>Top Stations Covered</Title>
            {stations.map((station, i) => (
              <Paragraph key={i}>• {station}</Paragraph>
            ))}
          </Card.Content>
        </Card>

        <Card style={{ marginBottom: 10 }}>
          <Card.Content>
            <Title>Vegetarian Items Available</Title>
            {vegItems.map((item, i) => (
              <Paragraph key={i}>• {item}</Paragraph>
            ))}
          </Card.Content>
        </Card>

        <Card style={{ marginBottom: 10 }}>
          <Card.Content>
            <Title>Non-Vegetarian Items Available</Title>
            {nonVegItems.map((item, i) => (
              <Paragraph key={i}>• {item}</Paragraph>
            ))}
          </Card.Content>
        </Card>

        <Card style={{ marginBottom: 10 }}>
          <Card.Content>
            <Title>Why Use IRCTC eCatering?</Title>
            {[
              '✓ FSSAI Certified meals',
              '✓ Over 300 railway stations covered',
              '✓ Trusted brands and local restaurants',
              '✓ Pay online or on delivery',
              '✓ Track your order in real time'
            ].map((line, i) => (
              <Paragraph key={i}>{line}</Paragraph>
            ))}
          </Card.Content>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Card.Content>
            <Title>Explore More</Title>
            <Paragraph>To explore menus and order, visit the official website or download the app.</Paragraph>
            <Button mode="contained" onPress={() => Linking.openURL('https://www.ecatering.irctc.co.in/')}>Visit Website</Button>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

export default OrderFoodScreen;
