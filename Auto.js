import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const [modalType, setModalType] = useState('wallet');
  const [showInfo, setShowInfo] = useState(true);
  const [email, setEmail] = useState('');

  const openWalletModal = () => {
    setModalType('wallet');
    setShowInfo(true);
  };

  const closeWalletModal = () => {
    setModalType(null);
    setShowInfo(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         <View style={{ flexDirection: 'row', gap: 15, paddingVertical: 10,marginHorizontal:10 }}>
      <TouchableOpacity style={{ alignItems: 'center',}}>
        <Image
          source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.RHTrbYlwAkdAl9UN55qYjwAAAA&pid=Api&P=0&h=220' }}
          style={{ width: 50, height: 50,borderRadius:30 }}
        />
        <Text style={{ fontSize: 14, marginTop: 5 }}>Bus Tickets</Text>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={()=>navigation.navigate('trainbooking')}style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.p_SLKTRNZbg46Kw-Texj0wHaHa&pid=Api&P=0&h=220' }}
          style={{ width: 50, height: 50 }}
        />
        <Text style={{ fontSize: 14, marginTop: 5 }}>Train Tickets</Text>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={()=>navigation.navigate('Hotels')}style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.aFt3no9eziO4_o_BM4f4CAHaHa&pid=Api&P=0&h=220' }}
          style={{ width: 50, height: 50 }}
        />
        <Text style={{ fontSize: 14, marginTop: 5 }}>Hotels</Text>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={()=>navigation.navigate('Metro')} style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.IZvrRhGWYdwsdy3M6W9i4QHaHd&pid=Api&P=0&h=220' }}
          style={{ width: 50, height: 50 }}
        />
        <Text style={{ fontSize: 14, marginTop: 5 }}>Metro</Text>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={()=>navigation.navigate('Auto')}style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.KKHigZsxs-5wgSFcdVFf0AHaHa&pid=Api&P=0&h=220' }}
          style={{ width: 50, height: 50 }}
        />
        <Text style={{ fontSize: 14, marginTop: 5 }}>Auto/Cab</Text>
      </TouchableOpacity>
    </View>

      </ScrollView>

      <Portal>
        {modalType === 'wallet' && showInfo && (
          <View style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            elevation: 10
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Mobile number verification</Text>
              <TouchableOpacity onPress={()=>{navigation.navigate('Home1');closeWalletModal()}}>
                <Icon name="close" size={30} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={{ marginVertical: 10 }}>Verify your mobile number to activate your wallet</Text>
            <TextInput
              placeholder="Enter Email"
              placeholderTextColor="grey"
              style={{
                borderWidth: 1,
                borderColor: 'black',
                padding: 15,
                borderRadius: 8,
                marginBottom: 20
              }}
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                paddingVertical: 12,
                alignItems: 'center',
                borderRadius: 30
              }}
              onPress={() => {
                if (!email) {
                  alert('Please fill required field.');
                } else {
                  alert('Mobile Number Verified.');
                  closeWalletModal();
                }
              }}
            >
              <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Get OTP</Text>
            </TouchableOpacity>
          </View>
        )}
      </Portal>
    </View>
  );
};

export default App;
