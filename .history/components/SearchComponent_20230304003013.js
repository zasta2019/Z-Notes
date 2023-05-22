
import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

function SearchComponent(){
    return(
        <View>
        <TextInput style={styles.inputfield}
          placeholder="Search here"
          placeholderTextColor="#646464"
        />
        <Icon name="search" style={styles.searchIcon} />
        <Icon name="microphone" style={styles.mick} />
      </View>
    )
}

const styles = StyleSheet.create({

    inputfield: {
        backgroundColor: "#F9F9F9",
        borderRadius: 60,
        width: 3500,
        height: 20,
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

});

export default SearchComponent