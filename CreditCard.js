import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CreditCard() {
  const [secure, setSecure] = useState(true);
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    if (!cardNumber.trim() || !name.trim() || !expiry.trim() || !cvv.trim()) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    // You could add more validation like card number length, date format, etc.
    Alert.alert('Success', 'Payment successful!');
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16, backgroundColor: '#fff', flexGrow: 1 }}>

      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Icon name="arrow-left" size={24} color="black" />
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Enter card details</Text>
          <Text style={{ color: 'gray' }}>Pay ₹32</Text>
        </View>
        <Text style={{ color: 'orange', fontWeight: 'bold' }}>09:49</Text>
      </View>

      {/* Banner */}
      <View style={{ backgroundColor: '#000', padding: 12, borderRadius: 6, marginVertical: 16 }}>
        <Text style={{ color: '#fff', fontSize: 14 }}>
          Please ensure that your card is enabled for online payments before proceeding.
        </Text>
      </View>

      {/* Input Fields */}
      <TextInput
        placeholder="Card number"
        keyboardType="numeric"
        mode="outlined"
        value={cardNumber}
        onChangeText={setCardNumber}
        style={{ marginVertical: 8, backgroundColor: 'white' }}
      />
      <TextInput
        placeholder="Enter name"
        mode="outlined"
        value={name}
        onChangeText={setName}
        style={{ marginVertical: 8, backgroundColor: 'white' }}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextInput
          placeholder="Expiry date"
          mode="outlined"
          value={expiry}
          onChangeText={setExpiry}
          style={{ width: '48%', marginVertical: 8, backgroundColor: 'white' }}
        />
        <TextInput
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
          secureTextEntry={secure}
          right={
            <TextInput.Icon
              icon={secure ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => setSecure(!secure)}
            />
          }
          mode="outlined"
          style={{ width: '48%', marginVertical: 8, backgroundColor: 'white' }}
        />
      </View>

      {/* CVV Info */}
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f4ff', padding: 10, borderRadius: 6, marginTop: 10 }}>
        <Icon name="information" size={16} color="gray" />
        <Text style={{ color: 'gray', fontSize: 13 }}> CVV will not be stored</Text>
        <Text style={{ color: '#0066cc', fontWeight: 'bold', fontSize: 13 }}>  What is CVV?</Text>
      </View>

      {/* Logos */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
        <Text style={{ fontSize: 12, color: 'gray' }}>VISA</Text>
        <Text style={{ fontSize: 12, color: 'gray' }}>MasterCard</Text>
        <Text style={{ fontSize: 12, color: 'gray' }}>DigiCert</Text>
        <Text style={{ fontSize: 12, color: 'gray' }}>PCI</Text>
        <Text style={{ fontSize: 12, color: 'gray' }}>Amex</Text>
      </View>

      {/* Pay Button */}
      <TouchableOpacity
        onPress={handlePayment}
        style={{
          backgroundColor: '#d32f2f',
          paddingVertical: 14,
          borderRadius: 30,
          alignItems: 'center',
          marginTop: 24,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Pay ₹32</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
