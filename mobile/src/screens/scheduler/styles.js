import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    marginBottom: 20,

  },
  theme: {
    todayTextColor: COLORS.red,
    selectedDayBackgroundColor: COLORS.blue,
    selectedDayTextColor: COLORS.white,
    arrowColor: COLORS.blue
  },
  hourText: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    color: COLORS.gray2,
    marginTop: 20
  }
}