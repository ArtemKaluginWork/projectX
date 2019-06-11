import { createThemes } from 'utils';

const styles = Colors => ({
  button: {
    position: 'absolute',
    right: -80,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: Colors.primary,
    fontSize: 40,
    fontWeight: '800',
  },
});

export default createThemes(styles);
