import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function HomeScreen() {
  return (
    <View style={styles.parent}>
        <View style={styles.window}>
            <View style={styles.header}>
              <img src="" alt="" style={styles.imagem}/>
                <View style={styles.title}>
                  titulo
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.options}>
                  <View style={styles.option}>1</View>
                  <View style={styles.option}>2</View>
                  <View style={styles.watch}>play.png</View>
                  <View style={styles.option}>4</View>
                  <View style={styles.option}>5</View>
                </View>
                <View style={styles.watchSelection}>
                  <View style={styles.seasons}></View>
                  <View style={styles.episodes}></View>
                </View>
            </View>
            <View style={styles.footer}>

            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#312e2e',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'scroll',
    fontFamily: 'arial'
  },
  window: {
    flex: 1,
    backgroundColor: '#000000',
    minHeight: 1600,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
  },
  header: {
    flex: 5,
    backgroundColor: '#000000',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
    title: {
      flex: .1,
      backgroundColor: '#8b3939',
      width: 'auto',
      display: 'flex',
      marginTop: 10,
      justifyContent: 'center',
      fontSize: '5vh',
      },
  body: {
    flex: 8,
    backgroundColor: '#2b2121',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
    options: {
      flex: .2,
      width: '100%',
      backgroundColor: '#242222',
      borderColor: '#8b2626',
      borderBottomWidth: '3px',
      borderTopWidth: '3px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
      option: {
        flex: 1,
        height: '50%',
        width: 'auto',
        backgroundColor: '#5e565670',
        border: '1px solid #ffffff',
        margin: '10px',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },
      watch: {
        flex: 3,
        height: '50%',
        backgroundColor: '#ffffff67',
        border: '1px solid #ffffff',
        margin: '10px',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },
    watchSelection: {
      flex: .8,
      width: '100%',
      backgroundColor: '#5e565670',
      display: 'flex',
      alignItems: 'center'
    },
      seasons: {
        flex: .2,
        width: '90%',
        backgroundColor: '#5e565670',
        borderBottomWidth: '3px',
        borderColor: '#8b2626'

      },
      episodes: {
        flex: .8,
        width: '90%',
        backgroundColor: '#5e565670',
      },
  footer: {
    flex: 1,
    backgroundColor: '#242222',
    borderTopWidth: '3px',
    borderColor: '#8b3939',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});