import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Data5 = [
  { id: 1, t1: 'Free Cancellation', t2: 'Get 100% on Cancellation', t3: 'Know more ->', color: 'brown', t1color: 'white', t2color: 'grey', t3color: 'brown', img: 'https://tse1.mm.bing.net/th?id=OIP.4ZDtEvqhMDgIq5XLZv4D0AHaHa&pid=Api&P=0&h=220' },
  { id: 2, t1: 'FlexiTicket', t2: 'Get amazing benefits on Date change & Cancellation', t3: 'Know more ->', t1color: 'black', t2color: 'grey', t3color: 'white', img: 'https://tse4.mm.bing.net/th?id=OIP.4CyzB5fl8AqlGRHIRQkpNAHaDt&pid=Api&P=0&h=220' },
  { id: 3, t1: 'Introducing Bus timetable', t2: 'Get local bus timings between cities in your state', t3: 'KNow more ->', color: 'lightblue', t1color: 'black', t2color: 'lightblue', t3color: 'lightblue', img: 'https://tse3.mm.bing.net/th?id=OIP.NHxix1d66vWLFUxP1CaXlAHaFa&pid=Api&P=0&h=220' },
  { id: 4, t1: 'Assurance Program', t2: 'Insure your tripagainst cancllations and accident!', t3: 'Know more ->', color: 'orange', t1color: 'red', t2color: 'black', t3color: 'red', img: 'https://tse4.mm.bing.net/th?id=OIP.Oeb5S-qnoZOY6EpFxIsuogHaHa&pid=Api&P=0&h=220' },
  { id: 5, t1: 'Refer & Earn!', t2: 'Exiting rewards are only a tap away!', t3: 'Know more ->', color: 'lavender', t1color: 'purple', t2color: 'black', t3color: 'purple', img: 'https://tse3.mm.bing.net/th?id=OIP.9LLHLQtbasAFerxvrTKkDQHaEK&pid=Api&P=0&h=220' },
  { id: 6, t1: 'Primo', t2: 'Rising Stars on redBus', t3: 'Know more ->', color: 'purple', t1color: 'white', t2color: 'grey', t3color: 'beige', img: 'https://tse4.mm.bing.net/th?id=OIP.N8LRHZOKdj1Ca4N0ubqXyQHaHa&pid=Api&P=0&h=220' },
  { id: 7, t1: 'Lightning Fast Refund', t2: 'Get Instant refund for your payments', t3: 'know more ->', color: 'lightgreen', t1color: 'green', t2color: 'black', t3color: 'lightgreen', img: 'https://tse4.mm.bing.net/th?id=OIP.v5v7RZA9-OE0FzAzC5yBJwHaE7&pid=Api&P=0&h=220' }
];

const Data = [
  { id: 1, t1: 'Opt-in for Free Cancellation while booking your bus ticket.' },
  { id: 2, t1: 'If your ticket plans are cancelled, go to My Bookings and cancel your ticket before the cut-off time (6 hours before start of Journey).' },
  { id: 3, t1: 'Enjoy ZERO penalty and get the full ticket fare instantly refunded.' },
  { id: 4, t1: 'The cancellation charge will be waived off automatically.' },
];
const FAQ=[{q:'1.How do I opt-in for free cancellation for my booking?',a:'Customers can purchae free cancellation for their booking by selecting yes on Free Cancellation secction on the cust info screen.'},
           {q:'2.Can I cancel the free cancellation after purchasing it?',a:'No,It is not possible to cancel free cancellation once purcchased'},
           {q:'3.What happens to my free cancellation If I reschedule my booking?',a:'In case of reschedule, the rescheduled ticket will not be cancellable and the free cancellation amount will noyt be refunded.'},
           {q:'4.Why am I still getting cancellation charges even though I have purchased free cancellation?',a:'If the ticket is cancelled within 6 hours of boarding time,then the free cancellation will not be applicable and the customer will be charged cancellation charges.'}
]
const App = ({ navigation }) => {
  const cardItem = Data5[0];
  const [clicked,setclicked] = useState();
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60, paddingRight: 50, borderBottomWidth: 1, borderColor: 'red' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
          <Icon name="close" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Free Cancellation</Text>
      </View>

      <View style={{ margin: 20 }}>
        <Card style={{ height: 200, width: '100%', backgroundColor: cardItem.color, borderRadius: 15 }}>
          <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
            <View style={{ flex: 1 ,alignItems:'center',justifyContent:'center'
            }}>
              <Text style={{ fontSize: 20, color: cardItem.t1color, marginBottom: 5, fontWeight: 'bold' }}>{cardItem.t1}</Text>
              <Text style={{ fontSize: 16, color: cardItem.t2color }}>{cardItem.t2}</Text>
            </View>
            <Image source={{ uri: cardItem.img }} style={{ width: 90, height: 90, resizeMode: 'contain', }} />
          </View>
        </Card>
      </View>

      <Text style={{ margin:20,color: 'brown', fontWeight: 'bold', fontSize: 22, marginTop: 20, marginHorizontal: 20 }}>What is Free Cancellation?</Text>
      <Text style={{margin:20, fontSize: 18, marginTop: 15, marginHorizontal: 20 }}>
        Free Cancellation gives you the freedom to cancel your bus tickets without paying any cancellation charges. Get the full ticket refunded with zero penalty till 6 hours before start of Journey.
      </Text>

      <View style={{ margin:20,flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 }}>
        <Icon name="ticket-confirmation-outline" size={25} color="brown" />
        <Text style={{ fontSize: 18, marginLeft: 20 }}>Rs 0 cancellation fee</Text>
      </View>

      <View style={{ margin:20,flexDirection: 'row', alignItems: 'center', marginTop: 10,marginLeft:20}}>
        <Icon name="currency-inr" size={25} color="brown" />
        <Text style={{ fontSize: 18, marginLeft:20}}>Instant Refund</Text>
      </View>
<Text style={{fontSize:22,color:'brown',margin:20,fontWeight:'bold'}}>How it Works?</Text>
      <View style={{ marginHorizontal:20,marginLeft:10 }}>
        {Data.map((item) => (
          <View key={item.id} style={{ flexDirection: 'row', marginBottom: 10 ,marginLeft:10,gap:10}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold',}}>{item.id}.</Text>
            <Text style={{ fontSize: 18 }}>{item.t1}</Text>
          </View>
        ))}
      </View>
      <View style={{margin:20}}>
    <Text style={{ fontSize: 22, color: 'brown',fontWeight: 'bold' }}>Terms and Conditions</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>1. Program Overview</Text>
      <Text style={{ fontSize: 16, marginTop: 8 }}>
        The Program offers a refund of 100% of the fare when a Customer cancels their bus ticket at least 6 hours before the scheduled departure time.
        {'\n\n'}The refund will be provided in the original payment method used by the Customer for the ticket purchase.
        {'\n\n'}The free cancellation only applies to the fare paid for the bus ticket. Any additional charges, such as add-ons or ancillary purchases, will not be refunded.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>2. Cancellation Process</Text>
      <Text style={{ fontSize: 16, marginTop: 8 }}>
        To cancel a ticket and claim the refund, Customers must initiate the cancellation process through the Company's platform or by contacting Customer Support.
        {'\n\n'}The cancellation must be made at least 6 hours before the scheduled departure time of the bus.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>3. Refund Process</Text>
      <Text style={{ fontSize: 16, marginTop: 8 }}>
        Upon successful cancellation, the Company will process the refund within 7–14 business days.
        {'\n\n'}The refund amount will be calculated as 100% of the fare paid for the bus ticket.
        {'\n\n'}The refund will be issued using the same payment method used for the original purchase.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>4. Exclusions</Text>
      <Text style={{ fontSize: 16, marginTop: 8 }}>
        The free cancellation only applies to cancellations made at least 6 hours before the scheduled departure time.
        {'\n\n'}The free cancellation does not cover additional charges, including but not limited to add-ons, ancillary purchases, convenience fees, or service charges.
        {'\n\n'}The free cancellation does not apply to tickets that have been rescheduled.
        {'\n\n'}The free cancellation does not apply to tickets purchased through third-party platforms or agents.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>5. Modifications and Termination</Text>
      <Text style={{ fontSize: 16, marginTop: 8 }}>
        The Company reserves the right to modify, suspend, or terminate the Program, or amend these Terms, at its sole discretion and without prior notice.
        {'\n\n'}In the event of termination, the free cancellation will no longer be available for future ticket purchases, but any eligible refunds for already cancelled tickets will be honoured according to these Terms.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>6. Limitation of Liability</Text>
      <Text style={{ fontSize: 16, marginTop: 8 }}>
        The Company shall not be liable for any loss, damages, or claims arising from the use or non-use of the free cancellation, including but not limited to missed connections, travel disruptions, or any other related expenses.
        {'\n\n'}The Company's liability, if any, shall be limited to the refund amount specified under these Terms.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>7. Agreement</Text>
      <Text style={{ fontSize: 16, marginTop: 8, marginBottom: 32 }}>
        By participating in the Program, Customers acknowledge that they have read, understood, and agreed to these Terms and the Company's general terms and conditions for ticket bookings.
      </Text>
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
            <Text style={{ fontSize:18, color: 'grey', marginTop: 4 }}>{item.a}</Text>
          )}
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

export default App;