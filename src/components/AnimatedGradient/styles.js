import { createThemes } from 'utils';

const createStSh = (acc, color, index) => {
  acc[`color${index}`] = { color };
  return acc;
};

const styles = Colors => ({
  main: {
    flex: 1,
  },
  ...(Colors.gradient.reduce(createStSh, {})),
});

export default createThemes(styles);
