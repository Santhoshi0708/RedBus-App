import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IRCTCRegistration = ({navigation}) => {
  const [captcha, setCaptcha] = useState('');
  const [form, setForm] = useState({
    'User Name': '',
    'Full Name': '',
    'Password': '',
    'Confirm Password': '',
    'Email': '',
    'Mobile': '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (label, value) => {
    setForm({ ...form, [label]: value });
    setErrors({ ...errors, [label]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(form).forEach(([label, value]) => {
      if (!value.trim()) newErrors[label] = `${label} is required`;
    });
    if (!captcha.trim()) {
      newErrors['Captcha'] = 'Captcha is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert('Success', 'Form submitted successfully!');
    } else {
      Alert.alert('Error', 'Please fill in all required fields.');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16, backgroundColor: '#fff' }}>
        <View style={{flexDirection:'row',gap:15}}>
            <Icon onPress={()=>navigation.navigate('Availability')}name="arrow-left" size={25} color="black"></Icon>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        Create Your IRCTC account
      </Text>
      </View>
    <View style={{borderColor:'lightgrey',borderWidth:1,padding:10,marginBottom:15}}>
      <Text style={{ marginBottom: 10 }}>
        1.{' '}
        <Text style={{ fontStyle: 'italic' }}>
          Garbage / Junk values in profile may lead to deactivation of IRCTC account.
        </Text>
      </Text>
      <Text style={{ marginBottom: 10, }}>
        2.{' '}
        <Text style={{ fontStyle: 'italic' }}>
          Opening Advance Reservation Period (ARP) ticket and Opening Tatkal ticket
          booking for unauthenticated users is allowed only after days from date of
          User Registration (excluding the day of registration). User may authenticate
          their user profile with Aadhaar to book Opening Advance Reservation Period
          (ARP) ticket and Opening Tatkal ticket.
        </Text>
      </Text>
      </View>

      {['User Name', 'Full Name', 'Password', 'Confirm Password', 'Email', 'Mobile'].map(
        (label, index) => (
          <View key={index} style={{ marginBottom: 12 }}>
            <TextInput
              placeholder={label}
              placeholderTextColor="grey"
              style={{
                borderWidth: 1,
                borderColor: errors[label] ? 'red' : '#ccc',
                padding: 10,
                borderRadius: 4,
                color: 'black',
              }}
              secureTextEntry={label.toLowerCase().includes('password')}
              value={form[label]}
              onChangeText={(text) => handleChange(label, text)}
            />
            {errors[label] && (
              <Text style={{ color: 'red', marginTop: 4 }}>{errors[label]}</Text>
            )}
          </View>
        )
      )}

      <Text
        style={{
          backgroundColor: '#e6f3fa',
          padding: 10,
          marginBottom: 12,
          borderRadius: 4,
          color: '#333',
        }}>
        Invalid email ID may lead to deactivation of IRCTC account.
      </Text>

      <Text
        style={{
          backgroundColor: '#e6f3fa',
          padding: 10,
          marginBottom: 12,
          borderRadius: 4,
          color: '#333',
        }}>
        Please submit Mobile Number without ISD Code
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#192f6a',
          padding: 10,
          borderRadius: 4,
          justifyContent: 'space-between',
          marginBottom: 12,
        }}>
        <Text style={{ color: '#fff', fontSize: 18 }}>Captcha</Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <TextInput
          placeholder="Enter Captcha"
          placeholderTextColor="grey"
          style={{
            borderWidth: 1,
            borderColor: errors['Captcha'] ? 'red' : '#ccc',
            padding: 10,
            borderRadius: 4,
            color: 'black',
          }}
          value={captcha}
          onChangeText={setCaptcha}
        />
        {errors['Captcha'] && (
          <Text style={{ color: 'red', marginTop: 4 }}>{errors['Captcha']}</Text>
        )}
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          backgroundColor: '#f60',
          padding: 14,
          borderRadius: 4,
          alignItems: 'center',
        }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default IRCTCRegistration;
