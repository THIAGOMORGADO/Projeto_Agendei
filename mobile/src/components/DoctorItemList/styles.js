import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray4,
    borderRadius: 6,
    marginTop: 3,
    marginBottom: 3,
  },
  icon: {
    width: 50,
    heigth: 50,
    marginRight: 8,
  },
  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1

  },
  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3
  }
}