import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  appointmenstsContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.gray4,
    marginBottom: 10,
  },
  appointmentsTitle: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginBottom: 2

  },
  appointmentsSubTitle: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray1,
    marginBottom: 4
  },
  appointmentsCalendarContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12
  },
  appointmentsCalendar: {
    width: '100%',
  },
  calendarInfo: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  appointmenstsImg: {
    width: 30,
    height: 30,
  },
  DateAppointments: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
    marginBottom: 4,
    marginLeft: 10
  },
  HourAppoints: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray1,
    marginBottom: 4,
    marginLeft: 10
  },
  appointmentsBtnArea: {
    backgroundColor: COLORS.red,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
  },
  appointmentsBtnAText: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.white,
    textAlign: 'center'
  }
}