import { createThemes } from 'utils';

const styles = Colors => ({
  button: {
    height: 40,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 32,
    color: Colors.white,
  },
  activeIcon: {
    color: Colors.black,
  },
  text: {
    marginLeft: 16,
    fontSize: 16,
    color: Colors.white,
    marginVertical: 10,
  },
  activeText: {
    color: Colors.black,
  }
});

export default createThemes(styles);
