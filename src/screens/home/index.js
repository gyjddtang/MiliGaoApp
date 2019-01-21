/**
 * Created by MiliGao on 2019-01-18.
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import testImg from '../../assets/images/testImg.jpg';

const data = [
  {id: 1, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 2, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 3, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 4, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 5, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 6, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 7, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 8, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'}
];

class Home extends Component {
  renderItem({ item }) {
    return (
      <View style={styles.itemLine}>
        <Image source={testImg} style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{ item.title }</Text>
          <Text style={styles.text}>{ item.content }</Text>
        </View>
      </View>
    )
  }

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

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#cc7943'
  },
  itemLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: 20,
  },
  thumbnail: {
    width: 60,
    height: 80
  },
  rightContainer: {
    flex: 1,
    marginHorizontal: 20
  },
  title: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10
  },
  text: {
    fontSize: 14,
    color: '#666',
    lineHeight: 16
  }
});

export default Home;
