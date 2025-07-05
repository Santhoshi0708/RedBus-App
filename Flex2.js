import React,{useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider,IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
const FAQ=[{q:'1.How does Free date change mean?',a:'Before covered under FlexiTicket program,assure that up to 8 hours before the departure time, the date change fee is zero.You will,however, be required to pay the fare difference(if any). In the 0-8 hours before departure time-frame,date change charges may apply as per the bus operators policy.'},
           {q:'2.How much refund will I get on cancellation?',a:'Buses covered under FlexiTicket program, assure a minimum 50% refund if you cancel at least 12 hours before the departure time. That is, if you cancel at least 12 hours before departure, you will receive anywhere from 50%-100% refund on cancellation, depending on the bus operators policy. If you cancel within 0-12 hours before departure time-frame, cancellation charges as per the operator policy would be applicable.'},
           {q:'3.How do I select a FlexiTicket bus for my next Booking on redBus?',a:'Go to the redBus app/website. Search for buses by entering Source, Destination and date of travel. You will be shown all available buses on your route. Look for buses with FlexiTicket logo'},
           {q:'4.How do I know if I my existing redBus booking is FlexiTicket or not?',a:'You can check for FlexiTicket logo in the My Bookings section on redBus app / website. You can also check for the same in the ticket details sent to your email ID.'}
]
  const [clicked,setclicked] = useState();

    return (
        <ScrollView contentContainerStyle={{}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'brown', height: 60, paddingRight: 50, borderColor: 'red', borderBottomWidth: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
                    <Icon name="close" size={30} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Flexi Ticket</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'brown', padding: 30 }}>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Introducing</Text>
                <Text style={{ fontSize: 25, color: 'white', marginTop: 15, fontWeight: 'bold' }}>FLEXI TICKET</Text>
                <Text style={{ fontSize: 16, color: 'white', }}>Enjoy freedom like never before!</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', marginTop: 20 ,textAlign:'center'}}>Get amazing benefits on Date Change and Cancellation</Text>
            </View>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 20 }}>What is Flexi Ticket?</Text>
            <View style={{ marginHorizontal: 50, flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 20 }}>
                <Icon name="radiobox-marked" size={25} color="red" />
                <Text style={{ fontSize: 18, marginLeft: 20 }}>Change Your travel date for free up to 8 hours before the departure</Text>
            </View>
            <View style={{ marginHorizontal: 50, flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 20 }}>
                <Icon name="radiobox-marked" size={25} color="red" />
                <Text style={{ fontSize: 18, marginLeft: 20 }}>Get min 50% refund ifyou cancel theticket  at least 12 hours before the departure</Text>
            </View>
            <View>
                <Text style={{ fontSize: 20, color: 'brown', fontWeight: 'bold', marginHorizontal: 20, marginVertical: 10 }}>
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