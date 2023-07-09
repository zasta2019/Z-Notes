import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal, ListItem, Pressable, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

function NoteItemComponent({title,desc,time,key}){

  
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const formatDate = ms => {
    const date = new Date(ms);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hrs = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
  
    return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
  };
  const navigation = useNavigation();
    return(
        <>
       

     <View style={styles.space}>
            <View style={styles.flexbox}>
                <Pressable onPress={() =>navigation.navigate("Viewnotes",{
                  noteKey:{time}
                })}>
                    <View style={[styles.notesbox, styles.color1]}>
                        <View style={styles.flexoption}>
                            <View>
                                <Text style={styles.notesheading} multiline numberOfLines={1}>{title}</Text>
                                <Text style={styles.contenttext} multiline numberOfLines={4} >{desc}</Text>
                            </View>
                            <View style={styles.optionbox}>
                            <TouchableOpacity activeOpacity={0.6} onPress={toggleModal} style={styles.touchoption}>
                              <SimpleLineIcons name="options-vertical" style={styles.option}/>
                              </TouchableOpacity>
                            </View>
                        </View>
                        <Modal visible={modalVisible} animationType="fade" transparent={true} onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity activeOpacity={0.6} style={styles.optionButton}>
              <Text style={styles.optionText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.optionButton}>
              <Text style={styles.optionText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} onPress={toggleModal} style={styles.optionButton}>
              <Text style={styles.optionText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
                        <View style={styles.status}>
                            {/* <View style={styles.filesbox}>
                                <Entypo name="attachment" style={styles.attachment} />
                            </View> */}
                           <View style={styles.datecontent}>
                           <View style={styles.datebox}>
                                <Text style={styles.date}>{formatDate(time)}</Text>
                            </View>
                           </View>
                        </View>
                    </View>
                </Pressable>
   
            </View>
        </View>

      
</>
    )
}

const styles = StyleSheet.create({
    notesheading: {
      fontFamily: "Ubuntu-Bold",
      fontSize: 14,
      lineHeight: 22,
      color: "#000000",
    },
    add: {
      backgroundColor: "#0088CB",
      height: 35,
      width: 35,
      borderRadius: 50,
    },
    addimg: {
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
    inputfield: {
      backgroundColor: "#F9F9F9",
      borderRadius: 10,
      width: 350,
      height: 40,
      flex: 1,
      paddingRight: 33,
      alignSelf: 'center',
      paddingLeft: 37,
    },
    searchIcon: {
      position: 'absolute',
      left: 35,
      top: 10,
      fontSize: 18,
      color: '#858E93',
    },
    mick: {
      position: 'absolute',
      right: 35,
      top: 10,
      fontSize: 20,
      color: '#858E93',
    },
    option: {
      fontSize: 18,
      color: '#000000',
    },
    attachment: {
      fontSize: 13,
      position: "absolute",
      left: 6,
      top: 6,
      color: '#000000',
    },
    notesbox: {
      borderRadius: 11,
      width: 160,
      padding: 15,
      overflow:"hidden",
    },
    color1: {
      backgroundColor: "#FFF2F0",
    },
    color2: {
      backgroundColor: "#ECF0F1",
    },
    color3: {
      backgroundColor: "#FDFAE9",
    },
    color4: {
      backgroundColor: "#F1FFF1",
    },
    space: {
      marginLeft: 22,
    },
    flexbox: {
      flexDirection: "row",
      paddingTop:15,
      paddingBottom:10,
    },
    flexoption: {
      flexDirection: "row",
      justifyContent:"space-between",
    },
    contenttext: {
      fontFamily: "Ubuntu-Regular",
      fontSize: 12,
      lineHeight: 15,
      paddingRight: 20,
      width:120,
      height:60,
      marginTop: 7,
      color: "#596568",
      overflow: 'hidden',
    },
    date: {
      fontFamily: "Ubuntu-Regular",
      fontSize: 10,
      lineHeight: 10,
      marginTop: 7,
      color: "#2F3637",
      textAlign: "center",
    },
    filesbox: {
      width: 25,
      height: 25,
      backgroundColor: "white",
      borderRadius: 50,
      overflow: "hidden",
    },
    status: {
      marginTop: 30,
    },
    datebox: {
      width: 115,
      height: 25,
      backgroundColor: "white",
      borderRadius: 31,
      marginTop:8,
      alignSelf:"flex-end",
    },
    datecontent:{
      flexDirection:"column",
      justifyContent:"flex-end",
    },
    onlydatebox: {
      width: 90,
      height: 25,
      backgroundColor: "white",
      borderRadius: 31,
      marginLeft: 50,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      flexDirection:"row",
      padding: 20,
      borderRadius: 10,
    },
    optionButton: {
      paddingVertical: 10,
      padding:20,
      borderWidth: 0.5,
      borderColor:"#ccc",
    },
    optionText: {
      fontSize: 16,
      color: '#000',
    },
    optionText: {
      fontFamily: "Ubuntu-Regular",
      fontSize: 17,
      color: '#0A7AFF',
      textAlign: 'center',
    },
    touchoption:{
      width:60,
      height:30,
    },
  });


  export default NoteItemComponent;