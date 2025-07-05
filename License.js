import Raect from 'react';
import {View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const App=({navigation})=>{

    return(
                <View style={{flex:1}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 60, backgroundColor:'red'}}>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Icon name="close" size={35} color="white"/>
                </TouchableOpacity>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingLeft: 15 }}>
                  Licenses
                </Text>
              </View>
        
     <ScrollView contentContainerStyle={{paddingBottom:100}}>
            <View style={{margin:20,marginTop:10}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Android SDK</Text>
              <Text style={{fontSize:16,marginTop:10}}>Google Inc.</Text>
              <Text style={{color:'red',marginHorizontal:10,marginTop:10}}>https://developer.android.com/sdk/terms.html</Text>
              </View>
              <View style={{margin:20,marginTop:10}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>facebook-android-sdk</Text>
              <Text style={{fontSize:16,marginTop:10}}>facebook</Text>
              <Text style={{fontSize:16,marginTop:10,marginTop:10}}>Apache License V2.0</Text>
              <Text style={{color:'red',marginHorizontal:10}}>https://github.com/facebook/facebook-android-sdk</Text>
              </View> <View style={{margin:20,marginTop:10}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>gson</Text>
              <Text style={{fontSize:16,marginTop:10}}>google</Text>
              <Text style={{fontSize:16,marginTop:10}}>Apache License V2.0</Text>
              <Text style={{color:'red',marginHorizontal:10,marginTop:10}}>https://github.com/google/gson</Text>
              </View> <View style={{margin:20,marginTop:10}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>picasso</Text>
              <Text style={{fontSize:16,marginTop:10}}>square</Text>
              <Text style={{fontSize:16,marginTop:10}}>Apache License V2.0</Text>
              <Text style={{color:'red',marginHorizontal:10,marginTop:10}}>https://github.com/square/picasso</Text>
              </View> <View style={{margin:20,marginTop:10}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>android-volley</Text>
              <Text style={{fontSize:16,marginTop:10}}>mcxiaoke</Text>
              <Text style={{fontSize:16,marginTop:10}}>Apache License V2.0</Text>
              <Text style={{color:'red',marginHorizontal:10,marginTop:10}}>https://github.com/mcxiaoke/android-volley</Text>
              </View> <View style={{margin:20,marginTop:10}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>EventBus</Text>
              <Text style={{fontSize:16,marginTop:10}}>greenrobot</Text>
              <Text style={{fontSize:16,marginTop:10}}>Apache License V2.0</Text>
              <Text style={{color:'red',marginHorizontal:10,marginTop:10}}>https://github.com/greenrobot/EventBus</Text>
              </View> <View style={{margin:20,marginTop:10}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Java-WebSocket</Text>
              <Text style={{fontSize:16,marginTop:10}}>Too TallNate</Text>
              <Text style={{fontSize:16,marginTop:10}}>Apache License V2.0</Text>
              <Text style={{color:'red',marginHorizontal:10,marginTop:10}}>https://github.com/JakeWhartoon/butterknife</Text>
              </View> <View style={{margin:20,marginTop:10}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>storm-gen</Text>
              <Text style={{fontSize:16,marginTop:10}}>turbomanage</Text>
              <Text style={{fontSize:16,marginTop:10}}>Apache License V2.0</Text>
              <Text style={{color:'red',marginHorizontal:10,marginTop:10}}>https://github.com/turbomanage/storm-gen</Text>
              </View> <View style={{margin:20,marginTop:10}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>AndroidSlidingUpPanel</Text>
              <Text style={{fontSize:16,marginTop:10}}>umano</Text>
              <Text style={{fontSize:16,marginTop:10}}>Apache License V2.0</Text>
              <Text style={{color:'red',marginHorizontal:10,marginTop:10}}>https://github.com/umano/AndroidSlidingUpPanel</Text>
              </View> <View style={{margin:20,marginTop:10}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>expandable-recycler-view</Text>
              <Text style={{fontSize:16,marginTop:10}}>bingerdranch</Text>
              <Text style={{fontSize:16,marginTop:10}}>Apache License V2.0</Text>
              <Text style={{color:'red',marginHorizontal:10,marginTop:10}}>https://github.com/bingerdranch/expandable-recycler-view</Text>
              </View>
    </ScrollView>
    </View>
    );
};
export default App;          