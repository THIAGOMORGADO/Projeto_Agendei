import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  btnContainer: {
    width: "100%",

    borderRadius: 6,
    padding: 12,
  },
  primary: {
    backgroundColor: COLORS.blue,
  },
  danger: {
    backgroundColor: COLORS.red,
  },
  btnText: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: FONT_SIZE.md
  },
}