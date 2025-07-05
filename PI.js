import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, FlatList } from 'react-native';
import { RadioButton, Portal, TextInput, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PI = ({ navigation }) => {
    const [status, setStatus] = useState('unchecked');
    const handlePress = () => {
        setStatus(status === 'clicked' ? 'unchecked' : 'clicked');
    };
    const [name, setName] = useState('');
    const [DOB, setDOB] = useState('');
    const [gender, setGender] = useState('');
    const [seat, setSeat] = useState('');
    const [berth, setBerth] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [SOR, setSOR] = useState('');
    const [selectedResidence, setSelectedResidence] = useState(null);
    const [residenceModalVisible, setResidenceModalVisible] = useState(false);

    const residenceList = [
        { label: 'Apartment', value: 'apartment' },
        { label: 'Independent House', value: 'independent_house' },
        { label: 'PG/Hostel', value: 'pg_hostel' },
        { label: 'Villa', value: 'villa' },
    ];

    const handleSave = () => {
        setSubmitted(true);
        if (!name || !DOB) {
            Alert.alert('Missing Fields', 'Please fill all required fields');
        } else {
            Alert.alert('Success', 'Details Saved');
        }
    };

    const [visiblePortal, setVisiblePortal] = useState('');
    const [showinfo, setshowinfo] = useState('');

    const openModal = () => setVisiblePortal(true);

    const closeModal = () => setVisiblePortal(false);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60 }}>
                <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
                    <Icon name="arrow-left" size={25} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center', padding: 10 }}>Personal Information</Text>
            </View>

            <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20, margin: 15 }}>Personal details</Text>

            <TextInput
                mode="outlined"
                label="Name"
                value={name}
                onChangeText={setName}
                style={[{ margin: 15, height: 60, fontSize: 20, backgroundColor: 'white' }, submitted && !name && { borderColor: 'red' }]}
            />

            <TextInput
                mode="outlined"
                label="Date of Birth"
                value={DOB}
                onChangeText={setDOB}
                style={[
                    { margin: 15, height: 60, fontSize: 20, backgroundColor: 'white' },
                    submitted && !DOB && { borderColor: 'red' }
                ]}
                right={<TextInput.Icon icon="calendar-month-outline" />}
            />
            <Text style={{ fontSize: 18, color: 'grey', marginTop: 10, margin: 15 }}>Gender</Text>
            <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 10 }}>
                    <View style={{ flexDirection: 'row', gap: 50, borderWidth: 1, borderColor: gender === 'Male' ? 'red' : 'grey', borderRadius: 30, paddingHorizontal: 15, paddingVertical: 7 }}>
                        <Text style={{ fontSize: 18 }}>Male</Text>
                        <RadioButton value="Male" status={gender === 'Male' ? 'checked' : 'unchecked'}
                            onPress={handlePress} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 50, borderWidth: 1, borderColor: gender === 'Female' ? 'red' : 'grey', borderRadius: 30, paddingHorizontal: 15, paddingVertical: 7 }}>
                        <Text style={{ fontSize: 18 }}>Female</Text>
                        <RadioButton value="Female" status={gender === 'Female' ? 'checked' : 'unchecked'}
                            onPress={handlePress} />
                    </View>
                </View>
            </RadioButton.Group>

            <View style={{ borderColor: 'grey', borderTopWidth: 1, marginTop: 20 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 15, marginTop: 10 }}>Contact details</Text>

                <TouchableOpacity
                    onPress={() => {
                        setVisiblePortal('residence');
                        setshowinfo(true);
                    }}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderWidth: 1,
                        borderColor: 'grey',
                        margin: 15,
                        paddingHorizontal: 30,
                        height: 60,
                        borderRadius: 10,
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ fontSize: 20, color: selectedResidence ? 'black' : 'grey' }}>
                        {selectedResidence ? selectedResidence.label : 'State of residence'}
                    </Text>
                    <Icon name="menu-down" size={30} color="black" />
                </TouchableOpacity>

                {visiblePortal === 'residence' && showinfo && (
                    <View
                        style={{

                            backgroundColor: 'white',
                            borderRadius: 10,
                            elevation: 5,
                            shadowColor: '#000',
                            shadowOpacity: 0.2,
                            shadowRadius: 10,
                            maxHeight: 300,
                        }}
                    >
                        {residenceList.map((item) => (
                            <TouchableOpacity
                                key={item.value}
                                style={{
                                    padding: 20,
                                    borderBottomWidth: 1,
                                    borderColor: '#ddd',
                                }}
                                onPress={() => {
                                    setSelectedResidence(item);
                                    setshowinfo(false);
                                }}
                            >
                                <Text style={{ fontSize: 18 }}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}


                <Text style={{ fontSize: 16, color: 'grey', bottom: 10, paddingLeft: 15 }}>Required for GST Tax invoicing</Text>

                <TextInput
                    style={{ borderWidth: 1, borderColor: 'grey', margin: 15, paddingHorizontal: 15, height: 60, backgroundColor: 'white', fontSize: 20, paddingLeft: 30, borderRadius: 10 }}
                    placeholder='Mobile Number'
                    onChangeText={setDOB}
                />
                <Text style={{ fontSize: 16, color: 'grey', bottom: 10, paddingLeft: 15 }}>optional</Text>

                <View style={{ backgroundColor: 'lightgrey', borderWidth: 1, borderColor: 'grey', margin: 15, paddingHorizontal: 15, height: 60, borderRadius: 10 }}>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Email</Text>
                    <Text style={{ fontSize: 20, color: 'grey' }}>Lazyprincess0708@gmail.com</Text>
                </View>
            </View>

            <View style={{ borderColor: 'grey', borderTopWidth: 1, marginTop: 20 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 15 }}>Travel preferences</Text>

                <TouchableOpacity onPress={() => { setVisiblePortal('berth'); setshowinfo(true); }} style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: 'grey', margin: 15, paddingHorizontal: 30, height: 60, borderRadius: 10 }}>
                    <Text style={{ fontSize: 20, top: 10, color: 'grey' }}>Berth Preference</Text>
                    <Icon name="menu-down" size={30} color="black" style={{ top: 10 }} />
                </TouchableOpacity>
                <Portal>
                    {visiblePortal === 'berth' && showinfo && (
                        <View style={{ backgroundColor: 'white', marginTop: 50, height: 500, width: '100%', borderRadius: 10, margin: 15, bottom: 0, position: 'absolute', backgroundColor: '#fff', padding: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 20 }}>Berth Preference</Text>
                                <TouchableOpacity onPress={() => setVisiblePortal(false)}>
                                    <Icon name="close" size={30} color="black" style={{ right: 20, marginTop: 20 }} />
                                </TouchableOpacity>
                            </View>
                            <RadioButton.Group onValueChange={newValue => setBerth(newValue)} value={berth}>
                                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: 10,
                                            width: '90%',
                                            justifyContent: 'space-between',
                                        }}
                                        onPress={() => { setBerth('No Preference'), setshowinfo(false); }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="menu" size={25} color="green" />
                                            <Text style={{ fontSize: 20, marginLeft: 10 }}>No Preference</Text>
                                        </View>
                                        <RadioButton value="No Preference" />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: 10,
                                            width: '90%',
                                            justifyContent: 'space-between',
                                        }}
                                        onPress={() => {
                                            setBerth('Lower Berth'), setshowinfo(false);
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="dock-window" size={25} color="red" />
                                            <Text style={{ fontSize: 20, marginLeft: 10 }}>Lower Berth</Text>
                                        </View>
                                        <RadioButton value="Lower Berth" />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: 10,
                                            width: '90%',
                                            justifyContent: 'space-between',
                                        }}
                                        onPress={() => {
                                            setBerth('Middle Berth'), setshowinfo(false);
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="menu" size={25} color="green" />
                                            <Text style={{ fontSize: 20, marginLeft: 10 }}>Middle Berth</Text>
                                        </View>
                                        <RadioButton value="Middle Berth" />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: 10,
                                            width: '90%',
                                            justifyContent: 'space-between',
                                        }}
                                        onPress={() => {
                                            setBerth('Upper Berth'), setshowinfo(false);
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="dock-window" size={25} color="red" />
                                            <Text style={{ fontSize: 20, marginLeft: 10 }}>Upper Berth</Text>
                                        </View>
                                        <RadioButton value="Upper Berth" />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: 10,
                                            width: '90%',
                                            justifyContent: 'space-between',
                                        }}
                                        onPress={() => {
                                            setBerth('Side Lower Berth'), setshowinfo(false);
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="menu" size={25} color="green" />
                                            <Text style={{ fontSize: 20, marginLeft: 10 }}>Side Lower Berth</Text>
                                        </View>
                                        <RadioButton value="Side Lower Berth" />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: 10,
                                            width: '90%',
                                            justifyContent: 'space-between',
                                        }}
                                        onPress={() => {
                                            setBerth('Side Upper Berth'), setshowinfo(false);
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="dock-window" size={25} color="red" />
                                            <Text style={{ fontSize: 20, marginLeft: 10 }}>Side Upper Berth</Text>
                                        </View>
                                        <RadioButton value="Side Upper Berth" />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: 10,
                                            width: '90%',
                                            justifyContent: 'space-between',
                                        }}
                                        onPress={() => {
                                            setBerth('Side Middle Berth'), setshowinfo(false);
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="menu" size={25} color="green" />
                                            <Text style={{ fontSize: 20, marginLeft: 10 }}>Side Middle Berth</Text>
                                        </View>
                                        <RadioButton value="Side Middle Berth" />
                                    </TouchableOpacity>
                                </View>
                            </RadioButton.Group>
                        </View>
                    )}
                </Portal>
                <Text style={{ fontSize: 16, color: 'grey', bottom: 10, paddingLeft: 15 }}>Berth preference not guaranteed</Text>

                <TouchableOpacity onPress={() => { setVisiblePortal('Seat') }} style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: 'grey', margin: 15, paddingHorizontal: 30, height: 60, borderRadius: 10 }}>
                    <Text style={{ fontSize: 20, top: 10, color: 'grey' }}>Seat Preference</Text>
                    <Icon name="menu-down" size={30} color="black" style={{ top: 10 }} />
                </TouchableOpacity>
                <Portal>
                    {visiblePortal === 'Seat' && showinfo && (
                        <View style={{ backgroundColor: 'white', marginTop: 50, height: 200, width: '100%', borderRadius: 10, margin: 15, bottom: 0, position: 'absolute', backgroundColor: '#fff', padding: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 20 }}>Seat Preference</Text>
                                <TouchableOpacity onPress={() => setVisiblePortal(false)}>
                                    <Icon name="close" size={30} color="black" style={{ right: 20, marginTop: 20 }} />
                                </TouchableOpacity>
                            </View>
                            <RadioButton.Group onValueChange={newValue => setSeat(newValue)} value={seat}>
                                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: 10,
                                            width: '90%',
                                            justifyContent: 'space-between',
                                        }}
                                        onPress={() => {
                                            setSeat('No Preference'), setshowinfo(false);
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="menu" size={25} color="green" />
                                            <Text style={{ fontSize: 20, marginLeft: 10 }}>No Preference</Text>
                                        </View>
                                        <RadioButton value="No Preference" />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: 10,
                                            borderColor: 'grey',
                                            borderTopWidth: 0.5,
                                            width: '90%',
                                            justifyContent: 'space-between',
                                        }}
                                        onPress={() => {
                                            setSeat('Window Side'), setshowinfo(false);
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="dock-window" size={25} color="red" />
                                            <Text style={{ fontSize: 20, marginLeft: 10 }}>Window Side</Text>
                                        </View>
                                        <RadioButton value="Window Side" />
                                    </TouchableOpacity>
                                </View>
                            </RadioButton.Group>


                        </View>
                    )}
                </Portal>
                <Text style={{ fontSize: 16, color: 'grey', bottom: 10, paddingLeft: 15 }}>Seat preference not guaranteed</Text>

                <TouchableOpacity onPress={() => { setVisiblePortal('Meal') }} style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: 'grey', margin: 15, paddingHorizontal: 30, height: 60, borderRadius: 10 }}>
                    <Text style={{ fontSize: 20, top: 10, color: 'grey' }}>Meal Preference</Text>
                    <Icon name="menu-down" size={30} color="black" style={{ top: 10 }} />
                </TouchableOpacity>

                <Portal>
                    {visiblePortal === 'Meal' && showinfo && (
                        <View style={{ backgroundColor: 'white', marginTop: 50, height: 200, width: '100%', borderRadius: 10, margin: 15, bottom: 0, position: 'absolute', backgroundColor: '#fff', padding: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 20 }}>Meal Preference</Text>
                                <TouchableOpacity onPress={() => setVisiblePortal(false)}>
                                    <Icon name="close" size={30} color="black" style={{ right: 20, marginTop: 20 }} />
                                </TouchableOpacity>
                            </View>
                            <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
                                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: 10,
                                            width: '90%',
                                            justifyContent: 'space-between',
                                        }}
                                        onPress={() => {
                                            setGender('Veg'), setshowinfo(false);
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="circle-box-outline" size={25} color="green" />
                                            <Text style={{ fontSize: 20, marginLeft: 10 }}>Veg</Text>
                                        </View>
                                        <RadioButton value="Veg" />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginVertical: 10,
                                            borderColor: 'grey',
                                            borderTopWidth: 0.5,
                                            width: '90%',
                                            justifyContent: 'space-between',
                                        }}
                                        onPress={() => {
                                            setGender('Non Veg'), setshowinfo(false);
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="circle-box-outline" size={25} color="red" />
                                            <Text style={{ fontSize: 20, marginLeft: 10 }}>Non Veg</Text>
                                        </View>
                                        <RadioButton value="Non Veg" />
                                    </TouchableOpacity>
                                </View>
                            </RadioButton.Group>


                        </View>
                    )}
                </Portal>

            </View>
            <TouchableOpacity style={{ width: '90%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', margin: 10, paddingVertical: 10, marginTop: 10, borderRadius: 30 }} onPress={handleSave}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Save Changes</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default PI;
