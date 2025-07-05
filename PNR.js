import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, IconButton, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const App = ({ navigation }) => {
    const [selected, setSelected] = useState('All');

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
                <View style={{ height: 60, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                    <IconButton
                        onPress={() => navigation.navigate('trainbooking')}
                        icon="arrow-left"
                        size={25}
                        iconColor="black"
                    />
                    <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold' }}>PNR Status</Text>
                </View>

                <TextInput
                    style={{ borderWidth: 1, borderColor: 'black', marginHorizontal: 20, backgroundColor: 'white', marginTop: 20 }}
                    placeholder='PNR NUMBER'
                    placeholderTextColor='grey'
                    mode='outlined'
                />

                <TouchableOpacity
                    style={{ backgroundColor: 'lightgrey', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, borderRadius: 12, marginHorizontal: 20, marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Check Status</Text>
                </TouchableOpacity>

                <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
                    <View style={{ position: 'absolute', top: -10, left: 20, backgroundColor: 'white', zIndex: 1, paddingHorizontal: 10 }}>
                        <Text style={{ fontSize: 14, color: 'navy', fontWeight: 'bold' }}>What's New</Text>
                    </View>

                    <View style={{ borderColor: 'navy', borderWidth: 1, borderRadius: 8, padding: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={require('../Images/train1.png')} style={{ height: 100, width: width * 0.35, resizeMode: 'contain' }} />
                            <Image source={require('../Images/train2.png')} style={{ height: 100, width: width * 0.45, resizeMode: 'contain' }} />
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Real-time Updates</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Live Information</Text>
                            </View>

                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', gap: 50 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 12, lineHeight: 18 }}>
                                        Real-time PNR status updates delivered to you.
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 12, lineHeight: 18 }}>
                                        Get live information related to the train status.
                                    </Text>
                                </View>
                            </View>

                        </View>
                    </View>

                </View>

                <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 30, paddingHorizontal: 20 }}>More rail information services</Text>


                <View style={{ flexDirection: 'row',justifyContent: 'space-between', marginTop: 20,gap:10,margin:10}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Live')}
                        style={{
                            borderColor: 'grey',
                            borderWidth: 1,
                            paddingVertical: 10,
                            width: width * 0.3,
                            marginBottom: 15,
                            borderRadius: 10,
                            backgroundColor: 'white',
                            alignItems: 'center',
                        }}>
                        <Icon name="train" size={30} color='red' />
                        <Text style={{ fontSize: 13, color: 'black', textAlign: 'center' }}>Where is my train</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Coach_Position')}
                        style={{
                            borderColor: 'grey',
                            borderWidth: 1,
                            paddingVertical: 10,
                            width: width * 0.3,
                            marginBottom: 15,
                            borderRadius: 10,
                            backgroundColor: 'white',
                            alignItems: 'center',
                        }}>
                        <Icon name="seat-recline-extra" size={30} color='red' />
                        <Text style={{ fontSize: 13, color: 'black', textAlign: 'center' }}>Coach position</Text>
                    </TouchableOpacity>

                   <TouchableOpacity
                        onPress={() => navigation.navigate('Coach_Position')}
                        style={{
                            borderColor: 'grey',
                            borderWidth: 1,
                            paddingVertical: 10,
                            width: width * 0.3,
                            marginBottom: 15,
                            borderRadius: 10,
                            backgroundColor: 'white',
                            alignItems: 'center',
                        }}>
                        <Icon name="calendar-clock" size={30} color='red' />
                        <Text style={{ fontSize: 13, color: 'black', textAlign: 'center' }}>Train Schedule</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default App;
