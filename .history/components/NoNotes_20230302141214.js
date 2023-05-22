import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

function NoNotes(){
    return(
        <><View style={styles.imgbox}>
            <Image style={styles.emptyimg} source={require('../assets/empty.jpg')} />
        </View><Text style={styles.emptytext}>Empty Notes!</Text><Text style={styles.click}>Click here to write something exciting</Text></>

    )
}


const styles = StyleSheet.create({
    imgbox: {
        width: 250,
        height: 200,
        flex: 1,
        alignSelf: 'center',
        marginTop: 100,
        overflow: "hidden",
      },
      emptyimg: {
        width: "100%",
        height: "100%",
      },
      emptytext: {
        fontFamily: "Ubuntu-Bold",
        fontSize: 20,
        textAlign: "center",
        lineHeight: 21,
        color: "#000000",
        marginTop: 25,
      },
      click: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 16,
        textAlign: "center",
        lineHeight: 18,
        color: "#858E93",
        marginTop: 15,
      },
});
export default NoNotes