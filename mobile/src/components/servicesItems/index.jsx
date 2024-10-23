import { Text, View } from 'react-native';
import { styles } from './styles';
import Button from '../Button';

export default function ServicesItems(props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.btnArea}>
          <Text style={styles.service}>{props.service}</Text>
          <Text style={styles.price}>{
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL"
            }).format(props.price)
          }</Text>
        </View>
        <View style={styles.containerBtn}>
          <Button title="Agendar" />
        </View>
      </View>
    </View>
  );
}