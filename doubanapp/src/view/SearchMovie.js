import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Image, FlatList, ScrollView } from 'react-native';
import { setSpText, scaleSize } from '../utlis/scale.js'
import DetailOneMovie from "../components/DetailOneMovie.js";
import Fetch from "../utlis/request.js";

export default class SearchMovie extends Component {
    static navigationOptions = {
        title: '搜索'
    }
    state = {
        title: '我不是药神',
        movies: []
    }
    //请求数据
    getmovie() {
        Fetch.postRequest(global.url + '/movies/searchMovies',
            { title: this.state.title })
            .then(
                msg => {
                    console.log(msg);
                    this.setState({
                        movies: msg.rows
                    })
                }
            )
    }
    render() {
        return (
            <ScrollView>
                <View style={{
                    paddingBottom: scaleSize(14),
                    paddingLeft: scaleSize(14), paddingRight: scaleSize(14),
                    paddingTop: scaleSize(30), backgroundColor: '#42bd56'
                }}>
                    <TextInput placeholder='搜索' style={styles.searchBtn}
                        value={this.state.title}
                        onChangeText={
                            (text) => {
                                this.setState({
                                    title: text,
                                }, () => {
                                    this.getmovie()
                                })
                            }
                        }

                    ></TextInput>
                    <Image style={styles.searchImg} source={require('../picture/icons/ic_search.png')}></Image>
                </View>
                <View style={styles.searchList}>
                    <FlatList
                        data={this.state.movies}
                        keyExtractor={(item) => item._id + ''}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <DetailOneMovie movies={item}></DetailOneMovie>}
                    ></FlatList>

                </View>

            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    searchBtn: {
        height: scaleSize(56),
        borderRadius: scaleSize(15),
        paddingLeft: scaleSize(80),
        paddingTop: scaleSize(0),
        paddingBottom: scaleSize(0),
        color: '#808080',
        backgroundColor: "#ffffff",
        fontSize: scaleSize(28),

    },
    searchImg: {
        position: "absolute",
        left: scaleSize(50),
        top: scaleSize(47),
        width: scaleSize(26),
        height: scaleSize(26)
    },
    searchList: {
        paddingLeft: scaleSize(30),
        paddingRight: scaleSize(30),
    }
})

