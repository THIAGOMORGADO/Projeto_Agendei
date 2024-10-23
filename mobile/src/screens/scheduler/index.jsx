import { Text, View } from 'react-native';
import { styles } from './styles';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from '../../constants/calendar'
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Button from '../../components/Button';


LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export default function Schedule() {
  const [selected, setSelected] = useState("")
  const [selectedHour, setSelectedHour] = useState("");
  return (
    <View style={styles.container}>
      <View >
        <Calendar
          theme={styles.theme}
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: { selected: true },
          }}
          minDate={
            new Date().toDateString()
          }
        />
        <View>
          <Text style={styles.hourText}>Horario</Text>
        </View>


        <View >
          <View>
            <Picker selectedValue={selectedHour} onValueChange={(itemValue, itemIndex) => {
              setSelectedHour(itemValue);
            }}>
              <Picker.item label="09:00" value="09:00" />
              <Picker.item label="10:00" value="10:00" />
              <Picker.item label="11:00" value="11:00" />

            </Picker>
          </View>
        </View>

      </View>

      <View>
        <Button title="Confirma Reserva " />
      </View>

    </View>
  );
}