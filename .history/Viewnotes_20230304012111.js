import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Viewnotes({route}) {
  const navigation = useNavigation();
  const noteId = route.params.notKey;
  console.log(noteId);

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
            <Ionicons name="chevron-back-sharp" size={32} style={styles.backbutton} onPress={() => navigation.navigate("Home")} />
          </View>
          <Text style={styles.heading}>My Notes</Text>
          <View style={styles.addbutton}>
            <TouchableOpacity activeOpacity={0.6}>
              <Pressable>
                <View style={styles.add}>
                  <Image style={styles.editimg} source={require('./assets/edit.png')} />
                </View>
              </Pressable>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.notesdata}>
            <View style={styles.notesbox}>
          <View style={styles.scrollable}>
          <ScrollView style={{ overflow: 'scroll' }} showsVerticalScrollIndicator={false}>
              <Text style={styles.notesheading}>Get the Variant Looks Feels</Text>
              <Text style={styles.notes}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
              </ScrollView>
          </View>
         <View style={styles.flexbox}>
         <View style={styles.attachmentbox}>
         <Entypo name="attachment" style={styles.attachment} />
                    <Text style={styles.attachment}>See Attachment</Text>
                  </View>
         <View style={styles.datebox}>
                    <Text style={styles.date}>09th June 2020</Text>
                  </View>
         </View>
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
  flexbox:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:100,
  },
  contentbox: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    marginTop: 80,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  date: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 12,
    lineHeight: 14,
    marginTop: 4,
    color: "#2F3637",
    textAlign: "center",
  },
  datebox: {
    width: 100,
    height: 25,
    backgroundColor: "white",
    alignSelf:"flex-end",
    borderRadius: 31,
  },
  attachment: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 12,
    lineHeight: 14,
    marginTop: 4,
    color: "#2F3637",
    marginLeft:5,
  },
  attachmentbox: {
    flexDirection:"row",
    width: 125,
    height: 25,
    backgroundColor: "white",
    borderRadius: 31,
  },
  heading: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 24,
    lineHeight: 28,
    color: "#000000",
    marginTop: 3,
    marginLeft: 6,
  },
  notesheading: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 24,
    lineHeight: 32,
    color: "#000000",
  },
  notes: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 14,
    lineHeight: 22,
    color: "#596568",
    marginTop:7,
  },
  notesbox: {
    padding: 20,
  },
  backbutton: {
    width: 30,
    height: 30,
    backgroundColor: "white",
  },
  add: {
    backgroundColor: "#0088CB",
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  editimg: {
    width: 20,
    height: 20,
    marginLeft: 8,
    marginTop: 7,
  },
  notesdata: {
    height: "75%",
    width: 350,
    backgroundColor: "#ECF0F1",
    borderRadius: 11,
    alignSelf: "center",
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
});

