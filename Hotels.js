import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Animated, TouchableOpacity, Dimensions, ScrollView, Image, FlatList } from 'react-native';
import { IconButton, PaperProvider, Card, Modal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const texts = [
  { symbol: 'map-marker-outline', text: 'Available in 2400+ cities' },
  { symbol: 'bed-outline', text: '30,000+ affordable stays' },
  { symbol: 'star', text: 'Verified reviews & ratings' },
  { symbol: 'percent', text: 'From 399 per night' },
];

const data = [
  { name: "OYO", color: 'red', t1: 'Starts from RS 399', t2: '550+ cities' },
  { name: "fab", color: 'navy', t1: 'Starts from RS 699', t2: '100+ cities' },
  { name: "treebo", color: 'purple', t1: 'Starts from RS 1199', t2: '100+ cities' },
  { name: "ginger", color: '#FC6A03', t1: 'Starts from RS 799', t2: '45+ cities' },
  { name: "bloom", color: '#efcc00', t1: 'Starts from RS 1799', t2: '15+ cities' },
  { name: "lords", color: '#F25278', t1: 'Starts from RS 1699', t2: '35+ cities' },
];
const place = [{ t1: 'Puri', t2: 'FROM RS 599 per night', t3: '350+ stays available', img: 'https://tse3.mm.bing.net/th?id=OIP.5ltmkUEc2H055iL6XT9zjAHaEK&pid=Api&P=0&h=220' },
{ t1: 'Deoghar', t2: 'From RS 599 per night', t3: '100+ stays available', img: 'https://tse4.mm.bing.net/th?id=OIP.J9MPbPE8cm77iB75TfR2yQHaFj&pid=Api&P=0&h=220' },
{ t1: 'Tarapith', t2: 'From RS 499 per night', t3: '40+ stays available', img: 'https://tse1.mm.bing.net/th?id=OIP.631d9JCGLO7E8tJV68UK0gHaFl&pid=Api&P=0&h=220' },
{ t1: 'Bodhgaya', t2: 'From RS 499 per night', t3: '350+ stays available', img: 'https://tse1.mm.bing.net/th?id=OIP.AfB9UgYmpvQo60StnboXHgHaE1&pid=Api&P=0&h=220' },
];
const HotelData = [
  { id: 9, t1: 'Flat 15% Instant off', t2: 'Valid till: 30 Apr', t3: 'REDSTAYS', colour: 'lightpink', t4: 'Hotel', },
  { id: 10, t1: '12% off in select cities', t2: 'Valid till: 30 Apr', t3: 'PILGRIMPASS', colour: 'lightblue', t4: 'Hotel', }
];
const App = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [visible, setVisible] = useState(false);
  const { width } = Dimensions.get('window');
  const fontSize = width * 0.03; // 3%
  const imageSize = width * 0.13;
  const itemGap = width * 0.10;
  const horizontalMargin = width * 0.03;
  const today = new Date();  // current date
  const nextDay = new Date(today);
  const [modalType, setmodalType] = useState('Access');
  nextDay.setDate(today.getDate() + 1);
  const [date2, setDate2] = useState(nextDay);
  const [checkInDate, setCheckInDate] = useState(nextDay);
  const [checkOutDate, setCheckOutDate] = useState(new Date(nextDay.getTime() + 24 * 60 * 60 * 1000)); // day after check-in
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);



  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios'); // For iOS, keep picker open; for Android, close after selection
    if (selectedDate) {
      setDate(selectedDate);
    }
  };


  const onChangeCheckOut = (event, selectedDate) => {
    setShowCheckOut(Platform.OS === 'ios');
    if (selectedDate) {
      setCheckOutDate(selectedDate);
    }
  };
  const onChangeCheckIn = (event, selectedDate) => {
    setShowCheckIn(Platform.OS === 'ios');
    if (selectedDate) {
      setCheckInDate(selectedDate);
      // Automatically adjust check-out date if check-in >= check-out
      if (selectedDate >= checkOutDate) {
        const next = new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000);
        setCheckOutDate(next);
      }
    }
  };
  const openAccessModal = () => {
    setmodalType('Access');
    setVisible(true);
  };

  const hideAccessModal = () => {
    setmodalType(false);
    setVisible(false);
  };
  const openModal = () => {
    setmodalType('Search')
    setVisible(true);
  };

  const hideModal = () => {
    setmodalType(false);
    setVisible(false);
  };

  const renderItem = ({ item }) => (
    <Card onPress={openModal} style={{ height: 150, width: 160, borderRadius: 20, backgroundColor: item.color, padding: 10, margin: 10, shadowColor: 'white' }}>
      <View style={{ backgroundColor: 'white', width: 100, height: 40 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: item.color, textAlign: 'center' }}>{item.name}</Text>
      </View>
      <Text style={{ fontSize: 14, color: 'white', marginTop: 30, fontWeight: 'bold' }}>{item.t1}</Text>
      <Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold' }}>{item.t2}</Text>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 30 }}>
        <IconButton icon="arrow-right-thin" size={30} iconColor="white" />
      </View>
    </Card>
  );


  const renderItem4 = ({ item }) => (
    <View style={{ flex: 1, paddingVertical: 10, alignItems: 'center' }}>
      <Card onPress={() => navigation.navigate(item.t3)} style={{ backgroundColor: item.colour, marginHorizontal: 10, width: 320, height: 250, borderRadius: 15, overflow: 'hidden', shadowColor: 'yellow' }}>
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
  useEffect(() => {
    const changeText = () => {
      Animated.timing(fadeAnim, {
        toValue: textVisible ? 1 : 0,
        duration: 500,
        useNativeDriver: true,
      }).start();

      setTextVisible(!textVisible);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
      }, 3000);
    };

    const interval = setInterval(changeText, 1000);

    return () => clearInterval(interval);
  }, [fadeAnim, textVisible]);

  return (
    <PaperProvider>
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

        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <View style={{ paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Budget rooms</Text>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>in top locations</Text>
              <Text style={{ fontSize: 16 }}>Hotels, Guest houses, & Lodges</Text>
            </View>
            <Image source={require('../Images/hotel.jpg')} style={{ height: 120, width: 100 }} />
          </View>

          <View style={{ borderWidth: 1, borderColor: 'purple', borderRadius: 20, alignItems: 'center', margin: 15, paddingVertical: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'purple' }}>
              Up to 45% off <Text style={{ fontSize: 16, color: 'black' }}>on hotel bookings</Text>
            </Text>
          </View>

          <View style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 15, margin: 15 }}>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: 'grey' }}>
                <IconButton icon="magnify" size={25} color="black" />
                <View>
                  <Text style={{ fontSize: 12, color: 'grey', marginTop: 10 }}>City, area or hotel name</Text>
                  <Text style={{ fontSize: 16, color: 'black' }}>Near me</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: 'grey' }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <IconButton icon="calendar" size={16} color="black" />
                  <View>
                    <Text style={{ fontSize: 12, color: 'grey', marginTop: 10 }}>Check-in</Text>
                    <Text style={{ marginBottom: 10 }}>
                      {date.toDateString()}
                    </Text>
                    {show && (
                      <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChange}
                        minimumDate={today}
                      />
                    )}
                  </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, borderLeftWidth: 1, borderColor: 'grey', paddingLeft: 10 }}>
                  <View>
                    <Text style={{ fontSize: 12, color: 'grey', marginTop: 10 }}>Check-out</Text>
                    <Text style={{ marginBottom: 10 }}>
                      {date.toDateString()}
                    </Text>

                    {show && (
                      <DateTimePicker
                        value={date2}
                        mode="date"
                        display="default"
                        onChange={onChange}
                        minimumDate={nextDay}
                      />
                    )}                     </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <IconButton icon="account" size={25} color="black" />
                <View>
                  <Text style={{ fontSize: 12, color: 'grey', marginTop: 10 }}>No of rooms & guests</Text>
                  <Text style={{ fontSize: 16, color: 'black' }}>1 room 2 Adults 0 children</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('HotelNear')} style={{ marginTop: 10, backgroundColor: 'red', paddingVertical: 15, margin: 15, borderRadius: 30, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Search</Text>
          </TouchableOpacity>

          <View style={{ alignItems: 'center', marginVertical: 10 }}>
            <Animated.View style={{ flexDirection: 'row', alignItems: 'center', opacity: fadeAnim }}>
              <Icon name={texts[index].symbol} color={'grey'} size={20} style={{ marginRight: 5 }} />
              <Text style={{ fontSize: 16 }}>{texts[index].text}</Text>
            </Animated.View>
          </View>
          {visible && modalType === 'Access' && (
            <View style={{ width: '90%', backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgrey', alignItems: 'center', justifyContent: 'center', margin: 20, height: 280, }}>
              <Icon name="map-marker" size={40} color="blue" style={{ marginBottom: 20 }} />
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: 20, }}>
                Allow redBus to access this device's location?
              </Text>
              <TouchableOpacity onPress={() => { hideAccessModal(); navigation.navigate('HotelNear') }} style={{ marginVertical: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'blue', textAlign: 'center' }}>While using the app</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { hideAccessModal(); navigation.navigate('HotelNear') }} style={{ marginVertical: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'blue', textAlign: 'center' }}>Only this time</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={hideAccessModal} style={{ marginVertical: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'blue', textAlign: 'center' }}>Don't allow</Text>
              </TouchableOpacity>
            </View>
          )}

          <Text style={{ fontSize: 22, paddingHorizontal: 20, marginTop: 20, fontWeight: 'bold' }}>The Budget Collection</Text>
          <Text style={{ fontSize: 14, paddingHorizontal: 20 }}>Rooms cheaper than your bus tickets, nearby</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
            <TouchableOpacity onPress={openAccessModal}>
              <Image source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.hDSTY9-xEa8E65nI5f_J7gHaE8&pid=Api&P=0&h=220' }} style={{ height: 150, width: 110, borderRadius: 20, borderWidth: 2, borderColor: 'purple' }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={openAccessModal}>
              <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.lzxTmkT_jAMrNnvuscBiEgHaE8&pid=Api&P=0&h=220' }} style={{ height: 150, width: 110, borderRadius: 20, borderWidth: 2, borderColor: 'purple' }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openAccessModal}>
              <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.3_2oviPJBbN5UBbBGTuf9QHaE6&pid=Api&P=0&h=220' }} style={{ height: 150, width: 110, borderRadius: 20, borderWidth: 2, borderColor: 'purple' }} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
            <Text style={{ fontSize: 16, color: 'purple' }}>under 999</Text>
            <Text style={{ fontSize: 16, color: 'purple' }}>under 899</Text>
            <Text style={{ fontSize: 16, color: 'purple' }}>under 799</Text>
          </View>
          <Text style={{ fontSize: 22, paddingHorizontal: 20, marginTop: 20, fontWeight: 'bold' }}>Top Hotel Brands</Text>
          <Text style={{ fontSize: 14, paddingHorizontal: 20 }}>Trusted stays across India</Text>

          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.t1}
            numColumns={2}
            contentContainerStyle={{ justifyContent: 'space-around' }}
          />
          <Text style={{ fontSize: 22, paddingHorizontal: 20, marginTop: 20, fontWeight: 'bold' }}>Value Stays</Text>
          <Text style={{ fontSize: 14, paddingHorizontal: 20, marginBottom: 10 }}>For travellers who love to save</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: 10, margin: 10 }}>
            <Card onPress={openModal} style={{ height: 250, width: 150, borderRadius: 10, overflow: 'hidden' }}>
              <Card.Cover source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.cytU_C3m4cQkDR6t4j24vgHaE2&pid=Api&P=0&h=220' }} style={{ height: 250, width: 150 }} />
              <View style={{ position: 'absolute', top: 10, left: 10 }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Hotels</Text>
                <Text style={{ fontSize: 12, color: 'white' }}>Affordable & comfortable rooms</Text>
              </View>
              <View style={{ position: 'absolute', bottom: 10, alignSelf: 'center', backgroundColor: 'red', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 4 }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>upto 35% off</Text>
              </View>
            </Card>

            <View style={{ justifyContent: 'space-between', }}>
              <Card onPress={openModal} style={{ height: 120, width: 180, borderRadius: 10, overflow: 'hidden', }}>
                <Card.Cover source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.MA2KvFKrCpSr7C-B6JPoRwHaE8&pid=Api&P=0&h=220' }} style={{ height: 120, width: 180 }} />
                <View style={{ position: 'absolute', top: 8, left: 10 }}>
                  <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Homestays</Text>
                  <Text style={{ fontSize: 12, color: 'white' }}>Perfect for group bookings</Text>
                </View>
                <View style={{ position: 'absolute', bottom: 10, left: 10, backgroundColor: 'red', borderRadius: 5, paddingHorizontal: 8, paddingVertical: 3 }}>
                  <Text style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>upto 35% off</Text>
                </View>
              </Card>

              <Card onPress={openModal} style={{ height: 120, width: 180, marginTop: 15, borderRadius: 10, overflow: 'hidden' }}>
                <Card.Cover source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.k6KF4ynCOUxcGnQJT0eBpAHaE8&pid=Api&P=0&h=220' }} style={{ height: 120, width: 180 }} />
                <View style={{ position: 'absolute', top: 8, left: 10 }}>
                  <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Hostels</Text>
                  <Text style={{ fontSize: 12, color: 'white' }}>Happy deals on dorm rooms</Text>
                </View>
                <View style={{ position: 'absolute', bottom: 10, left: 10, backgroundColor: 'red', borderRadius: 5, paddingHorizontal: 8, paddingVertical: 3 }}>
                  <Text style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>upto 35% off</Text>
                </View>
              </Card>
            </View>
          </View>



          <View style={{ backgroundColor: '#efcc00', height: 400, borderColor: 'violet', borderTopWidth: 3, borderBottomWidth: 3, borderStyle: 'dashed' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <View style={{ paddingHorizontal: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Only on redBus</Text>
                <Text style={{ fontSize: 20 }}>Exclusive offers for you</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('HotelOff')}>
                <Text style={{ fontSize: 20, textDecorationLine: 'underline', color: 'blue', fontWeight: 'bold' }}>View all</Text>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList data={HotelData} renderItem={renderItem4} keyExtractor={(item) => item.id} horizontal={true}></FlatList>
            </View>
          </View>
          <Text style={{ fontSize: 22, paddingHorizontal: 20, marginTop: 20, fontWeight: 'bold' }}>Pilgrimage Stays</Text>
          <Text style={{ fontSize: 14, paddingHorizontal: 20 }}>Hotel deals in holy destinations</Text>
          <FlatList
            data={place}
            horizontal
            renderItem={({ item }) => (
              <Card onPress={() => navigation.navigate('HotelNear')} style={{ height: 200, width: 180, margin: 10, borderRadius: 15, shadowColor: 'white' }}>
                <Card.Cover source={{ uri: item.img }} style={{ height: 200, width: 180, borderTopLeftRadius: 15, borderTopRightRadius: 15, position: 'absolute' }} />
                <Card.Content style={{}}>
                  <View style={{ backgroundColor: 'red', paddingHorizontal: 10, margin: 15, borderRadius: 5, }}>
                    <Text style={{ textAlign: 'center', fontSize: 12, color: 'white', fontWeight: 'bold', }}>Xtra 12% off</Text>
                  </View>
                  <View style={{ marginVertical: 80 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>{item.t1}</Text>
                    <Text style={{ fontSize: 12, color: 'white' }}>{item.t2}</Text>
                    <Text style={{ fontSize: 12, color: 'white' }}>{item.t3}</Text>
                  </View>
                </Card.Content>
              </Card>
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />        </ScrollView>
      </View>
      {visible && modalType === 'Search' && (
        <View style={{ borderWidth: 1, borderColor: 'lightgrey', height: 350, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Search</Text>
            <Icon name="close" size={24} color="black" onPress={hideModal} />
          </View>

          <View style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 15, margin: 15 }}>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: 'grey' }}>
                <IconButton icon="magnify" size={25} color="black" />
                <View>
                  <Text style={{ fontSize: 12, color: 'grey', marginTop: 10 }}>City, area or hotel name</Text>
                  <Text style={{ fontSize: 16, color: 'black' }}>Near me</Text>
                </View>
              </View>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: 'grey' }}>
              <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10 }}
                onPress={() => setShowCheckIn(true)}
                activeOpacity={0.7}
              >
                <IconButton icon="calendar" size={24} color="black" style={{ margin: 0 }} />
                <View style={{}}>
                  <Text style={{ fontSize: 12, color: 'grey' }}>Check-in</Text>
                  <Text style={{ fontSize: 12, color: 'black' }}>{checkInDate.toDateString()}</Text>
                </View>
              </TouchableOpacity>

              <View style={{ width: 1, backgroundColor: 'grey', marginVertical: 10 }} />

              <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}
                onPress={() => setShowCheckOut(true)}
                activeOpacity={0.7}
              >
                <IconButton icon="calendar" size={24} color="black" style={{ margin: 0 }} />
                <View style={{}}>
                  <Text style={{ fontSize: 12, color: 'grey' }}>Check-out</Text>
                  <Text style={{ fontSize: 12, color: 'black' }}>{checkOutDate.toDateString()}</Text>
                </View>
              </TouchableOpacity>
            </View>

            {showCheckIn && (
              <DateTimePicker
                value={checkInDate}
                mode="date"
                display="default"
                onChange={onChangeCheckIn}
                minimumDate={nextDay}
                maximumDate={new Date(2100, 11, 31)}
              />
            )}

            {showCheckOut && (
              <DateTimePicker
                value={checkOutDate}
                mode="date"
                display="default"
                onChange={onChangeCheckOut}
                minimumDate={new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000)}
                maximumDate={new Date(2100, 11, 31)}
              />
            )}

            <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center' }}>
              <IconButton icon="account" size={25} color="black" />
              <View>
                <Text style={{ fontSize: 12, color: 'grey', marginTop: 10 }}>No of rooms & guests</Text>
                <Text style={{ fontSize: 16, color: 'black' }}>1 room 2 Adults 0 children</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('HotelNear')}
            style={{ marginTop: 10, backgroundColor: 'red', paddingVertical: 15, margin: 15, borderRadius: 30, alignItems: 'center' }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Search</Text>
          </TouchableOpacity>
        </View>
      )}
    </PaperProvider>
  );
};

export default App;
