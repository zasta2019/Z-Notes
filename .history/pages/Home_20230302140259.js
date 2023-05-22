import BackgroundImage from "../components/BackgroundImage";
import SearchComponent from "../components/SearchComponent";
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';


function Home (){
    return(
        <View style={styles.contentbox}>
       
        {/* <BackgroundImage /> */}
        <SearchComponent />
      
        </View>

    )
}

export default Home