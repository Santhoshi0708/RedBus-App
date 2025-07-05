import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Alert, TouchableOpacity } from 'react-native';
import { TextInput, Button, Card, Switch, Modal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

const stationList = [
    { label: 'Pune Jn (PUNE)', value: 'pune' },
    { label: 'Mumbai CST (CSTM)', value: 'mumbai' },
    { label: 'Hyderabad (HYD)', value: 'hyderabad' },
    { label: 'Bangalore (SBC)', value: 'bangalore' },
    { label: 'Chennai (MAS)', value: 'chennai' },
];

const VandeBharatBookingScreen = ({ navigation }) => {
    const [toggle, setToggle] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('spudayana.2004@gmail.com');
    const [phone, setPhone] = useState('');
    const [passengerCount, setPassengerCount] = useState(0);
    const [otpVisible, setOtpVisible] = useState(false);
    const [confirmationVisible, setConfirmationVisible] = useState(false);
    const [otp, setOtp] = useState('');
    const [boardingStation, setBoardingStation] = useState(null);
    const [trainName,setTrainName] = useState('');
    // Forgot username modal and related states
    const [forgotUsernameVisible, setForgotUsernameVisible] = useState(false);
    const [email2, setEmail2] = useState('');
    const [dob, setDob] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const formattedDate = dob.toLocaleDateString('en-GB').split('/').join('-');

    const renderItem = (item) => (
        <View style={{ padding: 10 }}>
            <Text>{item.label}</Text>
        </View>
    );

    const toggleForgotUsername = () => {
        setForgotUsernameVisible(!forgotUsernameVisible);
    };

    const validateAndContinue = () => {
        if (!/^\d{10}$/.test(phone)) {
            Alert.alert('Error', 'Please enter a valid phone number');
            return;
        }
        if (!username) {
            Alert.alert('Error', 'Please enter your IRCTC username');
            return;
        }
        setOtpVisible(true);
    };
const openModal = () => setForgotUsernameVisible(true);
const hideModal = () => setForgotUsernameVisible(false); 
    const handleOtpSubmit = () => {
        if (otp.trim().length === 0) {
            Alert.alert('Error', 'Please enter the OTP');
            return;
        }

        if (otp === '123456') {
            setOtpVisible(false);
            setConfirmationVisible(true);
        } else {
            Alert.alert('Invalid OTP', 'Please enter the correct OTP');
        }
    };
    useEffect(()=>{
const getData = async ()=>{
  try{
   const  Name =await AsyncStorage.getItem('train');
   return Name;
  }
  catch(error){
    console.error("Can't Access Data");
  }
 };
 getData();
},[]);
    return (
        <ScrollView style={{ backgroundColor: '#fff', flex: 1, padding: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                <Icon name="arrow-left" size={24} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>
{trainName || 'default'}
                 </Text>
            </View>

            <Text style={{ color: '#2962ff', marginBottom: 12 }}>Create a new IRCTC account</Text>

            <Card style={{ backgroundColor: '#fff8e1', padding: 10, borderRadius: 8, marginBottom: 12 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold' }}>Exec. Chair Car (EC)</Text>
                    <Text
                        style={{
                            backgroundColor: '#fdd835',
                            paddingHorizontal: 8,
                            paddingVertical: 2,
                            borderRadius: 4,
                        }}
                    >
                        GNWL 8
                    </Text>
                </View>
                <Text style={{ color: '#6200ee', marginTop: 6 }}>
                    Seat Guarantee available. Convert waitlisted bookings to guaranteed travel!
                </Text>
            </Card>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>24 May, 09:20 AM</Text>
                    <Text>PUNE</Text>
                    <Text style={{ color: 'gray' }}>Pune Jn</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'gray' }}>03h 15m</Text>
                    <Icon name="arrow-right" size={20} />
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>24 May, 12:35 PM</Text>
                    <Text>CSMT</Text>
                    <Text style={{ color: 'gray' }}>C Shivaji Mah T</Text>
                </View>
            </View>

            <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>Boarding Station</Text>
            <Dropdown
                style={{
                    borderWidth: 1,
                    borderColor: '#aaa',
                    paddingHorizontal: 10,
                    height: 60,
                    borderRadius: 6,
                    justifyContent: 'center',
                    marginBottom: 8,
                }}
                data={stationList}
                labelField="label"
                valueField="value"
                placeholder="Select Station"
                value={boardingStation}
                onChange={(item) => setBoardingStation(item.value)}
                renderItem={renderItem}
            />
            <Text style={{ color: 'gray', marginBottom: 14, marginTop: 5 }}>
                Boarding time: Sat, 24 May · 09:20 AM
            </Text>

            <View
                style={{
                    backgroundColor: '#f1f1f1',
                    padding: 10,
                    borderRadius: 6,
                    marginBottom: 20,
                }}
            >
                <Text style={{ color: 'gray' }}>
                    You searched for trains from{' '}
                    <Text style={{ fontWeight: 'bold' }}>PUNE</Text> to{' '}
                    <Text style={{ fontWeight: 'bold' }}>MMCT</Text>, but you are booking this train
                    from <Text style={{ fontWeight: 'bold' }}>PUNE</Text> to{' '}
                    <Text style={{ fontWeight: 'bold' }}>CSMT</Text>.
                </Text>
            </View>

            <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>IRCTC Username</Text>
            <TextInput
                mode="outlined"
                placeholder="Enter your IRCTC username"
                value={username}
                onChangeText={setUsername}
                style={{ marginBottom: 8, backgroundColor: 'white' }}
            />
            <Text style={{ color: 'gray', marginBottom: 8 }}>
                User ID is case sensitive. Eg- 'ABC123' and 'abc123' both can be valid IDs and belong
                to different users
            </Text>
            {forgotUsernameVisible && (
                <View
                    style={{
                        padding: 20,
                        backgroundColor: '#f9f9f9',
                        borderRadius: 8,
                        marginBottom: 20,
                    }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>
                            Forgot username
                        </Text>
                        <Icon onPress={hideModal} name="close" size={25} color="black"></Icon>

                    </View>
                    <Text style={{ fontSize: 16, marginBottom: 20 }}>Retrieve your username</Text>

                    <TextInput
                        placeholder="Email ID"
                        mode="outlined"
                        keyboardType="email-address"
                        value={email2}
                        onChangeText={setEmail2}
                        style={{ marginBottom: 15, backgroundColor: 'white' }}
                    />

                    <TouchableOpacity
                        onPress={() => setShowPicker(true)}
                        style={{
                            borderWidth: 1,
                            borderColor: '#ccc',
                            padding: 12,
                            borderRadius: 8,
                            marginBottom: 15,
                        }}
                    >
                        <Text>{dob ? dob.toLocaleDateString('en-GB') : 'Date of Birth (DD-MM-YYYY)'}</Text>
                    </TouchableOpacity>

                    {showPicker && (
                        <DateTimePicker
                            value={dob}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) => {
                                setShowPicker(false);
                                if (selectedDate) setDob(selectedDate);
                            }}
                            maximumDate={new Date()}
                        />
                    )}

                    <Text style={{ fontSize: 12, color: '#555', marginBottom: 20 }}>
                        Note: username will be sent only on your registered email ID
                    </Text>

                    <Button mode="contained" onPress={() => Alert.alert('Username retrieval', 'Functionality not implemented')}>
                        Retrieve Username
                    </Button>
                </View>
            )}
            <TouchableOpacity onPress={toggleForgotUsername}>
                <Text style={{ color: '#2962ff', marginBottom: 10,textDecorationLine:'underline' }}>Forgot username</Text>
            </TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('CreateIRCTC')}>
                <Text style={{ color: '#2962ff', marginBottom: 10,textDecorationLine:'underline' }}>Create IRCTC Account</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Passengers</Text>
            <Text style={{ color: 'gray', marginBottom: 10 }}>At least one adult required</Text>
            <Button
                mode="contained"
                onPress={() => setPassengerCount(passengerCount + 1)}
                style={{ marginBottom: 10 }}
            >
                Add Passenger
            </Button>
            <Text>Passengers Added: {passengerCount}</Text>

            <Text style={{ fontWeight: 'bold', marginTop: 16, marginBottom: 6 }}>Mobile Number</Text>
            <TextInput
                mode="outlined"
                placeholder="Enter Mobile Number"
                keyboardType="numeric"
                value={phone}
                onChangeText={setPhone}
                maxLength={10}
                style={{ marginBottom: 20,backgroundColor:'white' }}
            />

            <Button
                mode="contained"
                style={{ borderRadius: 8, paddingVertical: 8, marginBottom: 16 }}
                onPress={validateAndContinue}
            >
                Continue
            </Button>

            {/* OTP Modal */}
            <Modal visible={otpVisible} onDismiss={() => setOtpVisible(false)} contentContainerStyle={{ backgroundColor: 'white', margin: 20, padding: 20, borderRadius: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Enter OTP</Text>
                <TextInput
                    mode="outlined"
                    keyboardType="numeric"
                    maxLength={6}
                    value={otp}
                    onChangeText={setOtp}
                    placeholder="Enter OTP"
                    style={{ marginBottom: 20 }}
                />
                <Button mode="contained" onPress={handleOtpSubmit}>Submit OTP</Button>
                <Button onPress={() => setOtpVisible(false)} style={{ marginTop: 10 }}>Cancel</Button>
            </Modal>

            {/* Booking Confirmation Modal */}
            <Modal visible={confirmationVisible} onDismiss={() => setConfirmationVisible(false)} contentContainerStyle={{ backgroundColor: 'white', margin: 20, padding: 20, borderRadius: 10 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>Booking Confirmed!</Text>
                <Text>Your Vande Bharat booking was successful.</Text>
                <Button mode="contained" onPress={() => setConfirmationVisible(false)} style={{ marginTop: 20 }}>
                    Close
                </Button>
            </Modal>
        </ScrollView>
    );
};

export default VandeBharatBookingScreen;
