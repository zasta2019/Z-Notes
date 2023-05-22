import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export default function Addedit(props) {

  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [notes, setNotes] = useState([])

  const [fontsLoaded] = useFonts({
    "Inter-Regular": require('../assets/font/Inter-Regular.ttf'),
    "Inter-Bold": require('../assets/font/Inter-Bold.ttf'),
    "Ubuntu-Regular": require('../assets/font/Ubuntu-Regular.ttf'),
    "Ubuntu-Bold": require('../assets/font/Ubuntu-Bold.ttf'),
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

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'title') setTitle(text);
    if (valueFor === 'desc') setDesc(text);
  };

  const findNotes =async ()=>{

    const getNotes = JSON.parse(await AsyncStorage.getItem('Z-NOTES'));
    console.log(getNotes)
    if(!getNotes==null) setNotes(getNotes)
    
 }
  

  useEffect(() => {

    findNotes()
  
  }, [])
  const handleSubmit = async()=>{
    const notes = JSON.parse(await AsyncStorage.getItem('Z-NOTES'));
       const note = { id: Date.now(), title, desc, time: Date.now() };
       const updatedNotes = [...notes, note];
       setNotes(updatedNotes);
       await AsyncStorage.setItem('Z-NOTES', JSON.stringify(updatedNotes));
       navigation.replace('Home');
    

      //  await AsyncStorage.setItem('Z-NOTES', JSON.stringify(updatedNotes));
      //        const gnotes =  JSON.parse(await AsyncStorage.getItem('Z-NOTES'));
      //  if(note!==null) {
      //   const updatedNotes = [...notes, note];
      //   setNotes(updatedNotes);
      //   await AsyncStorage.setItem('Z-NOTES', JSON.stringify(updatedNotes));
      //         const gnotes =  JSON.parse(await AsyncStorage.getItem('Z-NOTES'));
      // console.log(gnotes)
      // navigation.replace('Home');
      //  }


    // if(notes!=null){
    //   console.log("In If")

    //   const updatedNotes = [...notes, note];
    //   setNotes(updatedNotes);
    //   await AsyncStorage.setItem('Z-NOTES', JSON.stringify(updatedNotes));
    //   const gnotes =  JSON.parse(await AsyncStorage.getItem('Z-NOTES'));
    //   console.log(gnotes)
    //   navigation.replace('Home');
    // }else{
    //   console.log("In else")
    //   setNotes(note)
    //   await AsyncStorage.setItem('Z-NOTES', JSON.stringify(note));
    //   console.log(note)
    //   const gnotes =  JSON.parse(await AsyncStorage.getItem('Z-NOTES'));
    //   console.log(gnotes)
    //   navigation.replace('Home');

    // }
    
   


  }
  return (
    <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../assets/design.jpg')}  >
      <View style={styles.contentbox}>
        <View style={styles.flex}>
          <View style={styles.backbutton} >
            <Ionicons name="chevron-back-sharp" size={32} style={styles.backbutton} onPress={() => props.navigation.navigate("Home")} />
          </View>
          <Text style={styles.heading}>Add Details</Text>
          <View style={styles.addbutton}>
            <TouchableOpacity activeOpacity={0.6}>
              <Pressable>
                < Feather name="check" 
                size={27} 
                color="#0088CB" 
                onPress={handleSubmit}
                style={styles.checkicon} />
              </Pressable>
            </TouchableOpacity>
          </View>
        </View>
        <KeyboardAvoidingView enabled={true} behavoiur={"padding"}>
          <View style={styles.datacontent}>
            <TextInput style={
              styles.textAreatitle}
             multiline={true}
             value={title}
              numberOfLines={2} 
              placeholder="Type Your Title here..."
              onChangeText={text => handleOnChangeText(text, 'title')}
              />
            <TextInput style={
              styles.textAreadescription} 
              multiline={true}
              value={desc}
               numberOfLines={9} 
               placeholder="Type Your Description here..." 
               onChangeText={text => handleOnChangeText(text, 'desc')}
               />
            <View style={styles.uploadbox}>
              <View style={styles.flexicon}>
                <FontAwesome name="image" size={18} color="white" style={styles.imgicon} />
                <Ionicons name="list" size={22} color="white" />
                <Entypo name="circle" size={18} color="white" style={styles.circleicon} />
                <MaterialIcons name="text-fields" size={22} color="white" />
                <Image style={styles.send} source={require('../assets/send.png')} />
                <MaterialIcons name="color-lens" size={22} color="white" />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
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
  flexicon: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 9,
  },
  circleicon: {
    marginTop: 2,
  },
  imgicon: {
    marginTop: 2,
  },
  contentbox: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    marginTop: 80,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  send: {
    width: 16,
    height: 16,
    marginTop: 3,
  },
  datacontent: {
    marginLeft: 30,
    marginRight: 30,
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
  checkicon: {
    marginTop: 6,
    marginRight: 3,
  },
  textAreatitle: {
    borderBottomWidth: 2,
    borderBottomColor: '#E1EEF4',
    padding: 10,
    textAlignVertical: 'top',
    fontFamily: "Ubuntu-Bold",
    fontSize: 18,
    lineHeight: 21,
    color: "#000000",
    marginTop: 3,
    marginLeft: 6,
  },
  textAreadescription: {
    borderBottomColor: 'transparent',
    padding: 10,
    textAlignVertical: 'top',
    fontFamily: "Ubuntu-Regular",
    fontSize: 14,
    lineHeight: 21,
    color: "#33393D",
    marginTop: 10,
    marginLeft: 6,
  },
  uploadbox: {
    height: 40,
    backgroundColor: "#0088CB",
    width: "100%",
    borderRadius: 7,
  }
});

