import { Layout } from 'constants';
import { createThemes, transparentize } from 'utils';

const styles = Colors => ({
  cardWrapper: {
    marginVertical: 8,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 32,
    minWidth: Layout.window.width - 80,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardShadow: {
    position: 'absolute',
    minWidth: Layout.window.width - 72,
    top: 4,
    right: -5,
    left: -3,
    backgroundColor: transparentize(Colors.black, 0.3),
  },
});

export default createThemes(styles);
