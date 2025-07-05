import React,{useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Divider, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



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
                <TouchableOpacity onPress={() => navigation.navigate('TR')}>
                    <Icon name="arrow-left" size={25} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>FAQ</Text>
            </View>
        <ScrollView contentContainerStyle={{}}>
            
            <Text style={{fontSize:25,fontWeight:'bold',marginTop:20,paddingHorizontal:20}}>Are there any cancellation charges levied when a bus ticket is canceled?
            </Text>
          <Text style={{ fontSize: 20, color: 'black', marginBottom: 15,marginTop:20,marginHorizontal:20}}>Cancellation charges are levied as per the Cancellation Policy of the bus. These polocies can differ from service to service.All charges will be processed as per the terms and conditions mentioned in the Cancellation Policy.</Text>
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