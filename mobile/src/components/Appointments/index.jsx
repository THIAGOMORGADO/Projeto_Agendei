import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import icons from "../../constants/icons";
import Button from "../Button";

export default function Appointments(props) {
  return (
    <View style={styles.appointmenstsContainer}>
      <Text style={styles.appointmentsTitle}>{props.services} - {props.doctor}</Text>
      <Text style={styles.appointmentsSubTitle}>{props.specialty}</Text>

      <View style={styles.appointmentsCalendarContainer}>
        <View style={styles.appoinmentsCalendar}>
          <View style={styles.calendarInfo}>
            <Image source={icons.Calendar} style={styles.appointmenstsImg} />
            <Text style={styles.DateAppointments}>{props.data}</Text>
          </View>
          <View style={styles.calendarInfo}>
            <Image source={icons.Clock} style={styles.appointmenstsImg} />
            <Text style={styles.DateAppointments}>{props.hour}</Text>
          </View>

        </View>
        <View >
          <Button
            title="Cancelar reserva" theme='danger' />
        </View>
      </View>


    </View>
  )
}