import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const App = ({ navigation }) => {
  const handleCoachCheck = () => {
    Alert.alert("Coach Position", "Coach position service will be displayed soon.");
  };

  const handlePNR = () => {
    Alert.alert("PNR Status", "Redirecting to PNR Status page.", [
      { text: "OK", onPress: () => navigation.navigate('PNR') }
    ]);
  };

  const handleSchedule = () => {
    Alert.alert("Train Schedule", "Redirecting to Train Schedule page.", [
      { text: "OK", onPress: () => navigation.navigate('Train_Schedule') }
    ]);
  };

  const handleLiveTrain = () => {
    Alert.alert("Live Train", "Redirecting to Live Train page.", [
      { text: "OK", onPress: () => navigation.navigate('Live') }
    ]);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }} contentContainerStyle={{ padding: 20 }}>
      
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: 'red', paddingBottom: 10, marginBottom: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('trainbooking')}>
          <Icon name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>
          Coach Position
        </Text>
      </View>

      {/* Input Fields */}
      <View style={{ backgroundColor: 'white', borderColor: 'grey', borderWidth: 1, borderRadius: 10, padding: 20 }}>
        <TextInput
          placeholder="Train Name/Number"
          placeholderTextColor="grey"
          style={{ backgroundColor: 'white', fontSize: 20 }}
          mode="outlined"
        />
        <TextInput
          placeholder="(OPTIONAL) Station"
          placeholderTextColor="grey"
          style={{ backgroundColor: 'white', fontSize: 20, marginTop: 20 }}
          mode="outlined"
        />
        <TouchableOpacity onPress={handleCoachCheck} style={{ backgroundColor: 'lightgrey', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, marginTop: 20, borderRadius: 25 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'grey' }}>
            View Coach Position
          </Text>
        </TouchableOpacity>
      </View>

      {/* Other Rail Services */}
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 30 }}>
        More rail information services
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, gap: 10 }}>
        {/* PNR Status */}
        <TouchableOpacity
          onPress={handlePNR}
          style={{ width: width * 0.29, borderWidth: 1, borderColor: 'grey', borderRadius: 12, paddingVertical: 15, alignItems: 'center' }}>
          <Icon name="train" size={30} color="red" />
          <Text style={{ fontSize: 12, color: 'black', marginTop: 10 }}>PNR Status</Text>
        </TouchableOpacity>

        {/* Train Schedule */}
        <TouchableOpacity
          onPress={handleSchedule}
          style={{ width: width * 0.29, borderWidth: 1, borderColor: 'grey', borderRadius: 12, paddingVertical: 15, alignItems: 'center' }}>
          <Icon name="seat-recline-extra" size={30} color="red" />
          <Text style={{ fontSize: 12, color: 'black', marginTop: 10 }}>Train</Text>
          <Text style={{ fontSize: 12, color: 'black' }}>Schedule</Text>
        </TouchableOpacity>

        {/* Live Train */}
        <TouchableOpacity
          onPress={handleLiveTrain}
          style={{ width: width * 0.29, borderWidth: 1, borderColor: 'grey', borderRadius: 12, paddingVertical: 15, alignItems: 'center' }}>
          <Icon name="calendar-clock" size={30} color="red" />
          <Text style={{ fontSize: 12, color: 'black', marginTop: 10 }}>Where is my</Text>
          <Text style={{ fontSize: 12, color: 'black' }}>Train</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default App;
