import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  servicesContainer: {
    backgroundColor: COLORS.white,
    flex: 1,

  },
  servicesBanner: {
    backgroundColor: COLORS.blue,
    paddingTop: 10,
    paddingBottom: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.white,
    fontWeight: 'bold',
    marginTop: 5
  },
  specialty: {
    fontSize: FONT_SIZE.md,
    color: COLORS.white,
    marginTop: 3
  }
}