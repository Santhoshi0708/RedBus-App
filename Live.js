import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const App = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }} contentContainerStyle={{ padding: 20 }}>
      
      {/* Header */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'grey',
        marginBottom: 20,
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('trainbooking')}>
          <Icon name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>
          Live Train Status
        </Text>
      </View>

      {/* Title and Input */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>Where is my train</Text>
      <Text style={{ fontSize: 16, color: 'grey' }}>Check live train status</Text>
      <TextInput
        placeholder="Train Name/Number"
        placeholderTextColor="grey"
        style={{
          marginTop: 20,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 8,
          paddingHorizontal: 10,
          backgroundColor: 'white',
        }}
        mode="outlined"
      />

      {/* Show Status Button */}
      <TouchableOpacity style={{
        backgroundColor: 'red',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 25
      }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Show running status</Text>
      </TouchableOpacity>

      {/* More Info */}
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 30, marginBottom: 15 }}>
        More rail information services
      </Text>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
      }}>
        {/* PNR */}
        <TouchableOpacity
          onPress={() => navigation.navigate('PNR')}
          style={{
            width: width * 0.29,
            borderWidth: 1,
            borderColor: '#ddd',
            paddingVertical: 15,
            borderRadius: 12,
            backgroundColor: 'white',
            alignItems: 'center'
          }}>
          <Icon name="train" size={30} color="red" />
          <Text style={{ fontSize: 12, color: 'black' }}>PNR</Text>
          <Text style={{ fontSize: 12, color: 'black' }}>Status</Text>
        </TouchableOpacity>

        {/* Coach Position */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Coach_Position')}
          style={{
            width: width * 0.29,
            borderWidth: 1,
            borderColor: '#ddd',
            paddingVertical: 15,
            borderRadius: 12,
            backgroundColor: 'white',
            alignItems: 'center'
          }}>
          <Icon name="seat-recline-extra" size={30} color="red" />
          <Text style={{ fontSize: 12, color: 'black' }}>Coach</Text>
          <Text style={{ fontSize: 12, color: 'black' }}>Position</Text>
        </TouchableOpacity>

        {/* Train Schedule */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Train_Schedule')}
          style={{
            width: width * 0.29,
            borderWidth: 1,
            borderColor: '#ddd',
            paddingVertical: 15,
            borderRadius: 12,
            backgroundColor: 'white',
            alignItems: 'center'
          }}>
          <Icon name="calendar-clock" size={30} color="red" />
          <Text style={{ fontSize: 12, color: 'black' }}>Train</Text>
          <Text style={{ fontSize: 12, color: 'black' }}>Schedule</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default App;
