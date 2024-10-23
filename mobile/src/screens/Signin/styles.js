import { COLORS } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 50,
    justifyContent: 'space-between',

  },
  containerLogo: {
    alignItems: 'center',
  },
  inputArea: {

    marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: COLORS.gray5,
    padding: 5,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    width: '100%',
    backgroundColor: COLORS.gray5,
    padding: 10,
    borderRadius: 6,

  },
  footerArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  footerLink: {
    color: COLORS.blue,
    fontWeight: 'bold',

  }
}