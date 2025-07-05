import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView,Alert } from 'react-native';
import { TextInput, Portal, IconButton, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = ({ navigation }) => {
  const [infoType, setInfoType] = useState(null);
  const [visible, setVisible] = useState(false);
const [phone, setPhone] = useState('');
  const [referral, setReferral] = useState('');
  const showModal = (type) => {
    setInfoType(type);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
    setInfoType(null);
  };
const handleStart = () => {
  if (/^\d{10}$/.test(phone.trim())) {
    Alert.alert('Invalid Input', 'Please enter a valid 10-digit mobile number.');
    return;
  } else if (referral.trim()) {
    Alert.alert('Invalid Input', 'Please enter a valid Referral Code.');
    return;
  }
  navigation.navigate('Home1');
};


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'red', height: 60, paddingHorizontal: 15, paddingTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('redlogin')}>
          <Icon name="arrow-left" size={25} color="#fff" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', marginLeft: 20 }}>Referral Code</Text>
      </View>

      <ScrollView contentContainerStyle={{ alignItems: 'center',}}>
        <Image source={{ uri: 'data:image/jpeg;base64,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' }} style={{ height: 250, width: '100%' }} />
        <Text style={{ fontSize: 22, color: '#000', fontWeight: 'bold', marginTop: 20 }}>Create Account or Sign in</Text>
        <View style={{ borderColor: '#ccc', borderWidth: 1, width: '90%', marginTop: 20, borderRadius: 5 }}>
          <TextInput style={{ fontSize: 18, backgroundColor: 'transparent' }} placeholder="Enter your mobile number" placeholderTextColor="#777" />
        </View>
        <View style={{ borderColor: '#ccc', borderWidth: 1, width: '90%', marginTop: 15, borderRadius: 5 }}>
          <TextInput style={{ fontSize: 18, backgroundColor: 'transparent' }} placeholder="Referral Code" placeholderTextColor="#777" />
        </View>
        <TouchableOpacity onPress={handleStart} style={{ marginTop: 20, width: '90%', paddingVertical: 14, borderRadius: 5, backgroundColor: 'red', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Start</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: 20 }}>
          <TouchableOpacity onPress={() => showModal('terms')}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000' }}>Terms & Services</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showModal('privacy')}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000' }}>Privacy & Policy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Portal>
        {infoType === 'terms' && visible && (
          <ScrollView style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
            <IconButton onPress={hideModal} icon="close" size={32} iconColor="grey" />
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#d32f2f', marginBottom: 12 }}>TERMS OF SERVICE</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>BUS</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#555', marginTop: 15 }}>ROLE OF REDBUS</Text>
            <Text style={{ fontSize: 14, color: '#444', textAlign: 'justify', marginTop: 8 }}>redBus only provides a technology platform that connects intending travelers with bus operators. It doesn’t operate any bus or offer the service of transportation to the User. redBus also doesn’t act as an agent of any bus operator in the process of providing the above-mentioned technology platform services.</Text>
            <Text style={{ fontSize: 14, color: '#444', marginTop: 8, textAlign: 'justify' }}>The bus ticket booking voucher which redBus issues to a User is solely based on the information provided or updated by the bus operator regarding the seat availability.</Text>
            <Text style={{ fontSize: 14, color: '#444', marginTop: 8, textAlign: 'justify' }}>The amenities, services, routes, fares, schedule, bus type, seat availability and any other details pertaining to the bus service are provided by the respective bus operator and redBus has no control over such information provided by the bus operator.</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#555', marginTop: 15 }}>LIMITATION OF LIABILITY OF REDBUS</Text>
            <Text style={{ fontSize: 14, color: '#444', textAlign: 'justify', marginTop: 8 }}>In its role as a technology platform to enable transactions between the bus operators and the Users, redBus shall not be responsible for the operations of the bus operator including, but not limited to: timely departure or arrival, employee conduct, condition of the bus, trip cancellation, baggage loss, seat changes, incorrect boarding point, or separate pick-up vehicles.</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#555', marginTop: 15 }}>RESPONSIBILITIES OF THE USERS</Text>
            <Text style={{ fontSize: 14, color: '#444', marginTop: 8, textAlign: 'justify' }}>Users should contact the bus operator for exact boarding details. A valid ticket and government ID proof are required at boarding. Users must arrive 30 minutes early. Tickets are non-transferable.</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#555', marginTop: 15 }}>CANCELLATION OF TICKET</Text>
            <Text style={{ fontSize: 14, color: '#444', marginTop: 8, textAlign: 'justify' }}>Tickets can be canceled via website/app or customer care. Cancellation charges apply as per the ticket policy.</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#555', marginTop: 15 }}>RESCHEDULING OF TICKET</Text>
            <Text style={{ fontSize: 14, color: '#444', marginTop: 8, textAlign: 'justify' }}>Ticket rescheduling is allowed by select operators only. Charges and fare differences apply. Can only be done once per booking and is non-cancellable after rescheduling.</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, color: '#333' }}>RYDE</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 15, color: '#555' }}>ROLE OF REDBUS</Text>
            <Text style={{ fontSize: 14, color: '#444', textAlign: 'justify', marginTop: 8 }}>redBus connects travelers with vehicle operators but doesn't operate or act as an agent. Booking details are based on operator-provided information. redBus has no control over services or fulfillment.</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 15, color: '#555' }}>LIMITATION OF LIABILITY OF REDBUS</Text>
            <Text style={{ fontSize: 14, color: '#444', marginTop: 8, textAlign: 'justify' }}>redBus is not liable for vehicle delays, operator conduct, vehicle condition, cancellation, or missing amenities. In case of breakdown, efforts may be made to arrange a replacement.</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 15, color: '#555' }}>RESPONSIBILITIES OF THE USERS</Text>
            <Text style={{ fontSize: 14, color: '#444', marginTop: 8, textAlign: 'justify' }}>Users must confirm details with the operator, carry ID proof, and verify booking info immediately. Users bear responsibility for any delay due to incorrect info.</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 15, color: '#555' }}>CANCELLATION OF BOOKING</Text>
            <Text style={{ fontSize: 14, color: '#444', textAlign: 'justify', marginTop: 8 }}>Cancellations can be made via redBus platforms and are subject to cancellation charges.</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 15, color: '#555' }}>PAYMENT FOR BOOKING AND ADDITIONAL CHARGES</Text>
            <Text style={{ fontSize: 14, color: '#444', textAlign: 'justify', marginTop: 8 }}>Full, partial, or pay-at-vehicle options are available. Extra charges like tolls, permits, or driver allowances are to be paid directly by the user.</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, color: '#333' }}>REDRAIL</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 15, color: '#555' }}>ROLE OF REDBUS</Text>
            <Text style={{ fontSize: 14, color: '#444', marginTop: 8, textAlign: 'justify' }}>redBus is a platform for booking IRCTC train tickets. All bookings are governed by IRCTC rules. redBus has no control over booking status, delays, preferences, or ticket modifications.</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 15, color: '#555' }}>RESPONSIBILITIES OF THE USERS</Text>
            <Text style={{ fontSize: 14, color: '#444', marginTop: 8, textAlign: 'justify' }}>Users must log in with IRCTC credentials, carry ID proof, and note that seat allotment is done by IRCTC. Confirmed e-tickets are required for boarding.</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 15, color: '#555' }}>PAYMENTS AND CANCELLATIONS</Text>
            <Text style={{ fontSize: 14, color: '#444', marginBottom: 40, textAlign: 'justify', marginTop: 8 }}>redBus service charges are non-refundable. Cancellations follow IRCTC policies. Waitlisted tickets are auto-canceled with applicable refunds post redBus deduction.</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>MISCELLANEOUS</Text>
            <Text style={{ fontSize: 14, color: '#444', marginTop: 8, marginBottom: 30, textAlign: 'justify' }}>Bus operators are responsible for legal compliance. Disputes will be subject to Bengaluru jurisdiction. redBus’s liability is limited to the transaction value and excludes indirect damages.</Text>
          </ScrollView>
        )}
        {infoType === 'privacy' && visible && (
          <ScrollView style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
            <IconButton onPress={hideModal} icon="close" size={32} iconColor="grey" />
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Privacy Policy</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Users Outside India</Text>
            <Text style={{ fontSize: 15, lineHeight: 22, marginBottom: 12 }}>Please note that the data shared with redBus shall be primarily processed in India and such other jurisdictions where a third party engaged by redBus may process the data on redBus’s behalf...</Text>
            <Divider style={{ marginVertical: 12 }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Type of Information We Collect</Text>
            <Text style={{ fontSize: 15, lineHeight: 22, marginBottom: 12 }}>The information as detailed below is collected for us to be able to provide the services chosen by you and also to fulfill our legal obligations...</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>How We Use Your Personal Information</Text>
            <Text style={{ fontSize: 15, lineHeight: 22, marginBottom: 12 }}>The Personal Information collected may be used in the following manner: to confirm your reservations, send booking confirmations, notify about changes...</Text>
            <Divider style={{ marginVertical: 12 }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Surveys and User-Generated Content</Text>
            <Text style={{ fontSize: 15, lineHeight: 22, marginBottom: 12 }}>We value opinions and comments from our Users and frequently conduct surveys. Participation is optional. Identity is anonymous unless stated...</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Marketing Promotions</Text>
            <Text style={{ fontSize: 15, lineHeight: 22, marginBottom: 12 }}>redBus may send updates about fare sales, special offers, or launch reward programs...</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Cookies and Session Data</Text>
            <Text style={{ fontSize: 15, lineHeight: 22, marginBottom: 12 }}>We use cookies to personalize experience and track advertising effectiveness...</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Sharing Your Personal Information</Text>
            <Text style={{ fontSize: 15, lineHeight: 22, marginBottom: 30 }}>Information is shared with service providers (bus operators, hotels, etc.) to fulfill bookings and legal compliance...</Text>
          </ScrollView>
        )}
      </Portal>
    </View>
  );
};

export default Login;
