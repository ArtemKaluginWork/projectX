import { createThemes } from 'utils';

const styles = Colors => ({
  wrapper: {
    flex: 0,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    width: 'auto',
    paddingHorizontal: 16,
  },
  text: {
    textAlign: 'center',
    color: Colors.primary,
    fontSize: 40,
    fontWeight: '700',
  },
  currency: {
    fontSize: 36,
  },
});

export default createThemes(styles);
