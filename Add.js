import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView ,Alert,Image} from 'react-native';
import { RadioButton, Portal,TextInput,} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const App = ({navigation}) => {
            return (
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'red', height: 60 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('IRCTC')}>
                                <Icon name="arrow-left" size={30} color="white" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'center', padding: 10 }}>
                            Add/Manage IRCTC Usernames
                            </Text>
                        </View>
                <View style={{alignItems:"center",justifyContent:'center',marginVertical:150}}>
                    <Image source={{uri:'https://tse1.mm.bing.net/th?id=OIP.HNPPFXG7rxduoq24RUeivAHaEK&pid=Api&P=0&h=220'}} style={{height:200,width:'90%',}}></Image>
                    <Text style={{fontSize:25,fontWeight:'bold',marginTop:20}}>No Username is added</Text>
                    <Text style={{fontSize:20}}>Once you add a username, it will appear here</Text>
                </View>
                    <TouchableOpacity style={{
                        marginVertical:150,
                        width: '90%',
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'red',
                        paddingVertical: 10,
                        marginBottom: 10,
                        borderRadius: 30,
                    }}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                            Add IRCTC Username
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        };        
        export default App;