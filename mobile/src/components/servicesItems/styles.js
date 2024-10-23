import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white

  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.gray4,
    borderRadius: 8,
  },

  price: {
    fontSize: FONT_SIZE.md,
    color: COLORS.blue,
    fontWeight: 'bold',
    marginTop: 5
  },
  service: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray3,
    fontWeight: 'bold',
    marginTop: 3
  },
  containerBtn: {
    marginTop: 5,
  }
}