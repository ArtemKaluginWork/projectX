import { createStackNavigator } from 'react-navigation';

import Invite from 'screens/Invite';
import CreateCurrency from 'screens/CreateCurrency';

const navigationOptions = {
  title: null,
  header: null,
  headerTintColor: null,
  headerTitleStyle: null,
};

const StartingStack = createStackNavigator({
  Invite,
  CreateCurrency,
}, {
  initialRouteName: 'Invite',
  defaultNavigationOptions: navigationOptions,
});

export default StartingStack;
