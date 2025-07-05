import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Divider, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from "react-native-youtube-iframe";


const App = ({ navigation }) => {
    const Primo = [{ id: 1, t1:'Search',t2:'Enter Source,Destination and Date of Travel to search for buses.'},
                   {id:2,t1:'Filter buses',t2:'Filter buses clicking on Primo card'},
                   {id:3,t1:'Select Primo bus',t2:'Select Primo bus and seat of your choice'},
                   {id:4,t1:'Complete booking',t2:'Proceed to payment and complete the booking'}
    ]
    return (
        <ScrollView contentContainerStyle={{paddingBottom:50}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60, paddingRight: 50, borderColor: 'red', borderBottomWidth: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home1')}>
                    <Icon name="close" size={30} color="white" />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 20 }}>Primo</Text>
            </View>
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginHorizontal: 20, marginTop: 20 }}>Why Primo?</Text>
            <Text style={{ fontSize: 20, marginHorizontal: 20, marginTop: 20 }}>A collection of top-rated and trusted bus operators,who would go the extra mile for you.</Text>
            <Image source={require('../Images/primo.jpg')} style={{ height: 650, width: '100%', marginTop: 20 }}></Image>
            <Image source={require('../Images/primo2.jpg')} style={{ height: 650, width: '100%', marginTop: 20 }}></Image>
            <View style={{ overflow: 'hidden', marginHorizontal: 20,marginTop:20 }}>
                <YoutubePlayer
                    height={300}
                    width={400}
                    play={false}
                    videoId={'-2aXQFp1vPY'}
                />
            </View>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'brown', paddingLeft: 20}}>How to book a Primo service?</Text>
            {Primo.map((item) => (
                <View key={item.t1} style={{ flexDirection: 'row', gap: 25,marginTop:15,margin:20,borderColor:'lightgrey',borderBottomWidth:0.6 }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' ,color:'brown',top:20}}>{item.id}</Text>
                    <View style={{margin:15}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.t1}</Text>
                        <Text style={{ fontSize: 20,}}>{item.t2}</Text>
                    </View>
                </View>
            ))}

        </ScrollView>
    )
};
export default App;      