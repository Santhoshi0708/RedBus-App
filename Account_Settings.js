import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, height: 60 }}>
        <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
          <Icon name="arrow-left" size={28} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black', marginLeft: 16 }}>
          Account Settings
        </Text>
      </View>

      {/* Logout Option */}
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 30,
        }}
        onPress={openModal}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="logout" size={26} color="black" />
          <Text style={{ fontSize: 18, color: 'black', marginLeft: 12 }}>Log out</Text>
        </View>
        <Icon name="chevron-right" size={28} color="black" />
      </TouchableOpacity>

      {/* Delete Option */}
      <TouchableOpacity onPress={()=>navigation.navigate('Pass')}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopWidth: 1,
          borderColor: '#ccc',
          marginHorizontal: 20,
          marginTop: 30,
          paddingTop: 20,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="delete-outline" size={26} color="red" />
          <Text style={{ fontSize: 18, color: 'red', marginLeft: 12 }}>Delete account</Text>
        </View>
        <Icon name="chevron-right" size={28} color="black" />
      </TouchableOpacity>

      {/* Logout Modal */}
      <Portal>
        {visible && (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'white',
              padding: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              elevation: 10,
              height: 320,
              justifyContent: 'space-between',
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 20,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  Are you sure you want to log out?
                </Text>
                <TouchableOpacity onPress={closeModal}>
                  <Icon name="close" size={26} color="black" />
                </TouchableOpacity>
              </View>

              <Text style={{ fontSize: 16, textAlign: 'center', color: '#555' }}>
                Ticket booking is faster when you're logged in
              </Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home1');
                  closeModal();
                }}
                style={{
                  backgroundColor: 'red',
                  alignItems: 'center',
                  padding: 15,
                  borderRadius: 30,
                  marginVertical: 10,
                }}
              >
                <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
                  Yes, Log out
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={closeModal}
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  alignItems: 'center',
                  padding: 15,
                  borderRadius: 30,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Portal>
    </View>
  );
};

export default App;
