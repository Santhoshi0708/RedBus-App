import React,{useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider,IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const [clicked,setclicked] = useState();
const FAQ =[{q:'How can I purchase redBus Assurance Program?',a:'Users can opt in for redBus Assurance Program from the passenger information screen at the time of bus booking.'},
            {q:'Can I purchase redBus Assurance Program after purchasing the ticket?',a:'redBus Assurance Program can only be bought along with the bus booking. As of now we do not support purchase of redBus Assurance Program after purchasing the ticket.'},
            {q:'Is there any requirement to become eligible for purchase of RAP?',a:'User must be logged in with a OTP verified number in order to be eligible for purchase of RAP'},
            {q:'Do I have to contact redBus support in order to avail the extra refund?',a:'In case of trip cancellation, the refund for the ticket amount (excluding the redBus Assurance Program cost) will be refunded automatically to the original payment method along with the extra refund to the users redBus wallet.'}
]
    return (
        <ScrollView contentContainerStyle={{}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'brown', height: 60, paddingRight: 50, borderColor: 'red', borderBottomWidth: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
                    <Icon name="close" size={30} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>RAP</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'brown', padding: 30 }}>
                            <Text style={{ fontSize: 16, color: 'white',  }}>Say hello to</Text>
                            <Text style={{ fontSize: 25, color: 'white', marginTop: 15, fontWeight: 'bold',textAlign:'center' }}>redBus Assurance Program</Text>
                            <Text style={{ fontSize: 16, color: 'white',textAlign:'center' }}>Insure your trip against cancellations and accidents!</Text>
                        </View>
            <View style={{ marginHorizontal: 50, flexDirection: 'row', alignItems: 'center', marginTop: 30, marginLeft: 20 }}>
                <Icon name="radiobox-marked" size={25} color="red" />
                <Text style={{ fontSize: 18, marginLeft: 20 }}>Secure your trip against cancellations by the bus operator & get 50% extra refund up to ₹500 as wallet cash.</Text>
            </View>
            <View style={{ marginHorizontal: 50, flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 20 }}>
                <Icon name="radiobox-marked" size={25} color="red" />
                <Text style={{ fontSize: 18, marginLeft: 20 }}>Get up to ₹5,00,000 in medical coverage in case of bus accident.</Text>
            </View>
            <View>
                <Text style={{ fontSize: 20, color: 'brown', fontWeight: 'bold', marginHorizontal: 20, marginTop:50 }}>
                    Frequently Asked Questions
                </Text>
                {FAQ.map((item, index) => (
                    <View key={index} style={{ marginHorizontal: 20, marginVertical: 8 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, flex: 1 }}>{item.q}</Text>
                            <IconButton
                                icon={clicked === index ? 'minus' : 'plus'}
                                size={20}
                                onPress={() => setclicked(clicked === index ? null : index)}
                            />
                        </View>
                        {clicked === index && (
                            <Text style={{ fontSize: 18, color: 'grey', marginTop: 4 }}>{item.a}</Text>
                        )}
                    </View>
                ))}
            </View>
        </ScrollView>
    )
};
export default App;      