import React, { useState,useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView,Image,FlatList} from 'react-native';
import { Portal, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const [status1, unstatus1] = useState('');
  const [status2, unstatus2] = useState('');
  const [visible, setVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');
 
  

  
  const menuData = {
    HOME: [
      {
        image: 'https://tse4.mm.bing.net/th?id=OIP.etiGJSdXxvyrjGe0xG1-cQHaD4&pid=Api&P=0&h=220',
        title: 'Welcome to redBus',
        description: 'redBus revolutionized the bus booking experience in India by offering a simple and reliable platform for travelers. With a vast network of operators, user-friendly features, and robust customer service, redBus has become the most trusted bus ticketing platform in the country. Enjoy hassle-free bookings, real-time tracking, and secure payments, all from the comfort of your home. Whether you’re traveling across states or within cities, redBus ensures a seamless journey from start to finish.'
      },
      {
        image: 'https://tse4.mm.bing.net/th?id=OIP.WQOEZ28IVIW-8WOYw51o6AHaEK&pid=Api&P=0&h=220',
        title: 'Explore India with redBus',
        description: 'Discover India’s diverse landscapes and cultural heritage with redBus. Our platform offers curated travel suggestions and routes that take you to scenic hill stations, vibrant cities, historical monuments, and serene beaches. Every trip booked with redBus is an opportunity to explore something new. Trust us to make your travel not just convenient but truly memorable.'
      },
      {
        image: 'https://tse3.mm.bing.net/th?id=OIP.9zUgd6iZb1QZCbo2sYpyYwHaFh&pid=Api&P=0&h=220',
        title: 'Why redBus is #1',
        description: 'redBus stands out due to its innovation, customer-centric approach, and wide network. From offering multiple payment options to enabling last-minute bookings and providing round-the-clock customer support, every feature is designed to offer peace of mind to the traveler. Our mission is to redefine how India travels by bus.'
      },
      {
        image: 'https://tse1.mm.bing.net/th?id=OIP.7C0FuFMmpaq1KM4SJ1mV8AHaDy&pid=Api&P=0&h=220',
        title: 'Trusted by Millions',
        description: 'With millions of happy customers and an ever-growing user base, redBus has established itself as a household name. Our app’s ease of use, reliable cancellations and refund policies, and transparent pricing models keep our customers coming back for every trip. We’ve grown with your trust, and we aim to continue delivering exceptional travel experiences.'
      },
      {
        image: 'https://tse3.mm.bing.net/th?id=OIP.81zC_bbuhcb6U-K406vvgQHaE6&pid=Api&P=0&h=220',
        title: 'Customer First Always',
        description: 'At redBus, the customer is at the heart of everything we do. From intuitive interfaces to constant app improvements, we value your feedback and implement suggestions that matter. Our live bus tracking, booking reminders, and multi-language support are all designed keeping you in mind. We’re not just booking tickets—we’re building journeys.'
      },
    ],
    FEATURED: [
      {
        image: 'https://tse3.mm.bing.net/th?id=OIP.42YzZXV5eJE_uclyO_M6WgHaE7&pid=Api&P=0&h=220',
        title: 'Festive Getaways',
        description: 'Make the most of long weekends and festivals by planning short trips with redBus. Whether it’s Holi in Mathura or Diwali in Jaipur, redBus makes travel during busy seasons smooth and stress-free. With early bird discounts and special offers, festive travel has never been easier.'
      },
      {
        image: 'https://tse4.mm.bing.net/th?id=OIP.Az2vSAu3CV67tRx8Ky9YxAHaFj&pid=Api&P=0&h=220',
        title: 'Street Food Trails',
        description: 'Explore the culinary delights of India with our curated list of cities famous for their street food. Hyderabad’s biryani stalls, Delhi’s chaat corners, and Kolkata’s kathi rolls are waiting to be savored. Our travel stories take you straight to the heart of local flavors and experiences.'
      },
      {
        image: 'https://tse1.mm.bing.net/th?id=OIP.twMI8weyahEtery95phyQgHaEK&pid=Api&P=0&h=220',
        title: 'Beachside Escapes',
        description: 'Feel the sand between your toes and soak in the coastal breeze with our recommendations for India’s most serene beach destinations. Travel to Goa, Gokarna, or Pondicherry using redBus and make your vacation both relaxed and affordable.'
      },
      {
        image: 'https://tse3.mm.bing.net/th?id=OIP.NZTUULV6pC_nJ82viC-BOgHaEK&pid=Api&P=0&h=220',
        title: 'Cafe Hopping in Hyderabad',
        description: 'Hyderabad is not just about pearls and biryani—it also boasts a growing café culture. From cozy book cafés to Instagrammable coffee spots, let redBus take you to the trendiest hangouts in town.'
      },
      {
        image: 'https://tse3.mm.bing.net/th?id=OIP.-6HBg6-DteeMIe5n57QvvwHaGU&pid=Api&P=0&h=220',
        title: 'Historic Himachal',
        description: 'Discover the untouched beauty of Himachal Pradesh’s historic temples, colonial architecture, and scenic mountain towns. redBus connects you to destinations like Shimla, Manali, and Dharamshala with utmost ease and comfort.'
      },
    ],
    'RTC BUSES': [
      {
        image: 'https://tse1.mm.bing.net/th?id=OIP.YnWn792dtel5NFlziQ1oBgHaES&pid=Api&P=0&h=220',
        title: 'TSRTC Hyderabad',
        description: 'Travel across Telangana with TSRTC’s efficient bus network. Choose from deluxe, express, and air-conditioned services that connect cities, towns, and rural areas. With redBus, find the best routes and book tickets in just a few taps.'
      },
      {
        image: 'https://tse3.mm.bing.net/th?id=OIP.jPaMgfBwjnSActhgOXkCCQHaFj&pid=Api&P=0&h=220',
        title: 'APSRTC Vijayawada',
        description: 'Andhra Pradesh’s RTC buses are known for their punctuality and coverage. redBus helps you explore destinations like Vizag, Tirupati, and Amaravati with APSRTC’s reliable services.'
      },
      {
        image: 'https://tse3.mm.bing.net/th?id=OIP.OGxNdnO9XFZdD5vYgm3wCQHaEf&pid=Api&P=0&h=220',
        title: 'KSRTC Kerala',
        description: 'Discover Kerala’s lush beauty through KSRTC. redBus offers online bookings for routes between Kochi, Thiruvananthapuram, and Wayanad—making your journey through God’s Own Country easy and scenic.'
      },
      {
        image: 'https://tse4.mm.bing.net/th?id=OIP.Ha3Hqp5UnOoDL0o5NLsHOAHaEK&pid=Api&P=0&h=220',
        title: 'MSRTC Maharashtra',
        description: 'Connecting bustling cities like Mumbai and Pune to hill stations like Mahabaleshwar, MSRTC is a traveler’s lifeline. Plan your weekend getaways effortlessly with redBus.'
      },
      {
        image: 'https://tse2.mm.bing.net/th?id=OIP.pBA3hH887ZueEHW47zwVVQHaEK&pid=Api&P=0&h=220',
        title: 'HRTC Himachal',
        description: 'Journey through Himachal Pradesh’s winding mountain roads with HRTC. Whether it’s Shimla, Spiti, or Kullu—redBus connects you with the best routes and bus options.'
      },
    ],
    'REDRAIL': [
      {
        image: 'https://tse2.mm.bing.net/th?id=OIP._yuRxyCHdWIs34OK7cNcewHaEK&pid=Api&P=0&h=220',
        title: 'Introducing redRail',
        description: 'With redRail, redBus now brings seamless train ticket bookings to your fingertips. No more waiting in lines or dealing with cumbersome websites—book, cancel, and manage your train journeys from the same app you trust for buses.'
      },
      {
        image: 'https://tse3.mm.bing.net/th?id=OIP.wpT5CGrB-GHPx7OKsWYNkAHaCb&pid=Api&P=0&h=220',
        title: 'PNR Status & Tracking',
        description: 'Stay informed with real-time PNR updates, train schedules, and live tracking via redRail. Our platform keeps you informed and on time, whether it’s a daily commute or a long-distance journey.'
      },
      {
        image: 'https://tse4.mm.bing.net/th?id=OIP.IuDOcSmym8uPrx5n0q68GAHaE8&pid=Api&P=0&h=220',
        title: 'IRCTC Integration',
        description: 'redRail is fully integrated with IRCTC, ensuring secure and official bookings. All your train tickets are synced with your IRCTC account, giving you peace of mind while planning your travel.'
      },
      {
        image: 'https://tse3.mm.bing.net/th?id=OIP.l8acGVliX5vh7RCDLJwaXAHaFI&pid=Api&P=0&h=220',
        title: 'Easy Train Discovery',
        description: 'Use redRail’s intelligent search to discover all available trains between any two cities, including seat availability, fare details, and timings—making your planning truly effortless.'
      },
      {
        image: 'https://tse1.mm.bing.net/th?id=OIP.Nbf0-n6dPEcfxFBhL8XuVQHaD4&pid=Api&P=0&h=220',
        title: 'Seamless Refunds & Support',
        description: 'Our train booking platform supports fast cancellations and refunds. Coupled with redBus support, your train journeys are now as smooth as our bus services.'
      },
    ],
    DESTINATIONS: [
      {
        image: 'https://tse1.mm.bing.net/th?id=OIP.nC19Twu7uGUjK8OsH7vH2AHaEf&pid=Api&P=0&h=220',
        title: 'Top Hill Stations',
        description: 'Escape the summer heat by traveling to India’s top hill stations with redBus. Shimla, Ooty, Darjeeling, and Mussoorie offer not only cool weather but also serene beauty. Let us take you there.'
      },
      {
        image: 'https://tse1.mm.bing.net/th?id=OIP.Jqoid0hkRm28GxuyPKsK9QHaDP&pid=Api&P=0&h=220',
        title: 'Cultural Hotspots',
        description: 'Visit Varanasi, Mysore, Udaipur, and more to soak in India’s rich cultural heritage. Our destination picks help you explore traditions, architecture, and history like never before.'
      },
      {
        image: 'https://tse2.mm.bing.net/th?id=OIP.lScharHK_oHON0WYTuu-_QHaEK&pid=Api&P=0&h=220',
        title: 'Pilgrimage Journeys',
        description: 'From Tirupati to Vaishno Devi, redBus makes religious travel safe and comfortable. Discover India’s spiritual essence with routes to top temples, churches, and shrines.'
      },
      {
        image: 'https://tse2.mm.bing.net/th?id=OIP.j-sbY5_jah_DeDZfFhvxQAHaEK&pid=Api&P=0&h=220',
        title: 'Desert Escapes',
        description: 'Jaisalmer and Bikaner offer sand dunes, camel rides, and royal forts. Our destination list takes you to the heart of Rajasthan’s golden desert.'
      },
      {
        image: 'https://tse1.mm.bing.net/th?id=OIP.-_u6N1n0dEqR7giUYjdyyQHaE8&pid=Api&P=0&h=220',
        title: 'Offbeat Locations',
        description: 'Explore unexplored gems like Ziro Valley, Spiti, and Gokarna. Perfect for backpackers and wanderers seeking something different from the regular tourist trail.'
      },
    ],
    'REDBUS INDIA BUS TRACK': [
      {
        image: 'https://tse4.mm.bing.net/th?id=OIP.XcuL2ISJ8KSlYZ6rrd-5TgHaEK&pid=Api&P=0&h=220',
        title: 'Quarterly BusTrack Report',
        description: 'redBus compiles detailed insights into intercity travel trends. Our BusTrack reports from October to December 2024 show increased mobility across southern states, with a growing preference for overnight travel.'
      },
      {
        image: 'https://tse2.mm.bing.net/th?id=OIP.kTlkYWIIEp2q1wnAC_El6wHaE8&pid=Api&P=0&h=220',
        title: 'Passenger Insights',
        description: 'We observed a surge in female solo travelers and senior citizens, which reflects rising trust in bus travel safety and convenience. Our tech-powered services ensure a secure ride for all.'
      },
      {
        image: 'https://tse2.mm.bing.net/th?id=OIP.GV0zd1RgJXwl84KKiD4hZgHaEK&pid=Api&P=0&h=220',
        title: 'Top Routes & Metrics',
        description: 'The Bengaluru-Chennai, Hyderabad-Vijayawada, and Pune-Mumbai routes remain the busiest. redBus data highlights punctuality improvements and better operator ratings.'
      },
      {
        image: 'https://tse1.mm.bing.net/th?id=OIP.4AGw3jVtuchVHy59BkqcVQHaEK&pid=Api&P=0&h=220',
        title: 'Technology Impact',
        description: 'Bus operators adopting live GPS tracking, digital check-ins, and e-tickets see higher customer satisfaction. redBus enables such smart integrations for every partner.'
      },
      {
        image: 'https://tse3.mm.bing.net/th?id=OIP.qbysTA6fX7U9gNclCwUEOAHaEK&pid=Api&P=0&h=220',
        title: 'Looking Ahead',
        description: 'With increasing travel demand and digitization, redBus aims to expand smart bus terminals, AI-based prediction tools, and multimodal integrations with rail and flight networks.'
      },
    ],
    NEWS: [
      {
        title: "RedBus Launches Women Safety Campaign",
        image: "https://tse3.mm.bing.net/th?id=OIP.PrqKeun-RA2XdRaWDceIwwHaDh&pid=Api&P=0&h=220",
        description:
          "RedBus has introduced a new safety initiative focusing on women travelers. The campaign includes emergency contact support, female-only seats, and real-time tracking features. This is part of their ongoing efforts to make travel more inclusive and secure, particularly for solo women passengers traveling long distances at night."
      },
      {
        title: "RedRail Integrates With IRCTC",
        image: "https://tse3.mm.bing.net/th?id=OIP.9OZbwQ0Z_etUobfWg9V-1wHaHa&pid=Api&P=0&h=220",
        description:
          "RedBus’ train booking platform, RedRail, has now been fully integrated with IRCTC. This integration allows users to check PNR status, train timings, and seat availability directly within the RedBus app. The company stated that this partnership enhances accessibility and ensures a seamless ticket booking experience."
      },
      {
        title: "Real-Time Bus Tracking Launched Across Major Cities",
        image: "https://images.unsplash.com/photo-1510070009289-b5bc34383727",
        description:
          "RedBus has launched its real-time bus tracking feature across major Indian cities, including Delhi, Mumbai, and Bengaluru. The new update provides accurate ETA, live bus location on the map, and notifications for boarding and drop-off points. This aims to improve customer satisfaction and reduce wait-time anxiety."
      },
      {
        title: "RedBus Offers Festive Season Discounts",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
        description:
          "In anticipation of the festive season, RedBus has announced major discounts and coupon offers on bookings made through their app. Travelers can avail up to 25% off on select routes, especially during Diwali and Christmas holidays. The campaign is designed to encourage early bookings and reward loyal customers."
      },
      {
        title: "Green Travel Initiative Rolled Out",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
        description:
          "RedBus has partnered with several travel operators to introduce electric buses on selected intercity routes. This step is part of their Green Travel Initiative to reduce carbon emissions. The eco-friendly buses feature zero-emission engines, improved comfort, and on-board amenities, aligning with RedBus’ commitment to sustainability."
      },  
      ]
  };
  
  
  
  return (
    <Provider>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 60 }}>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Icon name="close" size={25} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', paddingLeft: 15 }}>
            redBus Blog
          </Text>
        </View>

        <ScrollView  keyboardShouldPersistTaps="handled">
          <View style={{ backgroundColor: 'red', height: 150, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Trending Now</Text>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', marginTop: 10 }}>
              #women travellers   #women safety
            </Text>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', marginTop: 10 }}>
              #what is RAC  #western ghats
            </Text>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', marginTop: 10 }}>
              #west bengal tourism
            </Text>
          </View>

          <View style={{ backgroundColor: 'white', alignItems: 'center', paddingVertical: 30 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'red' }}>redBus Blog</Text>
            <Text style={{ fontSize: 16, color: 'grey', marginTop: 15 }}>redBus-Easiest way to Buy Bus and Train</Text>
            <Text style={{ fontSize: 16, color: 'grey', marginTop: 10 }}>Tickets online in India</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
              <TouchableOpacity onPress={() => { unstatus1(status1 === 'clicked' ? 'unclicked' : 'clicked'); setVisible(!visible) }}>
                <Text style={{ fontSize: 20, color: status1 === 'clicked' ? 'red' : 'black' }}>Search</Text>
              </TouchableOpacity>
              <Icon name="magnify" size={30} color="black" style={{ marginHorizontal: 10 }} />
              <TouchableOpacity
                style={{ borderColor: 'black', borderRadius: 25, borderWidth: 1, height: 40, width: 40, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}
                onPress={() => unstatus2(status2 === 'clicked' ? 'unclicked' : 'clicked')}
              >
                <Icon name={status2 === 'clicked' ? "white-balance-sunny" : "moon-waning-crescent"} size={25} color={status2 === 'clicked' ? 'red' : 'black'} />
              </TouchableOpacity>
            </View>

            <Portal>
              {visible && (
                <View style={{
                  position: 'absolute',
                  top: '40%',
                  left: '5%',
                  right: '5%',
                  backgroundColor: 'white',
                  padding: 20,
                  borderRadius: 10,
                  elevation: 5
                }}>
                  <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                      <Icon name="close" size={25} color="black" />
                    </TouchableOpacity>
                  </View>
                  <TextInput
                    placeholder='Search...'
                    style={{
                      borderColor: 'orange',
                      borderWidth: 1,
                      paddingVertical: 10,
                      paddingHorizontal: 15,
                      marginTop: 10
                    }}
                    placeholderTextColor={'grey'}
                  />
                  <TouchableOpacity
                    style={{
                      width: '40%',
                      height: 50,
                      backgroundColor: 'red',
                      borderRadius: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 20,
                      alignSelf: 'center'
                    }}
                  >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Search</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Portal>

            <View style={{ width: '100%', marginTop: 20 ,alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity
                style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 20 }}
                onPress={() => setShowDropdown(!showDropdown)}
              >
                <Icon name="menu" size={24} color="black" />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Menu</Text>
              </TouchableOpacity>

              {showDropdown && (
                <View style={{ backgroundColor: 'white', width: '90%', maxWidth: 500, alignSelf: 'center', borderRadius: 8 }}>
                  {['HOME', 'FEATURED', 'RTC BUSES', 'REDRAIL', 'NEWS', 'DESTINATIONS', 'REDBUS INDIA BUS TRACK'].map((item) => (
                    <TouchableOpacity key={item} style={{ paddingVertical: 8 }} onPress={() => setSelectedMenu(item)}>
                      <Text style={{ fontSize: 16, fontWeight: 'bold', color: selectedMenu === item ? 'red' : 'black', textAlign: 'center' }}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </View>
          <View style={{ marginVertical: 20, margin: 20, alignItems: 'center', justifyContent: 'center' }}>
  <Image source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.XcuL2ISJ8KSlYZ6rrd-5TgHaEK&pid=Api&P=0&h=220' }} style={{ height: 150, width: '100%' }} />
  <Text style={{ fontSize: 16, fontWeight: 'bold', }}>RedBus India BusTrack Report:</Text>
  <Text style={{ fontSize: 14,marginTop:5 }}>
    <Text style={{ fontWeight: 'bold',fontSize:14, }}>This report highlights redBus travel statistics from October to December 2024.</Text> It showcases the demand for bus travel across various Indian states, with Andhra Pradesh leading in rural travel numbers. The data offers insight into passenger behavior and popular travel corridors. Such reports help companies prepare for peak season and improve route management. It also enables better facilities planning for long-distance travelers.
  </Text>
</View>

<View style={{ marginVertical: 20, margin: 20, alignItems: 'center', justifyContent: 'center' }}>
  <Image source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.-vBdxNfUF4akQRWcPRI5GQHaE8&pid=Api&P=0&h=220' }} style={{ height: 150, width: '100%' }} />
  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Famous Street Food in Hyderabad</Text>
  <Text style={{ fontSize: 14,marginTop:5 }}>
    <Text style={{ fontWeight: 'bold' }}>Hyderabad is a paradise for street food lovers.</Text> From spicy Mirchi Bajjis to crispy samosas and sweet Qubani ka Meetha, the city offers endless choices. Near Charminar and Abids, you’ll find food carts serving authentic Hyderabadi flavors. The food scene here is both affordable and deeply rooted in local culture. Don’t forget to try Irani chai with Osmania biscuits at one of the iconic cafes.
  </Text>
</View>

<View style={{ marginVertical: 20, margin: 20, alignItems: 'center', justifyContent: 'center' }}>
  <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.9zUgd6iZb1QZCbo2sYpyYwHaFh&pid=Api&P=0&h=220' }} style={{ height: 150, width: '100%' }} />
  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Top Cafes in Hyderabad</Text>
  <Text style={{ fontSize: 14,marginTop:5 }}>
    <Text style={{ fontWeight: 'bold' }}>Hyderabad’s cafe culture blends tradition and trend.</Text> Whether you're at Jubilee Hills or Banjara Hills, you'll find cafes with creative interiors and cozy nooks. Many serve fusion snacks, great coffee, and even Hyderabadi dishes with a modern twist. These spots are popular among youth, couples, and freelancers. Rooftop cafes offer a relaxing vibe with city views, especially during sunset.
  </Text>
</View>

<View style={{ marginVertical: 20, margin: 20, alignItems: 'center', justifyContent: 'center' }}>
  <Image source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.tz_YeRiQ2X5rRweGx3c0zQHaED&pid=Api&P=0&h=220' }} style={{ height: 150, width: '100%' }} />
  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>A Joyous Affair: Holi Long Weekend</Text>
  <Text style={{ fontSize: 14 ,marginTop:5}}>
    <Text style={{ fontWeight: 'bold' }}>Celebrate Holi with unforgettable travel plans.</Text> The long weekend is perfect for road trips to scenic spots across India. From beach parties in Goa to cultural events in Vrindavan, options are endless. Holi adds color not only to faces but also to travel memories. redBus helps you book festive trips with ease, covering popular routes and tourist-friendly services.
  </Text>
</View>

<View style={{ marginVertical: 20, margin: 20, alignItems: 'center', justifyContent: 'center' }}>
  <Image source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.WQOEZ28IVIW-8WOYw51o6AHaEK&pid=Api&P=0&h=220' }} style={{ height: 150, width: '100%' }} />
  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Beach Destinations Near Bangalore</Text>
  <Text style={{ fontSize: 14,marginTop:5 }}>
    <Text style={{ fontWeight: 'bold' }}>Take a coastal break from the hustle of Bangalore.</Text> Places like Gokarna, Udupi, and Mangalore are just a few hours away and offer serene beaches and temples. Whether you're looking for relaxation or water sports, these spots have it all. redBus provides daily buses for coastal travel with safe and timely services. Ideal for weekend getaways or short breaks with friends and family.
  </Text>
</View>

<View style={{ marginVertical: 20, margin: 20, alignItems: 'center', justifyContent: 'center' }}>
  <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.81zC_bbuhcb6U-K406vvgQHaE6&pid=Api&P=0&h=220' }} style={{ height: 180, width: '100%' }} />
  <Text style={{ fontSize:16, fontWeight: 'bold' }}>Street Food in Kolkata</Text>
  <Text style={{ fontSize: 14,marginTop:5 }}>
    <Text style={{ fontWeight: 'bold' }}>Kolkata’s food streets are a blend of spice and soul.</Text> Try the famous Puchkas, Kathi rolls, and fish fry at iconic street stalls. College Street and Park Street are always buzzing with locals and tourists. The flavors are bold, affordable, and truly Bengali. Evening strolls with a plate in hand are the essence of Kolkata life.
  </Text>
</View>

<View style={{ marginVertical: 20, margin: 20, alignItems: 'center', justifyContent: 'center' }}>
  <Image source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.7C0FuFMmpaq1KM4SJ1mV8AHaDy&pid=Api&P=0&h=220' }} style={{ height: 150, width: '100%' }} />
  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Historical Places in Himachal Pradesh</Text>
  <Text style={{ fontSize: 14,marginTop:5 }}>
    <Text style={{ fontWeight: 'bold'}}>Explore the rich history tucked in Himachal’s valleys.</Text> From ancient temples in Chamba to British-era architecture in Shimla, each site tells a story. The monasteries in Spiti and palaces in Kangra reflect diverse cultural roots. Scenic drives and mountain air add to the experience. Ideal for heritage lovers and spiritual travelers.
  </Text>
</View>

      <FlatList
        data={menuData[selectedMenu]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ margin: 20, alignItems: 'center' }}>
            <Image source={{ uri: item.image }} style={{ height: 150, width: '100%', borderRadius: 10 }} />
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 10 }}>{item.title}</Text>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>{item.description}</Text>
          </View>
        )}
      />
      <View style={{backgroundColor:'black',height:190,width:'100%',alignItems:'center',justifyContent:'flex-end',}}>
           <Text style={{color:'white',fontSize:16,textAlign:'center'}}>Color Magzine | Theme: color Magzine by </Text>
           <Text style={{color:'red',fontSize:16,textAlign:'center'}}>Mystery Themes<Text style={{color:'white'}}>.</Text></Text>
      </View>
        </ScrollView>
      </View>
    </Provider>
  );
};

export default App;
