import BackgroundImage from "../components/BackgroundImage";
import SearchComponent from "../components/SearchComponent";
import NoNotes from "../components/NoNotes";
import AddButtonComponent from "../components/AddButtonComponent";
import NoteListComponent from "../components/NoteListComponent";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';


function Home (){
    return(
        <><BackgroundImage />
        <View style={styles.contentbox}>
            <ScrollView>
                <AddButtonComponent />
                <SearchComponent />
                <NoteListComponent/>
                {/* <NoNotes /> */}
            </ScrollView>
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