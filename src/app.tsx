/**
 * Created by MiliGao on 2019-01-21.
 */
import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from 'screens/home';
import HomeDetail from 'screens/homeDetail';
import FullModal from 'screens/fullModal';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    HomeDetail: {
      screen: HomeDetail
    }
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Modal: {
      screen: FullModal
    },
  },
  {
    mode: 'card',   // 渲染和转换的样式  card | modal
    headerMode: 'none'   // 页眉的呈现方式  float | screen | none
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