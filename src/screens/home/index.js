"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const testImg = require("../../assets/images/testImg.jpg");
const data = [
    { id: 1, title: 'TypeScript测试TypeScript测试', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍' },
    { id: 2, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍' },
    { id: 3, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍' },
    { id: 4, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍' },
    { id: 5, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍' },
    { id: 6, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍' },
    { id: 7, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍' },
    { id: 8, title: '测试标题测试标题', content: '内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍' }
];
console.log(testImg);
class Home extends React.Component {
    constructor() {
        super(...arguments);
        this.renderItem = ({ item }) => {
            return (React.createElement(react_native_1.View, { style: styles.itemLine },
                React.createElement(react_native_1.Image, { source: testImg, style: styles.thumbnail }),
                React.createElement(react_native_1.View, { style: styles.rightContainer },
                    React.createElement(react_native_1.Text, { style: styles.title }, item.title),
                    React.createElement(react_native_1.Text, { style: styles.text }, item.content))));
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.homeContainer },
            React.createElement(react_native_1.FlatList, { data: data, keyExtractor: item => `${item.id}`, renderItem: this.renderItem })));
    }
}
const styles = react_native_1.StyleSheet.create({
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
exports.default = Home;
