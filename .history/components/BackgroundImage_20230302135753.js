import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

function BackgroundImage(){
    return(
        <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../assets/design.jpg')}  >
            </ImageBackground>

    )
}

export default BackgroundImage

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: "100%",
      height: 712,
      marginTop: 25,
    },

});