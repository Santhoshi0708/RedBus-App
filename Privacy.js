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
                  Privacy policy
                </Text>
              </View>
        
     <ScrollView contentContainerStyle={{paddingBottom:100}}>
            
              <Text style={{fontSize:16,fontWeight:'bold',margin:10,marginTop:20}}>Privacy Policy</Text>
              <Text style={{fontSize:16,fontWeight:'bold',marginHorizontal:30,marginTop:20}}>Introduction</Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:10}}>Ibibo Group Private Limited (hereinafter “redBus”) recognizes the importance of privacy of its users and also of maintaining confidentiality of the information provided by its users as a responsible data controller and data processer.</Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:10}}>This Privacy Policy provides for the practices for handling and securing user's Personal Information (defined hereunder) by redBus and its subsidiaries and affiliates.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:10}}>This Privacy Policy is applicable to any person (‘User’) who purchases, intends to purchase, or inquire about any product(s) or service(s) made available by redBus through any of redBus’s customer interface channels including its website, mobile site, mobile app & offline channels including call centers and offices (collectively referred herein as "Sales Channels").
              </Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:10}}>For the purpose of this Privacy Policy, wherever the context so requires "you" or "your" shall mean User and the term "we", "us", "our" shall mean redBus. For the purpose of this Privacy Policy, Website means the website(s), mobile site(s) and mobile app(s).

</Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:10}}>By using or accessing the Website or other Sales Channels, the User hereby agrees with the terms of this Privacy Policy and the contents herein. If you disagree with this Privacy Policy please do not use or access our Website or other Sales Channels.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:10}}>This Privacy Policy does not apply to any website(s), mobile sites and mobile apps of third parties, even if their websites/products are linked to our Website. User should take note that information and privacy practices of redBus’s business partners, advertisers, sponsors or other sites to which redBus provides hyperlink(s), may be materially different from this Privacy Policy. Accordingly, it is recommended that you review the privacy statements and policies of any such third parties with whom they interact.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:10}}>This Privacy Policy is an integral part of your User Agreement with redBus and all capitalized terms used, but not otherwise defined herein, shall have the respective meanings as ascribed to them in the User Agreement.

</Text>

              <Text style={{fontSize:14,marginHorizontal:30,marginTop:20,fontWeight:"bold"}}>USERS OUTSIDE THE GEOGRAPHICAL LIMITS OF INDIA
              </Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:10}}>Please note that the data shared with redBus shall be primarily processed in India and such other jurisdictions where a third party engaged by redBus may process the data on redBus’s behalf. By agreeing to this policy, you are providing redBus with your explicit consent to process your personal information for the purpose(s) defined in this policy. The data protection regulations in India or such other jurisdictions mentioned above may differ from those of your country of residence.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:10}}>If you have any concerns in the processing your data and wish to withdraw your consent, you may do so by writing to the following email id: privacy@redbus.com. However, if such processing of data is essential for us to be able to provide service to you, then we may not be able to serve or confirm your bookings after your withdrawal of consent. For instance, if you want to book a bus journey, then certain personal information of yours like contact details, gender, location details etc. may have to be shared by us with our bus operator and they may further process this information for making suitable arrangements for your journey.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:10}}>A withdrawal of consent by you for us to process your information may:
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>1. severely inhibit our ability to serve you properly and in such case, we may have to refuse the booking altogether, or
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}>2. unreasonably restrict us to service your booking (if a booking is already made) which may further affect your trip or may compel us to cancel your booking</Text>
              <Text style={{fontSize:14,marginHorizontal:30,marginTop:20,fontWeight:"bold"}}>TYPE OF INFORMATION WE COLLECT AND ITS LEGAL BASIS
              </Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:10}}>The information as detailed below is collected for us to be able to provide the services chosen by you and also to fulfill our legal obligations as well as our obligations towards third parties as per our User Agreement.

</Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:30}}>Personal Information" of User shall include the information shared by the User and collected by us for the following purposes:

</Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:30,}}>
Registration on the Website: Information which you provide while subscribing to or registering on the Website, including but not limited to information about your personal identity such as name, gender, age etc., your contact details such as your email address, postal addresses, telephone (mobile or otherwise) and/or fax numbers. The information may also include information such as your banking details (including credit/debit card) and any other information relating to your income and/or lifestyle; billing information payment history etc. (as shared by you).
</Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10}}></Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:10,fontWeight:"bold"}}>1. Other information: We many also collect some other information and documents including but not limited to:
              </Text>
              <Text style={{fontSize:14,marginHorizontal:90,marginTop:10}}>1. a)Transactional history (other than banking details) about your e-commerce activities, buying behavior.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:90,marginTop:10}}>2. b)Your usernames, passwords, email addresses and other security-related information used by you in relation to our Services.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:90,marginTop:10}}>3. c)Data either created by you or by a third party and which you wish to store on our servers such as image files, documents etc.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:90,marginTop:10}}>4. d)Data available in public domain or received from any third party including social media channels, including but not limited to personal or non-personal information from your linked social media channels (like name, email address, friend list, profile pictures or any other information that is permitted to be received as per your account settings) as a part of your account information.
              </Text>
              <Text style={{fontSize:14,marginHorizontal:90,marginTop:10}}>5. e)Information pertaining any other traveler(s) for who you make a booking through your registered redBus account. In such case, you must confirm and represent that each of the other traveler(s) for whom a booking has been made, has agreed to have the information shared by you disclosed to us and further be shared by us with the concerned service provider(s).</Text>
              <Text style={{fontSize:14,marginHorizontal:30,marginTop:30,fontWeight:'bold',fontWeight:"bold"}}>HOW WE USE YOUR PERSONAL INFORMATION
              </Text>
              <Text style={{fontSize:14,marginHorizontal:50,marginTop:10}}>The Personal Information collected maybe used in the following manner:
              </Text>
              <Text style={{fontSize:14,marginHorizontal:70,marginTop:20,fontWeight:"bold"}}>1. While making a booking:
              </Text>
              <Text style={{fontSize:14,marginHorizontal:60,marginTop:10}}>While making a booking, we may use Personal Information including, payment details which include cardholder name, credit/debit card number (in encrypted form) with expiration date, banking details, wallet details etc. as shared and allowed to be stored by you. We may also use the information of travelers list as available in or linked with your account. This information is presented to the User at the time of making a booking to enable you to complete your bookings expeditiously.

</Text>
              <Text style={{fontSize:14,marginHorizontal:60,marginTop:10,fontWeight:"bold"}}>2. We may also use your Personal Information for several reasons including but not limited to:
</Text>
              <Text style={{fontSize:14,marginHorizontal:90,marginTop:10}}>1. a)confirm your reservations with respective service providers;
              </Text>
              <Text style={{fontSize:14,marginHorizontal:90,marginTop:10}}>2.b)keep you informed of the transaction status;
              </Text>
              <Text style={{fontSize:14,marginHorizontal:90,marginTop:10}}>3.
c)send booking confirmations either via SMS or Whatsapp or any other messaging service;
</Text>
              <Text style={{fontSize:14,marginHorizontal:90,marginTop:10}}>4. d)send any updates or changes to your booking(s);
              </Text>
              <Text style={{fontSize:14,marginHorizontal:90,marginTop:10}}>5. e)allow our customer service to contact you, if necessary;
              </Text>
              <Text style={{fontSize:14,marginHorizontal:90,marginTop:10}}>6. f) customize the content of our website, mobile site and mobile app;
              </Text>
              <Text style={{fontSize:14,marginHorizontal:90,marginTop:10}}>7. g)request for reviews of products or services or any other improvements;
              </Text>
              <Text style={{fontSize:14,marginHorizontal:90,marginTop:10}}>8. h)send verification message(s) or email(s);
Validate/authenticate your account and to prevent any misuse or abuse.

</Text>

</ScrollView>
</View>
    );
};
export default App;      
   