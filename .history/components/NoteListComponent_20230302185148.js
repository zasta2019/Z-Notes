import NoteItemComponent from './NoteItemComponent';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import NoNotes from './NoNotes';



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
 
 if (!notes && notes.length == 0){
    return(
        <NoNotes/>
    )
 }else({

 

    return(
        <FlatList
        data={Notes}
        renderItem={(itemData) => {
          return (
            <NoteItemComponent
              title={itemData.item.title}
              desc={itemData.item.desc}
              time={itemData.item.time}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
      />
     } )

 )


}

export default NoteListComponent