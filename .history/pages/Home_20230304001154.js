import BackgroundImage from "../components/BackgroundImage";
import SearchComponent from "../components/SearchComponent";
import AddButtonComponent from "../components/AddButtonComponent";
import NoteListComponent from "../components/NoteListComponent";
import { StyleSheet, View, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState,useEffect } from "react";
import NoNotes from  "../components/NoNotes";


function Home (){

//  const [notes, setNotes] = useState([]);

//  const findNote =async ()=>{

//     const getNotes = await AsyncStorage.getItem('Z-NOTES');
//     await AsyncStorage.clear();
//     console.log(getNotes)
//     setNotes(getNotes)
//  }
  
 
//  useEffect(() => {

//     findNote()
  
//  }, [])
 




    return(
        <><BackgroundImage />
        <View style={styles.contentbox}>
            <ScrollView>
                <AddButtonComponent />
                <SearchComponent />
                <NoteListComponent/>
                {/* </ScrollView> */}
        </View></>

    )
}

const styles = StyleSheet.create({
    contentbox: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        marginTop: 80,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
      },

});

export default Home