/**
 * Created by MiliGao on 2019-01-29.
 */
import * as React from 'react';
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Mine extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>个人中心</Text>
        <FontAwesome name="address-book" size={20} color="#4F8EF7" />
        <FontAwesome name="paper-plane" size={20} color="#FE8400" />
        <FontAwesome name="folder-open" size={20} color="#22d422" />
      </View>
    )
  }
}

export default Mine;