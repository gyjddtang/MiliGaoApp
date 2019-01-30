/**
 * Created by MiliGao on 2019-01-29.
 */
import * as React from 'react';
import { View, Text, Switch } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { withNamespaces, WithNamespaces } from 'react-i18next';
import { changeLanguage } from 'i18n';
import styles from './index.styl';

interface IProps extends WithNamespaces, NavigationScreenProps {
  kk?: string;
}

interface IState {
  switchVal: boolean
}

@(withNamespaces('mine') as any)
class Mine extends React.Component<IProps, IState> {
  state: IState = {
    switchVal: false
  };

  onValueChange(switchVal: boolean): void {
    this.setState({
      switchVal
    }, () => {
      changeLanguage(switchVal ? 'en' : 'zh');
    });
  }

  render() {
    const { t } = this.props;
    const { switchVal } = this.state;

    return (
      <View style={styles.mineContainer}>
        <Text>{ t('personal_center') }</Text>
        <FontAwesome name="address-book" size={20} color="#4F8EF7" />
        <FontAwesome name="paper-plane" size={20} color="#FE8400" />
        <FontAwesome name="folder-open" size={20} color="#22d422" />
        <View style={styles.switchBar}>
          <Text style={styles.text}>{ t('zh') }</Text>
          <Switch value={switchVal} onValueChange={this.onValueChange.bind(this)} />
          <Text style={styles.text}>{ t('en') }</Text>
        </View>
      </View>
    )
  }
}

export default Mine;