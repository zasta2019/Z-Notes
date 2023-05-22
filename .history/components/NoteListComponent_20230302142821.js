import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


function NoteListComponent(){
    return(

        <><View style={styles.space}>
            <View style={styles.flexbox}>
                <Pressable onPress={() => props.navigation.navigate("Viewnotes")}>
                    <View style={[styles.notesbox, styles.color1]}>
                        <View style={styles.flexoption}>
                            <View>
                                <Text style={styles.notesheading}>Get the Varient Looks Feels</Text>
                                <Text style={styles.contenttext}>How to MakeBest UI Designing Field Will be Look Sad Being a little Kind of Jobs.</Text>
                            </View>
                            <View>
                                <SimpleLineIcons name="options-vertical" style={styles.option} />
                            </View>
                        </View>
                        <View style={styles.status}>
                            <View style={styles.filesbox}>
                                <Entypo name="attachment" style={styles.attachment} />
                            </View>
                            <View style={styles.datebox}>
                                <Text style={styles.date}>09th June 2020</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>
                <Pressable onPress={() => props.navigation.navigate("Viewnotes")}>
                    <View style={[styles.notesbox, styles.space, styles.color2]}>
                        <View style={styles.flexoption}>
                            <View>
                                <Text style={styles.notesheading}>Get the Varient Looks Feels</Text>
                                <Text style={styles.contenttext}>How to MakeBest UI Designing Field Will be Look Sad Being a little Kind of Jobs.</Text>
                            </View>
                            <View>
                                <SimpleLineIcons name="options-vertical" style={styles.option} />
                            </View>
                        </View>
                        <View style={styles.status}>
                            <View style={styles.onlydatebox}>
                                <Text style={styles.date}>09th June 2020</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>
            </View>
        </View><View style={styles.space}>
                <View style={styles.flexbox}>
                    <View style={[styles.notesbox, styles.color3]}>
                        <View style={styles.flexoption}>
                            <View>
                                <Text style={styles.notesheading}>Get the Varient Looks Feels</Text>
                                <Text style={styles.contenttext}>How to MakeBest UI Designing Field Will be Look Sad Being a little Kind of Jobs.</Text>
                            </View>
                            <View>
                                <SimpleLineIcons name="options-vertical" style={styles.option} />
                            </View>
                        </View>
                        <View style={styles.status}>
                            <View style={styles.onlydatebox}>
                                <Text style={styles.date}>09th June 2020</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.notesbox, styles.space, styles.color4]}>
                        <View style={styles.flexoption}>
                            <View>
                                <Text style={styles.notesheading}>Get the Varient Looks Feels</Text>
                                <Text style={styles.contenttext}>How to MakeBest UI Designing Field Will be Look Sad Being a little Kind of Jobs.</Text>
                            </View>
                            <View>
                                <SimpleLineIcons name="options-vertical" style={styles.option} />
                            </View>
                        </View>
                        <View style={styles.status}>
                            <View style={styles.onlydatebox}>
                                <Text style={styles.date}>09th June 2020</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View></>

    )
}

export default NoteListComponent