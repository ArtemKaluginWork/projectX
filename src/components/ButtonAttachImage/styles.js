import { createThemes } from 'utils';

const styles = Colors => ({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 4,
    marginVertical: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonWrapper: {
    alignItems: 'center',
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
