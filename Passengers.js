import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';

const AddPassenger = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSave = () => {
    if (!name.trim() || !age.trim() || !gender.trim()) {
      Alert.alert('Validation', 'Please fill all fields');
      return;
    }
    // Pass the new passenger back to PI screen
    const newPassenger = {
      id: Date.now(), // simple unique id
      name,
      age: parseInt(age, 10),
      gender,
    };

    // Use navigation params to send back data
    if (route.params?.onAddPassenger) {
      route.params.onAddPassenger(newPassenger);
    }
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Add New Passenger</Text>

      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 8,
          marginBottom: 15,
        }}
      />

      <Text>Age</Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        placeholder="Enter age"
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 8,
          marginBottom: 15,
        }}
      />

      <Text>Gender</Text>
      <TextInput
        value={gender}
        onChangeText={setGender}
        placeholder="Enter gender"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 8,
          marginBottom: 25,
        }}
      />

      <TouchableOpacity
        onPress={handleSave}
        style={{
          backgroundColor: 'red',
          padding: 15,
          borderRadius: 30,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Save Passenger</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default AddPassenger;
