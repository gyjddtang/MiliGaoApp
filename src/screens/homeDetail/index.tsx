/**
 * Created by MiliGao on 2019-01-24.
 */
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProps, NavigationStackScreenOptions } from 'react-navigation';
import { injectStores, IStore } from 'stores';
import { observer } from 'mobx-react/native';
import styles from './index.styl';

interface IState {
  [key: string]: any
}

interface IProps extends NavigationScreenProps, IStore {
  like?: string
}

@injectStores('auth')
@observer
class HomeDetail extends React.Component<IProps, IState> {
  static navigationOptions({ navigation, screenProps, navigationOptions }: NavigationScreenProps): NavigationStackScreenOptions {
    // console.log(navigation, screenProps, navigationOptions);

    return {
      title: 'Detail',
      headerTransparent: true,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  };

  state: IState = {
    loadingProgress: 0,
    loadingMessage: '',
  };

  changeName(): void {
    this.props.auth.changeName('MG & MB');
  }

  render() {
    const { navigation, auth } = this.props;
    const title: string = navigation.getParam('title');   // getParam 第二个参数可设置获取失败的返回值

    return (
      <View style={styles.homeDetail}>
        <Text>Hello {auth.userName}</Text>
        <Text>{ title }</Text>
        <Button title='change name (mobx-state-tree)' onPress={() => this.changeName()} />
        <Button title="go full-screen modal" onPress={() => this.props.navigation.navigate('Modal')} />
      </View>
    )
  }
}

export default HomeDetail;