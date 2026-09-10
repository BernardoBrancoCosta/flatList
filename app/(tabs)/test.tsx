import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { View, Text, Switch } from 'react-native';

export default function App() {
  const [ativo, setAtivo] = useState(false);

  return (
    <View style={styles.parent}>
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
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ccc'
    },
    child: {
        flex: 1
    }
})