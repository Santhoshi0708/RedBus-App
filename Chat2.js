import React, { useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function ChatBot({navigation}) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi, how can I help you?", sender: "bot" },
    {id:2, text:'redBus Referral', sender:'user'}

  ]);
  const [inputText, setInputText] = useState("");


  // Predefined bot responses
  const botReplies = {
    hi: "Hello! Welcome!",
    hello: "Hi , I am your redBuddy.I will be helping you with your issue today.",
    how: "I'm bot, but I'm here to help!",
    bye: "Goodbye! Have a great day!",
  };


  // Function to send a message
  const sendMessage = () => {
    if (inputText.trim() === "") return;


    const userMessage = { id: messages.length + 1, text: inputText, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]); // Append new messages at the end


    setInputText(""); // Clear input


    // Bot reply after 1 second
    setTimeout(() => {
      const botResponse = botReplies[inputText.toLowerCase()] || "Sorry, I didn't understand that.";
      const botMessage = { id: messages.length + 2, text: botResponse, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  const options = [
    'Yes,thanks',
    'No, did not get referral reward',
    
  ];
  return (
    <View style={styles.container}>
      {/* Chat Messages */}
       <View style={{ flexDirection: 'row', alignItems: 'center', height: 60, }}>
                <TouchableOpacity onPress={() => navigation.navigate('other_topics')}>
                  <Icon name="arrow-left" size={30} color="black" />
                </TouchableOpacity>
                <View>
                <Text style={{ fontSize: 22, marginLeft: 15 ,color:'black',fontWeight:'bold'}}>redBus Referral Help</Text>
                <Text style={{fontSize:16,color:'grey',marginLeft:15}}>Need help with redBus referral program...</Text>
                </View>
              </View>
     <ScrollView >      
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.message, item.sender === "user" ? styles.userMessage : styles.botMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
       <View style={{ backgroundColor: 'lightgrey', padding: 20, marginRight: 70, marginTop: 40, borderRadius: 10 }}>
                           <Text style={{ fontSize: 16, color: 'black' }}>You can earn exciting rewards by</Text>
                                                    <Text style={{ fontSize: 16, color: 'black' }}>referring your friends to redBus.</Text>
                                                    <Text style={{ fontSize: 16, color: 'black' }}>Click the below link to</Text>
                                                    <Text style={{ fontSize: 16, color: 'black' }}>understand the T&C of referral </Text>
                                                  <Text style={{ fontSize: 16, color: 'black' }}>program.</Text>
                                                    <Text style={{ fontSize: 16, color: 'blue',textDecorationLine:'underline' }}>https://b.redbus.com/erf4uah</Text>
                                                    <Text style={{ fontSize: 16, color: 'black' }}>Does that resolve your query?</Text>
                          <View style={{ backgroundColor: 'white', padding: 20, marginTop: 10, borderColor: 'lightgrey', borderWidth: 0.5,borderRadius:10 }}>
                              {options.map((item, index) => (
                                  <TouchableOpacity key={index} style={{ borderBottomWidth: 0.5, borderColor: 'lightgrey', paddingVertical: 15 }}>
                                      <Text style={{ fontSize: 16, color: 'blue', fontWeight: 'bold' }}>{item}</Text>
                                  </TouchableOpacity>
                              ))}
                          </View>
                      </View>
      </ScrollView>
      {/* <Icon name="chat-plus" size={24} color="white" onPress={()=>navigation.navigate("Chatbotuserfriendely")} /> */}
      {/* Input Fild */}
      
    </View>
  );
}


// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 10 },
  message: { padding: 10, borderRadius: 10, marginVertical: 5, maxWidth: "80%" },
  userMessage: { backgroundColor: "lightpink", alignSelf: "flex-end" },
  botMessage: { backgroundColor: "lightgrey", alignSelf: "flex-start" },
  messageText: { color: "black", fontSize: 16 },
  inputContainer: { flexDirection: "row", padding: 10, backgroundColor: "black", borderRadius: 10,marginTop:20},
  input: { flex: 1, fontSize: 20, paddingHorizontal: 10 ,color:'white'},
  sendButton: { backgroundColor: "white", padding: 10, borderRadius: 10 },
  sendText: { color: "black", fontSize: 16, fontWeight: "bold" }
});
