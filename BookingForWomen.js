import React,{useState} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { IconButton, Card, } from 'react-native-paper';

const App = ({ navigation }) => {
    const [Visible,setVisible]=useState(true);
    
    const Data7 = [{ id: 1, t1: 'Exclusive Deals for', t2: 'women', img: require('../Images/deals.png') },
    { id: 2, t1: 'Number of women', t2: 'travelling along', img: require('../Images/travel.png') },
    { id: 3, t1: 'Priority Women', t2: 'helpline available', img: require('../Images/helpline.png') },
    { id: 4, t1: 'Buses Preferred by', t2: 'women', img: require('../Images/women.png') }
    ];
    const renderItem7 = ({ item }) => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Card style={{ height: 110, width: 160, borderRadius: 25, backgroundColor: 'lightpink', marginTop: 20, margin: 10, alignItems: 'center', justifyContent: 'center',shadowColor:'white' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={item.img} style={{ height: 70, width: 70 }}></Image>
                    </View>
                    <Card.Content style={{}}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.t1}</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{item.t2}</Text>
                    </Card.Content>
                </Card>
            </View>
        );
    }
    if (!Visible) return null;

    return (
        <View style={{ bottom:0, position: 'absolute', borderRadius: 30, width: '100%', backgroundColor: 'white' }}>
            <ScrollView>
                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <IconButton onPress={()=>navigation.navigate('Home1')} icon="close" size={40} iconColor="black" />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Booking for women</Text>
                        <Text style={{ fontSize: 20,textAlign:'center' }}>Providing helpful detais to smartly choose</Text>
                        <Text style={{ fontSize: 20 }}>bus travel for women</Text>
                    </View>
                </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10,alignItems:'center',justifyContent:'center',gap:30 }}>
            <FlatList
                                  data={Data7}
                                  renderItem={renderItem7}
                                  keyExtractor={(item) => item.id}
                                  numColumns={2}
                                />
                <Image source={require('../Images/img1.jpg')} style={{height:300,width:300,borderRadius:20}}></Image>
                <Image source={require('../Images/img2.jpg')} style={{height:300,width:300,borderRadius:20}}></Image>
                <Image source={require('../Images/img3.jpg')} style={{height:300,width:300,borderRadius:20}}></Image>
        </ScrollView>        
                <View style={{padding:10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home1')}style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', paddingVertical: 10, width: '100%', borderRadius: 30,marginTop:20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: "white" }}>Yes,booking for women</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('MyAccount')}style={{ borderWidth:1,borderColor:'black', alignItems: 'center', justifyContent: 'center', paddingVertical: 10, width: '100%', borderRadius: 30, marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: "black" }}>Not Now</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default App;
