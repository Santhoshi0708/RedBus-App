import React,{useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Divider,IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const [clicked,setclicked] = useState();
const FAQ =[{q:'How referral works?',a:'Share your unique referral code with your friends, ask your friend to download the redBus app & earn rewards when your friend completes their first trip with redBus.'},
            {q:'How should I opt for a lightning fast refund?',a:'We process all refunds via lightning fast mode by default. No action required from the user.'},
            {q:'Will my friend get a discount when they use my referral code?',a:'Yes of course! Once your friend signs up with your referral code, they can use code FIRST to get 10% off up to ₹100 off and ₹100 flat cashback on completion of the first journey with redBus.'},
];
    return (
        <ScrollView contentContainerStyle={{}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'brown', height: 60, paddingRight: 50, borderColor: 'red', borderBottomWidth: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
                    <Icon name="close" size={30} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Referral</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'brown', padding: 30 }}>
                            <Text style={{ fontSize: 25, color: 'white', marginTop: 15, fontWeight: 'bold',textAlign:'center' }}>Refer & Earn</Text>
                            <Text style={{ fontSize: 16, color: 'white',textAlign:'center' }}>Exciting rewards are only a tap way!</Text>
                        </View>
            <View style={{ marginHorizontal: 50, flexDirection: 'row', alignItems: 'center', marginTop: 30, marginLeft: 20 }}>
                <Icon name="radiobox-marked" size={25} color="red" />
                <Text style={{ fontSize: 18, marginLeft: 20 }}>Invite your friends who have not tried redbus before to get incredible rewards</Text>
            </View>
            <View style={{ marginHorizontal: 50, flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 20 }}>
                <Icon name="radiobox-marked" size={25} color="red" />
                <Text style={{ fontSize: 18, marginLeft: 20 }}>You would get ₹100 in your redBus wallet once your friend completes his first trip with us (with minimum transaction value of 400)</Text>
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