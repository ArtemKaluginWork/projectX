import { createThemes } from 'utils';

const styles = Colors => ({
  main: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  container: {
    flex: 1,
  },
  // content options
  activeTintColor: {
    color: Colors.primary,
  },
  inactiveTintColor: {
    color: Colors.secondary,
  },
  activeBackgroundColor: {
    color: Colors.secondaryBright,
  },
  activeLabelStyle: {
    color: Colors.primary,
  },
  inactiveLabelStyle: {
    color: Colors.secondary,
  },
  itemsContainerStyle: {
    backgroundColor: Colors.transparent,
    marginVertical: 0,
    paddingVertical: 0,
  },
  itemStyle: {
    marginVertical: 20,
    paddingLeft: 20,
    borderColor: Colors.secondary,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  iconContainerStyle: {
    opacity: 1,
    marginRight: 0,
    paddingRight: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    marginLeft: 8,
  },
});

export default createThemes(styles);
