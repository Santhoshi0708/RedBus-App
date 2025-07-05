import React,{useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Divider, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from "react-native-youtube-iframe";



const App = ({ navigation }) => {
    const [showFeedback, setShowFeedback] = useState(false);

    const feedback1 = () => {
        return (
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Icon name="check-circle" size={25} color="green" />
            <Text style={{ fontSize: 16, color: 'green', marginTop: 10 }}>
              Thank you for giving your feedback
            </Text>
          </View>
        );
      };
      
    return (
                <View style={{flex:1}}>
         <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60, paddingRight: 50, borderColor: 'red', borderBottomWidth: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('PR')}>
                    <Icon name="arrow-left" size={25} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>FAQ</Text>
            </View>
        <ScrollView contentContainerStyle={{}}>
        <View style={{ marginTop: 20 }}>
  <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20, paddingHorizontal: 20 }}>
    My money has been deducted but the tickets are not booked. What should I do now?
  </Text>

  <Text style={{ fontSize: 20, color: 'black', marginTop: 20, marginHorizontal: 20 }}>
    The online booking confirmation might not get generated due to fluctuations in the bank networks in most of the cases. In such scenarios we suggest you to choose a different mode of payment to complete your transaction. Before booking a new ticket, please read the following:
  </Text>

  {[
    "You will receive the ticket confirmation via SMS & email within 15 minutes if the booking amount is received by redBus. If you do not receive the ticket or bus booking online confirmation details within 15 minutes, the deducted amount will be auto refunded to your source account within one hour. After 15 minutes you can go ahead and make a new booking.",
    "Sometimes, redBus might not receive the booking amount even if it’s deducted from your account. Such a scenario may arise when your bank puts a hold on the payment. Your bank may release the hold on such payments in 24-48 hours, where the amount deducted is reversed by the bank. Go to the Booking/Payment Failures section in the chatbot to find out if redBus received the payment. If the Payment Received by redBus is 'No' please go ahead and make a new bus booking with us. However, please be assured that you will get your refund if the ticket is not booked."
  ].map((item, index) => (
    <View key={index} style={{ flexDirection: 'row', marginHorizontal: 20, marginBottom: 15, marginTop: 10 }}>
      <Text style={{ width: 30, fontSize: 20, color: 'black' }}>{index + 1}.</Text>
      <Text style={{ flex: 1, fontSize: 20, color: 'black' }}>{item}</Text>
    </View>
  ))}
</View>

          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Was it helpful?</Text>
          
            <View style={{ flexDirection: 'row', gap: 20, marginTop: 15 }}>
              <IconButton
                onPress={() => {feedback1}}
                icon="thumb-up-outline"
                size={30}
                iconColor="black"
                style={{ backgroundColor: 'lightpink', borderRadius: 30 }}
              />
              <IconButton
                onPress={() => {feedback1}}
                icon="thumb-down-outline"
                size={30}
                iconColor="black"
                style={{ backgroundColor: 'lightpink', borderRadius: 30 }}
              />
            </View>
          </View>
          
        </ScrollView>
        </View>
    );
};
export default App;