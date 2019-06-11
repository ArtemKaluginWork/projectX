import { createThemes } from 'utils';

const styles = Colors => ({
  linearGradient: {
    flex: 1,
  },
  color1: {
    color: Colors.primary,
  },
  color2: {
    color: Colors.secondary,
  },
});

export default createThemes(styles);
