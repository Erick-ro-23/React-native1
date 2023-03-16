
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Saludar from './src/components/saludar';

export default function App() {
  return (
    <View style={styles.container}>
      <Saludar />
      {/* <Text>Curso de React Native</Text>
      <Saludar firtname="Leos" lastname="Ost" />
      <Saludar firtname="Yulis" lastname="Ost" />
      <Saludar name="Erick Daniel" />
      <Saludar firtname="Erick Daniel" lastname="Riva Obregon" /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
