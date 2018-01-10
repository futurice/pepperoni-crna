import { TabNavigator } from 'react-navigation';
import appConfig from '../../../app.json';

// ## View Imports ##
import WelcomeView from '../views/Welcome';

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: 'white',
    style: { backgroundColor: appConfig.expo.primaryColor || '#39babd' },
    scrollEnabled: true,
  },
};

export default TabNavigator(
  {
    Welcome: { screen: WelcomeView },
    // ## End TabNavigator Views ##
  },
  TabNavigatorConfig,
);
