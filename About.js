import Raect from 'react';
import {View,Text,TextInput,TouchableOpacity,Image,Linking,Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const App=({navigation})=>{

    const Data = [
        { icon1:'file-document-outline', label: 'Blog', icon2: 'chevron-right', nav: 'Blog' },
        { icon1: 'share-variant', label: 'Share with friends', icon2: 'chevron-right', onPress:openWhatsApp},
        { icon1: 'shield-alert-outline', label: 'Privacy policy', icon2: 'chevron-right', nav: 'Privacy' },
        { icon1: 'alert-circle-outline', label: 'Terms and conditions', icon2: 'chevron-right', nav: 'Terms' },
        { icon1: 'alert-circle-outline', label: 'User Agreement', icon2: 'chevron-right', nav: 'User_Agreement' },
        { icon1: 'alert-circle-outline', label: 'Licenses', icon2: 'chevron-right', nav: 'License' },
      ];
      function openWhatsApp() {
  const url = 'whatsapp://';
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        Alert.alert('Error', 'WhatsApp is not installed on your device');
      }
    })
    .catch((err) => console.error('An error occurred', err));
}
    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 60, }}>
                <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
                  <Icon name="arrow-left" size={25} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', paddingLeft: 15 }}>
                  About redBus
                </Text>
              </View>
     <ScrollView contentContainerStyle={{paddingBottom:100}}>
        
<View style={{alignItems: 'center', justifyContent: 'center'}}>
  <Image
    source={require('../Images/logo.png')}
    style={{
      height: 130,
      width: 130,
      borderRadius: 80,
      backgroundColor: 'red',
    }}
  />
</View>
      <Text style={{fontSize:14,paddingBottom:20,marginTop:20,padding:20}}>We are redBus - world's largest online bus-ticketing organization. At redBus, you can check bus schedules, select your favorite bus, view seat layout, pay and get your bus ticket - All with a few clicks of your mouse or a few taps on your phone! redBus has over 36 million happy customers with 3500+ operators and has sold more than 220 million tickets globally! Book with us for a quick and hassle-free bus booking experience!</Text>
             {Data.map((item, index) => (
               <TouchableOpacity
                 key={index}
                 onPress={() => item.onPress ? item.onPress() : navigation.navigate(item.nav)}
                 style={{
                   backgroundColor: 'white',
                   height: 50,
                   flexDirection: 'row',
                   alignItems: 'center',
                   justifyContent: 'space-between',
                   paddingHorizontal: 15,
                   marginHorizontal: 10,
                   marginTop:5,
                   height:60
                 }}
               >
                 <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                   <Icon name={item.icon1} size={30} color="black" />
                   <Text style={{ fontSize: 18 ,}}>{item.label}</Text>
                 </View>
                 <Icon name={item.icon2} size={30} color="black" />
               </TouchableOpacity>
             ))}
             <Text style={{textAlign:'center',fontSize:20,marginTop:20,color:'grey'}}>V24.2.6</Text>
     </ScrollView>
     </View>
    );
};
export default App;
