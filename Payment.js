import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, backgroundColor: 'red', height: 60 }}>
        <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 15 }}>
          Payment methods
        </Text>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, paddingHorizontal: 20 }}>
        <Image
          source={{ uri: "https://tse4.mm.bing.net/th?id=OIP.3Mu5IpLHCOqc-4t1L_IStAHaHa&pid=Api&P=0&h=220://tse1.mm.bing.net/th?id=OIP.2osoX3ca4YVpW1sQWrDJfwHaGk&pid=Api&P=0&h=220" }}
          style={{ height: 250, width: 250, marginBottom: 30, resizeMode: 'contain' }}
        />

        <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
          No payment methods saved
        </Text>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>
          Once you make a transaction, your payment methods will appear here.
        </Text>
      </View>
    </View>
  );
};

export default App;
