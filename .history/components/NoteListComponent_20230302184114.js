import NoteItemComponent from './NoteItemComponent'


function NoteItemComponent(){

    
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