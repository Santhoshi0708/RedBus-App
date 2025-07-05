import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const places1 = [
  { p1: '06:00 AM - 07:40 AM', p2: '1 hr 40 mins -> 10 stops', p3: 'APSRTC', p4: 'Via Tangellamudi' },
  { p1: '06:50 AM - 09:30 AM', p2: '2 hrs -> 40 stops', p3: 'APSRTC', p4: 'Via Tangellamudi' },
  { p1: '05:15 AM - 06:25 AM', p2: '1 hr 10 mins -> 8 stops', p3: 'APSRTC', p4: 'Via Tangellamudi' },
  { p1: '06:30 AM - 08:15 AM', p2: '1 hr 45 mins -> 12 stops', p3: 'APSRTC', p4: 'Via Eluru' },
  { p1: '07:00 AM - 09:30 AM', p2: '2 hrs 30 mins -> 15 stops', p3: 'APSRTC', p4: 'Via Nidadavole' },
  { p1: '08:15 AM - 10:45 AM', p2: '2 hrs 30 mins -> 20 stops', p3: 'APSRTC', p4: 'Via Tanuku' },
  { p1: '09:00 AM - 11:15 AM', p2: '2 hrs 15 mins -> 18 stops', p3: 'APSRTC', p4: 'Via Bhimadole' },
  { p1: '10:30 AM - 12:00 PM', p2: '1 hr 30 mins -> 9 stops', p3: 'APSRTC', p4: 'Via Unguturu' },
];
const places2 = [
  { p1: '12:15 PM - 01:45 PM', p2: '1 hr 30 mins -> 10 stops', p3: 'APSRTC', p4: 'Via Gopalapuram' },
  { p1: '01:00 PM - 03:30 PM', p2: '2 hrs 30 mins -> 14 stops', p3: 'APSRTC', p4: 'Via Chagallu' },
  { p1: '02:45 PM - 04:15 PM', p2: '1 hr 30 mins -> 11 stops', p3: 'APSRTC', p4: 'Via Palakollu' },
  { p1: '03:15 PM - 05:45 PM', p2: '2 hrs 30 mins -> 16 stops', p3: 'APSRTC', p4: 'Via Kovvur' },
  { p1: '04:00 PM - 05:30 PM', p2: '1 hr 30 mins -> 8 stops', p3: 'APSRTC', p4: 'Via Tadepalligudem' },
];
const places3 = [
  { p1: '06:15 PM - 08:45 PM', p2: '2 hrs 30 mins -> 19 stops', p3: 'APSRTC', p4: 'Via Eluru' },
  { p1: '07:30 PM - 09:00 PM', p2: '1 hr 30 mins -> 11 stops', p3: 'APSRTC', p4: 'Via Kovvuru' },
  { p1: '08:00 PM - 10:00 PM', p2: '2 hrs -> 13 stops', p3: 'APSRTC', p4: 'Via Rajahmundry' },
  { p1: '09:15 PM - 11:45 PM', p2: '2 hrs 30 mins -> 17 stops', p3: 'APSRTC', p4: 'Via Polavaram' },
  { p1: '10:00 PM - 11:30 PM', p2: '1 hr 30 mins -> 10 stops', p3: 'APSRTC', p4: 'Via Nidadavole' },
];

const StationSearchScreen = ({ navigation }) => {
  const [tempFilter, setTempFilter] = useState('');
  const [sortVisible, setSortVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const sortOptions = ['Departure Time', 'Travel Duration', 'Bus Route'];

  const getFilteredPlaces = () => {
    if (selectedFilter === '6 AM - 12 PM') return places1;
    if (selectedFilter === '12 PM - 6 PM') return places2;
    if (selectedFilter === '6 PM - 12 AM') return places3;
    return places1;
  };
  const route = useRoute();
  const [fromText, setFrom] = useState(route.params?.from || '');
  const [toText, setTo] = useState(route.params?.to || '');
  const from = route.params?.from;
  const to = route.params?.to;
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 10 }}>
        <IconButton icon="arrow-left" size={30} iconColor="black" onPress={() => navigation.goBack()} />
        <View style={{ flex: 1, marginHorizontal: 5, paddingHorizontal: 10, marginTop: 20 }}>
          <TextInput style={{borderWidth:1,fontSize:18,paddingLeft:20}} placeholder="From Station"value={fromText} onChangeText={setFrom} />
          <TextInput style={{borderWidth:1,fontSize:18,paddingLeft:20,marginTop:15}} placeholder="To Station" value={toText} onChangeText={setTo} />
        </View>

      </View>
      <Text style={{ fontSize: 22, fontWeight: 'bold', margin: 15 }}>Buses from {fromText} to {toText}</Text>
      <View style={{ flexDirection: 'row', gap: 35, marginHorizontal: 15, marginBottom: 5 }}>
        <TouchableOpacity onPress={() => setSortVisible(true)} style={{ backgroundColor: 'lavender', paddingHorizontal: 20, paddingVertical: 8, flexDirection: 'row', alignItems: 'center', borderRadius: 5 }}>
          <Text style={{ fontSize: 18, color: 'blue' }}>Sort: {selectedSort || 'Departure Time'}</Text>
          <Icon name="menu-down" size={25} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilterVisible(true)} style={{ backgroundColor: 'lavender', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 5 }}>
          <Text style={{ fontSize: 18, color: 'blue' }}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ margin: 10 }}>
        {getFilteredPlaces().map((place, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('Home1', { route: place })} style={{ borderTopWidth: 1, borderColor: 'lightgrey', backgroundColor: 'white', marginTop: 10, padding: 15 }}>
            {!!place.p1 && <Text style={{ color: 'grey', fontSize: 16 }}>{place.p1}</Text>}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
              <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{place.p2}</Text>
              <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }}>{place.p3}</Text>
            </View>
            <View style={{ backgroundColor: 'lavender', borderRadius: 6, alignSelf: 'flex-start', paddingHorizontal: 10, marginTop: 8 }}>
              <Text style={{ color: 'black', fontSize: 14 }}>{place.p4}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {sortVisible && (
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: 15, borderTopLeftRadius: 20, borderTopRightRadius: 20, elevation: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Sort By</Text>
            <TouchableOpacity onPress={() => setSortVisible(false)}>
              <Icon name="close" size={25} color="black" />
            </TouchableOpacity>
          </View>
          {sortOptions.map((option, index) => (
            <TouchableOpacity key={index} onPress={() => { setSelectedSort(option); setSortVisible(false); }} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{option}</Text>
              {selectedSort === option && <Icon name="check" size={24} color="red" />}
            </TouchableOpacity>
          ))}
        </View>
      )}

      {filterVisible && (
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: 15, borderTopLeftRadius: 20, borderTopRightRadius: 20, elevation: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Filter by Timings</Text>
            <TouchableOpacity onPress={() => setFilterVisible(false)}>
              <Icon name="close" size={25} color="black" />
            </TouchableOpacity>
          </View>

          {['6 AM - 12 PM', '12 PM - 6 PM', '6 PM - 12 AM'].map((time, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => setTempFilter(time)}
              style={{ paddingVertical: 10, backgroundColor: tempFilter === time ? 'red' : 'lavender', borderRadius: 5, paddingHorizontal: 10, marginBottom: 10 }}
            >
              <Text style={{ fontSize: 18, textAlign: 'center' }}>{time}</Text>
            </TouchableOpacity>
          ))}

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
            <TouchableOpacity
              onPress={() => {
                setTempFilter('');
                setSelectedFilter('');
                setFilterVisible(false);
              }}
              style={{ backgroundColor: 'red', color: 'white', paddingVertical: 10, paddingHorizontal: 50, borderRadius: 5 }}
            >
              <Text style={{ fontSize: 16 }}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedFilter(tempFilter);
                setFilterVisible(false);
              }}
              style={{ backgroundColor: 'red', color: 'white', paddingVertical: 10, paddingHorizontal: 50, borderRadius: 5 }}
            >
              <Text style={{ fontSize: 16, color: 'white' }}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

    </View>
  );
};

export default StationSearchScreen;
