import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

export default join = ({ navigation }) => {
  const handleJoin = () => {
    ToastAndroid.show('Welcome to redBus team', ToastAndroid.SHORT);
    navigation.navigate('Home1');
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 16 }}>
      {/* Skip Button */}
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 15 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
          <Text style={{ fontSize: 18, color: 'grey' }}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <Text style={{ fontSize: 26, color: 'red', fontWeight: 'bold' }}>Easy Booking</Text>

        <Image
          source={{
            uri: 'https://tse4.mm.bing.net/th?id=OIP.KfzsW9xyNtH39MvTy4jQ4QHaGL&pid=Api&P=0&h=220',
          }}
          style={{
            height: 250,
            width: 250,
            borderRadius: 125,
            marginTop: 30,
            resizeMode: 'cover',
          }}
        />

        <Text style={{ fontSize: 18, color: 'black', textAlign: 'center', marginTop: 40 }}>
          Booking your preferred bus ticket is just a few taps away
        </Text>

        {/* Join Button */}
        <TouchableOpacity
          style={{
            height: 55,
            width: '100%',
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 40,
          }}
          onPress={handleJoin}
        >
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
            Join
          </Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('redlogin')}
          style={{
            marginTop: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              textDecorationLine: 'underline',
              fontWeight: 'bold',
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
