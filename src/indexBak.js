/**
 * Sample React Native IndexBak
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Home from './screens/home';

class IndexBak extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Home />
      </View>
    );
  }
}

export default IndexBak;

