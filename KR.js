import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ScrollView, TextInput, Image, Button, Animated, Platform, TouchableOpacity, FlatList } from 'react-native';
import { IconButton, Searchbar,Menu, Modal, Portal, Provider, Card, Title } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from "react-native-youtube-iframe";
import { Calendar } from 'react-native-calendars';
import { Dropdown } from 'react-native-element-dropdown';


export default function Ap({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [language, setLanguage] = useState('english');

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);



  const [visible, setVisible] = useState('');

  const [searchQuery, setSearchQuery] = useState('');
  const [date, setDate] = useState(new Date());
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [index, setIndex] = useState(0);
  const toggleLanguage = () => setLanguage(language === 'english' ? 'telugu' : 'english');


  const texts = [
    '24*7 into customer service(chat or call)',
    'Get Instant refund with UPI Payments',
    'redBus is the most trusted place to book online tickets',
    'Use code APSRTCNEW to save upto Rs.250 (for First time users only'
  ];
  const Data = [{ id: 1, name: 'AC MULTI AXLE', imgurl: 'https://tse3.mm.bing.net/th?id=OIP.gINuh5KA77_5XmpWxGm3zAHaFO&pid=Api&P=0&h=220' },
  { id: 2, name: 'GARUDA', imgurl: 'https://tse4.mm.bing.net/th?id=OIP.Ooumbe1BHopw6cDgHxFmLwHaDz&pid=Api&P=0&h=220' },
  { id: 3, name: 'Low Floor AC Seater 2+2', imgurl: 'https://tse2.mm.bing.net/th?id=OIP.RxC7_0rdLSdvghWB6-YougHaEJ&pid=Api&P=0&h=220' },
  { id: 4, name: 'Deluxe', imgurl: 'https://tse2.mm.bing.net/th?id=OIP.E_b7L1WR3jrXQkfadBWidQHaEc&pid=Api&P=0&h=220' },
  { id: 5, name: 'SUPER LUXURY', imgurl: 'https://tse4.mm.bing.net/th?id=OIP.lN41_iNw_gOf1DObyuIYTgHaEk&pid=Api&P=0&h=220' },
  { id: 6, name: 'SWIFT-GARUDA A/C SEATER BUS', imgurl: 'https://tse3.mm.bing.net/th?id=OIP.Du0PTzuniHvGYJ48muWW0QHaE8&pid=Api&P=0&h=220' },
  ];
  const Data2 = [{ id: 1, t1: 'Angamaly - Thrissur', t3: 'From', t4: ' ₹ 77', t5: 'Book Now' },
  { id: 2, t1: 'Thrissur - Angamaly', t3: 'From', t4: ' ₹ 77', t5: 'Book Now' },
  { id: 3, t1: 'Angamaly - Chalakudi', t3: 'From', t4: ' ₹ 42', t5: 'Book Now' },
  { id: 4, t1: 'Chalakudi - Thrissur', t3: 'From', t4: ' ₹ 59', t5: 'Book Now' },
  { id: 5, t1: 'Chalakudi - Angamaly', t3: 'From', t4: ' ₹ 42', t5: 'Book Now' },
  ];
  const toggleFlip = () => {
        // animation effect
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: -1,
            duration: 150,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
          }),
        ]).start();
    
        // swap the values
        setFromPlace(prevFrom => {
          setToPlace(prevFrom);
          return toPlace;
        });
      };
      const placeList = [
      { label: 'Hyderabad', value: 'Hyderabad' },
      { label: 'Vijayawada', value: 'Vijayawada' },
      { label: 'Chennai', value: 'Chennai' },
      { label: 'Bangalore', value: 'Bangalore' },
      { label: 'Mumbai', value: 'Mumbai' },
    ];
    const [show, setShow] = useState(false);
      const [visiblePortal, setVisiblePortal] = useState('');
  const [fromPlace, setFromPlace] = useState(null);
    const [toPlace, setToPlace] = useState(null);
    
    const [scaleAnim] = useState(new Animated.Value(1));
    
  const content = language === 'english'
    ? {
      heading: 'Why book tickets on redBus?',
      steps: [
        { id: 1, icon: 'text-box-check-outline', title: 'Enter trip detail', subtitle: 'Enter from where to where & when you want to travel' },
        { id: 2, icon: 'bus-clock', title: 'Select Bus', subtitle: 'Select the bus of your choice from our list' },
        { id: 3, icon: 'car-child-seat', title: 'Select seat', subtitle: 'Select the seat & boarding /dropping points' },
        { id: 4, icon: 'credit-card-marker', title: 'Enter Contact Detail & Pay', subtitle: 'Give us your contact and make payment to get ticket details' },
      ]
    }
    : {
      heading: 'എന്തുകൊണ്ടാണ് redBus-ൽ ടിക്കറ്റുകൾ ബുക്ക് ചെയ്യേണ്ടത്?',
      steps: [
        {
          id: 1,
          icon: 'text-box-check-outline',
          title: 'യാത്ര വിവരങ്ങൾ നൽകുക',
          subtitle: 'എവിടുനിന്ന് എവിടേക്കാണ്, എപ്പോഴാണ് യാത്ര എന്നത് നൽകുക'
        },
        {
          id: 2,
          icon: 'bus-clock',
          title: 'ബസ് തിരഞ്ഞെടുക്കുക',
          subtitle: 'ഞങ്ങളുടെ ലിസ്റ്റിൽ നിന്ന് നിങ്ങളുടെ ഇഷ്ടപ്പെട്ട ബസ് തിരഞ്ഞെടുക്കുക'
        },
        {
          id: 3,
          icon: 'car-child-seat',
          title: 'സീറ്റ് തിരഞ്ഞെടുക്കുക',
          subtitle: 'നിങ്ങളുടെ സീറ്റ്, ബോർഡിംഗ് / ഡ്രോപ്പിംഗ് പോയിന്റുകൾ തിരഞ്ഞെടുക്കുക'
        },
        {
          id: 4,
          icon: 'credit-card-marker',
          title: 'കാണ്ടാക്റ്റ് വിവരങ്ങളും പേയ്‌മെന്റും',
          subtitle: 'നിങ്ങളുടെ കാണ്ടാക്റ്റ് വിവരങ്ങൾ നൽകുക, പേയ്‌മെന്റ് ചെയ്യുക'
        }
      ]
    };
  useEffect(() => {
    let isMounted = true;
    const cycleText = () => {
      if (!isMounted) return;
      Animated.timing(fadeAnim, { toValue: 0, duration: 500, useNativeDriver: true }).start(() => {
        if (!isMounted) return;
        setIndex((prev) => (prev + 1) % texts.length);
        Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
      });
    };
    const interval = setInterval(cycleText, 3000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);
const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [fromMenuVisible, setFromMenuVisible] = useState(false);
  const [toMenuVisible, setToMenuVisible] = useState(false);
  const [scaleAnim2] = useState(new Animated.Value(1));

  const toggleFlip2 = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 0, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };
  const onDateChange = (event, selectedDate) => {
    if (event.type === 'set') setDate(selectedDate || date);
    setVisible(false);
  };
  const renderItem = ({ item }) => {
      return (
        <View style={{ padding: 20, alignItems: 'center', paddingTop: 30, backgroundColor: 'white' }}>
  
          <Card style={{ width: 250, height: 200, shadowColor: 'white',backgroundColor:'white' }}>
            <Card.Cover source={{ uri: item.imgurl }} style={{ height: 150 }} />
            <Text style={{ textAlign: 'center', fontSize: 20, top: 10, fontWeight: 'bold' }}>{item.name}</Text>
          </Card>
        </View>
      );
    };
    const renderItem2 = ({ item }) => (
      <View style={{  alignItems: 'center',marginBottom:15,marginTop:15 }}>
        <Card style={{ width: '100%', height: 160, borderRadius: 15, padding: 12, backgroundColor: 'white', elevation: 0, shadowColor: 'white',borderWidth:1,borderColor:'lightgrey' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>{item.t1}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <View>
              <Text style={{ fontSize: 15, color: 'grey' }}>{item.t3}</Text>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{item.t4}</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: 'lightpink', width: '50%', borderRadius: 30, alignItems: 'center',justifyContent:'center' }}>
              <Text style={{ fontWeight: 'bold', textAlign:'center', fontSize: 15 }}>{item.t5}</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    );

  return (
    <Provider>
      <ScrollView contentContainerStyle={{ paddingBottom: 100, }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60, }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
            <Icon name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, marginLeft: 15 ,color:'white',fontWeight:'bold'}}>KRCTC Booking</Text>
        </View>
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <View style={{ flex: 1, paddingRight: 10 }}>
              <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', lineHeight: 32 }} numberOfLines={2}>
                കേരള സംസ്ഥാന റോഡ് ട്രാൻസ്പോർട്ട് കോർപ്പറേഷൻ
              </Text>
              <Animated.Text style={{ fontSize: 12, marginTop: 10, opacity: fadeAnim }}>
                {texts[index]}
              </Animated.Text>
            </View>
            <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.nmOpjIkjJz82qGlMT6OcuAAAAA&pid=Api&P=0&h=220', t3: '940 services including Swift, AC Multiaxle and more', t4: 'official booking partner of KERALA RTC' }} style={{ height: 60, width: 60, borderRadius: 50 }} />
          </View>
        <View style={{
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 10,
            padding: 10,
            backgroundColor: 'white'
          }}>
            {/* FROM FIELD */}
            <Dropdown
              style={{
                height: 50,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 8,
                paddingHorizontal: 10,
                marginBottom: 20
              }}
              placeholderStyle={{ fontSize: 14, color: 'gray' }}
              selectedTextStyle={{ fontSize: 14, color: 'black' }}
              data={placeList}
              labelField="label"
              valueField="value"
              placeholder="Select From"
              value={fromPlace}
              onChange={item => setFromPlace(item.value)}
            />

            <Dropdown
              style={{
                height: 50,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 8,
                paddingHorizontal: 10
              }}
              placeholderStyle={{ fontSize: 14, color: 'gray' }}
              selectedTextStyle={{ fontSize: 14, color: 'black' }}
              data={placeList}
              labelField="label"
              valueField="value"
              placeholder="Select To"
              value={toPlace}
              onChange={item => setToPlace(item.value)}
            />

            {/* SWAP BUTTON */}
            <TouchableOpacity
              onPress={toggleFlip}
              style={{
                position: 'absolute',
                right: 15,
                backgroundColor: 'black',
                borderRadius: 15,
                width: 30,
                height: 30,
                top: 55,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 3,
              }}
            >
              <Animated.View style={{ transform: [{ scaleY: scaleAnim }] }}>
                <Icon name="swap-vertical" size={24} color="white" />
              </Animated.View>
            </TouchableOpacity>

            {/* TO FIELD */}
            <View style={{ borderBottomWidth: 1, borderColor: 'lightgrey' }}>
              <Menu
                visible={toMenuVisible}
                onDismiss={() => setToMenuVisible(false)}
                anchor={
                  <TouchableOpacity onPress={() => setToMenuVisible(true)} style={{ flex: 1 }}>
                    <TextInput
                      label="To"
                      value={toCity}
                      mode="flat"
                      editable={false}
                      pointerEvents="none"
                      style={{ backgroundColor: 'white' }}
                    />
                  </TouchableOpacity>
                }
              >
                {placeList.map((city, index) => (
                  <Menu.Item key={index} title={city} onPress={() => {
                    setToCity(city);
                    setToMenuVisible(false);
                  }} />
                ))}
              </Menu>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
              <View style={{ alignItems: 'flex-end', backgroundColor: 'white' }}>
                <IconButton icon="calendar-month-outline" size={30} iconColor="black" />
              </View>
              <View style={{ position: 'absolute', bottom: 0, padding: 60, marginVertical: -120 }}>
                <TouchableOpacity onPress={() => showPortal('calender')} style={{ backgroundColor: 'white' }}>
                  <Text style={{ marginBottom: 10 }}>
                    {date.toDateString()}
                  </Text>

                  {show && (
                    <DateTimePicker
                      value={date}
                      mode="date"
                      display="default"
                      onChange={onChange}
                      maximumDate={new Date(2100, 12, 31)}
                      minimumDate={new Date(2000, 1, 1)}
                    />
                  )}
                </TouchableOpacity>

                <Portal>
                  {visiblePortal == 'calender' && (
                    <View style={{ position: 'absolute', backgroundColor: 'white', borderRadius: 20, alignItems: 'center', width: '100%', bottom: 0 }}>
                      <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'left', marginTop: 20 }}>🗓️ Select a Date</Text>
                      <Calendar
                        style={{
                          height: 350,
                          width: 350
                        }}
                        current={'2025-04-16'}
                        onDayPress={day => {
                          console.log('selected day', day);
                        }}
                        markedDates={{
                          '2025-04-16': { selected: true, marked: true, selectedColor: 'red' },
                        }}
                      />
                      <TouchableOpacity
                        onPress={hidePortal}
                        style={{
                          backgroundColor: 'red',
                          padding: 10,
                          borderRadius: 8,
                          marginTop: 10,
                          alignItems: 'center',
                          marginTop: 10,
                          width: '90%'
                        }}
                      >
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Close Calendar</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </Portal>

                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ gap: 15 }}
                >
                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 40,
                      borderRadius: 30,
                      backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => showPortal('calender')}
                  >
                    <Text style={{ fontSize: 16, color: 'white' }}>Today</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 40,
                      borderRadius: 30,
                      backgroundColor: 'red',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 50,
                    }}
                    onPress={() => showPortal('calender')}
                  >
                    <Text style={{ fontSize: 16, color: 'white' }}>Tomorrow</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          </View>
          <TouchableOpacity
              onPress={() => navigation.navigate('SearchBuses')}
              style={{
                width: '100%',
                backgroundColor: '#d32f2f',
                marginTop: 30,
                borderRadius: 25,
                paddingVertical: 10,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
            <Text style={{textAlign:'center',fontSize:20,color:'white'}}>Search Buses</Text>
            </TouchableOpacity>
<View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center' }}>Official booking partner of APSRTC</Text>
              </View>
          </View>

         

          <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'black', paddingLeft: 25 }}>Official booking partner of KSRTC</Text>
          </View>

        <View style={{ marginTop: 30, padding: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>KSRTC (Kerala) Concessions</Text>
          <TouchableOpacity style={{ paddingVertical: 20, marginHorizontal: 20, borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: 'beige', marginTop: 15 }}>
            <Text style={{ color: 'black' }}>Rs. 30 discount on Group Booking of 4 seats</Text>
          </TouchableOpacity>
        </View>
      <View style={{ marginVertical: 20, paddingHorizontal: 10, backgroundColor: 'white',}}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 22, marginTop: 20, }}>Why book tickets on redBus?</Text>
      
                {[
                  { icon: 'phone', title: '24 * 7 Customer service', subtitle: 'Available on call and chat' },
                  { icon: 'account-circle', title: '3.6 Crore+ Users', subtitle: 'Trusted across the globe' },
                  { icon: 'car-child-seat', title: 'Assured Seats', subtitle: 'Get the seat of your choice' },
                  { icon: 'calendar-month-outline', title: '2,00,000+ bookings/day', subtitle: 'Largest bus booking platform' },
                  { icon: 'credit-card-marker', title: 'Secured and verified payments', subtitle: 'UPI, Debit/Credit Card & more' },
                ].map((item, idx) => (
                  <View key={idx} style={{ flexDirection: 'row', alignItems: 'center', marginTop: idx === 0 ? 35 : 30, paddingHorizontal: 20 }}>
                    <Icon name={item.icon} size={30} color="blue" style={{ marginRight: 25 }} />
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
                      <Text style={{ color: 'black', fontSize: 16, marginBottom: 12 }}>{item.subtitle}</Text>
                    </View>
                  </View>
                ))}
              </View>
          <Text style={{ fontSize: 25, fontWeight: 'bold',paddingHorizontal:15 }}>Photos of types of buses</Text>
          <FlatList data={Data} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} horizontal
            showsHorizontalScrollIndicator={false} />
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Top Routes</Text>
            <TouchableOpacity onPress={showModal} style={{ marginTop: 10 }}>
              <Text style={{ textDecorationLine: 'underline', fontSize: 16, color: 'blue' }}>View All</Text>
            </TouchableOpacity>
          </View>

          <FlatList data={Data2} renderItem={renderItem2} keyExtractor={(item) => item.id.toString()} />

          <Portal>
            <Modal
              visible={modalVisible}
              onDismiss={hideModal}
              contentContainerStyle={{
                backgroundColor: 'white',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '60%',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 20,
              }}
            >
              <FlatList
                data={Data2}
                renderItem={renderItem2}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
              />
            </Modal>
          </Portal>
        </View>
        <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', paddingHorizontal: 40 }}>Customer Reviews</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
          <View style={{ flexDirection: 'row', gap: 20, marginTop: 30, paddingHorizontal: 20,shadowColor:'white' }}>
            <Card style={{ height: 180, width: 280, backgroundColor: 'white',shadowColor:'white' }}>
              <Card.Content style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 20, color: 'black' }}>Sooraj P</Text>
                  <View style={{ backgroundColor: 'green', borderRadius: 15, paddingHorizontal: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>★ 5</Text>
                  </View>
                </View>
                <Text style={{ marginTop: 10, fontSize: 16, color: 'black' }}>
                  "Good. Very good and okay"
                </Text>
              </Card.Content>
            </Card>

            <Card style={{ height: 180, width: 280, backgroundColor: 'white',shadowColor:'white' }}>
              <Card.Content style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 20, color: 'black' }}>Anjana Ss</Text>
                  <View style={{ backgroundColor: 'green', borderRadius: 15, paddingHorizontal: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>★ 5</Text>
                  </View>
                </View>
                <Text style={{ marginTop: 10, fontSize: 16, color: 'black' }}>
                  "Overall it  was a great experience. It was so nice."
                </Text>
              </Card.Content>
            </Card>
          </View>
        </ScrollView>
        <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', paddingHorizontal: 40, marginTop: 20 }}>How to book?</Text>
        <View style={{ borderRadius: 20, overflow: 'hidden',alignItems:'center',margin:20 }}>
                      <YoutubePlayer
                        height={160}
                        width={'100%'}
                        play={false}
                        videoId={'kwCXmLV6yUY'}
                      />
                    </View>
        <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
          <View style={{ marginTop: 20 }}>
                     <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Read how to book in</Text>
                     <View style={{ flexDirection: 'row', marginTop: 10 }}>
                       <TouchableOpacity
                         onPress={toggleLanguage}
                         style={{
                           backgroundColor: language === 'english' ? 'lightpink' : 'white',
                           flex: 1,
                           paddingVertical: 10,
                           alignItems: 'center',
                           borderWidth: 1,
                           borderColor: 'lightgray',
                           borderTopLeftRadius: 20,
                           borderBottomLeftRadius: 20,
                         }}>
                         <Text style={{ fontWeight: 'bold' }}>English</Text>
                       </TouchableOpacity>
                       <TouchableOpacity
                         onPress={toggleLanguage}
                         style={{
                           backgroundColor: language === 'telugu' ? 'lightpink' : 'white',
                           flex: 1,
                           paddingVertical: 10,
                           alignItems: 'center',
                           borderWidth: 1,
                           borderColor: 'lightgray',
                           borderTopRightRadius: 20,
                           borderBottomRightRadius: 20,
                         }}>
                         <Text style={{ fontWeight: 'bold' }}>Tamil</Text>
                       </TouchableOpacity>
                     </View>
                   </View>
         
                   {/* Steps */}
                   <View style={{ marginTop: 30 }}>
                     <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>{content.heading}</Text>
                     {content.steps.map((step, idx) => (
                       <View
                         key={idx}
                         style={{
                           flexDirection: 'row',
                           alignItems: 'center',
                           marginBottom: 20,
                           borderBottomWidth: 1,
                           borderColor: '#eee',
                           paddingBottom: 15,
                         }}>
                         <Text style={{ color: 'brown', fontWeight: 'bold', fontSize: 32, width: 40 }}>{step.id}</Text>
                         <View style={{ flex: 1,}}>
                           <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#222' }}>{step.title}</Text>
                           <Text style={{ fontSize: 14, color: '#555', marginTop: 4 }}>{step.subtitle}</Text>
                         </View>
                         <Icon name={step.icon} size={35} color="#007aff" style={{ marginLeft: 10 }} />
                       </View>
                     ))}
                   </View>
        </View>
      </ScrollView>
    </Provider>
  );
};