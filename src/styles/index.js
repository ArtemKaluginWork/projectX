import { createThemes } from 'utils';

const styles = Colors => ({
  flexibleContainer: {
    flex: 1,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
});

export default createThemes(styles);
