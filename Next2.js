import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const images = [{img:require('../Images/N1.jpg')},
                   {img:require('../Images/N2.jpg')},
                   {img:require('../Images/N3.jpg')},
                   {img:require('../Images/N4.jpg')},
  ];

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {images.map((item, index) => (
          <Image
            key={index}
            source={item.img}
            style={{ width, height: 800, resizeMode: 'cover'}}
          />
        ))}
      </ScrollView>

      <View style={{ alignItems: 'center',}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            paddingVertical: 15,
            paddingHorizontal: 60,
            borderRadius: 10,
            bottom:30,
          }}
          onPress={() =>navigation.navigate('Next')}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
            Let’s Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;
