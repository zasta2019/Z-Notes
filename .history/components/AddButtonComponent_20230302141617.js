import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


function AddButtonComponent(){
    return(
        <View style={styles.flex}>
        <Text style={styles.heading}>My Notes</Text>
        <View style={styles.addbutton}>
          <TouchableOpacity activeOpacity={0.6}>
            <Pressable>
              <View style={styles.add}>
                <Image style={styles.addimg} source={require('./assets/add.png')} />
              </View>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    )
}

export default AddButtonComponent;