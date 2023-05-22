
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';

function BackgroundImage(){
    return(
        <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../assets/design.jpg')}  >
            </ImageBackground>

    )
}

export default BackgroundImage

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: "100%",
      height: 712,
      marginTop: 25,
    },

});