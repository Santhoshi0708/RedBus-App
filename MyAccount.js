import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Portal, Provider, IconButton, RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Linking } from 'react-native';

const App = ({ navigation }) => {
  const [clicked, setClicked] = useState('English');
  const [modalType, setModalType] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [countryValue, setCountryValue] = useState(null);
  const [langValue, setLangValue] = useState(null);
  const [bookingForWomen, setBookingForWomen] = useState(null);
  const [selectId, setSelectId] = useState(null);

  const openWalletModal = () => {
    setModalType('wallet');
    setShowInfo(true);
  };
  const closeWalletModal = () => {
    setModalType(null);
    setShowInfo(false);
  };
  const openReferralModal = () => {
    setModalType('referral');
    setShowInfo(true);
  };
  const closeReferralModal = () => {
    setModalType(null);
    setShowInfo(false);
  };
  const openRateModal = () => {
    setModalType('RateNow');
    setShowInfo(true);
  };
  const closeRateModal = () => {
    setModalType(null);
    setShowInfo(false);
  };
  const openHelpModal = () => {
    setModalType('help');
    setShowInfo(true);
  };
  const closeHelpModal = () => {
    setModalType(null);
    setShowInfo(false);
  };
  const closeCountryModal = () => {
    setModalType(null);
    setShowInfo(false);
  };

  const openCountryModal = () => {
    setModalType('country');
    setShowInfo(true);
  };
  const closeLangModal = () => {
    setModalType(null);
    setShowInfo(false);
  };
  const openLangModal = () => {
    setModalType('lang');
    setShowInfo(true);
  };
  const openBookingForWomen = () => {
    setModalType('BookingForWomen');
    setShowInfo(true);
  };
  const closeBookingForWomen = () => {
    setModalType(null);
    setShowInfo(false);
  };
  const languages = [
    'English',
    'తెలుగు(Telugu)',
    'हिन्दी(Hindi)',
    'മലയാളം(Malayalam)',
    'ಕನ್ನಡ(Kannada)',
  ];
  const countries = [
    { label: 'India', value: 'india', imgurl: 'https://up.yimg.com/ib/th?id=OIP.2A0rcBfwW_fDIuv9YM9JmQHaE8&pid=Api&rs=1&c=1&qlt=95&w=154&h=102' },
    { label: 'USA', value: 'usa', imgurl: 'https://up.yimg.com/ib/th?id=OIP.1bPVQiUNM3alRKUVzZN5zAHaF1&pid=Api&rs=1&c=1&qlt=95&w=135&h=106' },
    { label: 'Cambodia', value: 'Cambodia', imgurl: 'https://tse1.mm.bing.net/th?id=OIP.Godj3YDUgLEcRd2Ix98ekQHaE7&pid=Api&P=0&h=220' },
    { label: 'Indonesia', value: 'Indonesia', imgurl: 'https://tse4.mm.bing.net/th?id=OIP.25dSt8IoMLP3Pp5ChYnC-wHaE7&pid=Api&P=0&h=220' },
    { label: 'Australia', value: 'australia', imgurl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-scaled.jpg' },
  ];

  const Data = [
    { id: 1, name: 'English', value: 'en' },
    { id: 2, name: 'हिन्दी (Hindi)', value: 'hi' },
    { id: 3, name: 'తెలుగు (Telugu)', value: 'te' },
    { id: 4, name: 'தமிழ் (Tamil)', value: 'ta' },
    { id: 5, name: 'ಕನ್ನಡ (Kannada)', value: 'kn' },
  ];
  const getLangKey = (label) => {
    const match = label.match(/\((.*?)\)/);
    return match ? match[1] : label;
  };
  const handleCallPress = () => {
    Linking.openURL('tel:9876543210');
    closeHelpModal();
  };
  const translations = {
    English: 'Change to English',
    Telugu: 'తెలుగుకు మార్చండి',
    Hindi: 'हिंदी में बदलें',
    Malayalam: 'മലയാളത്തിലേക്ക് മാറ്റുക',
    Kannada: 'ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಿ',
  };

  const Data1 = [
    { icon1: 'menu', label: 'Bookings', icon2: 'chevron-right', nav: 'Bookings' },
    { icon1: 'account-outline', label: 'Personal Information', icon2: 'chevron-right', nav: 'PI' },
    { icon1: 'account-multiple-outline', label: 'Passengers', icon2: 'chevron-right', nav: 'Pass' },
    { icon1: 'triangle-outline', label: 'IRCTC details', icon2: 'chevron-right', nav: 'IRCTC' },
  ];
  const Data2 = [
    { icon1: 'wallet-outline', label: 'redBus Wallet', icon2: 'chevron-right', onPress: openWalletModal },
    { icon1: 'credit-card-outline', label: 'Payment methods', icon2: 'chevron-right', nav: 'Payment' },
    { icon1: 'file-document-outline', label: 'GST details', icon2: 'chevron-right', nav: 'GST', },
  ];
  const Data3 = [
    { icon1: 'tag-outline', label: 'Offers', icon2: 'chevron-right', nav: 'offers' },
    { icon1: 'cellphone-message', label: 'Referrals', icon2: 'chevron-right', onPress: openReferralModal },
    { icon1: 'youtube', label: 'Trending Videos', icon2: 'chevron-right', nav: 'TrendingVideos' },
    { icon1: 'alert-circle-outline', label: 'Know about redBus', icon2: 'chevron-right', nav: 'About' },
    { icon1: 'star-outline', label: 'Rate app', icon2: 'chevron-right', onPress: openRateModal },
    { icon1: 'help-circle-outline', label: 'Help', icon2: 'chevron-right', onPress: openHelpModal },
    { icon1: 'account-cog-outline', label: 'Account settings', icon2: 'chevron-right', nav: 'Account_Settings' },
  ];
  const Data4 = [
    { icon1: 'flag-outline', label: 'Country', icon2: 'chevron-right', onPress: openCountryModal },
    { icon1: 'currency-rupee', label: 'Currency', },
    { icon1: 'alpha-l-circle', label: 'Language', icon2: 'chevron-right', onPress: openLangModal },
    { icon1: 'bell-outline', label: 'Notifications', icon2: 'chevron-right', nav: 'Notifications' },
    { icon1: 'face-woman-outline', label: 'BookingForWomen', icon2: 'chevron-right', nav: '', onPress: openBookingForWomen },

  ];
  const Data5 = [
    { icon1: 'chat', label: 'Chat with us', icon2: 'chevron-right', nav: 'help' },
    { icon1: 'phone', label: 'Bus support', icon2: 'chevron-right', onPress: handleCallPress },
    { icon1: 'phone', label: 'Rail support', icon2: 'chevron-right', onPress: handleCallPress },
    { icon1: 'phone', label: 'Hotel support', icon2: 'chevron-right', onPress: handleCallPress },
  ];


  return (
    <Provider>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <View>
          <Image
            source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.YeL7l2Bk28AU6biC_MvqjgHaEK&pid=Api&P=0&h=220' }}
            style={{ height: 150, width: '100%' }}
          />

          <View style={{ position: 'absolute', top: 60, left: 15 }}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Lazy Princess</Text>
            <Text style={{ fontSize: 16, color: 'white' }}>lazyprincess0708@gmail.com</Text>
            <Text style={{ fontSize: 16, color: 'white' }}>Member since Nov 2024</Text>
          </View>
        </View>

        <Text style={{ fontSize: 22, fontWeight: 'bold', margin: 20 }}>Try redBus in your language</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 10, backgroundColor: 'white' }}>
          {languages.map((lang, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setClicked(lang)}
              style={{
                backgroundColor: clicked === lang ? 'red' : 'white',
                height: 35,
                minWidth: 100,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 15,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: {color: clicked === lang ? 'white':'black'},
                marginRight: 10,
              }}
            >
              <Text style={{ color: clicked === lang ? 'white' : 'black', fontSize: 14, fontWeight: 'bold' }}>{lang}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity style={{ backgroundColor: 'lightpink', marginHorizontal: 20, marginTop: 20, padding: 10, borderRadius: 30, alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{clicked ? translations[getLangKey(clicked)] : ""}</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 20, marginTop: 20, bottom: 10 }}>My details</Text>
        {Data1.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.nav)}
            style={{
              backgroundColor: 'white',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              borderBottomWidth: 0.5,
              borderColor: 'black',
              marginHorizontal: 10,
              marginVertical: 10
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <Icon name={item.icon1} size={30} color="black" />
              <Text style={{ fontSize: 16 }}>{item.label}</Text>
            </View>
            <Icon name={item.icon2} size={30} color="black" />
          </TouchableOpacity>
        ))}

        <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>Payments</Text>
        {Data2.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => item.onPress ? item.onPress() : navigation.navigate(item.nav)}
            style={{
              backgroundColor: 'white',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              borderBottomWidth: 0.5,
              borderColor: 'black',
              marginHorizontal: 10,
              marginVertical: 10
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <Icon name={item.icon1} size={30} color="black" />
              <Text style={{ fontSize: 16 }}>{item.label}</Text>
            </View>
            <Icon name={item.icon2} size={30} color="black" />
          </TouchableOpacity>
        ))}

        <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>More</Text>
        {Data3.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => item.onPress ? item.onPress() : navigation.navigate(item.nav)} style={{
              backgroundColor: 'white',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              borderBottomWidth: 0.5,
              borderColor: 'black',
              marginHorizontal: 10,
              marginVertical: 10
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <Icon name={item.icon1} size={30} color="black" />
              <Text style={{ fontSize: 16 }}>{item.label}</Text>
            </View>
            <Icon name={item.icon2} size={30} color="black" />
          </TouchableOpacity>
        ))}

        <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>Preferences</Text>
        {Data4.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (item.onPress) {
                item.onPress(); // open modal
              } else if (item.nav) {
                navigation.navigate(item.nav); // navigate to screen
              }
            }}
            style={{
              backgroundColor: 'white',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              borderBottomWidth: 0.5,
              borderColor: 'black',
              marginHorizontal: 10,
              marginBottom: 10,
              marginTop: 10,
              marginVertical: 10
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <Icon name={item.icon1} size={30} color="black" />
              <Text style={{ fontSize: 16 }}>{item.label}</Text>
            </View>
            <Icon name={item.icon2} size={30} color="black" />
          </TouchableOpacity>
        ))}


        <Portal>
          {modalType == 'wallet' && showInfo && (
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, elevation: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mobile number verification</Text>
                <TouchableOpacity onPress={closeWalletModal}>
                  <Icon name="close" size={30} color="black" />
                </TouchableOpacity>
              </View>
              <Text style={{ marginVertical: 10 }}>Verify your mobile number to activate your wallet</Text>
              <TextInput
                placeholder="Enter Email"
                placeholderTextColor="grey"
                style={{ borderWidth: 1, borderColor: 'black', padding: 15, borderRadius: 8, marginBottom: 20 }}
                value={email}
                onChangeText={setEmail}
              />
              <TouchableOpacity
                style={{ backgroundColor: 'red', paddingVertical: 12, alignItems: 'center', borderRadius: 30 }}
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
          {modalType === 'RateNow' && showInfo && (
            <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'white', width: '100%', height: 400 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, marginTop: 20, margin: 10 }}>How many stars will u give ?</Text>
                <IconButton
                  onPress={closeRateModal}
                  icon="close"
                  size={40}
                  iconColor="grey"
                />
              </View>
              <Image source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.VllJdYx7dj_xFmB_9td6pQHaDr&pid=Api&P=0&h=220' }} style={{ height: 180, width: '100%' }}></Image>
              <Text style={{ color: 'red', fontSize: 20, textAlign: 'center', marginTop: 20 }}>Rate Your Experience with the redBus App</Text>

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, gap: 15 }}>
                <TouchableOpacity onPress={() => setRating(1)}>
                  <Icon name={rating >= 1 ? 'star' : 'star-outline'} size={45} color="#FFD700" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setRating(2)}>
                  <Icon name={rating >= 2 ? 'star' : 'star-outline'} size={45} color="#FFD700" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setRating(3)}>
                  <Icon name={rating >= 3 ? 'star' : 'star-outline'} size={45} color="#FFD700" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setRating(4)}>
                  <Icon name={rating >= 4 ? 'star' : 'star-outline'} size={45} color="#FFD700" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setRating(5)}>
                  <Icon name={rating >= 5 ? 'star' : 'star-outline'} size={45} color="#FFD700" />
                </TouchableOpacity>
              </View>

            </View>
          )}
          {modalType === 'referral' && showInfo && (
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, elevation: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mobile number verification</Text>
                <TouchableOpacity onPress={closeReferralModal}>
                  <Icon name="close" size={30} color="black" />
                </TouchableOpacity>
              </View>
              <Text style={{ marginVertical: 10 }}>Verify your mobile number to start earning rewards by referring your friends</Text>
              <TextInput
                placeholder="Enter Email"
                placeholderTextColor="grey"
                style={{ borderWidth: 1, borderColor: 'black', padding: 15, borderRadius: 8, marginBottom: 20 }}
                value={email}
                onChangeText={setEmail}
              />
              <TouchableOpacity
                style={{ backgroundColor: 'red', paddingVertical: 12, alignItems: 'center', borderRadius: 30 }}
                onPress={() => {
                  if (!email) {
                    alert('Please fill required field.');
                  } else {
                    alert('Mobile Number Verified.');
                    closeReferralModal();
                  }
                }}
              >
                <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Get OTP</Text>
              </TouchableOpacity>
            </View>
          )}

          {modalType === 'help' && showInfo && (
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, elevation: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Help</Text>
                <TouchableOpacity onPress={closeHelpModal}>
                  <Icon name="close" size={30} color="black" />
                </TouchableOpacity>
              </View>
              {Data5.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    if (item.onPress) {
                      item.onPress(); // open modal
                    } else if (item.nav) {
                      {navigation.navigate(item.nav),closeHelpModal();} // navigate to screen
                    }
                  }}
                  style={{
                    backgroundColor: 'white',
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 15,
                    borderBottomWidth: index !== Data4.length - 1 ? 0.5 : 0,
                    borderColor: 'black',
                    marginHorizontal: 10,
                    marginBottom: 10,
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                    <Icon name={item.icon1} size={30} color="grey" />
                    <Text style={{ fontSize: 16 }}>{item.label}</Text>
                  </View>
                  <Icon name={item.icon2} size={30} color="grey" />
                </TouchableOpacity>
              ))}

            </View>
          )}
          {modalType === 'country' && showInfo && (
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, elevation: 10, borderColor: 'lightgrey', borderWidth: 1 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', bottom: 10 }}>Country</Text>
                <TouchableOpacity onPress={closeCountryModal} style={{ bottom: 10 }}>
                  <Icon name="close" size={30} color="black" />
                </TouchableOpacity>
              </View>
              {countries.map((country, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setCountryValue(country.value)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 10,
                    marginBottom: 10,
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Image
                      source={{ uri: country.imgurl }}
                      style={{ width: 30, height: 30, borderRadius: 5, marginRight: 10 }}
                    />
                    <Text style={{ fontSize: 18, color: '#000' }}>{country.label}</Text>
                  </View>
                  <RadioButton color='red'
                    value={country.value}
                    status={countryValue === country.value ? 'checked' : 'unchecked'}
                    onPress={() => { setCountryValue(country.value), closeCountryModal() }}
                  />
                </TouchableOpacity>
              ))}
              <TouchableOpacity onPress={() => {
                if (countryValue !== null) {
                  closeCountryModal();
                } else {
                  alert("Please select a Country before continuing.");
                }
              }} style={{ backgroundColor: 'red', paddingVertical: 15, paddingHorizontal: 15, marginTop: 10, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Confirm</Text>
              </TouchableOpacity>
            </View>
          )}
          {modalType === 'lang' && showInfo && (
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, elevation: 10, borderWidth: 1, borderColor: 'lightgrey' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', bottom: 10 }}>Languages</Text>
                <TouchableOpacity onPress={closeLangModal}>
                  <Icon name="close" size={30} color="black" />
                </TouchableOpacity>
              </View>
              {Data.map((lang) => (
                <TouchableOpacity
                  key={lang.id}
                  onPress={() => setLangValue(lang.value)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    borderRadius: 10,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>{lang.name}</Text>
                  <RadioButton color='red'
                    value={lang.value}
                    status={langValue === lang.value ? 'checked' : 'unchecked'}
                    onPress={() => setLangValue(lang.value)}
                  />
                </TouchableOpacity>
              ))}

              {/* 3) Confirm only if langValue is set */}
              <TouchableOpacity
                onPress={() => {
                  if (langValue) {
                    closeLangModal();
                  } else {
                    alert("Please select a language before continuing.");
                  }
                }}
                style={{
                  backgroundColor: 'red',
                  paddingVertical: 15,
                  marginTop: 10,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                  Confirm
                </Text>
              </TouchableOpacity>
             
            </View>
          )}
          {modalType === 'BookingForWomen' && showInfo && (
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, elevation: 10, borderWidth: 1, borderColor: 'lightgrey' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Booking For Women</Text>
                <TouchableOpacity onPress={closeBookingForWomen}>
                  <Icon name="close" size={30} color="black" />
                </TouchableOpacity>
              </View>

              <Text style={{ fontSize: 18, marginTop: 15 }}>Providing helpful details to smartly choose bus travel for women</Text>
              <TouchableOpacity onPress={() => navigation.navigate('BookingForWomen')}>
                <Text style={{ fontSize: 20, color: 'blue', textDecorationLine: 'underline', marginTop: 10, fontWeight: 'bold' }}>Know more</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setBookingForWomen('yes')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>

                <Text style={{ fontSize: 18, justifyContent: 'flex-end' }}>Yes</Text>
                <RadioButton
                  color="red"
                  status={bookingForWomen === 'yes' ? 'checked' : 'unchecked'}
                  onPress={() => setBookingForWomen('yes')}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setBookingForWomen('no')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>


                <Text style={{ fontSize: 18 }}>No</Text>
                <RadioButton
                  color="red"
                  status={bookingForWomen === 'no' ? 'checked' : 'unchecked'}
                  onPress={() => setBookingForWomen('no')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => closeBookingForWomen()} style={{ backgroundColor: 'red', paddingVertical: 15, paddingHorizontal: 15, marginTop: 10, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Confirm</Text>
              </TouchableOpacity>
            </View>
          )}

        </Portal>
        <Text style={{ textAlign: 'center', fontSize: 20, marginVertical: 20, color: 'grey' }}>V24.2.6</Text>

      </ScrollView>
    </Provider>
  );
};

export default App;
