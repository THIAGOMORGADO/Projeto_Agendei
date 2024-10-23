import { Text, View } from 'react-native';
import { styles } from './styles';

export default function ListEmpty() {
  return (
    <View style={styles.container}>
      <Text>Nao A Lista de consulta renderizada...</Text>
    </View>
  );
}