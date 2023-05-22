import BackgroundImage from "../components/BackgroundImage";
import SearchComponent from "../components/SearchComponent";


function Home (){
    return(
        <View style={styles.contentbox}>
        <View>
        {/* <BackgroundImage /> */}
        <SearchComponent />
        </>
        </View>

    )
}

export default Home