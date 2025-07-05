import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Text, View, Animated, TouchableOpacity, StyleSheet, ScrollView, FlatList, TextInput, Image, ImageBackground } from 'react-native';
import { IconButton, PaperProvider, Portal, Modal, Divider, Searchbar, Card, ToggleButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const BusData = [
  { id: 1, t1: 'Save up to Rs 250 on bus tickets', t2: 'Valid till: 30 Apr', t3: 'First', colour: 'lavender', t4: 'Bus' },
  { id: 2, t1: 'Save up to Rs 300 on bus tickets', t2: 'Valid till: 30', t3: 'Bus300', colour: 'lightpink', t4: 'Bus' },
  { id: 6, t1: 'Save up to Rs 50 on IntrCity SmartB...', t2: 'Valid till: 30 Apr', t3: 'INTRCITY', colour: 'lightblue', t4: 'Bus' },
  { id: 7, t1: 'Save up to Rs 50 on bus tickets', t2: 'Valid till: 30 Apr', t3: 'YOLORED', colour: 'lightblue', t4: 'Bus' },
  { id: 8, t1: 'Save 10% Discount on bus tickets', t2: 'Valid till: 30 Apr', t3: 'DREAMLINE10', colour: 'lavender', t4: 'Bus' }
];

const TrainData = [
  { id: 3, t1: 'Get Rs 80 off on train tickets', t2: 'Valid till: 30 Apr', t3: 'RBRAIL', colour: 'lightgreen', t4: 'Train' },
  { id: 4, t1: 'Get Rs 80 offer on train tickets', t2: 'Valid till: 30 Apr', t3: 'SUPERB60', colour: 'lightblue', t4: 'Train' },
  { id: 5, t1: 'Zero Convenience FEE', t2: 'Valid till: 30 Apr', t3: 'NOFEE', colour: 'lightpink', t4: 'Train' }
];

const HotelData = [
  { id: 9, t1: 'Flat 15% Instant off', t2: 'Valid till: 30 Apr', t3: 'REDSTAYS', colour: 'lightblue', t4: 'Hotel' },
  { id: 10, t1: '12% off in select cities', t2: 'Valid till: 30 Apr', t3: 'PILGRIMPASS', colour: 'lavender', t4: 'Hotel' }
];

const categories = ['Bus', 'Train', 'Hotel', 'All'];

export default function home1({navigation}) {
    const renderItem4 = ({ item }) => (
        <View style={{ flex: 1, paddingVertical: 10, alignItems: 'center' }}>
          <Card style={{ backgroundColor: item.colour, marginHorizontal: 10, width: 350, height: 250, borderRadius: 15, overflow: 'hidden' }}>
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
  const [modalVisible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [selected, setSelected] = useState('All');

  const [selected2, setSelected2] = useState('home');

  const [activeIndex, setActiveIndex] = useState(0);

  const All = [...BusData, ...TrainData, ...HotelData];

  const currentPosts = useMemo(() => {
    if (activeIndex === 0) return BusData;
    if (activeIndex === 1) return TrainData;
    if (activeIndex === 2) return HotelData;
    if (activeIndex === 3) return All;
    return [];
  }, [activeIndex]);

  return(
    <View style={{flex:1}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60, }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
                    <Icon name="arrow-left" size={25} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center', padding: 10 }}>View All</Text>
            </View>
    <View style={{ flexDirection: 'row', paddingHorizontal: 10,marginVertical:20 }}>
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
    
              <FlatList
                data={currentPosts}
                renderItem={renderItem4}
                keyExtractor={(item) => item.id.toString()}
                style={{ marginTop: 10 }}
              />
              </View>
  );}





















           
