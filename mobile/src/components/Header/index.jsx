import { Image, View } from 'react-native';
import icons from '../../constants/icons';
import { styles } from './styles';

export default function Header() {
  return (
    <View>
      <Image source={icons.Logo} style={styles.img} />
    </View>
  );
}