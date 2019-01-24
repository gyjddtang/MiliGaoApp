import * as React from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import testImg from '../../assets/images/testImg.jpg';
import styles from './index.styl';

const data = [
  {id: 1, title: 'TypeScript测试TypeScript测试', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 2, title: '1111111111', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 3, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 4, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 5, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 6, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 7, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 8, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'}
];

class Home extends React.Component {
  renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.itemLine}>
        <Image source={testImg} style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{ item.title }</Text>
          <Text style={styles.text}>{ item.content }</Text>
        </View>
      </View>
    )
  };

  render() {
    return (
      <View style={styles.homeContainer}>
        <FlatList
          data={data}
          keyExtractor={item => `${item.id}`}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

export default Home;