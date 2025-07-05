import React,{useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Divider, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from "react-native-youtube-iframe";



const App = ({ navigation }) => {
    const [feedback, setFeedback] = useState(null); // 'positive' | 'negative' | null

  const handleFeedback = (type) => {
    setFeedback(type);
  };
    return (
                <View style={{flex:1}}>
         <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60, paddingRight: 50, borderColor: 'red', borderBottomWidth: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('TF')}>
                    <Icon name="arrow-left" size={25} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>FAQ</Text>
            </View>
        <ScrollView contentContainerStyle={{}}>
           
            <Text style={{fontSize:22,fontWeight:'bold',marginTop:20,paddingHorizontal:20}}>What is the tatkal booking window for redRail?</Text>
            <Text style={{ fontSize:18,marginTop:20,paddingHorizontal:20}}>Tatkal E-ticket can be booked one day in advance for selected trains, excluding the departure date of the train from the departure station. It can be booked from 10:15 on the opening day for AC class 1A/2A/3A/CC/EC/3E and from 11:15 for non AC class SL/FC/2S.
              
            </Text>
          <View style={{ alignItems: 'center', justifyContent: 'center',marginTop:20  }}>
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