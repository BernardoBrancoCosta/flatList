import {View, StyleSheet, FlatList} from 'react-native';

const categorias = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      { id: "1a", titulo: "Oppenheimer", cor: "#1a1a2e" },
      { id: "1b", titulo: "Duna 2", cor: "#16213e" },
      { id: "1c", titulo: "Barbie", cor: "#0f3460" },
      { id: "1d", titulo: "Poor Things", cor: "#533483" },
      { id: "1e", titulo: "Saltburn", cor: "#2b2d42" },
    ]
  },
  {
    id: "2",
    titulo: "Ação",
    filmes: [
      { id: "2a", titulo: "John Wick 4", cor: "#1b1b2f" },
      { id: "2b", titulo: "Missão Impossível", cor: "#162447" },
      { id: "2c", titulo: "Top Gun", cor: "#1f4068" },
      { id: "2d", titulo: "Mad Max", cor: "#1b262c" },
    ]
  },
  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      { id: "3a", titulo: "Superbad", cor: "#2d132c" },
      { id: "3b", titulo: "The Grand Budapest", cor: "#1c3334" },
      { id: "3c", titulo: "Knives Out", cor: "#2c003e" },
    ]
  },
  {
    id: "4",
    titulo: "Documentários",
    filmes: [
      { id: "4a", titulo: "Free Solo", cor: "#0d0d0d" },
      { id: "4b", titulo: "The Social Dilemma", cor: "#001011" },
      { id: "4c", titulo: "My Octopus Teacher", cor: "#002b36" },
    ]
  },
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      { id: "5a", titulo: "Hereditary", cor: "#200122" },
      { id: "5b", titulo: "Midsommar", cor: "#190a05" },
      { id: "5c", titulo: "Get Out", cor: "#0a0a0a" },
    ]
  },
];


export default function App() {
  return (
    <View style={styles.body}>
        <FlatList
        data={categorias}
        keyExtractor={item => item.id}
        renderItem={renderCategoria}
        />
    </View>
   );
}

function renderCategoria({item}:{item:any}){
  return(
    <View style={styles.categorias}>
      {item.titulo}:
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
    <View style={[styles.filmes, {backgroundColor:item.cor}]}>
        {item.titulo}
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
    overflow: 'scroll',
    },
  filmes:{
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#ff9696',
    color: '#ffdfdf',
    borderColor: '#8b3939',
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 20,
    height: 300,
    width: 300,
    margin: 15,
  }
});
