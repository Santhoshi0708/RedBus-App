import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList, TextInput } from 'react-native';
import { RadioButton, Portal, Modal, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
    const BusInfo = [
        {
            img: 'https://tse1.mm.bing.net/th?id=OIP.dcqjkDaGv5q4KkORNekT2gHaCm&pid=Api&P=0&h=220',
            t1: 'Bus Information',
            t2: 'Search for buses between cities and get entire route details along with timings.',
        },
        {
            img: 'https://tse1.mm.bing.net/th?id=OIP.oVfTA5xWx0AujEpJZsgC2gHaFj&pid=Api&P=0&h=220',
            t1: 'Better Travel Planning',
            t2: 'Plan better with exhaustive details of buses',
        },
        {
            img: 'https://tse1.mm.bing.net/th?id=OIP.8-Bvu3IRqBf7cIHlbqxscAAAAA&pid=Api&P=0&h=220',
            t1: 'Save your favourites',
            t2: 'Save your buses or routes by bookmarking them',
        },
        {
            img: 'https://tse3.mm.bing.net/th?id=OIP.kAKHJ_QYWzt8kY7rfN_nNQAAAA&pid=Api&P=0&h=220',
            t1: 'Share it with Peers',
            t2: 'Share the details of uses with your friends',
        },
    ];

    const states = [
        'Andhra Pradesh', 'Telangana', 'Karnataka', 'Tamil Nadu', 'Kerala',
        'Maharashtra', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal',
    ];

    const place = [
        { p1: 'Eluru', p2: 'Jangareddy gudem' },
        { p1: 'Jangareddy gudem', p2: 'Eluru' },
        { p1: 'Eluru', p2: 'Vadlapalli x rd' },
        { p1: 'Vadlapalli x road', p2: 'Eluru' },
        { p1: 'Vadlapalli x road', p2: 'Munduru' },
    ];

    const [selectedState, setSelectedState] = useState('');
    const [visible, setVisible] = useState(false);
    const route = useRoute();

    const openModal = () => setVisible(true);
    const closeModal = () => setVisible(false);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('route', { p1: item.p1, p2: item.p2 })}
            style={{
                borderColor: 'grey',
                borderWidth: 1,
                padding: 35,
                margin: 10,
                borderRadius: 10,
                backgroundColor: '#f9f9f9',
            }}
        >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {item.p1} ➔ {item.p2}
            </Text>
        </TouchableOpacity>
    );

    return (
        <Provider>
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, height: 60 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Flexi4')}>
                        <Icon name="arrow-left" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red', paddingLeft: 20 }}>Bus Timetable</Text>
                </View>

                <TouchableOpacity
                    onPress={openModal}
                    style={{
                        backgroundColor: 'lavender',
                        padding: 15,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        margin: 15,
                        borderRadius: 8,
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="map-marker-outline" size={25} color="blue" />
                        <Text style={{ fontSize: 18, color: 'blue', marginLeft: 10 }}>
                            {route?.params?.selectedState || "Select State"}
                        </Text>
                    </View>
                    <Icon name="menu-down" size={25} color="blue" />
                </TouchableOpacity>

                <Portal>
                    <Modal
                        visible={visible}
                        onDismiss={closeModal}
                        contentContainerStyle={{
                            backgroundColor: 'white',
                            margin: 20,
                            padding: 20,
                            borderRadius: 10,
                            maxHeight: '80%',
                        }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                            <TouchableOpacity onPress={closeModal}>
                                <Icon name="close" size={30} color="brown" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'brown', marginLeft: 20 }}>
                                Select State
                            </Text>
                        </View>

                        <RadioButton.Group onValueChange={value => setSelectedState(value)} value={selectedState}>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                {states.map((state, index) => (
                                    <View
                                        key={index}
                                        style={{
                                            width: '48%',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginBottom: 15,
                                            borderBottomWidth: 0.5,
                                            borderColor: 'lightgrey',
                                            paddingBottom: 10,
                                        }}>
                                        <RadioButton color="red" value={state} />
                                        <Text style={{ fontSize: 16 }}>{state}</Text>
                                    </View>
                                ))}
                            </View>
                        </RadioButton.Group>
                    </Modal>
                </Portal>

                <Text style={{ fontSize: 20, marginHorizontal: 20, color: 'red' }}>Where do you want to go?</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'black',
                    margin: 20,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 10
                }}>
                    <Icon name="magnify" size={24} color="grey" style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="Search for your city/town/village"
                        placeholderTextColor="grey"
                        style={{ flex: 1, fontSize: 16 }}
                    />
                </View>

                <View style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'grey', paddingBottom: 10 }}>
                    <Text style={{ fontSize: 20, margin: 20, color: 'black' }}>Popular searched route</Text>
                    <FlatList
                        horizontal
                        data={place}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: 25, color: 'red', marginBottom: 10 }}>
                        Why use Bus Timetable
                    </Text>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Image
                            source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.tCvS4b2yrv7D5GQSVoG8SgHaDo&pid=Api&P=0&h=220' }}
                            style={{ height: 100, width: '100%', borderRadius: 10, position: 'relative' }}
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Next2')}
                            style={{
                                position: 'absolute',
                                bottom: 30,
                                right: 20,
                                backgroundColor: 'rgba(255,255,255,0.7)',
                                paddingHorizontal: 20,
                                paddingVertical: 6,
                                borderRadius: 5,
                                borderWidth: 1,
                                borderColor: 'black',
                            }}>
                            <Text style={{ fontSize: 18, color: 'black' }}>Play</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {BusInfo.map((item, index) => (
                    <View
                        key={index}
                        style={{
                            flexDirection: 'row',
                            marginVertical: 10,
                            marginHorizontal: 20,
                            borderBottomWidth: 0.6,
                            borderColor: 'lightgrey',
                            paddingBottom: 15,
                        }}>
                        <Image source={{ uri: item.img }} style={{ height: 50, width: 50, marginRight: 15 }} />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{item.t1}</Text>
                            <Text style={{ fontSize: 16 }}>{item.t2}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </Provider>
    );
};

export default App;