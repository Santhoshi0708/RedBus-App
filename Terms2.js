import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Portal, Modal, Button } from 'react-native-paper';

const CMRLTermsModal = () => {
  const [visible, setVisible] = useState(false);
  const { height } = Dimensions.get('window');

  return (
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 60,backgroundColor:'red' }}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="close" size={25} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 15 }}>
                                      Terms and Conditions
                                    </Text>
                                  </View>
          <ScrollView showsVerticalScrollIndicator={true}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Terms and Conditions for Booking CMRL Metro Ticket on ONDC</Text>

            <Text style={{ marginBottom: 10 }}>
              Tickets once sold cannot be cancelled or refunded. In case a customer did not receive the ticket, they can reach out to customer care.
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Please refer to Do's and Don’ts in the link https://chennaimetrorail.org/dos-and-donts/ before booking your ticket.
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Please refer to Items forbidden to carry before booking your ticket: https://chennaimetrorail.org/wp-content/uploads/2015/11/Dangerous_and_offencive_materials.pdf
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Please refer to penalties before booking metro ticket: https://chennaimetrorail.org/wp-content/uploads/2018/09/O-M-penalty.pdf
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Please refer to metro Railway ticket rules: https://chennaimetrorail.org/wp-content/uploads/2018/09/Metro-Railways-Carriage-Ticket-Rules-2018.pdf
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Validity of QR ticket is at the end of the business day. Once Entry is done, passengers should exit within 120 mins from the destination. For Exit at Source station, Passenger should exit within 20 mins from the time of entry.
            </Text>
            <Text style={{ marginBottom: 10 }}>
              Tickets cannot be booked before and after Booking Hours. For Single Journey and Group QR Ticket, a single QR can be used only for one entry and exit.
            </Text>
            <Text style={{ marginBottom: 10 }}>
              CMRL Business Hours: 04:30 to 23:30
            </Text>
            <Text style={{ marginBottom: 10 }}>
              CMRL Booking Hours (Online): 04:30 to 22:30
            </Text>

            <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>FAQs</Text>

            <Text style={{ marginBottom: 10 }}>
              1. The Chennai Metro Rail Project is implemented through a Special Purpose Vehicle named “Chennai Metro Rail Limited” (CMRL), incorporated in 2007. It is a Joint Venture of Government of India and Tamil Nadu.
            </Text>

            <Text style={{ marginBottom: 10 }}>
              2. It is a Joint Venture project with equal equity holding by Central and State Government.
            </Text>

            <Text style={{ marginBottom: 10 }}>
              3. The CMRL Board includes a Chairman, Managing Director, and 8 Directors, equally nominated by both governments.
            </Text>

            <Text style={{ marginBottom: 10 }}>
              4. Registered office: CMRL Depot, Poonamallee High Road, Koyambedu, Chennai - 600107. Phone: +91–44–23792000, Email: chennaimetrorail@gmail.com
            </Text>

            <Text style={{ marginBottom: 10 }}>
              5. Website: www.chennaimetrorail.gov.in, Email: chennaimetrorail@gmail.com
            </Text>

            <Text style={{ marginBottom: 10 }}>
              6. Travel media include Travel Cards, Paper QR tickets, Mobile QR tickets, and Singara Chennai cards.
            </Text>

            <Text style={{ marginBottom: 10 }}>
              7. Travel cards can be purchased and personalized at CMRL ticket counters.
            </Text>

            <Text style={{ marginBottom: 10 }}>
              8. Paper QR tickets are available at metro station counters.
            </Text>

            <Text style={{ marginBottom: 10 }}>
              9. Mobile QR tickets can be obtained via CMRL App, WhatsApp (83000 86000), PayTM, PhonePe, and ONDC apps.
            </Text>

            <Text style={{ marginBottom: 10 }}>
              10. Singara Chennai cards are issued after filling a form via QR code at key stations (e.g., Koyambedu, Airport, Alandur, etc).
            </Text>

            <Text style={{ marginBottom: 10 }}>
              11. For issues, contact CMRL helpline: 044 2437 8000 or 1860-425-1515, Email: chennaimetrorail@cmrl.in
            </Text>

            <Text style={{ marginBottom: 20 }}>
              12. If money is debited and no ticket is generated, it will be refunded within 5–7 business days. Contact CMRL if not received.
            </Text>

           
          </ScrollView>
    </View>
  );
};

export default CMRLTermsModal;
