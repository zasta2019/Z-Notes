import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';



function NoteListComponent(props) {

    const [notes, setNotes] = useState('');

    const findNotes = async () => {
        const getNotes = await AsyncStorage.getItem('Z-NOTES');
        console.log(getNotes);
        setNotes(getNotes);
        console.log(notes);

    }

    useEffect(() => {

        findNotes();

    }, [])

    return (

        <><View style={styles.space}>
            <View style={styles.flexbox}>
                {notes && notes.map((note,id) => {
                    return (

                        <Pressable onPress={() => props.navigation.navigate("Viewnotes")}>
                            <View style={[styles.notesbox, styles.color1]}>
                                <View style={styles.flexoption}>
                                    <View>
                                        <Text style={styles.notesheading}>{note.title}</Text>
                                        <Text style={styles.contenttext}>{note.desc}</Text>
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
                                        <Text style={styles.date}>{note.time}</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>

                    )



                })}

            </View>
        </View>

        </>

    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: 712,
        marginTop: 25,
    },
    contentbox: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        marginTop: 80,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    heading: {
        fontFamily: "Ubuntu-Bold",
        fontSize: 24,
        lineHeight: 28,
        color: "#000000",
        marginTop: 3,
    },
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
        position: 'absolute',
        top: 7,
        right: 0,
        fontSize: 17,
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
        padding: 10,
        height: 190,
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
        paddingTop: 20,
    },
    flexoption: {
        flexDirection: "row",
    },
    contenttext: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 12,
        lineHeight: 15,
        paddingRight: 15,
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
        flexDirection: "row",
    },
    datebox: {
        width: 90,
        height: 25,
        backgroundColor: "white",
        borderRadius: 31,
        marginLeft: 25,
    },
    onlydatebox: {
        width: 90,
        height: 25,
        backgroundColor: "white",
        borderRadius: 31,
        marginLeft: 50,
    }
});

export default NoteListComponent