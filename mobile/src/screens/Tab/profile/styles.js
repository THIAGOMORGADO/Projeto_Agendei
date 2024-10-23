import { COLORS, FONT_SIZE } from "../../../constants/theme";

export const styles = {
  profileContainer: {
    flex: 1,
    backbroundColor: COLORS.white,
    paddingTop: 12,
  },
  item: {
    borderWidth: 1,
    borderColor: COLORS.gray4,
    paddingLeft: 8,
    paddingTop: 15,
    paddingBottom: 15,
  },
  title: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,

  },
  description: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginLeft: 8
  },

}