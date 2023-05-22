import BackgroundImage from "../components/BackgroundImage";
import SearchComponent from "../components/SearchComponent";
import NoNotes from "../components/NoNotes";
import AddButtonComponent from "../components/AddButtonComponent";
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';


function Home (){
    return(
        <View style={styles.contentbox}>
       
        {/* <BackgroundImage /> */}
        <SearchComponent />
        <NoNotes/>
      
        </View>

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