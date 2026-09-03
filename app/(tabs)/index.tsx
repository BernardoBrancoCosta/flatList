import {View, StyleSheet, FlatList} from 'react-native';
import DadosDosFilmes from '../components/DadosDosFilmes';
import CardCategorias from '../components/CardCategorias';

const categorias = DadosDosFilmes();
function renderCategoria({item}:{item:any}) {
  return <CardCategorias item={item}/>;
}

export default function App() {
  return (
    <View style={styles.body}>
        <FlatList
        data={categorias}
        keyExtractor={item => item.id}
        renderItem={CardCategorias}
        />
    </View>
   );
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#000000',
    fontFamily: 'helvetica',

  },
  titulo:{
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 20,
  }
});
