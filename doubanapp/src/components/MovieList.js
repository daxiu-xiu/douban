import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Onemovie from '../components/Onemovie.js'
import { setSpText, scaleSize } from '../utlis/scale.js'
//因为我们路径里面配置。没有在这个小组件的路径，所以withNavigation引入在暴露。这样这个组件里面也可以使用组件页面的跳转
import { withNavigation } from 'react-navigation';
class MovieList extends Component {


    render() {
        const { movies } = this.props;
        // console.log(movies)
        return (
            <View style={{ paddingLeft: scaleSize(38) }}>
                <View style={styles.navmovie}>
                    <Text style={{ fontSize: setSpText(32) }}>{this.props.title}</Text>
                    {/* this.props.navigation.navigate提供跳转路径，不需要引入东西，并且自带历史记录，第一个参数是配置路径那里的名字，
                    第二个参数是需要传递的参数对象模式 
                    跳转过去以后。那边组件的接受数据用this.props.navigation.state.params
                    */}
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HotShowMovie', { title: this.props.title })}>
                        <Text style={{ color: "#41bd55", fontSize: setSpText(20) }}>查看更多></Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={movies}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index + ''}
                    // 把电影的数据的传到星星的页面
                    renderItem={({ item }) => <View style={{ marginRight: scaleSize(20) }}><Onemovie item={item}></Onemovie></View>}
                />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    navmovie: {
        flexDirection: 'row',
        paddingRight: scaleSize(38),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: scaleSize(40),
        marginBottom: scaleSize(34),
    },
})
export default withNavigation(MovieList)