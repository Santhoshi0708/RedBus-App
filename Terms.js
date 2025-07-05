import Raect from 'react';
import {View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const App=({navigation})=>{

    return(
        <View style={{flex:1}}>
             <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 60,backgroundColor:'red' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('About')}>
                        <Icon name="close" size={25} color="white" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 15 }}>
                              Terms and Conditions
                            </Text>
                          </View>
                   <ScrollView contentContainerStyle={{paddingBottom:100}}>

              <Text style={{fontSize:20,fontWeight:'bold',marginHorizontal:30,marginTop:20}}>1. BUS</Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:20}}>1. ROLE OF REDBUS</Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>1. redBus only provides a technology platform that connects intending travelers with bus operators. It doesn’t operate any bus or offer the service of transportation to the User. redBus also doesn’t act as an agent of any bus operator in the process of providing the above-mentioned technology platform services.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>2. The bus ticket booking voucher which redBus issues to a User is solely based on the information provided or updated by the bus operator regarding the seat availability.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>The amenities, services, routes, fares, schedule, bus type, seat availability and any other details pertaining to the bus service are provided by the respective bus operator and redBus has no control over such information provided by the bus operator.
              </Text>
              <Text style={{fontSize:16,fontWeight:'bold',marginHorizontal:70,marginTop:10}}>LIMITATION OF LIABILITY OF REDBUS
              </Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:10}}>In its role as a technology platform to enable transactions between the bus operators and the Users, redBus shall not be responsible for the operations of the bus operator including, but not limited to the following:
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>1. Timely departure or arrival of the bus;
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>2. The conduct of bus operator's employees, representatives or agents;
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>3. The condition of the bus, seats etc. not being up to the customer's expectation or as per the description provided by the bus operator;
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>4. Cancellation of the trip due to any reasons;
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>5. Loss or damage of the baggage of the customer;
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>6. The bus operator changing a customer's seat for any reason whatsoever;
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>7. Bus operator informing a wrong boarding point for the issuance of the booking confirmation voucher, or changing such boarding point eventually with or without any notification to redBus or the User;
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>8. Bus operator using a separate pick-up vehicle to transport the User from the designated boarding point to the actual place of departure of the bus.
              </Text>
              <Text style={{fontSize:16,fontWeight:'bold',marginHorizontal:50,marginTop:20}}>RESPONSIBILITIES OF THE USERS
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>1. Users are advised to call the bus operator to find out the exact boarding point, or any information which they may need for the purpose of boarding or travel in that trip.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>2. At the time of boarding the bus, Users shall furnish a copy of the ticket, and any valid identity proof like aadhar card, passport, PAN card or voter identification card or any other identity proof issued by a government authority.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>3. Users are required to reach the boarding place at least 30 minutes before the scheduled departure time.</Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>4. All tickets issued shall be non-transferable.
              </Text>
              <Text style={{fontSize:16,fontWeight:'bold',marginHorizontal:50,marginTop:20}}>CANCELLATION OF TICKET
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>Cancellation of tickets can be done either through the User’s login in the redBus’s website or mobile application, or by calling on the customer care number;
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:20}}>Any cancellation is subject to such cancellation charges as mentioned on the ticket.
              </Text>
              <Text style={{fontSize:16,fontWeight:'bold',marginHorizontal:50,marginTop:20}}>RESCHEDULING OF TICKET
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:20}}>1. escheduling (i.e. change of date of travel) of the tickets can be done through the User’s login in the redBus’s website or mobile application, or by reaching out to the customer support team;
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:20}}>2. Rescheduling is an option provided only by select bus operators. The policy for the same shall be available on the e-ticket.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:20}}>3. Rescheduling a ticket is subject to charges as mentioned on the e-ticket. Fare difference, if applicable, shall be borne by the customer.</Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:20}}>4. However, if the fare of the rescheduled ticket is lower than the current fare, the fare difference shall not be refunded.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:20}}>5. Rescheduling a ticket can be availed only once per booking, if applicable. Once the travel date change option is availed, the ticket cannot be further canceled.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:20}}>6. Tickets are non-transferrable and the originally booked passengers are to travel upon such rescheduling</Text>
              <Text style={{fontSize:16,fontWeight:'bold',marginHorizontal:50,marginTop:20}}>RYDE
              </Text>
              <Text style={{fontSize:15,fontWeight:'bold',marginHorizontal:70,marginTop:20}}>ROLE OF REDBUS
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:20}}>1. redBus only provides a technology platform that connects intending travelers with vehicle operators to hire an entire vehicle. It doesn’t operate any vehicle or offer the service of transportation to the User. Instead fulfilment of these bookings is done by operators who are empanelled with redBus. redBus also does not act as an agent of any bus or cab operator in the process of providing the above-mentioned technology platform services.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:20}}>2. The Vehicle booking details which redBus issues to a User is solely based on the information provided or updated by the vehicle operator.The amenities, services, fares, routes, schedule, vehicle type and any other details pertaining to the transportation service are provided by the respective vehicle operator and redBus has no control over such information provided by the operator or fulfillment of the same.
</Text>
<Text style={{fontSize:16,marginHorizontal:30,fontWeight:'bold',marginTop:10}}>LIMITATION OF LIABILITY OF REDBUS</Text>
<Text style={{fontSize:14,marginHorizontal:50,marginTop:10}}>In its role as a technology platform to enable transactions between the vehicle operators and the Users, under no circumstances can redBus be held liable for failure on part of a service provider to provide the User with a particular vehicle, the standard of service or any insufficiency in the services or any other service related issues including, but not limited to the following:
</Text>
<Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>1. Timely departure or arrival of the vehicle;
</Text>
<Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>2. The conduct and uniform of operator's employees, representatives or agents;
</Text>
<Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>3. The condition of the vehicle, seats etc. not being up to the customer's expectation or as per the description provided by the operator;
</Text>
<Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>4. Absence of amenities/ a welcome kit as per the description provided at the time of booking Cancellation of the trip by the vehicle operator due to any reasons ;
</Text>
<Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>5. Loss or damage of the baggage of the customer;
Vehicle operator using a separate pick-up vehicle to transport the User from the designated boarding point to the actual place of departure.
</Text>
<Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>6. If User chooses the name of the operator and the vehicle for booking, best effort shall be made to ensure that the same operator fulfils the booking and provides the matching vehicle as per User’s choice. 
</Text>
<Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>7. In cass of unavailability of the hired vehicle or where the vehicle breaks down during the journey, redBus may reach out to the concerned service provider to make arrangements for an alternate vehicle of a similar standard. User may reach out to ryde_complaints@redbus.in for any assistance.
</Text>
<Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>8. It is the sole liability of the vehicle operator to obtain all the relevant licenses, permits etc. to undertake the travel booked. In case of any cancellation of booking owing to absence of necessary licenses or permits by the vehicle operator, redBus shall not be liable in any manner.
</Text>







</ScrollView>
</View>
    );
};
export default App;