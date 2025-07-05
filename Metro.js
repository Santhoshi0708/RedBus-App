import React, { useState, useRef } from 'react';
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  Modal,
  FlatList,
  TextInput,
  Alert
} from 'react-native';
import { IconButton, Menu, PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';

const countries = [
  { label: 'Delhi', value: 'New', imgurl: 'https://tse1.mm.bing.net/th?id=OIP.RI5WiOiv2iRCl-1lz3awJAHaHu&pid=Api&P=0&h=220' },
  { label: 'Chennai', value: 'Get 20% off', imgurl: 'https://tse1.mm.bing.net/th?id=OIP.5w0nis15p9OstayhIFMg5wHaHa&pid=Api&P=0&h=220' },
  { label: 'Kochi', value: 'Get 10% off', imgurl: 'https://tse1.mm.bing.net/th?id=OIP.YuoWW7fPyKUMHnPwCSBn0AHaHa&pid=Api&P=0&h=220' },
  { label: 'Mumbai Line 1', value: 'New', imgurl: 'https://tse1.mm.bing.net/th?id=OIP.zPWemni7xHoOjwy5M43MtAHaHa&pid=Api&P=0&h=220' },
  { label: 'Mumbai Line 2A', value: 'New', imgurl: 'https://tse4.mm.bing.net/th?id=OIP.zefSk0wVPRpzwJEJFrJw0QHaEc&pid=Api&P=0&h=220' },
  { label: 'Mumbai Line 3', value: 'Coming Soon', imgurl: 'https://tse2.mm.bing.net/th?id=OIP.VolJmOALGdEC_LXmKgOUowHaHa&pid=Api&P=0&h=220' },
  { label: 'Bengaluru', value: 'Popular', imgurl: 'https://tse2.mm.bing.net/th?id=OIP._ob-ZW1I2QMIiAEKa-Sx6gHaHa&pid=Api&P=0&h=220' },
];

const placeList = [
  { label: 'Hyderabad', value: 'Hyderabad' },
  { label: 'Vijayawada', value: 'Vijayawada' },
  { label: 'Chennai', value: 'Chennai' },
  { label: 'Bangalore', value: 'Bangalore' },
  { label: 'Mumbai', value: 'Mumbai' },
];

const App = ({ navigation }) => {
  const [selectedCity, setSelectedCity] = useState(countries[0]);
  const [way, setWay] = useState('oneway');
  const [count, setCount] = useState(0);
  const [visibleModal, setVisibleModal] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [toMenuVisible, setToMenuVisible] = useState(false);
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const { width } = Dimensions.get('window');
  const [fromPlace, setFromPlace] = useState(null);
  const [toPlace, setToPlace] = useState(null);
  const [selected, setSelected] = useState('');

  const iconSize = width * 0.08;
  const fontSize = width * 0.03;
  const imageSize = width * 0.13;
  const imageSize2 = width * 0.18;
  const itemGap = width * 0.10;
  const horizontalMargin = width * 0.03;

  const toggleWay = () => setWay(way === 'oneway' ? 'Round trip' : 'oneway');
  const decrease = () => { if (count > 0) setCount(count - 1); };
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
  
  // ✅ FIXED: Moved handleSubmit inside component
  const handleSubmit = () => {
    if (!fromPlace || !toPlace || count <= 0) {
      Alert.alert('Missing Info', 'Please select From, To, and at least 1 passenger.');
      return;
    }

    navigation.navigate('SearchTrains', {
      from: fromPlace,
      to: toPlace,
      passengers: count,
      city: selectedCity.label,
      tripType: way
    });
  };

  const renderCityItem = ({ item }) => (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderColor: '#ccc' }}
      onPress={() => {
        setSelectedCity(item);
        setVisibleModal(null);
      }}
    >
      <Image source={{ uri: item.imgurl }} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 15 }} />
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.label}</Text>
        <Text style={{ fontSize: 14, color: 'green' }}>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );


  return (
    <PaperProvider>
      <View style={{flex:1}}>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{
            flexDirection: 'row',
            gap: itemGap,
            paddingVertical: width * 0.025,
            marginHorizontal: horizontalMargin,
            paddingBottom: width * 0.06
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home1')} style={{ alignItems: 'center' }}>
              <Image source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.RHTrbYlwAkdAl9UN55qYjwAAAA&pid=Api&P=0&h=220' }} style={{ width: imageSize, height: imageSize, borderRadius: imageSize / 2 }} />
              <Text style={{ fontSize, marginTop: 5 }}>Bus Tickets</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('trainbooking')} style={{ alignItems: 'center' }}>
              <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.p_SLKTRNZbg46Kw-Texj0wHaHa&pid=Api&P=0&h=220' }} style={{ width: imageSize, height: imageSize }} />
              <Text style={{ fontSize, marginTop: 5 }}>Train Tickets</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Hotels')} style={{ alignItems: 'center' }}>
              <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.aFt3no9eziO4_o_BM4f4CAHaHa&pid=Api&P=0&h=220' }} style={{ width: imageSize, height: imageSize }} />
              <Text style={{ fontSize, marginTop: 5 }}>Hotels</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Metro')} style={{ alignItems: 'center' }}>
              <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.IZvrRhGWYdwsdy3M6W9i4QHaHd&pid=Api&P=0&h=220' }} style={{ width: imageSize, height: imageSize }} />
              <Text style={{ fontSize, marginTop: 5 }}>Metro</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Auto')} style={{ alignItems: 'center' }}>
              <Image source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.KKHigZsxs-5wgSFcdVFf0AHaHa&pid=Api&P=0&h=220' }} style={{ width: imageSize, height: imageSize }} />
              <Text style={{ fontSize, marginTop: 5 }}>Auto/Cab</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
       <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
          <View>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{selectedCity.label} Metro</Text>
            <Text style={{ fontSize: 20, color: 'green' }}>{selectedCity.value}</Text>
          </View>
          <Image source={{ uri: selectedCity.imgurl }} style={{ width: imageSize2, height: imageSize2, borderRadius: 10 }} />
        </View>

        <TouchableOpacity onPress={() => setVisibleModal('city')} style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>Change city</Text>
        </TouchableOpacity>

        {/* <View style={{ flexDirection: 'row', alignSelf: 'center',marginTop:10 }}>
          <TouchableOpacity
            onPress={toggleWay}
            style={{
              backgroundColor: way === "oneway" ? 'lightpink' : 'white',
              width: 150,
              borderTopLeftRadius: 25,
              padding:10,
              borderBottomLeftRadius: 25,
              borderWidth: 1,
              borderColor: 'gray',
              alignItems: 'center'
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Oneway</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleWay}
            style={{
              backgroundColor: way === "Round trip" ? 'lightpink' : 'white',
              width: 150,
              padding:10,
              borderTopRightRadius: 25,
              borderBottomRightRadius: 25,
              borderWidth: 1,
              borderColor: 'gray',
              alignItems: 'center'
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Round trip</Text>
          </TouchableOpacity>
        </View> */}

        <View style={{
          backgroundColor: 'white',borderRadius: 15, borderColor: 'lightgrey', borderWidth: 1,
          shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 5, margin: 20
        }}>
          <View style={{
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
                {placeList.map((city, index) => (
                  <Menu.Item key={index} title={city} onPress={() => {
                    setToCity(city);
                    setToMenuVisible(false);
                  }} />
                ))}
              </Menu>
            </View>
            </View>
          <View style={{ flexDirection: 'row',}}>
            <IconButton icon="account-outline" size={30} iconColor="black" />
            <View style={{ flex: 1 }}>
              <TouchableOpacity>
                <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }}>Passengers</Text>
                <Text style={{ fontSize: 12, color: 'grey', marginTop: 2 }}>Price/person</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',margin:5,
              borderWidth: 1, borderColor: 'black', borderRadius: 30, paddingHorizontal: 10,
              height: 35, backgroundColor: '#fff'
            }}>
              <TouchableOpacity onPress={decrease} style={{ paddingHorizontal: 10, borderRightWidth: 1, borderColor: 'grey' }}>
                {count === 0 ? <Icon name="delete" size={24} color="grey" /> : <Icon name="minus" size={24} color="orange" />}
              </TouchableOpacity>
              <Text style={{ color: 'black', fontSize: 18, marginHorizontal: 20 }}>{count}</Text>
              <TouchableOpacity onPress={() => setCount(count + 1)} style={{ paddingHorizontal: 10, borderLeftWidth: 1, borderColor: 'grey' }}>
                <Icon name="plus" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity  onPress={handleSubmit}style={{ backgroundColor: 'red', borderRadius: 30, paddingVertical: 10, margin: 20 }}>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>Search</Text>
        </TouchableOpacity>
      </ScrollView>
</ScrollView>
</View>
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
      <Modal visible={visibleModal === 'city'} animationType="slide">
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, backgroundColor: '#eee' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Select Metro City</Text>
            <TouchableOpacity onPress={() => setVisibleModal(null)}>
              <Icon name="close" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={countries}
            keyExtractor={(item) => item.label}
            renderItem={renderCityItem}
          />
        </View>
      </Modal>
    </PaperProvider>
  );
};

export default App;
