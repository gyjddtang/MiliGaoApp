/**
 * Created by MiliGao on 2019-01-21.
 */
import * as React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { initI18n } from 'i18n';
import Home from 'screens/home';
import HomeDetail from 'screens/homeDetail';
import FullModal from 'screens/fullModal';
import Mine from 'screens/mine';

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

const MineStack = createStackNavigator(
  {
    Mine: {
      screen: Mine
    },
    Modal: {
      screen: FullModal,
    }
  },
  {
    mode: 'modal',   // 渲染和转换的样式  card | modal
    headerMode: 'none'   // 页眉的呈现方式  float | screen | none
  }
);

const RootStack = createBottomTabNavigator(
  {
    HomeTab: MainStack,
    MineTab: MineStack
  },
  {
    navigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName: string;
          if (routeName === 'HomeTab') {
            iconName = focused ? 'paper-plane' : 'paper-plane-o';
          } else if (routeName === 'MineTab') {
            iconName = focused ? 'user-circle' : 'user-circle-o';
          }

          return <FontAwesome name={iconName} size={horizontal ? 14 : 18} color={tintColor} />
        },
        tabBarLabel: ({ tintColor }) => {
          const { routeName } = navigation.state;
          const tabName = routeName === 'HomeTab' ? '首页' : '个人中心';

          return (
            <Text style={{ color: tintColor, fontSize: 10 }}>
              { tabName }
            </Text>
          )
        }
      }
    },
    tabBarOptions: {
      activeTintColor: '#FE8400',
      inactiveTintColor: '#adadad'
    },
  }
);

class App extends React.Component {
  componentDidMount(): void {
    initI18n();
  }

  render() {
    return (
      <RootStack />
    )
  }
}

export default App;