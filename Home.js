import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ScrollView, ImageBackground, screenHeight, screenWidth } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Start(props) {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require('./assets/font/Inter-Regular.ttf'),
    "Inter-Bold": require('./assets/font/Inter-Bold.ttf'),
    "Ubuntu-Regular": require('./assets/font/Ubuntu-Regular.ttf'),
    "Ubuntu-Bold": require('./assets/font/Ubuntu-Bold.ttf'),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  }
  else {
    SplashScreen.hideAsync();
  }
  return (
    <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('./assets/design.jpg')}  >
      <View style={styles.contentbox}>
        <ScrollView>
          <View style={styles.flex}>
            <Text style={styles.heading}>My Notes</Text>
            <View style={styles.addbutton}>
              <TouchableOpacity activeOpacity={0.6}>
                <Pressable>
                  <View style={styles.add}>
                    <Image style={styles.addimg} source={require('./assets/add.png')} />
                  </View>
                </Pressable>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TextInput style={styles.inputfield}
              placeholder="Search here"
              placeholderTextColor="#646464"
            />
            <Icon name="search" style={styles.searchIcon} />
            <Icon name="microphone" style={styles.mick} />
          </View>
          <View style={styles.imgbox}>
            <Image style={styles.emptyimg} source={require('./assets/empty.jpg')} />
          </View>
          <Text style={styles.emptytext}>Empty Notes!</Text>
          <Text style={styles.click}>Click here to write something exciting</Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: 712,
    marginTop: 25,
  },
  emptytext: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 21,
    color: "#000000",
    marginTop: 25,
  },
  click: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 18,
    color: "#858E93",
    marginTop: 15,
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
  imgbox: {
    width: 250,
    height: 200,
    flex: 1,
    alignSelf: 'center',
    marginTop: 100,
    overflow: "hidden",
  },
  emptyimg: {
    width: "100%",
    height: "100%",
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
});

