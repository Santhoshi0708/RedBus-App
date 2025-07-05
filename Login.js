import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App({navigation}) {
    const [textinput, settextinput] = useState('');
    const [Passwordinput, setpasswordinput] = useState('');

    const handlelogin = async() => {
        const savedEmail = await AsyncStorage.getItem('Email');
      const savedPassword = await AsyncStorage.getItem('pwd');
      console.log('Email1',email);
      console.log('pwd1',password);
      if (textinput === savedEmail && passwordinput === savedPassword) {
        Alert.alert('Success', 'Login successful!');
        navigation.navigate('Home1');
      } else {
        Alert.alert('Error', 'Invalid credentials');
      }
    };

    return (
            
            <View style={{backgroundColor:'blue',flex:1,alignItems:'center'}}>
            <TouchableOpacity style={styles.lgbtn} onPress={handlelogin}>
                <Text style={styles.lgTextbtn}>Login</Text>
            </TouchableOpacity>
            <Icon name="hexagon-outline" size={55} color="white" margin={125} end={90} top={80}></Icon>
            <View>
                <Text style={styles.Top}>Hexagon</Text>
            </View>
            
            <TextInput style={styles.input} value={textinput} placeholder='Username' placeholderTextColor='gray' onChangeText={settextinput}
            />   
            <TextInput style={styles.input} value={Passwordinput} placeholder="Password" placeholderTextColor='gray'onChangeText={setpasswordinput}
            /> 
            
            <TouchableOpacity style={styles.button} onPress={handlelogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.btndwn}>Don't have an account? <Text style={{color:'white',textDecorationLine:'underline'}}>Sign up</Text></Text>
            </View>
            <Text style={styles.scldwn}>Login in With Social Network</Text>
        <View style={styles.img1}>
            <Icon name="facebook" size={24} color="white"></Icon>
            <Icon name="twitter" size={24} color="white"></Icon>
            <Icon name="google-plus" size={24} color="white"></Icon>
        </View>
    </View>    
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'black',
    },
    bgimg: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    hexa: {
        height: 20,
        width: 20,
        top: -70,
        left: -70,
    },
    lgTextbtn: {
        fontSize: 15,
        color: 'orange',
        marginTop: -160,
        marginLeft: 300,
        marginBottom: 200,
    },
    Top: {
        paddingLeft:30,
        color: 'white',
        fontWeight: 'bold',
        marginTop: -100,
        fontSize: 35,
    },
    img1: {
        flexDirection: 'row',
        gap: 10,
        top:10,
    },
    input: {
        borderRadius: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        width: 300,
        marginBottom: 20,
        borderColor: 'grey',
        paddingHorizontal: 15,
        fontSize: 16,
    },
    img: {
        marginTop: 20,
        marginRight: 10,
        height: 20,
        width: 20,
        borderRadius: 10,
    },
    button: {
        backgroundColor: 'red',
        width: 300,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 30
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    btndwn: {
        color: 'white',
        marginTop: 15,
    },
    scldwn: {
        color: 'white',
        marginTop: 80,
    },
});
