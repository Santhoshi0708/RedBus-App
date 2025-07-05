import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from 'react-native-youtube-iframe';

const { width } = Dimensions.get('window');

const App = ({ navigation }) => {
  const [selected2, setSelected2] = useState('help');
  const Data = [
    { id: 'eyAAUGhvZu8', h1: 'Need to understand more about redBus' },
    { id: 'aogFtVrHNjU', h1: 'I am unable to select payment option.' },
    { id: 'GwABkKtIaH4', h1: 'How to apply offer code in redBus' },
    { id: 'He2W8hSLbSw', h1: 'Unable to apply the offer code in redBus' },
    { id: 'hLCqBhB3x1Y', h1: 'How to change travel date in redBus' },
    { id: 'VreGQaPzk9A', h1: 'How to cancel bus ticket in redBus' },
  ];

  const renderItem = ({ item }) => (
    <View style={{ width: width * 0.8, marginRight: 15 }}>
      <View style={{ borderRadius: 16, overflow: 'hidden' }}>
        <YoutubePlayer height={160} play={false} videoId={item.id} />
      </View>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10, color: 'black' }}>{item.h1}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
    

      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Title + Icon */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Help</Text>
          <Icon name="help-circle-outline" size={30} color="black" />
        </View>

        {/* Image + Info */}
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Image source={require('../Images/help.jpeg')} style={{ height: 200, width: width * 0.85, borderRadius: 16 }} />
          <Text style={{ fontSize: 18, marginTop: 20, color: 'black' }}>For seamless booking management and</Text>
          <Text style={{ fontSize: 18, color: 'black' }}>customer support</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('redlogin')}
            style={{ backgroundColor: 'red', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30, marginTop: 25 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Login to your account</Text>
          </TouchableOpacity>
        </View>

        {/* FAQ Videos */}
        <Text style={{ fontWeight: 'bold', fontSize: 22, paddingHorizontal: 20, marginTop: 30, color: 'black' }}>FAQ</Text>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, marginTop: 20, paddingBottom: 10 }}
        />

        {/* Category Buttons */}
        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {[{ title: 'Bus FAQ', icon: 'bus', screen: 'BusFAQ' }, { title: 'Train FAQ', icon: 'train', screen: 'TrainFAQ' }].map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate(item.screen)}
                style={{ width: '48%', borderWidth: 1, borderColor: '#ddd', borderRadius: 16, paddingVertical: 20, alignItems: 'center', backgroundColor: 'white' }}>
                <Icon name={item.icon} size={30} color="red" />
                <Text style={{ fontSize: 15, color: 'black', marginTop: 10 }}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            {[{ title: 'Hotels FAQ', icon: 'bed-outline', screen: 'HotelsFAQ' }, { title: 'Metro FAQ', icon: 'train-variant', screen: 'MetroFAQ' }].map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate(item.screen)}
                style={{ width: '48%', borderWidth: 1, borderColor: '#ddd', borderRadius: 16, paddingVertical: 20, alignItems: 'center', backgroundColor: 'white' }}>
                <Icon name={item.icon} size={30} color="red" />
                <Text style={{ fontSize: 15, color: 'black', marginTop: 10 }}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('AutoFAQ')}
            style={{ marginTop: 20, borderWidth: 1, borderColor: '#ddd', borderRadius: 16, paddingVertical: 20, alignItems: 'center', backgroundColor: 'white' }}>
            <Icon name="rickshaw" size={30} color="red" />
            <Text style={{ fontSize: 15, color: 'black', marginTop: 10 }}>Auto Rides FAQ</Text>
          </TouchableOpacity>
        </View>

        {/* Other Topics */}
        <Text style={{ paddingHorizontal: 20, fontWeight: 'bold', fontSize: 20, color: 'black', marginTop: 30 }}>Other topics</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('other_topics')}
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15, paddingHorizontal: 20 }}>
          <Icon name="text-box-outline" size={30} color="black" />
          <Text style={{ fontSize: 18, flex: 1, marginLeft: 15, color: 'black' }}>Browse other topics</Text>
          <Icon name="chevron-right" size={30} color="black" />
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 15, borderTopWidth: 1, borderColor: '#ccc', backgroundColor: 'white', position: 'absolute', bottom: 0, width: '100%' }}>
        <TouchableOpacity onPress={() => { setSelected2('home'); navigation.navigate('Home1'); }}>
          <View style={{ alignItems: 'center' }}>
            <Icon name="home" size={30} color={selected2 === 'home' ? 'red' : 'grey'} />
            <Text style={{ fontSize: 12, color: 'black' }}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setSelected2('bookings'); navigation.navigate('Bookings'); }}>
          <View style={{ alignItems: 'center' }}>
            <Icon name="order-bool-descending-variant" size={30} color={selected2 === 'bookings' ? 'red' : 'grey'} />
            <Text style={{ fontSize: 12, color: 'black' }}>Bookings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setSelected2('help'); navigation.navigate('help'); }}>
          <View style={{ alignItems: 'center' }}>
            <Icon name="comment-question" size={30} color={selected2 === 'help' ? 'red' : 'grey'} />
            <Text style={{ fontSize: 12, color: 'black' }}>Help</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setSelected2('MyAccount'); navigation.navigate('MyAccount'); }}>
          <View style={{ alignItems: 'center' }}>
            <Icon name="account-circle" size={30} color={selected2 === 'MyAccount' ? 'red' : 'grey'} />
            <Text style={{ fontSize: 12, color: 'black' }}>My Account</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default App;
