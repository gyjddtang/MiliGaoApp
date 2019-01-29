/**
 * Created by MiliGao on 2019-01-29.
 */
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

class FullModal extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="返回"
        />
      </View>
    )
  }
}

export default FullModal;
