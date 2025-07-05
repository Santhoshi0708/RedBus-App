import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { IconButton } from 'react-native-paper';

const Login = ({ navigation }) => {
  const handleOTP = () => {
    Alert.alert('Success', 'OTP sent');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Header */}
      <View
        style={{
          height: 60,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold' }}>
          Login
        </Text>
        <IconButton
          icon="close"
          size={28}
          iconColor="black"
          onPress={() => navigation.navigate('Home1')}
        />
      </View>

      {/* Body Content */}
      <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 20 }}>
        {/* Top Image */}
        <Image
          source={{
            uri: 'https://tse4.mm.bing.net/th?id=OIP.92u0vK9lvOk9z-9XvOsg6wHaEB&pid=Api&P=0&h=220',
          }}
          style={{
            width: '100%',
            height: 230,
            resizeMode: 'cover',
            borderRadius: 10,
            marginTop: 10,
          }}
        />

        {/* Title */}
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 20,
            textAlign: 'center',
          }}
        >
          Create Account or Sign in
        </Text>

        {/* Phone Input */}
        <View
          style={{
            borderColor: '#ccc',
            borderWidth: 1,
            width: '100%',
            borderRadius: 10,
            paddingHorizontal: 15,
            marginTop: 20,
          }}
        >
          <TextInput
            style={{ fontSize: 18, height: 50 }}
            placeholder="Enter your mobile number"
            placeholderTextColor="black"
            keyboardType="phone-pad"
          />
        </View>

        {/* Generate OTP Button */}
        <TouchableOpacity
          onPress={handleOTP}
          style={{
            backgroundColor: 'red',
            width: '100%',
            paddingVertical: 15,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
            Generate OTP (ONE TIME PASSWORD)
          </Text>
        </TouchableOpacity>

        {/* OR Text */}
        <Text style={{ fontSize: 16, color: 'grey', marginTop: 20 }}>OR</Text>

        {/* Google Sign-In */}
        <TouchableOpacity
          onPress={() => navigation.navigate('main')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 10,
            paddingVertical: 12,
            width: '100%',
            marginTop: 20,
            gap: 12,
          }}
        >
          <Image
            source={{
              uri: 'https://tse1.mm.bing.net/th?id=OIP.C19WrK-kUeJMhOzi6EjHtQHaHa&pid=Api&P=0&h=220',
            }}
            style={{ height: 28, width: 28 }}
          />
          <Text style={{ color: '#444', fontSize: 16, fontWeight: 'bold' }}>
            Continue with Google
          </Text>
        </TouchableOpacity>

        {/* Referral */}
        <View
          style={{
            borderTopWidth: 1,
            borderColor: '#ccc',
            width: '100%',
            alignItems: 'center',
            paddingVertical: 20,
            marginTop: 40,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('referral')}>
            <Text style={{ fontSize: 18, color: 'blue', fontWeight: '600' }}>
              Have a Referral Code?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
