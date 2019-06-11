import { createThemes } from 'utils';

const styles = Colors => ({
  text: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 40,
    fontWeight: '600',
  },
  currency: {
    fontSize: 36,
  },
});

export default createThemes(styles);
