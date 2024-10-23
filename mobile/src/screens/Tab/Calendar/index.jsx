import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';

import { appointments } from '../../../constants/data'
import icons from '../../../constants/icons'
import DoctorItemList from '../../../components/DoctorItemList';
import Appointments from '../../../components/Appointments';

export default function Calendar() {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={appointments}
        keyExtractor={(item) => item.id_appointment}
        renderItem={({ item }) => (
          <Appointments
            services={item.service}
            doctor={item.doctor}
            specialty={item.specialty}
            data={item.booking_date}
            hour={item.booking_hour}
          />
        )}

      />
    </View>
  );
}