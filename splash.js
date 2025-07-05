import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Animated, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const splash = ({ navigation }) => {
  const scaleValue = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();


        setTimeout(() => {
       navigation.replace('country');
        }, 2000);
      } catch (error) {
        console.error('Error retrieving login status:', error);
        // navigation.replace('join');
      }
    };


    checkLoginStatus();
  }, [navigation, scaleValue]);


  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [{ scale: scaleValue }],
          },
        ]}>
         <Image
          source={require('../Images/logo.png')}
          style={styles.logo}
        />
      </Animated.View>
      <Text style={styles.poweredBy}>POWERED BY</Text>
      <Text style={styles.company}>MABERU CREATIONS PVT LTD</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 500,
    height: 500,
  },
  poweredBy: {
    alignSelf: 'center',
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  company: {
    alignSelf: 'center',
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
});


export default splash;