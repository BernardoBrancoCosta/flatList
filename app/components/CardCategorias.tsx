import {View, StyleSheet, FlatList} from 'react-native';
import {Link} from 'expo-router';


export default function CardCategorias({item}:{item:any}) {
  return(
    <View style={styles.categorias}>
      {item.titulo}
        <FlatList style={styles.row}
        data={item.filmes}
        keyExtractor={item => item.id}
        renderItem={renderFilmes}
        />
    </View>
  )
}

function renderFilmes({item}:{item:any}){
  return(
    <View style={[styles.margem]}>
        <View style={[styles.filme, {backgroundColor:item.cor}]}>
            {item.titulo}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#000000',
    fontFamily: 'helvetica',

  },
  categorias:{
    flexDirection: 'column',
    backgroundColor: '#1b1515',
    color: '#f55c5c',
    borderColor: '#8b2626',
    borderBottomWidth: 2,
    textAlign: 'left',
    fontSize: 20,
    padding: 10,
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff00',
    overflowX: 'scroll',
    },
  margem:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
    margin: 15,
  },
  filme: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffdfdf',
    borderColor: '#8b3939',
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 20,
    height: 275,
    width: 275,
  }
})