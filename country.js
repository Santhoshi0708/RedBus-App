import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';

const CountryDropdown = ({ navigation }) => {
  const [value, setValue] = useState('india');
  const [selectId, setSelectId] = useState(null);

  const countries = [
    { label: 'India', value: 'india', imgurl: 'https://up.yimg.com/ib/th?id=OIP.2A0rcBfwW_fDIuv9YM9JmQHaE8&pid=Api&rs=1&c=1&qlt=95&w=154&h=102' },
    { label: 'USA', value: 'usa', imgurl: 'https://up.yimg.com/ib/th?id=OIP.1bPVQiUNM3alRKUVzZN5zAHaF1&pid=Api&rs=1&c=1&qlt=95&w=135&h=106' },
    { label: 'Cambodia', value: 'Cambodia', imgurl: 'https://tse1.mm.bing.net/th?id=OIP.Godj3YDUgLEcRd2Ix98ekQHaE7&pid=Api&P=0&h=220' },
    { label: 'Indonesia', value: 'Indonesia', imgurl: 'https://tse4.mm.bing.net/th?id=OIP.25dSt8IoMLP3Pp5ChYnC-wHaE7&pid=Api&P=0&h=220' },
    { label: 'Australia', value: 'australia', imgurl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-scaled.jpg' },
  ];

  const languages = [
    { id: 1, name: 'English' },
    { id: 2, name: 'हिन्दी (Hindi)' },
    { id: 3, name: 'తెలుగు (Telugu)' },
    { id: 4, name: 'தமிழ் (Tamil)' },
    { id: 5, name: 'ಕನ್ನಡ (Kannada)' }
  ];

  const renderItem1 = (item) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
      }}
      onPress={() => setValue(item.value)}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: item.imgurl }} style={{ height: 40, width: 40, borderRadius: 5, marginRight: 10 }} />
        <Text style={{ fontSize: 18, color: 'black' }}>{item.label}</Text>
      </View>
      <RadioButton
        color="red"
        value={item.value}
        status={value === item.value ? 'checked' : 'unchecked'}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Header */}
      <View style={{ height: 60, backgroundColor: 'red', justifyContent: 'center', paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 25, color: 'white' }}>Country</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Dropdown */}
        <Dropdown
          style={{
            borderWidth: 1,
            borderColor: '#aaa',
            borderRadius: 10,
            paddingHorizontal: 10,
            height: 60,
            justifyContent: 'center',
          }}
          data={countries}
          labelField="label"
          valueField="value"
          placeholder="Select country"
          value={value}
          onChange={(item) => setValue(item.value)}
          renderItem={renderItem1}
          renderLeftIcon={() => {
            const selected = countries.find(c => c.value === value);
            return selected ? (
              <Image
                source={{ uri: selected.imgurl }}
                style={{ height: 30, width: 30, borderRadius: 5, marginRight: 10 }}
              />
            ) : null;
          }}
        />

        {/* Languages */}
        <Text style={{ fontSize: 20, color: 'red', marginTop: 30, marginBottom: 10 }}>Languages</Text>

        {languages.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              borderWidth: 1,
              borderColor: selectId === item.id ? 'red' : 'grey',
              borderRadius: 20,
              paddingVertical: 15,
              paddingHorizontal: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}
            onPress={() => setSelectId(item.id)}
          >
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
            <RadioButton color={"red"}
              value={item.id}
              status={selectId === item.id ? 'checked' : 'unchecked'}
              onPress={() => setSelectId(item.id)}
            />
          </TouchableOpacity>
        ))}

        <Text style={{ fontSize: 15, marginTop: 10 }}>
          You can change language later in 'My Account'
        </Text>

        {/* Button */}
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            marginTop: 30,
            width: '100%',
          }}
          onPress={() => {
            if (selectId !== null) {
              navigation.navigate("join");
            } else {
              alert("Please select a language before continuing.");
            }
          }}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CountryDropdown;
