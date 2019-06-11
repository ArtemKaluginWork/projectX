import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 32,
  }
});
