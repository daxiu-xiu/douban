import React, { Component } from 'react'


import MovieList from "../components/MovieList.js";
import Fetch from '../utlis/request.js';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { setSpText, scaleSize } from '../utlis/scale.js'


export default class Homepage extends Component {
    static navigationOptions = {
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: setSpText(38),
            flex: 1,
            textAlign: 'center',
            // alignItems: 'center',
        },

    }

    state = {
        movies: []
    }
    componentDidMount() {
        this.getHotMovies();
    }
    getHotMovies() {
        Fetch.getRequest(global.url + '/movies/hot').then(msg => {
            // console.log(msg);          
            this.setState({
                movies: msg.rows
            })
        })
    }
    render() {
        return (
            <View>
                <ScrollView>

                    <View style={{
                        backgroundColor: "#41bd55",
                        paddingTop: scaleSize(16),
                        paddingBottom: scaleSize(16), textAlign: 'center', paddingLeft: scaleSize(38), paddingRight: scaleSize(38),
                    }}>
                        {/* <Text style={{ fontSize: setSpText(34), color: "#ffffff", marginBottom: scaleSize(46), marginTop: scaleSize(20) }}>首页</Text> */}

                        <TouchableOpacity activeOpacity={0.8}
                            onPress={() => this.props.navigation.navigate('SearchMovie')
                            }
                        >
                            <Text style={styles.searchBtn}> 搜索</Text>
                        </TouchableOpacity>
                        <Image style={styles.searchImg} source={require('../picture/icons/ic_search.png')}></Image>
                    </View>
                    <MovieList movies={this.state.movies} title='正在热映'></MovieList>
                    <MovieList movies={this.state.movies} title='即将上映'></MovieList>
                    <MovieList movies={this.state.movies}></MovieList>

                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    searchBtn: {
        height: scaleSize(80),
        borderRadius: scaleSize(15),
        textAlign: 'center',
        lineHeight: scaleSize(80),
        color: '#808080',
        backgroundColor: "#ffffff"
    },
    searchImg: {
        position: "relative",
        width: scaleSize(34),
        height: scaleSize(34),
        position: 'absolute',
        left: 145,
        top: 20

    },
    navmovie: {
        flexDirection: 'row',
        paddingLeft: scaleSize(38),
        paddingRight: scaleSize(38),
        justifyContent: 'space-between',
        marginTop: scaleSize(40),
        marginBottom: scaleSize(34),
    },
    listmovie: {
        paddingLeft: scaleSize(38),
        flexDirection: 'row',
    },
    fotter: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly',
        height: scaleSize(90),
        alignContent: 'center'
    },
    fotternav: {
        // width:scaleSize(247),
        // textAlign:"center"

    },
    fotterimg: {
        width: scaleSize(50),
        height: scaleSize(50),

    }
})