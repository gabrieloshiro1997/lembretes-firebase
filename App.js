import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import ENV from './env';
import * as firebase from 'firebase';

if (firebase.apps.lengh) {
  firebase.initializeApp(ENV);
}

export default function App() {
  const [lembrete, setLembrete] = useState('');

  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.entrada}
        placeholder='Digite seu lembrete'
        onChangeText={capturarLembrete}
        value={lembrete}
      />
      <View style={styles.botao}>
        <Button title='Ok' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
  },
  entrada: {
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    fontSize: 14,
    textAlign: 'center',
    width: '80%',
    marginBottom: 12,
  },
  botao: {
    width: '80%',
  },
});
