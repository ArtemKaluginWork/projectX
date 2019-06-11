import { createThemes } from 'utils';

const styles = Colors => ({
  text: {
    fontSize: 16,
    marginHorizontal: 10,
    color: Colors.black,
  },
});

export default createThemes(styles);
