import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Button,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RailMadadScreen = ({ navigation }) => {
    const [expandedSection, setExpandedSection] = useState(null);

    // Form states for grievance form (only for TRAIN)

    const [desc, setDesc] = useState('');
    const [mobile, setMobile] = useState('');
    const [pnr, setPnr] = useState('');
    const [type, setType] = useState('');
    const [subType, setSubType] = useState('');
    const [incidentDate, setIncidentDate] = useState('');
    const [description, setDescription] = useState('');
    const [Feedback, setFeedback] = useState('');

    const toggleSection = (title) => {
        setExpandedSection(expandedSection === title ? null : title);
    };

    const handleSubmit = () => {
        Alert.alert('Form Submitted', `Mobile: ${mobile}\nPNR: ${pnr}\nDescription: ${desc}`);
        // Clear inputs after submission
        setMobile('');
        setPnr('');
        setDesc('');
    };
    const handleReset = () => {
        setMobile(null);
        setPnr(null);
        setDesc(null);
        setFeedback(null);
        setIncidentDate(null);
    }

    return (
        <View style={{flex:1}}>
        <ScrollView style={{ padding: 16, backgroundColor: '#fff' }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('trainbooking')}
                style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}
            >
                <Icon name="arrow-left" size={24} color="black" />
                <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 8 }}>
                    Rail Madad
                </Text>
            </TouchableOpacity>

            {/* TRAIN Section */}
            <View
                style={{
                    marginBottom: 10,
                    borderWidth: 1,
                    borderColor: '#870038',
                    borderRadius: 6,
                    overflow: 'hidden',
                }}
            >
                <TouchableOpacity
                    onPress={() => toggleSection('TRAIN')}
                    style={{ backgroundColor: '#870038', padding: 12 }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>TRAIN</Text>
                </TouchableOpacity>

                {expandedSection === 'TRAIN' && (
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                            Grievance Details                        </Text>

                        <TextInput
                            placeholder="Mobile No."
                            keyboardType="number-pad"
                            placeholderTextColor={'grey'}
                            value={mobile}
                            onChangeText={setMobile}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => Alert.alert('OTP Sent')}
                            style={{
                                backgroundColor: '#800020',
                                padding: 10,
                                borderRadius: 5,
                                alignItems: 'center',
                                marginVertical: 5,
                            }}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Get OTP</Text>
                        </TouchableOpacity>

                        <TextInput
                            placeholder="PNR No"
                            value={pnr}
                            placeholderTextColor={'grey'}
                            onChangeText={setPnr}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                            }}
                        />

                        <TextInput
                            placeholder="Type"
                            value={type}
                            onChangeText={setType}
                            placeholderTextColor={'grey'}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                            }}
                        />

                        <TextInput
                            placeholder="Sub Type"
                            value={subType}
                            placeholderTextColor={'grey'}
                            onChangeText={setSubType}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                            }}
                        />

                        <TextInput
                            placeholder="Incident Date (DD/MM/YYYY)"
                            placeholderTextColor={'grey'}
                            value={incidentDate}
                            onChangeText={setIncidentDate}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                            }}
                        />

                        <TextInput
                            placeholder="Grievance Description"
                            placeholderTextColor={'grey'}
                            multiline
                            value={description}
                            onChangeText={setDescription}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                                height: 100,
                                textAlignVertical: 'top',
                            }}
                        />

                        <Button title="Submit" onPress={handleSubmit} />
                    </View>
                )}
            </View>

            {/* STATION Section */}
            <View
                style={{
                    marginBottom: 10,
                    borderWidth: 1,
                    borderColor: '#870038',
                    borderRadius: 6,
                    overflow: 'hidden',
                }}
            >
                <TouchableOpacity
                    onPress={() => toggleSection('STATION')}
                    style={{ backgroundColor: '#870038', padding: 12 }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>STATION</Text>
                </TouchableOpacity>
                {expandedSection === 'STATION' && (
                    <>
                        <View style={{ padding: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                                Grievance Details
                            </Text>
                            <TextInput
                                placeholder="Type"
                                value={type}
                                placeholderTextColor={'grey'}
                                onChangeText={setType}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    padding: 10,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                }}
                            />

                            <TextInput
                                placeholder="Sub Type"
                                placeholderTextColor={'grey'}
                                value={subType}
                                onChangeText={setSubType}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    padding: 10,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                }}
                            />

                            <TextInput
                                placeholder="Incident Date (DD/MM/YYYY)"
                                placeholderTextColor={'grey'}
                                value={incidentDate}
                                onChangeText={setIncidentDate}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    padding: 10,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                }}
                            />


                            <TextInput
                                placeholder="PNR No"
                                placeholderTextColor={'grey'}
                                value={pnr}
                                onChangeText={setPnr}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    padding: 10,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                }}
                            />

                            <TextInput
                                placeholder="Grievance Description"
                                placeholderTextColor={'grey'}
                                multiline
                                value={description}
                                onChangeText={setDescription}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    padding: 10,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                    height: 100,
                                    textAlignVertical: 'top',
                                }}
                            />
                            <TextInput
                                placeholder="Mobile No."
                                keyboardType="number-pad"
                                placeholderTextColor={'grey'}
                                value={mobile}
                                onChangeText={setMobile}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    padding: 10,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                }}
                            />

                            <TouchableOpacity
                                onPress={() => Alert.alert('OTP Sent')}
                                style={{
                                    backgroundColor: '#800020',
                                    padding: 10,
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    marginVertical: 5,
                                }}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Get OTP</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>
            {/* APPRECIATION/RAIL ANUBHAV Section */}
            <View
                style={{
                    marginBottom: 10,
                    borderWidth: 1,
                    borderColor: '#870038',
                    borderRadius: 6,
                    overflow: 'hidden',
                }}
            >
                <TouchableOpacity
                    onPress={() => toggleSection('APPRECIATION/RAIL ANUBHAV')}
                    style={{ backgroundColor: '#870038', padding: 12 }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>APPRECIATION/RAIL ANUBHAV</Text>
                </TouchableOpacity>

                {expandedSection === 'APPRECIATION/RAIL ANUBHAV' && (
                    <>
                        <View style={{ padding: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                                Share Your Rail Expperience
                            </Text>

                            <TextInput
                                placeholder="Mobile No."
                                keyboardType="number-pad"
                                placeholderTextColor={'grey'}
                                value={mobile}
                                onChangeText={setMobile}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    padding: 10,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                }}
                            />

                            <TouchableOpacity
                                onPress={() => Alert.alert('OTP Sent')}
                                style={{
                                    backgroundColor: '#800020',
                                    padding: 10,
                                    borderRadius: 5,
                                    alignItems: 'center',
                                    marginVertical: 5,
                                }}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Get OTP</Text>
                            </TouchableOpacity>

                            <TextInput
                                placeholder="Train No/Station Name"
                                placeholderTextColor={'grey'}
                                value={pnr}
                                onChangeText={setPnr}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    padding: 10,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                }}
                            />

                            <TextInput
                                placeholder="Type"
                                placeholderTextColor={'grey'}
                                value={type}
                                onChangeText={setType}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    padding: 10,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                }}
                            />

                            <TextInput
                                placeholder="Sub Type"
                                value={subType}
                                placeholderTextColor={'grey'}
                                onChangeText={setSubType}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    padding: 10,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                }}
                            />

                            <TextInput
                                placeholder="Incident Date (DD/MM/YYYY)"
                                placeholderTextColor={'grey'}
                                value={incidentDate}
                                onChangeText={setIncidentDate}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    padding: 10,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                }}
                            />

                            <TextInput
                                placeholder="Write Your Experience"
                                placeholderTextColor={'grey'}
                                multiline
                                value={description}
                                onChangeText={setDescription}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    padding: 10,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                    height: 100,
                                    textAlignVertical: 'top',
                                }}
                            />
                            <TextInput
                                placeholder="Feedback"
                                multiline
                                placeholderTextColor={'grey'}

                                value={Feedback}
                                onChangeText={setFeedback}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    padding: 10,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                    height: 100,
                                    textAlignVertical: 'top',
                                }}
                            />
                            <View style={{ flexDirection: 'row', gap: 15 }}>
                                <Button title="Submit" onPress={handleSubmit} />
                                <Button title="Reset" onPress={handleReset} />

                            </View>
                        </View>
                    </>
                )}
            </View>

            {/* ENQUIRY Section */}
            <View
                style={{
                    marginBottom: 10,
                    borderWidth: 1,
                    borderColor: '#870038',
                    borderRadius: 6,
                    overflow: 'hidden',
                }}
            >
                <TouchableOpacity
                    onPress={() => toggleSection('ENQUIRY')}
                    style={{ backgroundColor: '#870038', padding: 12 }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>ENQUIRY</Text>
                </TouchableOpacity>

                {expandedSection === 'ENQUIRY' && (
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                            Grievance Details
                        </Text>
                        <TextInput
                            placeholder="Type"
                            placeholderTextColor={'grey'}
                            value={type}
                            onChangeText={setType}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                            }}
                        />

                        <TextInput
                            placeholder="Sub Type"
                            placeholderTextColor={'grey'}
                            value={subType}
                            onChangeText={setSubType}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                            }}
                        />

                        <TextInput
                            placeholder="Incident Date (DD/MM/YYYY)"
                            placeholderTextColor={'grey'}
                            value={incidentDate}
                            onChangeText={setIncidentDate}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                            }}
                        />


                        <TextInput
                            placeholder="PNR No"
                            placeholderTextColor={'grey'}
                            value={pnr}
                            onChangeText={setPnr}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                            }}
                        />

                        <TextInput
                            placeholder="Grievance Description"
                            placeholderTextColor={'grey'}
                            multiline
                            value={description}
                            onChangeText={setDescription}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                                height: 100,
                                textAlignVertical: 'top',
                            }}
                        />
                        <TextInput
                            placeholder="Mobile No."
                            keyboardType="number-pad"
                            placeholderTextColor={'grey'}
                            value={mobile}
                            onChangeText={setMobile}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => Alert.alert('OTP Sent')}
                            style={{
                                backgroundColor: '#800020',
                                padding: 10,
                                borderRadius: 5,
                                alignItems: 'center',
                                marginVertical: 5,
                            }}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Get OTP</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            {/* TRACK YOUR CONCERN Section */}
            <View
                style={{
                    marginBottom: 10,
                    borderWidth: 1,
                    borderColor: '#870038',
                    borderRadius: 6,
                    overflow: 'hidden',
                }}
            >
                <TouchableOpacity
                    onPress={() => toggleSection('TRACK YOUR CONCERN')}
                    style={{ backgroundColor: '#870038', padding: 12 }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>TRACK YOUR CONCERN</Text>
                </TouchableOpacity>

                {expandedSection === 'TRACK YOUR CONCERN' && (
                    <View
                        style={{
                            backgroundColor: '#f9f9f9',
                            padding: 10,
                            paddingLeft: 20,
                            borderTopWidth: 1,
                            borderColor: '#eee',
                        }}
                    >
                        <Text style={{ fontSize: 16, }}>Be with us for live tracking</Text>
                        <TextInput
                            placeholder="Reference No."
                            placeholderTextColor={'grey'}
                            keyboardType="number-pad"
                            value={mobile}
                            onChangeText={setMobile}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                            }}
                        />
                        <Button title="Submit" onPress={handleSubmit} />
                    </View>
                )}
            </View>

            {/* SUGGESTIONS Section */}
            <View
                style={{
                    marginBottom: 10,
                    borderWidth: 1,
                    borderColor: '#870038',
                    borderRadius: 6,
                    overflow: 'hidden',
                }}
            >
                <TouchableOpacity
                    onPress={() => toggleSection('SUGGESTIONS')}
                    style={{ backgroundColor: '#870038', padding: 12 }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>SUGGESTIONS</Text>
                </TouchableOpacity>

                {expandedSection === 'SUGGESTIONS' && (
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                            Suggestions Details
                        </Text>

                        <TextInput
                            placeholder="Suggestions"
                            placeholderTextColor={'grey'}
                            multiline
                            value={description}
                            onChangeText={setDescription}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                                height: 100,
                                textAlignVertical: 'top',
                            }}
                        />

                        <TextInput
                            placeholder="Description"
                            placeholderTextColor={'grey'}
                            multiline
                            value={description}
                            onChangeText={setDescription}
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                marginVertical: 5,
                                borderRadius: 5,
                                height: 100,
                                textAlignVertical: 'top',
                            }}
                        />

                        <View style={{ flexDirection: 'row', gap: 15 }}>
                            <Button title="Submit" onPress={handleSubmit} />
                            <Button title="Reset" onPress={handleReset} />

                        </View>
                    </View>
                )}
            </View>
           
        
        </ScrollView>
         <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 100,
                backgroundColor: '#870038',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
            }}>
                <Text style={{ color: 'white', fontSize: 14, marginBottom: 5 }}>
                    © 2019 RAILROAD. All Rights Reserved.
                </Text>
                <Text style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>
                    Home | FAQs | Railway Admin Login | MIS Report Login
                </Text>
            </View>

                </View>

    );
};

export default RailMadadScreen;
