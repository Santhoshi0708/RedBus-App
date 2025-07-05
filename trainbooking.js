import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, ScrollView, Dimensions, TextInput, Image ,Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IconButton, Menu, ToggleButton, Searchbar, Card, Portal, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Calendar } from 'react-native-calendars';
import YoutubePlayer from "react-native-youtube-iframe";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const texts = ['24*7 into customer service(chat or call)', 'Get Instant refund with UPI Payments', 'redBus is the most trusted place to book online tickets', 'Use code APSRTCNEW to save upto Rs.250 (for First time users only'];
  const [showFirstText, setShowFirstText] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [Visible, setVisible] = useState(true);
  const [visiblePortal, setVisiblePortal] = useState('');
  const [fromPlace, setFromPlace] = useState('');
  const [toPlace, setToPlace] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [toMenuVisible, setToMenuVisible] = useState(false);
  const [toCity, setToCity] = useState('');

  const [status, setStatus] = useState('checked');
  const onButtonToggle = () => { setStatus(status === 'checked' ? 'unchecked' : 'checked'); };
  const [selected, setSelected] = useState('All');

  const { width } = Dimensions.get('window');
  const iconSize = width * 0.08; 
  const fontSize = width * 0.03; 
  const imageSize = width * 0.13;
  const fontSize2 = width * 0.035;
  const itemGap = width * 0.10;
  const horizontalMargin = width * 0.03;
  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios'); 
    if (selectedDate) {
      setDate(selectedDate);
    }
  };
  const placeList = [
    { label: 'Hyderabad', value: 'Hyderabad' },
    { label: 'Vijayawada', value: 'Vijayawada' },
    { label: 'Chennai', value: 'Chennai' },
    { label: 'Bangalore', value: 'Bangalore' },
    { label: 'Mumbai', value: 'Mumbai' },
  ];
  const showModal = (type) => {
    setInfoType(type);
    setVisible(true);
  };
const handleSubmit = () => {
    if (!fromPlace || !toPlace) {
      Alert.alert('Missing Info', 'Please select From, To.');
      return;
    }

    navigation.navigate('SearchTrains', {
      from: fromPlace,
      to: toPlace,
    });
  };
  const hideModal = () => {
    setVisible(false);
    setInfoType(null);
  };
const handleFromSelect = async (value) => {
  setFromPlace(value);
  try {
    await AsyncStorage.setItem('city1', value);
  } catch (error) {
    console.error("Can't store fromPlace:", error);
  }
};

const handleToSelect = async () => {
  setToPlace(City1);
  try {
    await AsyncStorage.setItem('city2', City1);
  } catch (error) {
    console.error("Can't store toPlace:", City2);
  }
};

  const videoData = [
    {
      id: '1',
      title: 'How to book IRCTC train tickets',
      videoId: 'Dt2D-OXXSv4',
    },
    {
      id: '2',
      title: 'How to cancel a train ticket',
      videoId: 'VreGQaPzk9A',
    },
    {
      id: '3',
      title: 'Live train tracking feature',
      videoId: 'YlTOjAC_0QI',
    },
  ];
  const places = [{ p1: 'Recent Searcches', p2: 'C Shivaji Mah T', p3: 'CSTM', p4: 'Mumbai' },
  { p1: 'Popular City & stations', p2: 'Pune Jn', p3: 'PUNE', p4: 'Pimpri Chinchwad' },
  { p1: '', p2: 'Mumbai Central', p3: 'MMCT', p4: 'Mumbai' },
  { p1: '', p2: 'C Shivaji Mah T', p3: 'CSTM', p4: 'Mumbai' },
  { p1: '', p2: 'New Delhi', p3: 'NDLS', p4: 'Delhi' },
  { p1: '', p2: 'Delhi', p3: 'DLI', p4: 'Delhi' },
  ]
  const showPortal = (type) => setVisiblePortal(type);
  const hidePortal = () => setVisiblePortal(null);
  useEffect(() => {
    const cycleText = () => {
      Animated.timing(fadeAnim, { toValue: 0, duration: 500, useNativeDriver: true }).start(() => {
        setIndex(prev => (prev + 1) % texts.length);
        Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
      });
    };
    const interval = setInterval(cycleText, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const toggle = setInterval(() => { setShowFirstText(prev => !prev); }, 3000);
    return () => clearInterval(toggle);
  }, []);
  const toggleFlip = () => {
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


    setFromPlace(prevFrom => {
      setToPlace(prevFrom);
      return toPlace;
    });
  };
  
  
  
  
  // useEffect(()=>{
  // const setData = async ()=>{
  //   try{
  //   await AsyncStorage.setItem('city1',fromPlace);
  //   await AsyncStorage.setItem('city2',toPlace)
  //   }
  //   catch(error){
  //     console.error("Can't Set Data");
  //   }
  //  };
  //  setData();
  // },[]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{
          flexDirection: 'row',
          gap: itemGap,
          paddingVertical: width * 0.025,
          marginHorizontal: horizontalMargin,
          paddingBottom: width * 0.06
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home1')} style={{ alignItems: 'center' }}>
            <Image
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.RHTrbYlwAkdAl9UN55qYjwAAAA&pid=Api&P=0&h=220' }}
              style={{ width: imageSize, height: imageSize, borderRadius: imageSize / 2 }}
            />
            <Text style={{ fontSize, marginTop: 5 }}>Bus Tickets</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('trainbooking')} style={{ alignItems: 'center' }}>
            <Image
              source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.p_SLKTRNZbg46Kw-Texj0wHaHa&pid=Api&P=0&h=220' }}
              style={{ width: imageSize, height: imageSize }}
            />
            <Text style={{ fontSize, marginTop: 5 }}>Train Tickets</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Hotels')} style={{ alignItems: 'center' }}>
            <Image
              source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.aFt3no9eziO4_o_BM4f4CAHaHa&pid=Api&P=0&h=220' }}
              style={{ width: imageSize, height: imageSize }}
            />
            <Text style={{ fontSize, marginTop: 5 }}>Hotels</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Metro')} style={{ alignItems: 'center' }}>
            <Image
              source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.IZvrRhGWYdwsdy3M6W9i4QHaHd&pid=Api&P=0&h=220' }}
              style={{ width: imageSize, height: imageSize }}
            />
            <Text style={{ fontSize, marginTop: 5 }}>Metro</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Auto')} style={{ alignItems: 'center' }}>
            <Image
              source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.KKHigZsxs-5wgSFcdVFf0AHaHa&pid=Api&P=0&h=220' }}
              style={{ width: imageSize, height: imageSize }}
            />
            <Text style={{ fontSize, marginTop: 5 }}>Auto/Cab</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ScrollView contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 15, }}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20, }}>Book train tickets</Text>
          <Animated.Text style={{ fontSize: 16, marginTop: 10, opacity: fadeAnim }}>{texts[index]}</Animated.Text>
          <View style={{ marginTop: 20 }}>
            <LinearGradient colors={['#ccc', '#f5f5dc']} style={{ height: 40, justifyContent: 'center', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 20 }}>
              <Text style={{ color: 'black', fontWeight: '600', fontSize: 16, textAlign: 'center' }}>Booking open for summer holidays</Text>
            </LinearGradient>

            <View style={{
              borderWidth: 1,
              borderColor: 'lightgrey',
              borderRadius: 10,
              padding: 10,
              backgroundColor: 'white'
            }}>
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
                onChange={item => handleFromSelect(item.value)}
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
                onChange={item => handleToSelect(item.value)}
              />

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
                  {places.map((city, index) => (
                    <Menu.Item key={index} title={city} onPress={() => {
                      setToCity(city);
                      setToMenuVisible(false);
                    }} />
                  ))}
                </Menu>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                <IconButton icon="calendar-month-outline" size={30} iconColor="black" />
                <View style={{ flex: 1 }}>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 14, color: 'grey' }}>Date of journey</Text>
                    <Text style={{}}>
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
                    )}                  </TouchableOpacity>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginTop: 10 }}>
                    <TouchableOpacity onPress={() => showPortal('calender')} style={{ width: 100, height: 40, borderRadius: 20, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                      <Text style={{ color: 'white', fontSize: 16 }}>Today</Text>
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
                            current={'2025-05-24'}
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
                    <TouchableOpacity onPress={() => showPortal('calender')} style={{ width: 100, height: 40, borderRadius: 20, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ color: 'white', fontSize: 16 }}>Tomorrow</Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
          <View style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 10, paddingVertical: 25, paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.qWrtIgOC-2N5iZnaz1weiAHaHa&pid=Api&P=0&h=220' }} style={{ height: 50, width: 50, marginRight: 10, borderRadius: 20 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Free Cancellation</Text>
              <Animated.Text style={{ fontSize: 16, opacity: fadeAnim }}>{showFirstText ? 'Instant full fare refund' : '0% cancellation fee'}</Animated.Text>
            </View>
            <ToggleButton icon={status === 'checked' ? 'toggle-switch' : 'toggle-switch-off-outline'} value="toggle" status={status} onPress={onButtonToggle} style={{ backgroundColor: 'white' }} iconColor="red" size={45} />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={handleSubmit} style={{ width: '100%', backgroundColor: '#d32f2f', marginBottom: 20, marginTop: 30, alignItems: 'center', borderRadius: 30, paddingVertical: 10 }} >
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Search Trains</Text>
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row', gap: 10, paddingHorizontal: 30 }}>
            <Image source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.EHn6kkNVOvYzlxSE_p6lgwHaEK&pid=Api&P=0&h=220' }} style={{ height: 50, width: 50 }} />
            <Text style={{ textAlign: 'center', fontSize: 20 }}>IRCTC Authorized partner</Text>
          </View>
        </View>
        <View style={{ marginTop: 20, backgroundColor: '#f0f0f0', padding: 20, borderRadius: 15 }}>
          <View style={{ flexDirection: 'row', gap: 10, marginBottom: 15 }}>
            <TouchableOpacity onPress={() => navigation.navigate("PNR")} style={{ flexDirection: 'row', alignItems: 'center', width: '50%', backgroundColor: 'white', padding: 15, borderRadius: 10 }}>
              <Icon name="ticket-confirmation-outline" size={24} color="red" style={{ marginRight: 10 }} />
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Check PNR Status</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Live")} style={{ flexDirection: 'row', alignItems: 'center', width: '50%', backgroundColor: 'white', padding: 15, borderRadius: 10 }}>
              <Icon name="train" size={24} color="red" style={{}} />
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Live Train Status</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.navigate("Train_Schedule")} style={{ alignItems: 'center', width: '23%', backgroundColor: 'white', paddingVertical: 20, borderRadius: 10 }}>
              <Icon name="calendar-clock" size={30} color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Coach_Position")} style={{ alignItems: 'center', width: '23%', backgroundColor: 'white', paddingVertical: 20, borderRadius: 10 }}>
              <Icon name="seat-recline-extra" size={30} color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("OrderFood")} style={{ alignItems: 'center', width: '23%', backgroundColor: 'white', paddingVertical: 20, borderRadius: 10 }}>
              <Icon name="food" size={30} color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("RailMade")} style={{ alignItems: 'center', width: '23%', backgroundColor: 'white', paddingVertical: 20, borderRadius: 10 }}>
              <Icon name="alert-circle-outline" size={30} color="red" />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 14, color: 'black' }}>Train</Text>
              <Text style={{ fontSize: 14, color: 'black' }}>Schedule</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 14, color: 'black' }}>Coach</Text>
              <Text style={{ fontSize: 14, color: 'black' }}>Position</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 14, color: 'black' }}>Order</Text>
              <Text style={{ fontSize: 14, color: 'black' }}>Food</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 14, color: 'black' }}>Rail</Text>
              <Text style={{ fontSize: 14, color: 'black' }}>Madad</Text>
            </View>
          </View>
        </View>
        <View style={{ width: '100%', backgroundColor: 'lightpink', paddingVertical: 30, borderRadius: 35, alignSelf: 'center', marginTop: 20 }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View style={{ paddingHorizontal: 20 }}>
              <TouchableOpacity onPress={() => navigation.navigate("RBRAIL")} style={{ width: '60%', backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'gray', paddingVertical: 10, paddingHorizontal: 20, marginHorizontal: 5, }}>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                  <Icon name="tag-outline" size={30} color="black" />
                  <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>RBRAIL</Text>
                </View>
              </TouchableOpacity>
              <Text style={{ color: 'black', fontSize: 20, marginTop: 30, left: 15 }}>Summer sale ! Get ₹ 80 Off</Text>
            </View>
            <Image source={require('../Images/holi.png')} style={{ height: 80, width: 80, right: 70, resizeMode: 'cover' }}></Image>
          </View>
        </View>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20, paddingHorizontal: 20 }}>Offers</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
          <View style={{ flex: 1, paddingVertical: 10, alignItems: 'center' }}>
            <Card style={{ backgroundColor: 'lightgreen', width: 320, height: 250, borderRadius: 30, elevation: 0, shadowColor: 'transparent', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0 }}>
              <Card.Content>
                <TouchableOpacity onPress={() => navigation.navigate("offer1")} style={{ paddingVertical: 8, width: '50%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', marginVertical: 10, borderRadius: 10 }}>
                  <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>Additional offers</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Get Rs 60 off on train tickets</Text>
                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', marginTop: 5 }}>Valid till : 30 Apr 2025</Text>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("offer2")} style={{ paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: 'white', width: 170, alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                      <Icon name="tag-outline" size={30} color="black" />
                      <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>Super60</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </Card.Content>
            </Card>
          </View>

          <View style={{ flex: 1, paddingVertical: 10, alignItems: 'center' }}>
            <Card style={{ backgroundColor: 'lightblue', marginHorizontal: 10, width: 320, height: 250, borderRadius: 30, elevation: 0, shadowColor: 'transparent', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0 }}>
              <Card.Content>
                <TouchableOpacity style={{ paddingVertical: 8, width: '50%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', marginVertical: 10, borderRadius: 10 }}>
                  <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>Additional offers</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>ZERO Convenience FEE</Text>
                <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', marginTop: 5 }}>Valid till: 30 Apr 2025</Text>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                  <TouchableOpacity style={{ paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: 'white', width: 170, alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                      <Icon name="tag-outline" size={30} color="black" />
                      <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>ZEROFEE</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </Card.Content>
            </Card>
          </View>
        </ScrollView>

        <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Videos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{}}>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            {videoData.map((item, index) => (
              <TouchableOpacity key={index}>
                <Card style={{ width: 220, borderRadius: 20, backgroundColor: 'white', bottom: 20, shadowColor: 'white', }}>
                  <Card.Content style={{ padding: 0 }}>
                    <View style={{ borderRadius: 20, overflow: 'hidden' }}>
                      <YoutubePlayer
                        height={140}
                        width={220}
                        play={false}
                        videoId={item.videoId}
                      />
                    </View>
                    <View>
                      <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.title}</Text>
                    </View>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', marginTop: 20, margin: 10 }}>Exclusive Partner</Text>
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
          <Image
            source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.PyBr5c11rL7-yZxnsW6BjgHaFq&pid=Api&P=0&h=220' }}
            style={{ height: 230, width: 300, borderRadius: 10 }}
            resizeMode="cover"
          />
        </View>

      </ScrollView>
      {/* <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: width * 0.04,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: 'white'
      }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home1")}>
          <View style={{ alignItems: 'center' }}>
            <Icon name="home" size={iconSize} color={selected === 'home' ? 'red' : 'grey'} />
            <Text style={{ fontSize, color: 'black' }}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Bookings")}>
          <View style={{ alignItems: 'center' }}>
            <Icon name="order-bool-descending-variant" size={iconSize} color={selected === 'bookings' ? 'red' : 'grey'} />
            <Text style={{ fontSize, color: 'black' }}>Bookings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("help")}>
          <View style={{ alignItems: 'center' }}>
            <Icon name="comment-question" size={iconSize} color={selected === 'help' ? 'red' : 'grey'} />
            <Text style={{ fontSize, color: 'black' }}>Help</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("MyAccount")}>
          <View style={{ alignItems: 'center' }}>
            <Icon name="account-circle" size={iconSize} color={selected === 'account' ? 'red' : 'grey'} />
            <Text style={{ fontSize, color: 'black' }}>My Account</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default App;
