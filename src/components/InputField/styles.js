import { createThemes, transparentize } from 'utils';

const styles = Colors => ({
  input: {
    color: Colors.white,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    paddingVertical: 8,
  },
  placeholderTextColor: {
    color: transparentize(Colors.white),
  },
  selectionColor: {
    color: Colors.white,
  },
});

export default createThemes(styles);
