import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {  Feather } from '@expo/vector-icons';

export default function Addedit(props) {
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
    <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('./assets/design.jpg')}  >
      <View style={styles.contentbox}>
        <View style={styles.flex}>
          <View style={styles.backbutton} >
            <Ionicons name="chevron-back-sharp" size={32} style={styles.backbutton} onPress={() => props.navigation.navigate("Data")} />
          </View>
          <Text style={styles.heading}>Add Details</Text>
          <View style={styles.addbutton}>
            <TouchableOpacity activeOpacity={0.6}>
              <Pressable>
                < Feather name="check" size={27} color="#0088CB" style={styles.checkicon} />
              </Pressable>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: 712,
    marginTop: 25,
  },
  contentbox: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    marginTop: 80,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  heading: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 24,
    lineHeight: 28,
    color: "#000000",
    marginTop: 3,
    marginLeft: 6,
  },
  backbutton: {
    width: 30,
    height: 30,
    backgroundColor: "white",
  },
  editimg: {
    width: 20,
    height: 20,
    marginLeft: 8,
    marginTop: 7,
  },
  flex: {
    flexDirection: "row",
    padding: 22,
  },
  addbutton: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 2,
  },
  checkicon:{
    marginTop:6,
    marginRight:3,
  }
});

