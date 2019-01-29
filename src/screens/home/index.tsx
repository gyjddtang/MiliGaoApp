import * as React from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import { NavigationScreenProps, NavigationStackScreenOptions } from 'react-navigation';
import testImg from 'assets/images/testImg.jpg';
import styles from './index.styl';

interface IDataItem {
  id: number;
  title: string;
  content: string;
}

const data: IDataItem[] = [
  {id: 1, title: 'TypeScript测试TypeScript测试', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 2, title: '1111111111', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 3, title: '2222222222', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 4, title: '3333333333', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 5, title: '4444444444', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 6, title: '5555555555', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 7, title: '6666666666', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'},
  {id: 8, title: '7777777777', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍'}
];

class Home extends React.Component<NavigationScreenProps> {
  static navigationOptions: NavigationStackScreenOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#FE8400',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  goDetail(item: IDataItem): void {
    const { navigation } = this.props;
    // navigation.navigate('HomeDetail', item);   // 将新路由推送到堆栈导航器，如果它尚未在堆栈中，则跳转到该页面。
    navigation.push('HomeDetail', item);   // 都向导航堆栈中添加新路由。
  }

  renderItem({ item }: { item: IDataItem }): JSX.Element {
    return (
      <TouchableOpacity style={styles.itemLine} onPress={() => this.goDetail(item)}>
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