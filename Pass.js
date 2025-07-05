import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const defaultPassengers = [
    { id: 1, name: 'John Doe', age: 30, gender: 'Male' },
    { id: 2, name: 'Jane Smith', age: 25, gender: 'Female' },
    { id: 3, name: 'Michael Johnson', age: 40, gender: 'Male' },
    { id: 4, name: 'Emily Davis', age: 28, gender: 'Female' },
    { id: 5, name: 'William Brown', age: 35, gender: 'Male' },
];

const PI = ({ navigation }) => {
    const [passengers, setPassengers] = useState(defaultPassengers);

    const handleRemovePassenger = (id) => {
        Alert.alert(
            "Remove Passenger",
            "Are you sure you want to remove this passenger?",
            [
                { text: "Cancel", style: "cancel" },
                { 
                    text: "Remove", 
                    style: "destructive",
                    onPress: () => setPassengers(prev => prev.filter(p => p.id !== id)) 
                }
            ]
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 100 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
                        <Icon name="arrow-left" size={25} color="white" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center', flex: 1, marginLeft: 10 }}>
                        Passengers
                    </Text>
                </View>

                {/* List of passengers */}
                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    {passengers.map((passenger) => (
                        <TouchableOpacity
                            key={passenger.id}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 15,
                                backgroundColor: 'beige',
                                borderRadius: 10,
                                marginBottom: 15,
                                elevation: 2,
                                shadowColor: 'white',
                                justifyContent: 'space-between',
                            }}
                            onPress={() => alert(`Passenger: ${passenger.name}\nAge: ${passenger.age}\nGender: ${passenger.gender}`)}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="account" size={30} color="black" />
                                <View style={{ marginLeft: 15 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{passenger.name}</Text>
                                    <Text style={{ fontSize: 14, color: 'gray' }}>
                                        Age: {passenger.age} | Gender: {passenger.gender}
                                    </Text>
                                </View>
                            </View>

                            <TouchableOpacity
                                onPress={() => handleRemovePassenger(passenger.id)}
                                style={{ padding: 8 }}
                            >
                                <Icon name="trash-can-outline" size={25} color="red" />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <TouchableOpacity
                style={{
                    width: '90%',
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'red',
                    paddingVertical: 10,
                    marginBottom: 10,
                    borderRadius: 30,
                    position: 'absolute',
                    bottom: 0,
                }}
                onPress={() =>
                    navigation.navigate('Passengers', {
                        onAddPassenger: (newPassenger) => {
                            setPassengers((prev) => [...prev, newPassenger]);
                        },
                    })
                }
            >
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>👤+ Add New Passengers</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PI;
