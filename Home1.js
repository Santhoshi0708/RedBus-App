import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Text, View, Animated, TouchableOpacity, StyleSheet, Dimensions, ScrollView, FlatList, TextInput, Image, ImageBackground, Alert } from 'react-native';
import { IconButton, Menu, PaperProvider, Portal, Modal, Divider, Searchbar, Card, ToggleButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import { Calendar } from 'react-native-calendars';
import { useRoute } from '@react-navigation/native';


const BusData = [
  { id: 1, t1: 'Save up to Rs 250 on bus tickets', t2: 'Valid till: 30 Apr', t3: 'First', colour: 'lavender', t4: 'Bus', card: 'First' },
  { id: 2, t1: 'Save up to Rs 300 on bus tickets', t2: 'Valid till: 30', t3: 'SRS10', colour: 'lightpink', t4: 'Bus', card: 'SRS10' },
  { id: 6, t1: 'Save up to Rs 50 on IntrCity SmartB...', t2: 'Valid till: 30 Apr', t3: 'INTRCITY', colour: 'lightblue', t4: 'Bus', card: 'INTRCITY' },
  { id: 7, t1: 'Save up to Rs 50 on bus tickets', t2: 'Valid till: 30 Apr', t3: 'YOLORED', colour: 'lightblue', t4: 'Bus', card: 'YOLORED' },
  { id: 8, t1: 'Save 10% Discount on bus tickets', t2: 'Valid till: 30 Apr', t3: 'DREAMLINE10', colour: 'lavender', t4: 'Bus', card: 'DREAMLINE10' }
];

const TrainData = [
  { id: 3, t1: 'Get Rs 80 off on train tickets', t2: 'Valid till: 30 Apr', t3: 'RBRAIL', colour: 'lightgreen', t4: 'Train', card: 'RBRAIL1' },
  { id: 4, t1: 'Get Rs 80 offer on train tickets', t2: 'Valid till: 30 Apr', t3: 'SUPERB60', colour: 'lightblue', t4: 'Train', card: 'SUPER60' },
  { id: 5, t1: 'Zero Convenience FEE', t2: 'Valid till: 30 Apr', t3: 'NOFEE', colour: 'lightpink', t4: 'Train', card: 'NOFEE' }
];

const HotelData = [
  { id: 9, t1: 'Flat 15% Instant off', t2: 'Valid till: 30 Apr', t3: 'REDSTAYS', colour: 'lightblue', t4: 'Hotel', card: 'REDSTAYS' },
  { id: 10, t1: '12% off in select cities', t2: 'Valid till: 30 Apr', t3: 'PILGRIMPASS', colour: 'lavender', t4: 'Hotel', card: 'PILIGRIMPASS' }
];

const categories = ['Bus', 'Train', 'Hotel', 'All'];
const places = [{ p1: 'Recent Searcches', p2: 'C Shivaji Mah T', p3: 'CSTM', p4: 'Mumbai' },
{ p1: 'Popular City & stations', p2: 'Pune Jn', p3: 'PUNE', p4: 'Pimpri Chinchwad' },
{ p1: '', p2: 'Mumbai Central', p3: 'MMCT', p4: 'Mumbai' },
{ p1: '', p2: 'C Shivaji Mah T', p3: 'CSTM', p4: 'Mumbai' },
{ p1: '', p2: 'New Delhi', p3: 'NDLS', p4: 'Delhi' },
{ p1: '', p2: 'Delhi', p3: 'DLI', p4: 'Delhi' },
]

export default function home1({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [showFirstText, setShowFirstText] = useState(true);
  const [Visible, setVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [visiblePortal, setVisiblePortal] = useState('');
  const showBookingForWomen = () => setVisiblePortal('BookingForWomen');
  const showRateNow = () => setVisiblePortal('RateNow');
  const showPortal = (type) => setVisiblePortal(type);
  const hidePortal = () => setVisiblePortal(null);
  const scaleAnim = useRef(new Animated.Value(1)).current;

const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );  const [selected, setSelected] = useState('');

  const [activeIndex, setActiveIndex] = useState(0);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get('window');
  const iconSize = width * 0.08; // 8% of screen width
  const fontSize = width * 0.03; // 3%
  const imageSize = width * 0.13;
  const fontSize2 = width * 0.035;
  const itemGap = width * 0.10;
  const horizontalMargin = width * 0.03;
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [fromPlace, setFromPlace] = useState(null);
  const [toPlace, setToPlace] = useState(null);
  const All = [...BusData, ...TrainData, ...HotelData];
  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios'); // For iOS, keep picker open; for Android, close after selection
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
  const currentPosts = useMemo(() => {
    if (activeIndex === 0) return BusData;
    if (activeIndex === 1) return TrainData;
    if (activeIndex === 2) return HotelData;
    if (activeIndex === 3) return All;
    return [];
  }, [activeIndex]);
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
  const handleSubmit = () => {
    if (!fromPlace || !toPlace) {
      Alert.alert('Missing Info', 'Please select From, To.');
      return;
    }

    navigation.navigate('SearchBuses', {
      from: fromPlace,
      to: toPlace,
    });
  };

  const Data1 = [
    { t1: 'Andhra Pradesh State Road Transport Corporation', t2: 'APSRTC', imgurl: 'https://tse1.mm.bing.net/th?id=OIP.mP5V7eWNVVmZruMBP4JlsAAAAA&pid=Api&P=0&h=220', t3: '1539 services including Garuda, Garuda Plus and more', t4: 'official booking partner of APSRTC', screen: 'AP' },
    { t1: 'Telangana State Road Transport Corporation', t2: 'TGSRTC', imgurl: 'https://tse2.mm.bing.net/th?id=OIP.RIZK8aRa1ofMWJKNL5sTkwHaHa&pid=Api&P=0&h=220', t3: '1480 services including Garuda Plus, Rahdhani and more', t4: 'official booking partner of TGSRTC', screen: 'TS' },
    { t1: 'Kerala State Road Transport Corporation', t2: 'KERALA RTC', imgurl: 'https://tse2.mm.bing.net/th?id=OIP.nmOpjIkjJz82qGlMT6OcuAAAAA&pid=Api&P=0&h=220', t3: '940 services including Swift, AC Multiaxle and more', t4: 'official booking partner of KERALA RTC', screen: 'KR' },
    { t1: 'Kadamba Transport Corporation Limited', t2: 'KTCL', imgurl: 'https://tse1.mm.bing.net/th?id=OIP.rLC4Og3GHKoBs78qie9dvgAAAA&pid=Api&P=0&h=220', t3: '60 services including Volvo Bus, AC & NON AC Bus and more', t4: 'official booking partner of KTCL', screen: 'KT' },
    { t1: 'Rajasthan State Road Transport Corporation', t2: 'RSRTC', imgurl: 'https://tse1.mm.bing.net/th?id=OIP.L-A2f4coSV1iNu-h16yAWgAAAA&pid=Api&P=0&h=220', t3: '6000 services including Deluxe, Ordinary and more', t4: 'official booking partner of RSRTC', screen: 'RS' },
    { t1: 'South Bengal State Transport Corporation', t2: 'SBSTC', imgurl: 'https://tse2.mm.bing.net/th?id=OIP.VNzx4E0e0Sq_GWZ2Uy_6vAAAAA&pid=Api&P=0&h=220', t3: '480 services including Volvo Bus, AC & NON AC Bus and more', t4: 'official booking partner of SBSTC', screen: 'SB' },
    { t1: 'Himachal Road Transport Corporation', t2: 'HRTC', imgurl: 'https://tse4.mm.bing.net/th?id=OIP.CB0yrBuX6ssg33MsD1jl5wHaHa&pid=Api&P=0&h=220', t3: '480 services including Himgaurav, Himmani and more', t4: 'official booking partner of HRTC', screen: 'HR' },
  ];
  const Data2 = [{ _id: 1, text1: 'Kolkata', text2: 'From ₹400', color: 'lightblue', t3: 'Most booked' },
  { _id: 2, text1: 'Visakhapatnam', text2: 'From ₹490', color: 'lightgreen', t3: '175+ Buses' },
  { _id: 3, text1: 'Hyderabad', text2: "From ₹900", color: 'lightpink', t3: 'Most booked' },
  { _id: 4, text1: 'Jamshedpur', text2: 'From ₹650', color: 'lightblue', t3: '34+ buses' },
  { _id: 5, text1: 'Durgapur', text2: 'From ₹682', color: 'lightyellow', t3: 'Most booked' }
  ];

  const Data5 = [{ id: 1, t1: 'Free Cancellation', t2: 'Get 100% on Cancellation', t3: 'Know more ->', color: 'brown', t1color: 'white', t2color: 'grey', t3color: 'brown', img: 'https://tse1.mm.bing.net/th?id=OIP.4ZDtEvqhMDgIq5XLZv4D0AHaHa&pid=Api&P=0&h=220', card: 'Flexi' },
  { id: 2, t1: 'FlexiTicket', t2: 'Get amazing benefits on Date change & Cancellation', t3: 'Know more ->', t1color: 'black', t2color: 'grey', t3color: 'white', img: 'https://tse4.mm.bing.net/th?id=OIP.4CyzB5fl8AqlGRHIRQkpNAHaDt&pid=Api&P=0&h=220', card: 'Flex2' },
  { id: 3, t1: 'Introducing Bus timetable', t2: 'Get local bus timings between cities in your state', t3: 'Know more ->', color: 'lightblue', t1color: 'black', t2color: 'lightblue', t3color: 'lightblue', img: 'https://tse3.mm.bing.net/th?id=OIP.NHxix1d66vWLFUxP1CaXlAHaFa&pid=Api&P=0&h=220', card: 'Flexi4' },
  { id: 4, t1: 'Assurance Program', t2: 'Insure your tripagainst cancllations and accident!', t3: 'Know more ->', color: 'orange', t1color: 'red', t2color: 'black', t3color: 'red', img: 'https://tse4.mm.bing.net/th?id=OIP.Oeb5S-qnoZOY6EpFxIsuogHaHa&pid=Api&P=0&h=220', card: 'Flexi3' },
  { id: 5, t1: 'Refer & Earn!', t2: 'Exiting rewards are only a tap away!', t3: 'Know more ->', color: 'lavender', t1color: 'purple', t2color: 'black', t3color: 'purple', img: 'https://tse3.mm.bing.net/th?id=OIP.9LLHLQtbasAFerxvrTKkDQHaEK&pid=Api&P=0&h=220', card: 'Flexi5' },
  { id: 6, t1: 'Primo', t2: 'Rising Stars on redBus', t3: 'Know more ->', color: 'purple', t1color: 'white', t2color: 'grey', t3color: 'beige', img: 'https://tse4.mm.bing.net/th?id=OIP.N8LRHZOKdj1Ca4N0ubqXyQHaHa&pid=Api&P=0&h=220', card: 'Flexi6' },
  { id: 7, t1: 'Lightning Fast Refund', t2: 'Get Instant refund for your payments', t3: 'know more ->', color: 'lightgreen', t1color: 'green', t2color: 'black', t3color: 'lightgreen', img: 'https://tse4.mm.bing.net/th?id=OIP.v5v7RZA9-OE0FzAzC5yBJwHaE7&pid=Api&P=0&h=220', card: 'Flexi7' }
  ];

  const renderItem5 = ({ item }) => {
    return (
      <View style={{ margin: 10, flex: 1 }}>
        <Card onPress={() => navigation.navigate(item.card)} style={{ height: 200, width: 250, backgroundColor: item.color, borderRadius: 15, shadowColor: 'white' }}>
          <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 20, color: item.t1color, marginBottom: 5 }}>{item.t1}</Text>
              <Text style={{ fontSize: 16, color: item.t2color }}>{item.t2}</Text>
            </View>
            <Image source={{ uri: item.img }} style={{ width: 90, height: 90, resizeMode: 'contain' }} />
          </View>
          <TouchableOpacity style={{ width: '60%', borderRadius: 30, }}>
            <Text style={{ fontSize: 20, color: 'black', paddingLeft: 20 }}>{item.t3}</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  };

  const renderItem4 = ({ item }) => (
    <View style={{ flex: 1, paddingVertical: 10, alignItems: 'center' }}>
      <Card onPress={() => navigation.navigate(item.card)} style={{ backgroundColor: item.colour, marginHorizontal: 10, width: 320, height: 250, borderRadius: 15, overflow: 'hidden', shadowColor: 'white' }}>
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
    </View>
  );
  const renderItem2 = ({ item }) => {
    return (
      <View style={{ margin: 10, alignItems: 'center', justifyContent: 'center' }}>
        <Card
          onPress={() => showPortal('calender', item)}
          style={{
            height: 160,
            width: 180,
            borderColor: 'lightgrey',
            borderWidth: 1,
            backgroundColor: item.color,
            borderRadius: 25,
            shadowColor: 'white',
            elevation: 0, shadowColor: 'transparent',
          }}
        >
          <View style={{ height: 130, backgroundColor: 'white', borderRadius: 25, justifyContent: 'center', elevation: 0, shadowColor: 'transparent' }}>
            <Card.Content style={{ alignItems: 'center' }}>
              <Text style={{ textAlign: 'center', fontSize: 23, color: 'black' }}>{item.text1}</Text>
              <Text style={{ textAlign: 'center', fontSize: 20, color: 'black' }}>{item.text2}</Text>
            </Card.Content>
          </View>
          <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', top: 5 }}>{item.t3}</Text>
        </Card>
      </View>
    );
  };

  const renderItem1 = ({ item }) => {
    return (
      <Card onPress={() => navigation.navigate(item.screen)} style={{ margin: 10, height: 230, width: 250, backgroundColor: 'white', borderRadius: 20, shadowColor: 'white', borderColor: 'lightpink', borderWidth: 7 }}>
        <Card.Content>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Image source={{ uri: item.imgurl }} style={{ height: 50, width: 50, borderRadius: 25 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.t2}</Text>
          </View>
          <Text style={{ fontSize: 14, paddingLeft: 60, bottom: 20 }}>{item.t1}</Text>
          <View style={{ borderTopWidth: 1, borderColor: 'lightgray', }}>
            <Text style={{ fontSize: 12, marginTop: 5 }}>{item.t3}</Text>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgrey', width: 200, height: 25, marginTop: 10 }}>
              <Text style={{ fontSize: 10, textAlign: 'center' }}>{item.t4}</Text>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
    );
  };

  const Data7 = [{ id: 1, t1: 'Exclusive Deals for', t2: 'women', img: require('../Images/deals.png') },
  { id: 2, t1: 'Number of women', t2: 'travelling along', img: require('../Images/travel.png') },
  { id: 3, t1: 'Priority Women', t2: 'helpline available', img: require('../Images/helpline.png') },
  { id: 4, t1: 'Buses Preferred by', t2: 'women', img: require('../Images/women.png') }
  ];
  const places = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad',
    'Chennai', 'Kolkata', 'Pune', 'Jaipur', 'Lucknow',
    'Kanpur', 'Nagpur', 'Visakhapatnam', 'Bhopal', 'Patna',
    'Vadodara', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad',
    'Meerut', 'Rajkot', 'Varanasi', 'Srinagar', 'Amritsar',
    'Coimbatore', 'Madurai', 'Thiruvananthapuram', 'Mysuru', 'Jodhpur'
  ];
  const renderItem7 = ({ item }) => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Card style={{ height: 170, width: 180, borderRadius: 25, backgroundColor: '#e6a8d7', marginTop: 20, margin: 10, alignItems: 'center', justifyContent: 'center', shadowColor: 'white' }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={item.img} style={{ height: 70, width: 70 }}></Image>
          </View>
          <Card.Content style={{ top: 20 }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.t1}</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.t2}</Text>
          </Card.Content>
        </Card>
      </View>
    );
  }
  useEffect(() => {
    const cycleText = () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setShowFirstText((prev) => !prev);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    };
    const interval = setInterval(cycleText, 3000);
    return () => clearInterval(interval);
  }, []);
  const [rating, setRating] = useState(0);

  const [status, setStatus] = React.useState('checked');
  const [selectedcity, setSelectedcity] = useState(null);
  const onButtonToggle = () => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };
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

  return (
    <PaperProvider>
      <View style={{ flex: 1, backgroundColor: 'white', }}>
        <View style={{}}>
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

        </View>
        <ScrollView contentContainerStyle={{ paddingBottom: 100, }}>
          <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Bus Tickets</Text>
            <Animated.Text style={{ fontSize: 20, opacity: fadeAnim }}>
              {showFirstText ? 'Buses Preferred by women' : 'Exclusive Deals for women'}
            </Animated.Text>
          </View>

          <View style={{
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 10,
            margin: 20,
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
                {places.map((city, index) => (
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
      {visiblePortal === 'calender' && (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: 'center',
            paddingVertical: 20,
          }}
        >
          <Text style={{ fontSize: 16, marginBottom: 10 }}>🗓️ Select a Date</Text>

          <Calendar
            // Always open on today’s month  
            current={new Date().toISOString().split('T')[0]}
            // Mark whichever date is in state  
            markedDates={{
              [selectedDate]: {
                selected: true,
                marked: true,
                selectedColor: 'red',
              },
            }}
            // When user taps a day, update state  
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
            }}
            style={{ width: 350, height: 350 }}
          />

          <TouchableOpacity
            onPress={() => {
              hidePortal();
              // if you need to use the selected date elsewhere, lift it up via a callback here
            }}
            style={{
              backgroundColor: 'red',
              padding: 12,
              borderRadius: 8,
              marginTop: 20,
              width: '90%',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
              Close Calendar
            </Text>
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


          <View style={{ borderColor: 'grey', borderWidth: 1, width: '90%', padding: 10, left: 15, borderRadius: 10, backgroundColor: 'white', borderWidth: 1 }}>
            <View style={{ flexDirection: 'row', gap: 15 }}>
              <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.X4T96eHaJLk4EKjhWN5RRgHaHa&pid=Api&P=0&h=220' }} style={{ height: 50, width: 50, }} />
              <Text style={{ fontSize: 20 }}>Booking For Women</Text>
              <ToggleButton
                icon={status === 'checked' ? 'toggle-switch' : 'toggle-switch-off-outline'}
                value="toggle"
                status={status}
                onPress={onButtonToggle} style={{ backgroundColor: 'white' }}
                iconColor="red" size={45}
              />
            </View>
            <TouchableOpacity onPress={showBookingForWomen}>
              <Text style={{ color: 'blue', textDecorationLine: 'underline', marginLeft: 65, fontSize: 15, bottom: 10 }}>Know more</Text>
            </TouchableOpacity>
          </View>
          <Portal>
            {visiblePortal == 'BookingForWomen' && (
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  borderRadius: 30,
                  width: '100%',
                  backgroundColor: 'white',
                  margin: 2,
                }}
              >
                <ScrollView>
                  <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Booking for Women</Text>
                      <Text style={{ fontSize: 20, textAlign: 'center' }}>Providing helpful details to smartly choose</Text>
                      <Text style={{ fontSize: 20, textAlign: 'center' }}>bus travel for women</Text>
                    </View>
                  </View>

                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingHorizontal: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 30,
                    }}
                  >
                    <FlatList
                      data={Data7}
                      renderItem={renderItem7}
                      keyExtractor={(item) => item.id}
                      numColumns={2}
                    />
                    <Image
                      source={require('../Images/img1.jpg')}
                      style={{ height: 300, width: 300, borderRadius: 20 }}
                    />
                    <Image
                      source={require('../Images/img2.jpg')}
                      style={{ height: 300, width: 300, borderRadius: 20 }}
                    />
                    <Image
                      source={require('../Images/img3.jpg')}
                      style={{ height: 300, width: 300, borderRadius: 20 }}
                    />
                  </ScrollView>

                  <View style={{ padding: 10 }}>
                    <TouchableOpacity onPress={hidePortal}
                      style={{
                        backgroundColor: 'red',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 10,
                        width: '100%',
                        borderRadius: 30,
                        marginTop: 20,
                      }}
                    >
                      <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>
                        Yes, booking for women
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={hidePortal}
                      style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 10,
                        width: '100%',
                        borderRadius: 30,
                        marginTop: 20,
                      }}
                    >
                      <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>
                        Not Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            )}
          </Portal>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              backgroundColor: '#d32f2f',
              marginTop: 30,
              marginHorizontal: 15,
              alignItems: 'center',
              borderRadius: 30,
              paddingVertical: 15,
            }}
          >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Search</Text>
          </TouchableOpacity>



          <View style={{ marginVertical: 20, paddingLeft: 20 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Top Destinations</Text>
            <Text style={{ fontSize: 15, }}>From Bhuvaneswar</Text>
          </View>
          <FlatList data={Data2} renderItem={renderItem2} keyExtractor={(item) => item._id} horizontal
            showsHorizontalScrollIndicator={false} />

          <Text style={{ fontSize: 25, fontWeight: 'bold', marginHorizontal: 20, marginTop: 20 }}>Government Buses</Text>
          <FlatList
            data={Data1}
            renderItem={renderItem1}
            keyExtractor={(item) => item.t1}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <View style={{ flexDirection: 'row', gap: 10, marginTop: 20, margin: 10 }}>
            <Image source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.-_5dZIcnKkltZT5c1AsYlQHaHa&pid=Api&P=0&h=220' }} style={{ height: 50, width: 50, borderRadius: 30, }}></Image>
            <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>Book trains on redBus</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', gap: 20, marginTop: 10 }}>
              <Card style={{ height: 280, width: 330, backgroundColor: 'white', shadowColor: 'lightgrey', borderColor: 'lightgrey', borderWidth: 0.5 }}>
                <Card.Content style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                  <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>Get ₹80 off using code RBRAIL</Text>

                  <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("trainbooking")} style={{ borderColor: 'pink', borderWidth: 1, width: 150, backgroundColor: 'white', alignItems: 'center', borderRadius: 10, paddingVertical: 10 }}>
                      <Text style={{ fontSize: 15, top: 10 }}>May</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("trainbooking")} style={{ borderColor: 'lightblue', borderWidth: 1, width: 150, backgroundColor: 'white', alignItems: 'center', borderRadius: 10, paddingVertical: 10 }}>
                      <Text style={{ fontSize: 15 }}>Jun</Text>
                      <Text style={{ fontSize: 15 }}>Bakrid</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity onPress={() => navigation.navigate("trainbooking")} style={{ borderColor: 'pink', borderWidth: 1, width: 300, backgroundColor: 'lightblue', borderRadius: 30, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                      <IconButton icon="bus" size={25} iconColor="black" />
                      <Text style={{ fontSize: 20, color: 'black' }}>Book Trains Now</Text>
                    </View>
                  </TouchableOpacity>

                  <Text style={{ textAlign: 'center', fontSize: 21, marginTop: 20 }}>Authorized IRCTC Partner</Text>
                </Card.Content>
              </Card>

              <Card style={{ height: 280, width: 330, backgroundColor: 'white' }}>
                <Card.Content>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>Get available train seat for WL PNR</Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'pink', borderRadius: 10, backgroundColor: 'white', marginTop: 20, paddingHorizontal: 10, width: '100%', height: 50, }}>
                    <TextInput placeholder='Train PNR number' placeholderTextColor={'grey'} style={{ flex: 1, fontSize: 10, color: 'black', }} />
                    <TouchableOpacity style={{ marginLeft: 10, backgroundColor: 'grey', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, }}>
                      <Text style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>Check</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                    <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.Jae0oyaipEBcwvpjMyYOpwHaHe&pid=Api&P=0&h=220' }} style={{ height: 50, width: 50, top: 20 }}></Image>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', top: 10 }}>Live Whatsapp updates</Text>
                  </View>
                  <Text style={{ color: 'blue', fontSize: 15, left: 65 }}>See how it works</Text>
                </Card.Content>
              </Card>
            </View>
          </ScrollView>
          <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', marginTop: 20, margin: 20 }}>Rate Us</Text>
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Card style={{ height: 200, width: '100%', backgroundColor: 'white', shadowColor: 'white', borderColor: 'lightgrey', borderWidth: 0.5 }}>
              <Card.Content>
                <View style={{ flexDirection: 'row', gap: 15 }}>
                  <Image source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.MSGbTXwt6MfYaWFlxJJCXwHaEK&pid=Api&P=0&h=220' }} style={{ height: 100, width: '30%' }}></Image>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Enjoying redBus?</Text>
                    <Text style={{ fontSize: 17 }}>Share your experience with us and help spread the word!</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={showRateNow} style={{ backgroundColor: "red", alignItems: 'center', justifyContent: 'center', width: '95%', borderRadius: 20, paddingVertical: 10, marginTop: 20 }}>
                  <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Rate Now</Text>
                </TouchableOpacity>
                <Portal>
                  {visiblePortal == 'RateNow' && (
                    <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'white', width: '100%', height: 400, borderRadius: 20 }}>
                      <View style={{ flexDirection: 'row', gap: 25 }}>
                        <Text style={{ fontSize: 20, marginTop: 20, margin: 10 }}>How many stars will u give ?</Text>
                        <IconButton
                          onPress={hidePortal}
                          icon="close"
                          size={30}
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
                </Portal>
              </Card.Content>
            </Card>
          </View>
          <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', marginTop: 20, margin: 20 }}>What's New</Text>
          <FlatList data={Data5} renderItem={renderItem5} keyExtractor={(item) => item.id} horizontal={true}></FlatList>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, margin: 10 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Offers</Text>
            <TouchableOpacity onPress={() => navigation.navigate("offers")} >
              <Text style={{ fontSize: 20, textDecorationLine: 'underline', color: 'blue', fontWeight: 'bold' }}>View all</Text></TouchableOpacity>
          </View>
          <Text style={{ fontSize: 15, margin: 10 }}>Get best deals with great offers</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveIndex(index)}
                  style={{
                    backgroundColor: activeIndex === index ? '#00363a' : 'white',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'gray',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    marginHorizontal: 5,
                  }}
                >
                  <Text style={{ color: activeIndex === index ? 'white' : 'black', fontWeight: 'bold' }}>{category}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <FlatList
            data={currentPosts}
            renderItem={renderItem4}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10 }}
          />
          <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', marginTop: 20, margin: 20, alignItems: 'center', justifyContent: 'center' }}>Exclusive Partner</Text>
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
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    gap: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
