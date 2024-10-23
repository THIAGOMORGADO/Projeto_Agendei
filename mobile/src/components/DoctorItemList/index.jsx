import { Image, TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';

export default function DoctorItemList(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={props.icon} style={styles.icon} />
      <View style={styles.info}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.specialty}>{props.specialty}</Text>
      </View>


    </TouchableOpacity>
  );
}