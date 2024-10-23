import { FlatList, Image, Text, View } from 'react-native';
import { doctors_services } from '../../constants/data'
import { styles } from './styles';
import ServicesItems from '../../components/servicesItems';
import icons from '../../constants/icons';


export default function Services() {
  return (
    <View style={styles.servicesContainer}>

      <View style={styles.servicesBanner}>

        <Image source={icons.Famele} style={styles.img} />
        <Text style={styles.name}>Thiago</Text>
        <Text style={styles.specialty}>Cardiologista </Text>

      </View>

      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={doctors_services}
          keyExtractor={(services) => services.id_service} renderItem={
            ({ item }) => (
              <ServicesItems service={item.description} price={item.price.toFixed(2)} />
            )
          } />
      </View>

    </View>
  );
}