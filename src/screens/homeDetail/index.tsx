/**
 * Created by MiliGao on 2019-01-24.
 */
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import styles from './index.styl';

interface IState {
  loadingProgress: number;
  loadingMessage: string;
}

class HomeDetail extends React.Component<NavigationInjectedProps, IState> {
  state: IState = {
    loadingProgress: 0,
    loadingMessage: '',
  };

  componentDidMount(): void {
    console.log(this.props.navigation);
  }

  render() {
    return (
      <View style={styles.homeDetail}>
        <Text>12345yef;b,lwmblmw;,;f,ef</Text>
      </View>
    )
  }
}

export default HomeDetail;