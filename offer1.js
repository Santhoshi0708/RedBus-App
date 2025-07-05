import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from 'react-native-paper';

const App = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'brown', height: 60, }}>
                <TouchableOpacity onPress={() => navigation.navigate('trainbooking')}>
                    <Icon name="arrow-left" size={30} color="white" />
                </TouchableOpacity>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center', padding: 10 }}>redRail offer</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 100, }}>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'brown', padding: 30 }}>
                    <Text style={{ fontSize: 16, color: 'white',}}>Exiting offers for an exiting journey</Text>
                    <Image source={require('../Images/of1.png')} style={{ height: 100, width: 120 }}></Image>
                    <Text style={{ fontSize: 16, color: 'white', marginTop: 20 }}>Get Rs 60 off on train tickets</Text>
                    <View style={{ width: '30%', paddingVertical: 13, marginTop: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'navy', }}>SUPER60</Text>
                    </View>
                </View>
                <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: 'lightgrey', padding: 30 }}>
                    <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 22 }}>HOW DOES IT WORK?</Text>
                    <View style={{ width: '100%', paddingVertical: 25, marginTop: 15, backgroundColor: 'white', flexDirection: 'row', gap: 20, paddingHorizontal: 10 }}>
                        <Image source={require('../Images/login1.png')} style={{ height: 50, width: 50 }}></Image>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Login to your redBus account</Text>
                    </View>
                    <View style={{ width: '100%', paddingVertical: 25, marginTop: 15, backgroundColor: 'white', flexDirection: 'row', gap: 20, paddingHorizontal: 10 }}>
                        <Image source={require('../Images/trainn.png')} style={{ height: 50, width: 50 }}></Image>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Select a tarin to your</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>destination</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', paddingVertical: 25, marginTop: 15, backgroundColor: 'white', flexDirection: 'row', gap: 20, paddingHorizontal: 10 }}>
                        <Image source={require('../Images/login3.png')} style={{ height: 50, width: 50 }}></Image>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Apply the offer code (if</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>applicable) on the payment</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Screen</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, padding: 20 }}>
  <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 15 }}>TERMS & CONDITIONS</Text>

  {[
    "Use code FIRST to get 10% discount up to Rs 150 + Rs 100 cashback on bus ticket bookings.",
    "Offer available only for first time users.",
    "Offer is applicable for a minimum ticket value of Rs 200.",
    "Offer is applicable once per customer email or mobile number.",
    "This offer is valid only for logged-in users who verify their mobile number with OTP (one time password).",
    "Redbus Cashback will be credited to redBus wallet within 48 working hours after date of journey. The offer cash is valid for 6 months from the day it is credited into the wallet, after which it will expire and cannot be used. redBus offer is applicable on all channels.",
    "redBus India Pvt Ltd reserves the right to end any or all offers at its discretion without any prior notice.",
    "All disputes are subject to New Delhi jurisdiction.",
  ].map((item, index) => (
    <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 12 }}>
      <Text style={{ fontSize: 16, width: 25 }}>{index + 1}.</Text>
      <Text style={{ fontSize: 16, flex: 1, lineHeight: 22, textAlign: 'justify' }}>{item}</Text>
    </View>
  ))}
</View>




                </ScrollView>


                <TouchableOpacity style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', paddingVertical: 15,margin:20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: "white" }}>BOOK A TICKET</Text>
                </TouchableOpacity>
        </View>
    );
};
export default App;
