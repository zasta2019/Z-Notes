import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

function NoNotes(){
    return(
        <View style={styles.imgbox}>
        <Image style={styles.emptyimg} source={require('./assets/empty.jpg')} />
      </View>
      <Text style={styles.emptytext}>Empty Notes!</Text>
      <Text style={styles.click}>Click here to write something exciting</Text>

    )
}

export default NoNotes