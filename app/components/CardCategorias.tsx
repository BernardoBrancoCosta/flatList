import {View, StyleSheet, FlatList, TouchableOpacity, Modal} from 'react-native';
import {Link} from 'expo-router';
//import { useState } from 'react';


export default function CardCategorias({item}:{item:any}) {
  return(
    <View style={styles.categorias}>
      {item.titulo}
        <FlatList horizontal
        data={item.filmes}
        keyExtractor={item => item.id}
        renderItem={renderFilmes}
        />
    </View>
  )
}

function renderFilmes({item}:{item:any}){
  //const [sobre] = useState(false);
  return(
    <View style={[styles.margem]}>
        <Link href={{pathname: '/components/filme/[id]', params: {id: item.id, titulo: item.titulo}}} style={[styles.link]}>
          <View style={[styles.filme, {backgroundColor:item.cor}]}>

          </View>
        </Link>
    </View>
  )
}

const styles = StyleSheet.create({
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
  },
  link: {
    textAlign: 'center',
  }
})