import NoteItemComponent from './NoteItemComponent';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import NoNotes from './NoNotes';
import { useState,useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";




function NoteListComponent(){

    const [notes, setNotes] = useState([]);

 const findNote =async ()=>{

    const getNotes = await AsyncStorage.getItem('Z-NOTES');
    console.log(getNotes)
    setNotes(getNotes)
 }
  
 
 useEffect(() => {

    findNote()
  
 }, [])
 
 if (!notes || notes==null|| notes.length == 0){
    console.log("inside if")
    return(
        <NoNotes/>
    )
 }else{
    console.log("inside else")

    return(

        <FlatList
        data={notes}
        keyExtractor={(item, id) => index.toString()}
        renderItem={(note) => {
          return (
            <NoteItemComponent
            title= {note.title}
            desc={note.desc}
            time={note.time}/>
           
          );
        }}
      />
    )
}

}

export default NoteListComponent;