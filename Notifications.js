import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Portal, Provider, IconButton, RadioButton,ToggleButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
     const [status1, setStatus1] = React.useState('unchecked');
     const [status2, setStatus2] = React.useState('unchecked');
     const [status3, setStatus3] = React.useState('unchecked');
     const [status4, setStatus4] = React.useState('unchecked');
     const [status5, setStatus5] = React.useState('unchecked');
     const [status6, setStatus6] = React.useState('unchecked');
     const [status7, setStatus7] = React.useState('unchecked');
     const [status8, setStatus8] = React.useState('unchecked');

      const onButtonToggle1 = () => {
        setStatus1(status1 === 'checked' ? 'unchecked' : 'checked');
      };
      const onButtonToggle2 = () => {
        setStatus2(status2 === 'checked' ? 'unchecked' : 'checked');
      };
      const onButtonToggle3 = () => {
        setStatus3(status3 === 'checked' ? 'unchecked' : 'checked');
      };
      const onButtonToggle4 = () => {
        setStatus4(status4 === 'checked' ? 'unchecked' : 'checked');
      };
      const onButtonToggle5 = () => {
        setStatus5(status5 === 'checked' ? 'unchecked' : 'checked');
      };
      const onButtonToggle6 = () => {
        setStatus6(status6 === 'checked' ? 'unchecked' : 'checked');
      };
      const onButtonToggle7 = () => {
        setStatus7(status7 === 'checked' ? 'unchecked' : 'checked');
      };
      const onButtonToggle8 = () => {
        setStatus8(status8 === 'checked' ? 'unchecked' : 'checked');
      };
    
    return(
<View style={{flex:1,backgroundColor:'white'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 60, }}>
                <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
                  <Icon name="arrow-left" size={25} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', paddingLeft: 15 }}>
                  Notifications and Preferences
                </Text>
              </View>
     <ScrollView contentContainerStyle={{paddingBottom:100}}>
        <View style={{}}>
            <Text style={{fontSize:25,fontWeight:'bold',marginHorizontal:15}}>Bookings</Text>
            <Text style={{fontSize:16,marginHorizontal:15}}>Mandatory notifications for your booking updates</Text>
            </View>
            <TouchableOpacity      onPress={onButtonToggle1}
 style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, marginVertical: 10,marginTop:40 }}>
  <Text style={{ fontSize: 20 }}>SMS</Text>
  <ToggleButton
    icon={status1 === 'checked' ? 'toggle-switch' : 'toggle-switch-off-outline'}
    value="toggle"
    status={status1}
    onPress={onButtonToggle1}
    style={{ backgroundColor: 'white' }}
    iconColor="red"
    size={45}
  />
</TouchableOpacity>
<TouchableOpacity     onPress={onButtonToggle2}
 style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, marginVertical: 10,borderColor:'grey',borderTopWidth:0.5 }}>
  <Text style={{ fontSize: 20 }}>Whatsapp</Text>
  <ToggleButton
    icon={status2 === 'checked' ? 'toggle-switch' : 'toggle-switch-off-outline'}
    value="toggle"
    status={status2}
    onPress={onButtonToggle2}
    style={{ backgroundColor: 'white' }}
    iconColor="red"
    size={45}
  />
</TouchableOpacity>
<TouchableOpacity     onPress={onButtonToggle3}style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, marginVertical: 10,borderColor:'grey',borderTopWidth:0.5 }}>
  <Text style={{ fontSize: 20 }}>Email</Text>
  <ToggleButton
    icon={status3 === 'checked' ? 'toggle-switch' : 'toggle-switch-off-outline'}
    value="toggle"
    status={status3}
    onPress={onButtonToggle3}
    style={{ backgroundColor: 'white' }}
    iconColor="red"
    size={45}
  />
</TouchableOpacity>
<TouchableOpacity     onPress={onButtonToggle4}
style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, marginVertical: 10,borderColor:'grey',borderTopWidth:0.5 }}>
  <Text style={{ fontSize: 20 }}>Push Notification</Text>
  <ToggleButton
    icon={status4 === 'checked' ? 'toggle-switch' : 'toggle-switch-off-outline'}
    value="toggle"
    status={status4}
    onPress={onButtonToggle4}
    style={{ backgroundColor: 'white' }}
    iconColor="red"
    size={45}
  />
</TouchableOpacity>
<View style={{}}>
            <Text style={{fontSize:25,fontWeight:'bold',marginHorizontal:15,marginTop:20}}>Offers & Promotions</Text>
            <Text style={{fontSize:16,marginHorizontal:15}}>Latest offer & promotion updates for you</Text>
            </View>
            <TouchableOpacity      onPress={onButtonToggle5}
style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, marginVertical: 10,marginTop:40 }}>
  <Text style={{ fontSize: 20 }}>SMS</Text>
  <ToggleButton
    icon={status5 === 'checked' ? 'toggle-switch' : 'toggle-switch-off-outline'}
    value="toggle"
    status={status5}
    onPress={onButtonToggle5}
    style={{ backgroundColor: 'white' }}
    iconColor="red"
    size={45}
  />
</TouchableOpacity>
<TouchableOpacity onPress={onButtonToggle6} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, marginVertical: 10,borderColor:'grey',borderTopWidth:0.5 }}>
  <Text style={{ fontSize: 20 }}>Whatsapp</Text>
  <ToggleButton
    icon={status6 === 'checked' ? 'toggle-switch' : 'toggle-switch-off-outline'}
    value="toggle"
    status={status6}
    onPress={onButtonToggle6}
    style={{ backgroundColor: 'white' }}
    iconColor="red"
    size={45}
  />
</TouchableOpacity>
<TouchableOpacity   onPress={onButtonToggle7} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, marginVertical: 10,borderColor:'grey',borderTopWidth:0.58 }}>
  <Text style={{ fontSize: 20 }}>Email</Text>
  <ToggleButton
    icon={status7 === 'checked' ? 'toggle-switch' : 'toggle-switch-off-outline'}
    value="toggle"
    status={status7}
    onPress={onButtonToggle7}
    style={{ backgroundColor: 'white' }}
    iconColor="red"
    size={45}
  />
</TouchableOpacity>
<TouchableOpacity     onPress={onButtonToggle8}
style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 15, marginVertical: 10 ,borderColor:'grey',borderTopWidth:0.5}}>
  <Text style={{ fontSize: 20 }}>Push notification</Text>
  <ToggleButton
    icon={status8 === 'checked' ? 'toggle-switch' : 'toggle-switch-off-outline'}
    value="toggle"
    status={status8}
    onPress={onButtonToggle8}
    style={{ backgroundColor: 'white' }}
    iconColor="red"
    size={45}
  />
</TouchableOpacity>
        </ScrollView>
        </View>
    );
};
export default App;