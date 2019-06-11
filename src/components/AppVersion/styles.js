import { createThemes } from 'utils';

const styles = Colors => ({
  text: {
    color: Colors.secondary,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
  },
});

export default createThemes(styles);
