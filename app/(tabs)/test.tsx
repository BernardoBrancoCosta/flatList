import { useState } from 'react';
import { StyleSheet, ScrollView, View, Pressable, Text, Switch } from 'react-native';

export default function App() {
  const [ativo, setAtivo] = useState(true);

  return (
    <View style={[styles.body, {backgroundColor: ativo? '#222':'#fff'}]}>
      <View style={styles.parent}>
        <View style={[styles.settingsArea, {backgroundColor: ativo? '#333':'#ccc'}]}>
          <Text>Modo escuro: </Text>
          <Switch
            value={ativo}
            onValueChange={setAtivo}
            trackColor={{
              false: '#334155',
              true: '#F97316',
            }}
            thumbColor={ativo ? '#ffffff' : '#94A3B8'}
          />
          <Text>{ativo ? 'Ligado':'Desligado'}</Text>
        </View>
        <View style={[styles.contentArea, {backgroundColor: ativo? '#444':'#aaa'}]}>
          <Pressable style={({hovered})=>[styles.content, hovered && styles.contentHovered]}>
            <ScrollView horizontal style={styles.scrollArea} contentContainerStyle={[{justifyContent: 'space-around'}]}>
              <View style={styles.item}><Text>I</Text></View>
              <View style={styles.item}><Text>II</Text></View>
              <View style={styles.item}><Text>III</Text></View>
              <View style={styles.item}><Text>IV</Text></View>
              <View style={styles.item}><Text>V</Text></View>
              <View style={styles.item}><Text>VI</Text></View>
            </ScrollView>
          </Pressable>
          <Pressable style={({hovered})=>[styles.content, hovered && styles.contentHovered]}>
            <ScrollView horizontal style={styles.scrollArea} contentContainerStyle={[{justifyContent: 'space-around'}]}>
              <View style={styles.item}><Text>I</Text></View>
              <View style={styles.item}><Text>II</Text></View>
              <View style={styles.item}><Text>III</Text></View>
            </ScrollView>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
    },
    parent:{
        flex: 1,
        margin: 15
    },
    settingsArea:{
      flex: 1,
      gap: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      margin: 5,
      borderRadius: 10
    },
    contentArea:{
      flex: 5,
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: 5,
      margin: 5,
      borderRadius: 15,
      overflow: 'hidden'
    },
    content:{
      flex: 2,
      backgroundColor: '#666',
      borderRadius: 10,
      margin: 5,
    },
    contentHovered:{
      padding: 1,
      flex: 3
    },
    scrollArea:{
      backgroundColor: '#00000000',
    },
    item:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 250,
      borderRadius: 5,
      margin: 5,
      backgroundColor: '#444'
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