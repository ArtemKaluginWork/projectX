import { createThemes } from 'utils';

const styles = Colors => ({
  button: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 30,
    marginVertical: 16,
  },
  text: {
    color: Colors.white,
    fontSize: 20,
  },
  indicator: {
    color: Colors.white,
  },
});

export default createThemes(styles);
