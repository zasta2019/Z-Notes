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
                <Image style={styles.addimg} onPress={() => props.navigation.navigate("Viewnotes")} source={require('../assets/add.png')} />
              </View>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: "Ubuntu-Bold",
        fontSize: 24,
        lineHeight: 28,
        color: "#000000",
        marginTop: 3,
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

});

export default AddButtonComponent;