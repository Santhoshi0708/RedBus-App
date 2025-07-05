import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { RadioButton, Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PI = ({ navigation }) => {
  const [VisibleReset, setVisibleReset] = useState('');
  const [VisibleForgot, setVisibleForgot] = useState('');
  const [showinfo, setshowinfo] = useState(true);
  const [method, setMethod] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [VisibleCreate, setVisibleCreate] = useState('');

  const openResetModal = () => setVisibleReset('reset');
  const closeResetModal = () => setVisibleReset('');
  const openForgotModal = () => setVisibleForgot('Forgot');
  const closeForgotModal = () => setVisibleForgot('');
  const openCreateModal = () => setVisibleCreate('create');
  const closeCreateModal = () => setVisibleCreate('');

  const Data1 = [
    { label: 'Add/Manage IRCTC Usernames', icon2: 'chevron-right', nav: 'Bookings' },
    { label: 'Reset IRCTC password', icon2: 'chevron-right', nav: 'PI' },
    { label: 'Forgot IRCTC Username', icon2: 'chevron-right', nav: '' },
    { label: 'Create new IRCTC account', icon2: 'chevron-right', nav: '' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 12, backgroundColor: 'red', height: 60 }}>
        <TouchableOpacity onPress={() => navigation.navigate('MyAccount')} style={{ padding: 5 }}>
          <Icon name="arrow-left" size={28} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', marginLeft: 15 }}>
          IRCTC details
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 20 }}>
        {Data1.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (item.label === 'Reset IRCTC password') {
                openResetModal();
                setshowinfo(true);
              } else if (item.label === 'Forgot IRCTC Username') {
                openForgotModal();
                setshowinfo(true);
              } else if (item.label === 'Create new IRCTC account') {
                openCreateModal();
                setshowinfo(true);
              } else if (item.nav) {
                navigation.navigate(item.nav);
              }
            }}
            style={{
              backgroundColor: 'white',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              borderBottomWidth: index !== Data1.length - 1 ? 0.5 : 0,
              borderColor: 'black',
              marginBottom: 10,
              borderRadius: 10,
              elevation: 2,
              shadowColor: 'white',
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.label}</Text>
            <Icon name={item.icon2} size={28} color="black" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Portal>
        {VisibleReset === 'reset' && showinfo && (
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 10, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Reset IRCTC Password</Text>
              <TouchableOpacity onPress={closeResetModal}>
                <Icon name="close" size={28} color="black" />
              </TouchableOpacity>
            </View>

            <TextInput
              placeholder='IRCTC Username'
              placeholderTextColor='grey'
              style={{ borderWidth: 1, borderColor: 'black', paddingHorizontal: 15, paddingVertical: 14, marginTop: 15, borderRadius: 5, fontSize: 16 }}
              onChangeText={setName}
              value={name}
            />

            <Text style={{ fontSize: 14, marginBottom: 15, marginTop: 10, color: '#333' }}>
              Username is case sensitive. Eg - 'ABC123' and 'abc123' both can be valid IDs and belong to different users.
            </Text>

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Verification Method:</Text>
            <RadioButton.Group onValueChange={setMethod} value={method}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity
                  onPress={() => setMethod('Mobile')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: method === 'Mobile' ? 'red' : 'grey',
                    borderRadius: 30,
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                  }}
                  activeOpacity={0.7}
                >
                  <RadioButton value="Mobile" />
                  <Text style={{ fontSize: 16 }}>Mobile Number</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setMethod('Email')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: method === 'Email' ? 'red' : 'grey',
                    borderRadius: 30,
                    paddingHorizontal: 30,
                    paddingVertical: 6,
                  }}
                  activeOpacity={0.7}
                >
                  <RadioButton value="Email" />
                  <Text style={{ fontSize: 16 }}>E-mail</Text>
                </TouchableOpacity>
              </View>
            </RadioButton.Group>

            {method === 'Mobile' && (
              <TextInput
                placeholder='Mobile Number'
                placeholderTextColor='grey'
                style={{ borderWidth: 1, borderColor: 'black', padding: 20, marginTop: 20, borderRadius: 5 }}
                onChangeText={setMobile}
                value={mobile}
                keyboardType='numeric'
              />
            )}

            {method === 'Email' && (
              <TextInput
                placeholder='Email'
                placeholderTextColor='grey'
                style={{ borderWidth: 1, borderColor: 'black', padding: 20, marginTop: 20, borderRadius: 5 }}
                onChangeText={setEmail}
                value={email}
                keyboardType='email-address'
              />
            )}

            <TouchableOpacity
              style={{
                marginTop: 25,
                backgroundColor: 'red',
                paddingVertical: 10,
                alignItems: 'center',
                borderRadius: 30,
              }}
              onPress={() => {
                if (!name || !method || !mobile) {
                  alert("Please fill all fields.");
                } else {
                  alert("Password reset request submitted.");
                  closeResetModal();
                  setshowinfo(false);
                }
              }}
            >
              <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        )}
      </Portal>

      <Portal>
        {VisibleForgot === 'Forgot' && showinfo && (
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 10, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Forgot IRCTC Username</Text>
              <TouchableOpacity onPress={closeForgotModal}>
                <Icon name="close" size={28} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 14, marginTop: 15, color: '#333' }}>
              You will receive an email from IRCTC that contains your IRCTC username.
            </Text>
            <TextInput
              placeholder='Email'
              placeholderTextColor='grey'
              style={{ borderWidth: 1, marginTop: 15, borderColor: 'black', paddingHorizontal: 15, paddingVertical: 14, borderRadius: 5, fontSize: 16 }}
              onChangeText={setEmail}
              value={email}
              keyboardType='email-address'
              autoCapitalize='none'
            />
            <TextInput
              placeholder='Date of Birth'
              placeholderTextColor='grey'
              style={{ borderWidth: 1, borderColor: 'black', paddingHorizontal: 15, paddingVertical: 14, borderRadius: 5, marginTop: 15, fontSize: 16 }}
              onChangeText={setDOB}
              value={dob}
            />

            <TouchableOpacity
              style={{
                marginTop: 25,
                backgroundColor: 'red',
                paddingVertical: 14,
                alignItems: 'center',
                borderRadius: 30,
              }}
              onPress={() => {
                if (!email || !dob) {
                  alert("Please fill all fields.");
                } else {
                  alert("Username recovery request submitted.");
                  closeForgotModal();
                  setshowinfo(false);
                }
              }}
            >
              <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Get Username</Text>
            </TouchableOpacity>
          </View>
        )}
      </Portal>

      <Portal>
        {VisibleCreate === 'create' && showinfo && (
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 10, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Create new IRCTC account</Text>
              <TouchableOpacity onPress={closeCreateModal}>
                <Icon name="close" size={28} color="black" />
              </TouchableOpacity>
            </View>

            <TextInput
              placeholder='Email'
              placeholderTextColor='grey'
              style={{ borderWidth: 1, marginTop: 15, borderColor: 'black', paddingHorizontal: 15, paddingVertical: 14, borderRadius: 5, fontSize: 16 }}
              onChangeText={setEmail}
              value={email}
              keyboardType='email-address'
              autoCapitalize='none'
            />

            <TouchableOpacity
              style={{
                marginTop: 25,
                backgroundColor: 'red',
                paddingVertical: 12,
                alignItems: 'center',
                borderRadius: 30,
              }}
              onPress={() => {
                if (!email) {
                  alert("Please fill all fields.");
                } else {
                  closeCreateModal();
                  setshowinfo(false);
                  navigation.navigate('CreateIRCTC')
                }
              }}
            >
              <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Create Account</Text>
            </TouchableOpacity>
          </View>
        )}
      </Portal>
    </View>
  );
};

export default PI;
