import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Text, View, Animated, TouchableOpacity, StyleSheet, ScrollView, FlatList, TextInput, Image, ImageBackground } from 'react-native';
import { IconButton, PaperProvider, Portal, Modal, Divider, Searchbar, Card, ToggleButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  const App =({navigation})=>{
    const Data1=[{id: 1, t1: 'Save up to Rs 250 on bus tickets', t2: 'Valid till: 30 Apr', t3: 'First', colour: 'lavender', t4: 'Bus' }];
    const item = Data1[0];

  return (
    <View style={{ flex: 1, paddingVertical: 10, alignItems: 'center', marginTop: 20 }}>
      <Card style={{ backgroundColor: item.colour, marginHorizontal: 10, width: 320, height: 250, borderRadius: 15, overflow: 'hidden', marginTop: 10 }}>
        <Card.Content>
          <TouchableOpacity style={{ paddingVertical: 8, paddingHorizontal: 10, width: '30%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
            <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>{item.t4}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>{item.t1}</Text>
          <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', marginTop: 5 }}>{item.t2}</Text>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TouchableOpacity style={{ paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: 'white', width: 250, alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <Icon name="tag-outline" size={30} color="black" />
                <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>{item.t3}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
                <ScrollView contentContainerStyle={{ paddingBottom: 100, }}>
    
                  <View style={{marginTop:20,padding:20}}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 20 }}>TERMS & CONDITIONS</Text>
                    
                    <Text style={{fontSize:18,marginTop:10}}>1. Use code FIRST to get 10% discount up to Rs 150 + Rs 100 cashback on bus ticket bookings.
                    </Text>
                    <Text style={{fontSize:18,marginTop:10}}>2. Offer available only for first time users.
                    </Text>
                    <Text style={{fontSize:18,marginTop:10}}>3. Offer is applicable for a minimum ticket value of Rs 200.
                    </Text>
                    <Text style={{fontSize:18,marginTop:10}}>4. Offer is applicable once per customer email or mobile number.
                    </Text>
                    <Text style={{fontSize:18,marginTop:10}}>5. This offer is valid only for logged-in users who verify their mobile number with OTP (one time password).

</Text>
                    <Text style={{fontSize:18,marginTop:10}}>6. Redbus Cashback will be credited to redBus wallet within 48 working hours after date of journey. The offer cash is valid for 6 months from the day it is credited into the wallet, after which it will expire and cannot be used. redBus offer is applicable on all channels.
                    </Text>
                    <Text style={{fontSize:18,marginTop:10}}>7. redBus India Pvt Ltd reserves the right to end any or all offers at its discretion without any prior notice.

</Text>
                    <Text style={{fontSize:18,marginTop:10}}>8. All disputes are subject to New Delhi jurisdiction.</Text>


                </View>
                </ScrollView>

                <TouchableOpacity style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', paddingVertical: 15,width:'100%'}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: "white" }}>Copy offer code</Text>
                </TouchableOpacity>

                </View>
    );

  };
  export default App;