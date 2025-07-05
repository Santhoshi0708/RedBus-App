import React,{useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider,IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const [clicked,setclicked] = useState();
const FAQ =[{q:'What is a lightning fast refund?',a:'Refunds would get credited to the users’ bank account within 5 mins.'},
            {q:'How should I opt for a lightning fast refund?',a:'We process all refunds via lightning fast mode by default. No action required from the user.'},
            {q:'What are the payment methods supported for lightning fast refunds?',a:'All major payment methods like Gpay, PhonePe, Cards, Wallets (AmazonPay, Paytm) are supported for lightning fast refunds. However, we recommend using UPI (Gpay/ PhonePe/ Paytm etc.) for your payments as refunds are processed in less than 5 minutes on UPI.'},
]
    return (
        <ScrollView contentContainerStyle={{paddingBottom:50}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'brown', height: 60, paddingRight: 50, borderColor: 'red', borderBottomWidth: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
                    <Icon name="close" size={30} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Referral</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'brown', padding: 50 }}>
                            <Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold',textAlign:'center' }}>Lightning Fast Refund</Text>
                            <Text style={{ fontSize: 16, color: 'white',textAlign:'center',marginTop:20}}>Get your money back instantly with redBus!</Text>
                        </View>
            <View style={{ marginHorizontal: 50, flexDirection: 'row', alignItems: 'center', marginTop: 30, marginLeft: 20 }}>
                <Icon name="radiobox-marked" size={25} color="red" />
                <Text style={{ fontSize: 18, marginLeft: 20 }}>Get your money back instantly with redBus! In the event of cancellations / booking failure, redBus ensures that users get their money deposited back into their account instantly and your money is not stuck.</Text>
            </View>
            <View style={{ marginHorizontal: 50, flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 20 }}>
                <Icon name="radiobox-marked" size={25} color="red" />
                <Text style={{ fontSize: 18, marginLeft: 20 }}>As redBus works only with PCI DSS compliant and secure payment partners/aggregators, you can safely transact on the platform.</Text>
            </View>
            <View>
                <Text style={{ fontSize: 20, color: 'brown', fontWeight: 'bold', marginHorizontal: 20, marginTop:50 }}>
                    Frequently Asked Questions
                </Text>
                {FAQ.map((item, index) => (
                    <View key={index} style={{ margin: 20, marginVertical: 8 }}>
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