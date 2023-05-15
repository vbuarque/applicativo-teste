import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { DefaultButton, DefaultInput, PasswordInput } from '../../components';

export default function SignIn() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.Container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.textTitle}>Olá de novo!</Text>
        <Text style={styles.textSubtitle}>
          Sejá bem-vindo, você fez falta!
        </Text>
      </View>

      <View style={styles.containerInputs}>
        <DefaultInput placeholder="E-mail" />

        <PasswordInput marginTop={24} marginBottom={16} />

        <Text style={{ color: "#00688C", marginLeft: "auto" }}>Esqueceu a senha?</Text>
      </View>
      <DefaultButton
        title="Entrar"
        onPress={openScreen}
      />
    </View>
  )
}