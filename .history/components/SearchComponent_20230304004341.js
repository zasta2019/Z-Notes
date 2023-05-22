
import * as React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function SearchComponent(){
    return(
        <View>
        <TextInput style={styles.inputfield}
          placeholder="Search here"
          placeholderTextColor="#646464"
        />
        <Icon name="search" style={styles.searchIcon} />
        <Icon name="microphone" style={styles.mick} />
      </View>
    )
}

const styles = StyleSheet.create({

    inputfield: {
        backgroundColor: "#F9F9F9",
        borderRadius: 10,
        width: 350,
        height: 20,
        flex: 1,
        paddingRight: 33,
        paddingBottom:35,
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

export default SearchComponent