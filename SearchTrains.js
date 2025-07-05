import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton, Checkbox, Card, Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';












const sortOptions = [
  { label: 'Departure (Earliest First)', value: 'departure' },
  { label: 'Duration (Shortest First)', value: 'duration' },
  { label: 'Arrival (Earliest First)', value: 'arrival' },
  { label: 'Availability (Highest First)', value: 'availability' },];










const handleApplySort = () => {
  setSortModalVisible(false);
  // Add sorting logic here based on selectedSortOption
};
const Icons = [{ t1: 'ticket-confirmation-outline', t2: 'Quota' },
{ t1: 'sort-reverse-variant', t2: 'Sort' }, { t1: 'train', t2: 'Available' }, { t1: 'air-humidifier', t2: 'Ac' }, { t1: 'filter-outline', t2: 'Filter' }];
const TrainBooking = ({ navigation }) => {
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('departure');
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedStations, setSelectedStations] = useState([]);
  // const [sortOption, setSortOption] = useState('');
  // const [showSortBox, setShowSortBox] = useState(true);
  const [trains, setTrains] = useState(originalTrainData);
  const [filteredTrains, setFilteredTrains] = useState(originalTrainData);


  useEffect(() => {
    const originalTrainData =
      [
        {
          "id": 1,
          "availability": "Available",
          "lowerBerths": 3,
          "middleBerths": 2,
          "upperBerths": 4,
          "sleeperAc": "Yes",
          "departureTimings": "06:30 AM",
          "duration": "6h 45m",
          "classCode": "2A",
          "arrivingStations": ["Vijayawada", "Guntur", "Nellore"],
          "general": 850,
          "tatkal": 1050,
          "seniorCitizen": 700,
          "ladies": "2 seats reserved",
          "date": "2025-05-28"
        },
        {
          "id": 2,
          "availability": "Waiting List",
          "lowerBerths": 0,
          "middleBerths": 1,
          "upperBerths": 0,
          "sleeperAc": "No",
          "departureTimings": "10:15 PM",
          "duration": "8h 30m",
          "classCode": "SL",
          "arrivingStations": ["Tirupati", "Chittoor", "Bangalore"],
          "general": 650,
          "tatkal": 850,
          "seniorCitizen": 500,
          "ladies": "1 seat reserved",
          "date": "2025-05-29"
        },
        {
          "id": 3,
          "availability": "Available",
          "lowerBerths": 0,
          "middleBerths": 0,
          "upperBerths": 0,
          "sleeperAc": "Yes",
          "departureTimings": "04:45 PM",
          "duration": "5h 10m",
          "classCode": "1A",
          "arrivingStations": [],
          "general": 0,
          "tatkal": 0,
          "seniorCitizen": 0,
          "ladies": "0 seats reserved",
          "date": "2025-05-30"
        },
        {
          "id": 4,
          "availability": "Few Seats",
          "lowerBerths": 1,
          "middleBerths": 0,
          "upperBerths": 1,
          "sleeperAc": "Yes",
          "departureTimings": "01:00 PM",
          "duration": "4h 50m",
          "classCode": "3A",
          "arrivingStations": ["Rajahmundry", "Eluru", "Vijayawada"],
          "general": 780,
          "tatkal": 980,
          "seniorCitizen": 630,
          "ladies": "2 seats reserved",
          "date": "2025-05-31"
        },
        {
          "id": 5,
          "availability": "Not Available",
          "lowerBerths": 0,
          "middleBerths": 0,
          "upperBerths": 0,
          "sleeperAc": "No",
          "departureTimings": "12:00 AM",
          "duration": "0h 0m",
          "classCode": "",
          "arrivingStations": [],
          "general": 0,
          "tatkal": 0,
          "seniorCitizen": 0,
          "ladies": "0 seats reserved",
          "date": "2025-06-01"
        },
        {
          id: 6,
          availability: "Available",
          lowerBerths: 2,
          middleBerths: 1,
          upperBerths: 3,
          sleeperAc: "Yes",
          departureTimings: "09:00 AM",
          duration: "7h 15m",
          classCode: "2S",
          arrivingStations: ["Hyderabad", "Secunderabad", "Warangal"],
          general: 500,
          tatkal: 700,
          seniorCitizen: 400,
          ladies: "3 seats reserved",
          date: "2025-06-02",
        },
        {
          id: 7,
          availability: "Few Seats",
          lowerBerths: 0,
          middleBerths: 2,
          upperBerths: 1,
          sleeperAc: "No",
          departureTimings: "07:30 PM",
          duration: "9h 00m",
          classCode: "SL",
          arrivingStations: ["Chennai", "Vellore", "Tiruvannamalai"],
          general: 400,
          tatkal: 550,
          seniorCitizen: 350,
          ladies: "1 seat reserved",
          date: "2025-06-03",
        },
        {
          id: 8,
          availability: "Waiting List",
          lowerBerths: 1,
          middleBerths: 1,
          upperBerths: 0,
          sleeperAc: "Yes",
          departureTimings: "11:45 AM",
          duration: "6h 00m",
          classCode: "3A",
          arrivingStations: ["Mumbai", "Pune", "Nashik"],
          general: 750,
          tatkal: 900,
          seniorCitizen: 600,
          ladies: "2 seats reserved",
          date: "2025-06-04",
        },
        {
          id: 9,
          availability: "Available",
          lowerBerths: 0,
          middleBerths: 0,
          upperBerths: 0,
          sleeperAc: "Yes",
          departureTimings: "03:15 PM",
          duration: "5h 30m",
          classCode: "1A",
          arrivingStations: ["Delhi", "Agra", "Mathura"],
          general: 1500,
          tatkal: 1800,
          seniorCitizen: 1200,
          ladies: "1 seat reserved",
          date: "2025-06-05",
        },
        {
          id: 10,
          availability: "Not Available",
          lowerBerths: 0,
          middleBerths: 0,
          upperBerths: 0,
          sleeperAc: "No",
          departureTimings: "08:00 AM",
          duration: "0h 0m",
          classCode: "",
          arrivingStations: [],
          general: 0,
          tatkal: 0,
          seniorCitizen: 0,
          ladies: "0 seats reserved",
          date: "2025-06-06",
        },
      ];
    setOriginalTrainData(originalTrainData);
    setSortedTrainData(originalTrainData);
  }, []);


  const getNextFiveDays = () => {
    const days = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];




    for (let i = 0; i < 5; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const dayName = dayNames[date.getDay()];
      const dayNumber = date.getDate();
      days.push(`${dayName} ${dayNumber}`);
    }
    return days;
  };




  const daysList = getNextFiveDays();
  // Toggle helpers for classes, times, stations (example)
  const toggleClass = (code) => {
    setSelectedClasses(prev =>
      prev.includes(code) ? prev.filter(c => c !== code) : [...prev, code]
    );
  };
  const toggleTime = (label) => {
    setSelectedTimes(prev =>
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };
  const toggleStation = (station) => {
    setSelectedStations(prev =>
      prev.includes(station) ? prev.filter(s => s !== station) : [...prev, station]
    );
  };




  // // Filter and sort effect
  // useEffect(() => {
  //     let result = [...trains];




  //     if (availableOnly) {
  //         result = result.filter(t => t.availableSeats > 0);
  //     }




  //     if (selectedClasses.length > 0) {
  //         result = result.filter(t => selectedClasses.includes(t.classCode));
  //     }




  //     if (selectedTimes.length > 0) {
  //         const timeRanges = {
  //             'Early Morning': ['00:00', '06:00'],
  //             Morning: ['06:01', '12:00'],
  //             Afternoon: ['12:01', '18:00'],
  //             Evening: ['18:01', '23:59'],
  //         };
  //         result = result.filter(t =>
  //             selectedTimes.some(label => {
  //                 const [start, end] = timeRanges[label];
  //                 return t.departureTime >= start && t.departureTime <= end;
  //             })
  //         );
  //     }




  //     if (selectedStations.length > 0) {
  //         result = result.filter(t => selectedStations.includes(t.arrivingStation));
  //     }










  //     setFilteredTrains(result);
  // }, [availableOnly, selectedClasses, selectedTimes, selectedStations, sortOption]);
  const ticketClasses = [
    { code: '1A', label: 'First AC' },
    { code: '2A', label: 'Second AC' },
    { code: '3A', label: 'Third AC' },
    { code: 'SL', label: 'Sleeper' },
  ];




  const timeFilters = [
    { label: 'Morning', time: '06:00 AM - 12:00 PM' },
    { label: 'Afternoon', time: '12:00 PM - 05:00 PM' },
    { label: 'Evening', time: '05:00 PM - 09:00 PM' },
    { label: 'Night', time: '09:00 PM - 06:00 AM' },
  ];




  const stationList = [
    'C Shivaji Mah T (CSMT)',
    'Vasai Road (BSR)',
    'LokmanyaTilak T (LTT)',
    'Dadar (DR)',
    'Panvel (PNVL)',
    'Kalyan Jn (KYN)',
  ];






  const clearAll = () => {
    setSelectedClasses([]);
    setSelectedTimes([]);
    setSelectedStations([]);
    setAvailableOnly(false);
  };
  const [selectedDate, setSelectedDate] = useState(getNextFiveDays()[0].id);



  const [City1, setCity1] = useState('');
  const [City2, setCity2] = useState('');
  // const filteredData = originalTrainData.filter(item => item.date === selectedDate);
  const [selectTab, setSelectTab] = useState(1);
  const [selectTab2, setSelectTab2] = useState(1);
  // const [visible, setVisible] = useState(false);
  const [SelectRadioButton, setSelectRadioButton] = useState('First');
  // const [modalVisible, setmodalvisible] = useState(null);
  const [selectedClasses, setSelectedClasses] = useState('');
  const [availableOnly, setAvailableOnly] = useState('');
  const [originalTrainData, setOriginalTrainData] = useState([]);
  const [sortedTrainData, setSortedTrainData] = useState([]);
  const [modalVisible, setModalVisible] = useState('');
  const [visible, setVisible] = useState(false);
  const [sortOption, setSortOption] = useState('Default');
  const [appliedSortOption, setAppliedSortOption] = useState('Default');
  const [showSortBox, setShowSortBox] = useState(true);
  // const openModal = () => {
  //     setVisible(true);
  //     setmodalvisible(true);
  // }
  // const hideModal = () => {
  //     setmodalvisible(null);
  //     setVisible(false);
  // }


  const hideModal = () => {
    setVisible(false);
    setModalVisible('');
  };


  const applySort = () => {
    setAppliedSortOption(sortOption);
    sortTrains(sortOption);
    hideModal();
  };


  const sortTrains = (option) => {
    let sorted = [...originalTrainData];


    switch (option) {
      case 'Available First':
        sorted.sort((a, b) => a.availability === 'Available' ? -1 : 1);
        break;
      case 'Shortest First':
        sorted.sort((a, b) => parseDuration(a.duration) - parseDuration(b.duration));
        break;
      case 'Earliest First':
        sorted.sort((a, b) => parseTime(a.departureTimings) - parseTime(b.departureTimings));
        break;
      case 'Latest First':
        sorted.sort((a, b) => parseTime(b.departureTimings) - parseTime(a.departureTimings));
        break;
      default:
        sorted = [...originalTrainData];
    }


    setSortedTrainData(sorted);
  };


  const parseTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };


  const parseDuration = (durationStr) => {
    const [hrs, mins] = durationStr.split(':').map(Number);
    return hrs * 60 + mins;
  };

  useEffect(() => {
    const getData = async () => {
      const c1 = await AsyncStorage.getItem('city1');
      const c2 = await AsyncStorage.getItem('city2');
      setFromPlace(c1 || '');
      setToPlace(c2 || '');
    };
    getData();
  }, []);

  const bgColors = ['#ffe5ec', '#e0f7fa', '#f3e5f5'];
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ padding: 20, backgroundColor: '#f7f7f7', flex: 1, paddingBottom: 30 }}>
        <View style={{ marginBottom: 20, flexDirection: 'row', gap: 20, alignItems: 'center' }}>
          <Icon onPress={() => navigation.navigate('trainbooking')} name="arrow-left" size={26} color="black" />
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {City1 || 'From'} to {City2 || 'To'}
            </Text>                        <Text style={{ fontSize: 14 }}>Friday, 23 May | 35 trains</Text>
          </View>
        </View>


        {sortedTrainData.map((train, index) => (
          <Card
            key={train.id}
            style={{
              width: 320,
              marginBottom: 15,
              height: 220,
              marginRight: 12,
              padding: 12,
              borderRadius: 10,
              backgroundColor: bgColors[index % bgColors.length],
              elevation: 3,
              shadowColor: 'white',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 2,
            }}
          >
            <Text numberOfLines={2} style={{ fontWeight: 'bold', fontSize: 13, marginBottom: 4 }}>
              Class: {train.classCode || 'N/A'} — {train.departureTimings} ({train.duration})
            </Text>


            <Text style={{ fontSize: 11 }} numberOfLines={1}>
              Status: {train.availability}
            </Text>


            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 6 }}>
              {[
                `Lower: ${train.lowerBerths}`,
                `Middle: ${train.middleBerths}`,
                `Upper: ${train.upperBerths}`,
                `AC: ${train.sleeperAc}`,
              ].map((label, i) => (
                <Chip
                  key={i}
                  style={{
                    marginRight: 8,
                    marginBottom: 8,
                    paddingHorizontal: 8,
                    height: 30,
                    borderRadius: 5,
                    backgroundColor: 'rgba(126, 125, 125, 0.7)',
                  }}
                  textStyle={{ fontSize: 10, textAlign: 'center' }}
                >
                  {label}
                </Chip>
              ))}
            </View>


            <Text style={{ marginTop: 6, fontWeight: '600', fontSize: 11 }} numberOfLines={1}>
              Stations: {train.arrivingStations.join(', ')}
            </Text>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 9 }}>General</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 11 }}>₹{train.general}</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 9 }}>Tatkal</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 11 }}>₹{train.tatkal}</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 9 }}>Senior</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 11 }}>₹{train.seniorCitizen}</Text>
              </View>
            </View>


            <Text style={{ marginTop: 6, fontStyle: 'italic', color: '#555', fontSize: 9 }} numberOfLines={1}>
              Ladies: {train.ladies}
            </Text>
          </Card>
        ))}




      </ScrollView>
      {visible && modalVisible === 'Quota' && (
        <View
          style={{
            height: 450,
            backgroundColor: 'white',
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
          }}
        >
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Select quota</Text>
            <Icon onPress={hideModal} name="close" size={25} color="black" />
          </View>




          {/* Options */}
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderColor: 'lightgrey',
                paddingVertical: 12,
                alignItems: 'flex-start',
              }}
            >
              <View style={{ flex: 1, paddingRight: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>General + Tatkal</Text>
                <Text style={{ fontSize: 14, marginTop: 5, color: '#555' }}>
                  Applicable for all
                </Text>
              </View>
              <RadioButton
                value="First"
                color="red"
                status={SelectRadioButton === 'First' ? 'checked' : 'unchecked'}
                onPress={() => setSelectRadioButton('First')}
              />
            </View>




            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderColor: 'lightgrey',
                paddingVertical: 12,
                alignItems: 'flex-start',
              }}
            >
              <View style={{ flex: 1, paddingRight: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Senior citizen (SS)</Text>
                <Text style={{ fontSize: 14, marginTop: 5, color: '#555' }}>
                  Applicable for male (60 y or above) and female (45y or above) either travelling alone or max 2 passengers, failing which seats will be allotted in general quota.
                </Text>
              </View>
              <RadioButton
                value="Second"
                color="red"
                status={SelectRadioButton === 'Second' ? 'checked' : 'unchecked'}
                onPress={() => setSelectRadioButton('Second')}
              />
            </View>




            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 12,
                alignItems: 'flex-start',
              }}
            >
              <View style={{ flex: 1, paddingRight: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>Ladies quota (LD)</Text>
                <Text style={{ fontSize: 14, marginTop: 5, color: '#555' }}>
                  Applicable only for female passengers and male child (11 years or above)
                </Text>
              </View>
              <RadioButton
                value="Third"
                color="red"
                status={SelectRadioButton === 'Third' ? 'checked' : 'unchecked'}
                onPress={() => setSelectRadioButton('Third')}
              />
            </View>
          </View>




          {/* Apply button */}
          <TouchableOpacity
            onPress={hideModal}
            style={{
              marginTop: 10,
              backgroundColor: 'red',
              borderRadius: 5,
              paddingVertical: 5,
            }}
          >
            <Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}>Apply</Text>
          </TouchableOpacity>
        </View>
      )}




      {visible && modalVisible === 'Sort' && (
        <View style={{ flex: 1, backgroundColor: 'white', marginBottom: 20 }}>
          {showSortBox && (
            <View style={{ backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 16 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1a1a1a' }}>Sort trains</Text>
                <TouchableOpacity onPress={hideModal}>
                  <Text style={{ fontSize: 20, color: '#333' }}>✕</Text>
                </TouchableOpacity>
              </View>


              <ScrollView>
                {[
                  { label: 'Default', options: ['Default'] },
                  { label: 'Availability', options: ['Available First'] },
                  { label: 'Duration', options: ['Shortest First'] },
                  { label: 'Departure', options: ['Earliest First', 'Latest First'] },
                ].map((section, index) => (
                  <View key={index} style={{ marginBottom: 12 }}>
                    <Text style={{ fontSize: 15, color: 'black', marginBottom: 6 }}>{section.label}</Text>
                    {section.options.map((option, idx) => (
                      <RadioButton.Item
                        color="red"
                        key={idx}
                        label={option}
                        value={option}
                        status={sortOption === option ? 'checked' : 'unchecked'}
                        onPress={() => setSortOption(option)}
                        labelStyle={{ fontStyle: 'italic', fontFamily: 'serif', fontSize: 15, color: 'grey' }}
                        position="trailing"
                        mode="android"
                        style={{ paddingVertical: 0 }}
                      />
                    ))}
                    <View style={{ height: 1, backgroundColor: '#ccc', marginTop: 6 }} />
                  </View>
                ))}


                <TouchableOpacity
                  onPress={applySort}
                  style={{ marginTop: 10, backgroundColor: 'red', borderRadius: 5, paddingVertical: 5 }}
                >
                  <Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}>Apply</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
        </View>
      )}


      {visible && modalVisible === 'Filter' && (
        <View style={{ backgroundColor: '#fff' }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
            <View
              style={{
                padding: 16,
                backgroundColor: '#f7f2f2',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Filter results</Text>
                <Text style={{ fontSize: 14, color: '#444', marginTop: 2 }}>
                  {selectedClasses.length + (availableOnly ? 1 : 0) + selectedTimes.length + selectedStations.length} filters selected ·{' '}
                  <Text onPress={clearAll} style={{ color: '#0066cc' }}>
                    Clear all
                  </Text>
                </Text>
              </View>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text style={{ fontSize: 26 }}>✕</Text>
              </TouchableOpacity>
            </View>




            {/* Availability */}
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 12 }}>Availability</Text>
            <TouchableOpacity
              onPress={() => setAvailableOnly(!availableOnly)}
              style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}
            >
              <Checkbox
                status={availableOnly ? 'checked' : 'unchecked'}
                color="#d32f2f"
                onPress={() => setAvailableOnly(!availableOnly)}
              />
              <Text style={{ fontSize: 15 }}>Available only</Text>
            </TouchableOpacity>




            {/* Ticket Class */}
            <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 10 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 12 }}>Ticket class</Text>
            {ticketClasses.map(({ code, label }) => (
              <TouchableOpacity
                key={code}
                onPress={() => toggleClass(code)}
                style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
              >
                <Checkbox
                  status={selectedClasses.includes(code) ? 'checked' : 'unchecked'}
                  color="#d32f2f"
                  onPress={() => toggleClass(code)}
                />
                <Text style={{ fontSize: 15 }}>{label}</Text>
              </TouchableOpacity>
            ))}




            {/* Time Filters */}
            <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 10 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 12 }}>Departure Time</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {timeFilters.map(({ label, time }) => (
                <TouchableOpacity
                  key={label}
                  style={{
                    width: '48%',
                    borderWidth: 1,
                    borderColor: selectedTimes.includes(label) ? '#d32f2f' : '#ccc',
                    backgroundColor: selectedTimes.includes(label) ? '#fdecea' : '#fff',
                    padding: 10,
                    borderRadius: 10,
                    marginBottom: 10,
                  }}
                  onPress={() => toggleTime(label)}
                >
                  <Text style={{ fontWeight: '600', fontSize: 15 }}>{label}</Text>
                  <Text style={{ fontSize: 13, color: '#555' }}>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>




            {/* Arriving Stations */}
            <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: 10 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 12 }}>Arriving Stations</Text>
            {stationList.map((station) => (
              <TouchableOpacity
                key={station}
                onPress={() => toggleStation(station)}
                style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
              >
                <Checkbox
                  status={selectedStations.includes(station) ? 'checked' : 'unchecked'}
                  color="#d32f2f"
                  onPress={() => toggleStation(station)}
                />
                <Text style={{ fontSize: 15 }}>{station}</Text>
              </TouchableOpacity>
            ))}
            {/* Show Trains button */}
            <TouchableOpacity
              style={{
                margin: 16,
                backgroundColor: '#d32f2f',
                paddingVertical: 14,
                borderRadius: 8,
                alignItems: 'center',
              }}
              onPress={() => {
                console.log('Show trains clicked')
                setVisible(false)
              }}
            >
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Show Trains</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}




      <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#383838', marginTop: 20, width: '100%', paddingVertical: 10 }}>
        {Icons.map((icon, index) => (
          <TouchableOpacity
            onPress={() => {
              setSelectTab2(index);
              setModalVisible(Icons[index].t2); // Sets modal type, e.g., "Sort"
              setVisible(true);
            }}
            key={index}
            style={{ alignItems: 'center', paddingHorizontal: 10 }}
          >
            <Icon
              name={icon.t1}
              size={35}
              color={selectTab2 === index ? 'red' : 'white'}
            />
            <Text style={{
              fontSize: 16,
              color: selectTab2 === index ? 'red' : 'white',
              marginTop: 4
            }}>
              {icon.t2}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};




export default TrainBooking;