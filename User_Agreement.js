import Raect from 'react';
import {View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const App=({navigation})=>{

    return(
                <View style={{flex:1}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 60, backgroundColor:'red'}}>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Icon name="close" size={25} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 15 }}>
                  User Agreement
                </Text>
              </View>
        
     <ScrollView contentContainerStyle={{paddingBottom:100}}>
            
              <Text style={{fontSize:20,fontWeight:'bold',marginHorizontal:30,marginTop:20}}>1. APPLICABILITY</Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>1. This User Agreement along with Terms of Service (collectively, the "User Agreement”) forms the terms and conditions for the use of services and products of redBus, which is a brand owned, managed and operated by IBIBO Group Private Limited</Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>2. Any person ("User") who inquiries about or purchases any products or services of redBus through its websites, mobile applications, sales persons, offices, call centers, branch offices, franchisees, agents etc. (all the aforesaid platforms collectively referred to as “Sales Channels”) agree to be governed by this User Agreement. The websites and the mobile applications of redBus are collectively referred to as ‘Website’.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>3. Both User and redBus are individually referred to as 'Party' and collectively referred to as 'Parties' to the User Agreement.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>4. “Terms of Service” available on redBus’s website details out terms & conditions applicable on various services or products enabled by redBus.</Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>5. The User should refer to the relevant Terms of Service applicable for the given product or service as booked by the User. Such Terms of Service are binding on the User.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:30,marginTop:10,fontWeight:'bold'}}>ELIGIBILITY TO USE
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>1. The User must be atleast 18 years of age and must possess the legal authority to enter into an agreement so as become a User and use the services of redBus. If you are a minor or are below the age of 18 years, you shall not register as a User of the Website and shall not transact on or use the Website.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>2. As a minor if you wish to use or transact on the Website, such use or transaction shall only be made by a person of legal contracting age (legal guardian or parents). We reserve the right to terminate your membership and/or block access to the Website if it is discovered that you are a minor or incompetent to contract according to the law or any information pertaining to your age entered at the time of creation of account is false.
Before using the Website, approaching any Sales Channels or procuring the services of redBus, the Users shall compulsorily read and understand this User Agreement, and shall be deemed to have accepted this User Agreement as a binding document that governs User’s dealings and transactions with redBus. If the User does not agree with any part of this Agreement, then the User must not avail redBus's services and must not access or approach the Sales Channels of redBus.
</Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>3. All rights and liabilities of the User and redBus with respect to any services or product enabled by redBus shall be restricted to the scope of this User Agreement.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:30,marginTop:10}}>CONTENT</Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>1. All content provided through various Sales Channels, including but not limited to audio, images, software, text, icons and such similar content ("Content"), are registered by redBus and protected under applicable intellectual property laws. User cannot use this Content for any other purpose, except as specified herein.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>2. User agrees to follow all instructions provided by redBus which will prescribe the way such User may use the Content.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>3. There are a number of proprietary logos, service marks and trademarks displayed on the Website and through other Sales Channels of redBus, as may be applicable. redBus does not grant the User a license, right or authority to utilize such proprietary logos, service marks, or trademarks in any manner. Any unauthorized use of the Content, will be in violation of the applicable law.
              </Text>
              <Text style={{fontSize:16,fontWeight:'bold',marginHorizontal:30,marginTop:10}}>WEBSITE</Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>1. The Website is meant to be used by bonafide User(s) for a lawful use.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>2. User shall not distribute exchange, modify, sell or transmit anything from the Website, including but not limited to any text, images, audio and video, for any business, commercial or public purpose.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>3. he User Agreement grants a limited, non-exclusive, non-transferable right to use this Website as expressly permitted in this User Agreement. The User agrees not to interrupt or attempt to interrupt the operation of the Website in any manner whatsoever.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>4. Access to certain features of the Website may only be available to registered User(s). The process of registration, may require the User to answer certain questions or provide certain information that may or may not be personal in nature. Some such fields may be mandatory or optional. User represents and warrants that all information supplied to redBus is true and accurate.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>5. redBus reserves the right, in its sole discretion, to terminate the access to the Website and the services offered on the same or any portion thereof at any time, without notice, for general maintenance or any other reason whatsoever.
redBus will always make its best endeavors to ensure that the content on its websites or other sales channels are free of any virus or such other malwares. However, any data or information downloaded or otherwise obtained through the use of the Website or any other Sales Channel is done entirely at the User’s own discretion and risk and they will be solely responsible for any damage to their computer systems or loss of data that may result from the download of such data or information.
</Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>6. redBus reserves the right to periodically make improvements or changes in its Website at any time without any prior notice to the User.
User(s) are requested to report any content on the Website which is deemed to be unlawful, objectionable, libelous, defamatory, obscene, harassing, invasive to privacy, abusive, fraudulent, against any religious beliefs, spam, or is violative of any applicable law to report@redBus.com. On receiving such report, redBus reserves the right to investigate and/or take such action as the Company may deem appropriate.
</Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>7. User(s) shall not host, display, upload, publish, transmit or share any information on redBus’s website or app which:belongs to another person and to which the User does not have any right;is obscene, pornographic, paedophilic, invasive of another’s privacy including bodily privacy, insulting or harassing on the basis of gender, racially or ethnically objectionable, relating or encouraging money laundering or gambling, or promoting enmity between different groups on the grounds of religion or caste with the intent to incite violence;
is harmful to child;infringes any patent, trademark, copyright or other proprietary rights;deceives or misleads the addressee about the origin of the message or knowingly and intentionally communicates any misinformation or information which is patently false and untrue or misleading in nature;
impersonates another person;threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign States, or public order, or causes incitement to the commission of any cognisable offence, or prevents investigation of any offence, or is insulting other nation;contains software virus or any other computer code, file or program designed to interrupt, destroy or limit the functionality of redBus’s platform;
violates any law for the time being in force;

              </Text>
              <Text style={{fontSize:16,marginHorizontal:30,marginTop:20,fontWeight:'bold'}}>PROCEDURE TO REPORT OBJECTIONABLE/INFRINGING CONTENT
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>1. User(s) can report any content on the Website/App which is deemed to be unlawful, objectionable, libelous, defamatory, obscene, harassing, invasive to privacy, abusive, fraudulent, against any religious beliefs, spam, or is violative of any applicable law.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>2. If the individual is of the view that any content on or listings on redBus contains any objectionable or infringing content, User(s) may fill out and submit the at ipr@go-mmt.com. redBus shall endeavor to review all complete and valid complaints within the prescribed timeframe under applicable law.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>3. The information shared as part of the complaint shall a) clearly identify the violations b) Location of the material on the Website, including but not limited to the link of the infringing material c) In case of any IP violations, proof of ownership of such IP and d) contact information
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>4. Complainant consents that redBus shall share the contents of any complaint with necessary third parties including without limitation the accused parties involved to determine the respective rights and liabilities against any allegedly illegal content.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>5. redBus shall make commercially reasonable efforts to resolve all content related complaints within the time period prescribed under applicable law provided that:
Complainant shall provide all relevant information and supporting documentation requested by redBus to enable redBus to evaluate the complaint; and,
redBus acts in good faith in the determination of any complaint and shall not be liable, in any manner whatsoever, for any act or omission of redBus pursuant to such complaint, and no such act or omission shall be construed to be an admission of any liability. All of redBus’s rights in such matters are fully reserved. redBus does not provide any guarantee or warranty in respect of the outcome of any
</Text>
              <Text style={{fontSize:16,marginHorizontal:30,marginTop:10,fontWeight:'bold'}}>BOOKINGS BY TRAVEL AGENTS:
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>1. Except with the prior registration with redBus as B2B agents, priority partner or a franchisee, and explicit permission of redBus to use the Website, all travel agents, tour operators, consolidators or aggregators (“Travel Agents”) are barred from using this Website for any commercial or resale purpose. If any such bookings are detected, redBus reserves the right, including without limitation, to cancel all such bookings immediately without any notice to such travel agents and also to withhold payments or any refunds thereto. redBus shall not be held liable for any incidental loss or damage that may arise from the bookings made by any person through such Travel Agents. The liability in case of such cancellations shall be solely borne by such Travel Agents.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>2. All discounts and offers mentioned on the Website are applicable only to the User(s) of redBus for legitimate bookings.
LIMITED LIABILITY OF REDBUS
Unless redBus explicitly acts as a reseller in certain scenarios, redBus always acts as an online technology platform by connecting the User with the respective service providers like bus operators etc. (collectively referred to as “Service Providers”). redBus’s liability is limited to providing the User with a confirmed booking as selected by the User.
</Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>3. Any issues or concerns faced by the User at the time of availing any such services shall be the sole responsibility of the Service Provider. redBus will have no liability with respect to the acts, omissions, errors, representations, warranties, breaches or negligence on part of any Service Provider.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>4. Unless explicitly committed by redBus as a part of any product or service:
redBus assumes no liability for the standard of services as provided by the respective Service Providers.
</Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>5. redBus provides no guarantee with regard to their quality or fitness as represented.
redBus doesn’t guarantee the availability of any services as listed by a Service Provider.
</Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>6. By making a booking, User understands redBus merely provides a technology platform for booking of services and products and the ultimate liability rests on the respective Service Provider and not redBus. Thus the ultimate contract of service is between User and Service Provider.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10,fontWeight:'bold'}}>USER’S RESPONSIBILITY
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>1. Users are advised to check the description of the services and products carefully before making a booking. User(s) agree to be bound by all the conditions as contained in booking confirmation or as laid out in the confirmed booking voucher. These conditions are also to be read in consonance with the User Agreement.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>2. These conditions are also to be read in consonance with the User Agreement.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>3. If a User intends to make a booking on behalf of another person, it shall be the responsibility of the User to inform such person about the terms of this Agreement, including all rules and restrictions applicable thereto.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>4. The User undertakes to abide by all procedures and guidelines, as modified from time to time, in connection with the use of the services available through redBus. The User further undertakes to comply with all applicable laws, regulations, orders, directions etc. issued by either the Central Government, State Government, District Authorities or any other statutory body empowered to do so w.r.t use of services or for each transaction.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>5. The services are provided on an"as is" and"as available" basis. redBus may change the features or functionality of the services being provided at any time, in its sole discretion, without any prior notice. redBus expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, reasonably fit for all purposes. No advice or information, whether oral or written, which the User obtains from redBus or through the services opted shall create any warranty not expressly made herein or in the terms and conditions of the services.
              </Text>
              <Text style={{fontSize:16,marginHorizontal:50,marginTop:10}}>6. User also authorizes redBus’s representative to contact such user over phone, message and email. This consent shall supersede any preferences set by such User through national customer preference register (NCPR) or any other similar preferences.
              </Text>

      </ScrollView>
      </View>
    );
};
export default App;        