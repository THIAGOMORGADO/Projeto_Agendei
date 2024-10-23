import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import { styles } from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';


import { Feather } from '@expo/vector-icons'
import { COLORS, FONT_SIZE } from '../../constants/theme';

export default function Signin() {
  const name = 'thiago morgado'

  function handleSignIn() { }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        <View style={styles.containerLogo}>
          <Header />
        </View>

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.formGroup}>

          <View style={styles.inputArea}>
            <Feather name="user" size={FONT_SIZE.md} color={COLORS.gray3} />
            <TextInput placeholder="name" style={styles.input} color={COLORS.gray3} />
          </View>

          <View style={styles.inputArea}>
            <Feather name="lock" size={FONT_SIZE.md} color={COLORS.gray3} />
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
          </View>

          <Button title="Criar Conta" click={handleSignIn} />
        </KeyboardAvoidingView>

        <View style={styles.footerArea}>
          <Text>Ja tem conta.</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Criar conta.</Text>
          </TouchableOpacity>
        </View>




      </View>
    </TouchableWithoutFeedback>

  );
}