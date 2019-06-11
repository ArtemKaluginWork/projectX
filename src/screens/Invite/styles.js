import { createThemes } from 'utils';

const styles = Colors => ({
  ccs: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default createThemes(styles);
