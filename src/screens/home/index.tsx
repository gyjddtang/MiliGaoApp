import * as React from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import testImg from '../../assets/images/testImg.jpg';
import styles from './index.styl';

const data = [
  {id: 1, title: 'TypeScript测试TypeScript测试', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 2, title: '1111111111', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 3, title: '2222222222', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 4, title: '3333333333', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 5, title: '4444444444', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 6, title: '5555555555', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 7, title: '6666666666', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 8, title: '7777777777', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'}
];

class Home extends React.Component<NavigationInjectedProps> {
  goDetail(): void {
    const { navigation } = this.props;
    navigation.navigate('HomeDetail');
  }

  renderItem({ item }: { item: any }): JSX.Element {
    return (
      <TouchableOpacity style={styles.itemLine} onPress={() => this.goDetail()}>
        <Image source={testImg} style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{ item.title }</Text>
          <Text style={styles.text}>{ item.content }</Text>
        </View>
      </TouchableOpacity>
    )
  };

  render() {
    return (
      <View style={styles.homeContainer}>
        <FlatList
          data={data}
          keyExtractor={item => `${item.id}`}
          renderItem={this.renderItem.bind(this)}
        />
      </View>
    )
  }
}

export default Home;