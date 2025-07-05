import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from 'react-native-paper';

const App = () => {
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

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'navy', padding: 30 }}>
                    <Text style={{ fontSize: 16, color: 'white',}}>Exiting offers for an exiting journey</Text>
                    <Image source={require('../Images/pig.png')} style={{ height: 100, width: 100 }}></Image>
                    <Text style={{ fontSize: 20, color: 'white', marginTop: 10 }}>ZERO Convenience FEE</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'lightgrey', padding: 30 }}>
                    <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 22 }}>HOW DOES IT WORK?</Text>
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
  <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 20, marginBottom: 15 }}>TERMS & CONDITIONS</Text>

  {[
    "Use Code ZEROFEE and enjoy ZERO Convenience FEE.",
    "Using ZEROFEE code discount amounting to Convenience fee.",
    "This offer can be availed only once per registered user.",
    "This offer is applicable only for train bookings done on redRail app.",
    "Minimum transaction value of Rs 200 required for this offer.",
    "This offer is only valid for logged-in users who verify their mobile number with OTP.",
    "Ibibo Group PVT. LTD reserves the right to end any or all offers at its discretion without any prior notice.",
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