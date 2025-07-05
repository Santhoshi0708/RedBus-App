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
        borderColor: 'red',
        marginBottom: 20,
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('trainbooking')}>
          <Icon name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>
          Train Schedule
        </Text>
      </View>

      {/* Schedule Input Box */}
      <View style={{
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        padding: 20
      }}>
        <TextInput
          placeholder="Train Name/Number"
          placeholderTextColor="grey"
          style={{
            backgroundColor: 'white',
            fontSize: 20,
          }}
          mode="outlined"
        />
        <TouchableOpacity style={{
          backgroundColor: 'lightgrey',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 15,
          marginTop: 20,
          borderRadius: 25
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'grey' }}>
            Check Schedule
          </Text>
        </TouchableOpacity>
      </View>

      {/* Rail Info Services */}
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 30 }}>
        More rail information services
      </Text>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        gap: 10,
      }}>
        {/* PNR Status */}
        <TouchableOpacity
          onPress={() => navigation.navigate('PNR')}
          style={{
            width: width * 0.29,
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 12,
            paddingVertical: 15,
            alignItems: 'center',
            backgroundColor: 'white'
          }}>
          <Icon name="train" size={30} color="red" />
          <Text style={{ fontSize: 12, color: 'black', marginTop: 10 }}>PNR Status</Text>
        </TouchableOpacity>

        {/* Coach Position */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Coach_Position')}
          style={{
            width: width * 0.29,
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 12,
            paddingVertical: 15,
            alignItems: 'center',
            backgroundColor: 'white'
          }}>
          <Icon name="seat-recline-extra" size={30} color="red" />
          <Text style={{ fontSize: 12, color: 'black', marginTop: 10 }}>Coach</Text>
          <Text style={{ fontSize: 12, color: 'black' }}>Position</Text>
        </TouchableOpacity>

        {/* Where is my train */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Live')}
          style={{
            width: width * 0.29,
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 12,
            paddingVertical: 15,
            alignItems: 'center',
            backgroundColor: 'white'
          }}>
          <Icon name="calendar-clock" size={30} color="red" />
          <Text style={{ fontSize: 12, color: 'black', marginTop: 10 }}>Where is my</Text>
          <Text style={{ fontSize: 12, color: 'black' }}>train</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default App;
