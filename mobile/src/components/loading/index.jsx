import { ActivityIndicator, Image, View } from 'react-native';
import { styles } from './styles';

import Logo from '../../assets/Aicon.png'
import { StatusBar } from 'expo-status-bar';

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar translucent hidden />
      <Image source={Logo} style={styles.img} />
      <ActivityIndicator color='#fff' size={'large'} />
    </View>
  );
}