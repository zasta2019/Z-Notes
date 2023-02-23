import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function Start(props) {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require('./assets/font/Inter-Regular.ttf'),
    "Inter-Bold": require('./assets/font/Inter-Bold.ttf'),
    "Ubuntu-Regular": require('./assets/font/Ubuntu-Regular.ttf'),
    "Ubuntu-Bold": require('./assets/font/Ubuntu-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  }
  else {
    SplashScreen.hideAsync();
  }
  return (
  <View>
 <Image style={styles.design} source={require('./assets/design.jpg')}/>
 <Text style={styles.create}>Create & Design</Text>
 <Text style={styles.notes}>Your Notes Easily</Text>
 <Image style={styles.line} source={require('./assets/line.jpg')}/>
 <TouchableOpacity activeOpacity={0.6}>
     <Pressable  onPress={() => props.navigation.navigate("Home")}>
      <View style={styles.start}>
        <Text style={styles.starttext}>Get Started</Text>
      </View>
      </Pressable>
     </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
design:{
  width:"100%",
  height:400,
  marginTop:25,
},
create:{
  fontFamily:"Ubuntu-Regular",
  fontSize:32,
  marginLeft:30,
  marginTop:40,
},
starttext:{
  fontFamily:"Ubuntu-Bold",
  fontSize:14,
  textAlign:"center",
  paddingTop:16,
  color:"white",
},
notes:{
  fontFamily:"Ubuntu-Bold",
  fontSize:32,
  marginLeft:30,
  marginTop:18,
},
start:{
  width:182,
  height:52,
  backgroundColor:"#0088CB",
  borderRadius:45,
  marginLeft:30,
  marginTop:25,
},
line:{
  marginTop:15,
  width:"57%",
  height:3,
  marginLeft:33,
},
});
