import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
    const [GSTIN,setGSTIN] =useState('');
    const [BA,setBA] =useState('');
    const [BN,setBN]=useState('');
    const [BE,setBE] =useState('');
  return (
    <View style={{ flex: 1, backgroundColor: '#fff'}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, backgroundColor: 'red', height: 60 }}>
        <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
          <Icon name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 15 }}>
          GST details
        </Text>
      </View>
      <Text style={{fontSize:22,fontWeight:'bold',margin:10}}>Add your business details</Text>
      <TextInput
              placeholder='GSTIN'
              placeholderTextColor='grey'
              style={{ borderWidth: 1, marginTop: 20, margin:20 ,borderColor: 'black', padding: 20, marginBottom: 10, borderRadius: 10 }}
              onChangeText={setGSTIN}
              value={GSTIN}
            />
            <TextInput
                    placeholder='Business Name'
                    placeholderTextColor='grey'
                    style={{ borderWidth: 1, marginTop: 20, margin:20 ,borderColor: 'black', padding: 20, marginBottom: 10, borderRadius: 10 }}
                    onChangeText={setBN}
                    value={BN}
                  />
                  <TextInput
                          placeholder='Business Address'
                          placeholderTextColor='grey'
                          style={{ borderWidth: 1, marginTop: 20, margin:20 , borderColor: 'black', padding: 20, marginBottom: 10, borderRadius: 10 }}
                          onChangeText={setBA}
                          value={BA}
                        />
                        <TextInput
                                placeholder='Business Email'
                                placeholderTextColor='grey'
                                style={{ borderWidth: 1, marginTop: 20, margin:20 , borderColor: 'black', padding: 20, marginBottom: 10, borderRadius: 10 }}
                                onChangeText={setBE}
                                value={BE}
                              />
          <View style={{backgroundColor:'lightpink',margin:15,borderRadius:10}}>
            <Text style={{fontSize:13,padding:10}}>Incase of Invalid/cancelled GSTIN,this booking shall be considered as personal booking.</Text>
          </View>
       <TouchableOpacity onPress={() => {
                if (!GSTIN || !BE ||!BN||!BA) {
                  alert("Please fill all fields.");
                } else {
                  alert("GST Details successfully saved");
                  closeForgotModal();
                  setshowinfo(false);
                }
              }}style={{
                              width: '90%',
                              alignSelf: 'center',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: 'red',
                              paddingVertical: 10,
                              marginBottom: 10,
                              borderRadius: 30,
                              position: 'absolute',
                              bottom: 0,
                          }}>
                              <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                                  Save GST details
                              </Text>
                          </TouchableOpacity>
                          </View>
  );
};
export default App;