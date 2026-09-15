import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function App() {
  const [ativo, setAtivo] = useState(false);

  return (
    <View style={[styles.body, {backgroundColor: ativo ? '#fff' : '#aaa',}]}>
      <View style={styles.parent}>
        <View style={styles.child1}>
          <Text style={{ color: '#000', fontSize: 16 }}>Modo Escuro</Text>
          <Switch
            value={ativo}
            onValueChange={setAtivo}
            trackColor={{
              false: '#334155',
              true: '#F97316',
            }}
            thumbColor={ativo ? '#fff' : '#94A3B8'}
          />
          <Text>{ativo ? 'Ligado' : 'Desligado'}</Text>
        </View>
        <View style={styles.child2}>
          <View style={styles.elem}><View style={styles.content}>...</View></View>
          <View style={styles.elem}><View style={styles.content}>...</View></View>
          <View style={styles.elem}><View style={styles.content}>...</View></View>
          <View style={styles.elem}><View style={styles.content}>...</View></View>
          <View style={styles.elem}><View style={styles.content}>...</View></View>
          <View style={styles.elem}><View style={styles.content}>...</View></View>
          <View style={styles.elem}><View style={styles.content}>...</View></View>
          <View style={styles.elem}><View style={styles.content}>...</View></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    parent: {
        flex: 1,
        backgroundColor: '#00000000',
        margin: 15
    },
    child1: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#ccc',
      gap: 5
    },
    child2: {
      flex: 1,
      backgroundColor: '#bbb',
      flexDirection: 'row',
      overflowX: 'auto',
      fontFamily: 'Verdana',
    },
    elem: {
      width: 150,
      height: 150,
      backgroundColor: '#bbbbbb00',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      width: 125,
      height: 125,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#aaa',
      borderRadius: 15
    }
})

/*
| Font                | General category | Common association        |
| ------------------- | ---------------- | ------------------------- |
| **Arial**           | Sans-serif       | General documents/UI      |
| **Times New Roman** | Serif            | Academic/formal documents |
| **Helvetica**       | Sans-serif       | Graphic design/print      |
| **Calibri**         | Sans-serif       | Microsoft Office          |
| **Georgia**         | Serif            | Web/document text         |
| **Verdana**         | Sans-serif       | Screen/UI text            |
| **Courier New**     | Monospace        | Programming/terminals     |
| **Tahoma**          | Sans-serif       | Windows UI                |
| **Trebuchet MS**    | Sans-serif       | Web/UI                    |
*/