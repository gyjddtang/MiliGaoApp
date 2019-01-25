/**
 * Created by MiliGao on 2019-01-21.
 */
import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from 'screens/home';
import HomeDetail from 'screens/homeDetail';

const RootStack = createStackNavigator(
  {
    Home,
    HomeDetail
  },
  {
    initialRouteName: "Home"
  }
);

class App extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
}

export default App;