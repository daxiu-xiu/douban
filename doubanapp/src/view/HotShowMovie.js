import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import { setSpText, scaleSize } from "../utlis/scale.js";
import Onemovie from "../components/Onemovie.js";
import Fetch from "../utlis/request.js";

export default class HotShowMovie extends Component {
    static navigationOptions = ({ navigation}) => {  
        return {
            title: navigation.getParam('title'),
        };
    };
    state = {
        hotmovie: {
            start: 0,
            count: 18,
            total: 0,
            movies: []
        },
        isrefreshing: false

    }
    //已进入组件就开始发送请求取数据。进行页面的渲染

    componentDidMount() {
        this.getHotMovies();
    }
    //封装好的请求。第二个参数是一个对象
    getHotMovies() {
        Fetch.getRequest(global.url + '/movies/hot', {
            start: this.state.hotmovie.start,
            count: this.state.hotmovie.count
        }).then(msg => {
            // console.log(msg);
            this.setState({
                isrefreshing: false,
                hotmovie: {
                    ...msg,
                    //因为我们遍历生成是由movies生成。请求过的数据都需要添加到movies里面。
                    //如果没有加进去。就相对于覆盖，则后面加载完后前面的数据又没有了
                    movies: [...this.state.hotmovie.movies, ...msg.rows]
                }
            })
        })
    }
    //上拉加载刷新。重新请求数据    
    dropDownRender = () => {
        // this.setState是一个异步，有两个参数，第一个是需要修改的数据是一个{},第二个是，等待前面的数据修改完以后需要执行的函数
        //是一个函数（函数的声明）
        this.setState({
            hotmovie: {
                ...this.state.hotmovie,
                start: this.state.hotmovie.start - 0 + this.state.hotmovie.count - 0
            }
        }, this.getHotMovies)
    }
    //转圈圈
    waitstyle = () => {
        //如果总条数等于，请求回来的数据的movies的长度，则返回最底部的提示，不再需呀加载的圈圈了
        if (this.state.hotmovie.total - 0 === this.state.hotmovie.movies.length && this.state.hotmovie.total - 0 != 0) {
            return <Text style={{ textAlign: 'center' }}>没有更多了</Text>
        }
        else if (this.state.hotmovie.movies.length == 0) {
            return <></>
        }
        else {
            return (
                <View>
                    <ActivityIndicator></ActivityIndicator>
                    <Text style={{ textAlign: 'center' }}>加载更多</Text>
                </View>
            )
        }

    }
    render() {
        return (
            <View>

                <FlatList data={this.state.hotmovie.movies}
                    //FlatList是个列表组件。所以它有自动滑动的功能，
                    //设置key
                    keyExtractor={(item) => item._id + ''}
                    //渲染页面
                    renderItem={({ item }) => <Onemovie item={item}></Onemovie>}
                    //设置纵向列数
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: "space-around" }}
                    //设置上拉的加载
                    //设置距离
                    onEndReachedThreshold={0.3}
                    //设置该距离要执行的函数(重新请求数据)
                    onEndReached={this.dropDownRender}
                    //设置到底加载时候的圈圈
                    ListFooterComponent={this.waitstyle()}
                    //下拉刷新(refreshing)为true的时候。会显示刷新时的指示器
                    refreshing={this.state.isrefreshing}
                    //在刷新的时候调用该函数
                    onRefresh={() => {
                        this.setState({
                            hotmovie: {
                                ...this.state.hotmovie,
                                start: 0,
                                movies: []
                            },
                            isrefreshing: true
                        }, () => {
                            this.getHotMovies()
                        })
                    }}
                  
                ></FlatList>
            </View>
        )
    }
}

