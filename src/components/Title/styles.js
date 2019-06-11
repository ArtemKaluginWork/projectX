import { createThemes } from 'utils';

const styles = Colors => ({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default createThemes(styles);
