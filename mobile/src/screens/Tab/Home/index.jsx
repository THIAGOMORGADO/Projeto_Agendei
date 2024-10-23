import { FlatList, Text, View } from 'react-native';
import { styles } from './styles'
import { doctors, appointments, doctors_services } from '../../../constants/data'
import DoctorItemList from '../../../components/DoctorItemList';
import icon from '../../../constants/icons'
import ListEmpty from '../../../components/ListEmpty';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agende seu serviços medicos</Text>



      <FlatList
        ListEmptyComponent={<ListEmpty />}
        data={doctors}
        keyExtractor={(doc) => doc.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={
          ({ item }) => (
            <DoctorItemList
              name={item.name}
              icon={item.icon == 'M' ? icon.Male : icon.Famele}
              specialty={item.specialty}
            />
          )}
      />

    </View>
  );
}