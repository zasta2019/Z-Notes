


function AddButtonComponent(){
    return(
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
    )
}

export default AddButtonComponent;