import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function Button(props) {

  return (
    <TouchableOpacity
      style={[styles.btnContainer, props.theme == 'danger' ? styles.danger : styles.primary]}// Desabilita o botão enquanto reqLoading for true
    >
      <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
  );

}