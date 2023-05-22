import NoteItemComponent from './NoteItemComponent'


function NoteItemComponent(){

    const [notes, setNotes] = useState([]);

 const findNote =async ()=>{

    const getNotes = await AsyncStorage.getItem('Z-NOTES');
    console.log(getNotes)
    setNotes(getNotes)
 }
  
 
 useEffect(() => {

    findNote()
  
 }, [])
 

    return(
        <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <NoteItemComponent
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
      />
    )
}