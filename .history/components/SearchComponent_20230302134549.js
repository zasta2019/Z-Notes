

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

});

export default SearchComponent