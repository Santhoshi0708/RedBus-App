import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, ToastAndroid, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        if (email && password) {
            try {
                await AsyncStorage.setItem('Email', email);
                await AsyncStorage.setItem('pwd', password);
                console.log('email',email);
                console.log('pwd',password);
                Alert.alert('Success', 'Registration complete!');
                navigation.navigate('Login');
            } catch (error) {
                Alert.alert('Error', 'Failed to save data');
            }
        } else {
            Alert.alert('Error', 'Please fill in all fields');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={email} placeholder="Email address" placeholderTextColor="white" onChangeText={setEmail} />
            <TextInput style={styles.input} value={password} placeholder="Password" placeholderTextColor="white" onChangeText={setPassword} />
            <TouchableOpacity style={styles.button1} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'rgb(88, 93, 102)',
    },
    input: {
        borderWidth: 1,
        width: 300,
        marginBottom: 20,
        borderColor: 'grey',
        paddingHorizontal: 15,
        fontSize: 16,
        borderRadius: 8,
        color: 'white',
    },
    button1: {
        backgroundColor: 'cyan',
        width: 300,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    },
});
