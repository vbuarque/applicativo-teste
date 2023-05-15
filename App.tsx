import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {DefaultButton, DefaultInput} from './src/components/';

export default function App() {
  return (
    <View style={styles.container}>
      <DefaultInput placeholder='Email' marginBottom={16}/>
      <DefaultInput placeholder='Senha' marginBottom={16} secureTextEntry/>
      <DefaultButton title="Teste" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
