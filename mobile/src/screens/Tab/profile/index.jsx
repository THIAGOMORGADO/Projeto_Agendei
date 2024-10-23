import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function Profile(props) {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.item}>
        <Text style={styles.title}>Nome:</Text>
        <Text style={styles.description}>Thiago Morgado</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Nome:</Text>
        <Text style={styles.description}>Thiago Morgado</Text>
      </View>
    </View>
  )
}