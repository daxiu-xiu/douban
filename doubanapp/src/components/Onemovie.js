import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import { setSpText, scaleSize } from '../utlis/scale.js'
import Stars from "./Stars.js";

export default class Onemovie extends Component {
    render() {
        // console.log(this.props);
        const { movieImg, title, average, stars } = this.props.item
        return (
            <View style={styles.oneMoviecontent}>
                <TouchableOpacity activeOpacity={0.8}>
                    <Image style={styles.movieImg} source={{ uri: movieImg }}></Image>
                </TouchableOpacity>
                <Text ellipsizeMode='tail' numberOfLines={1} >{title}</Text>
                <Stars stars={stars} average={average}></Stars>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    oneMoviecontent: {
        width: scaleSize(164),
        height: scaleSize(304),
        // marginRight: scaleSize(20)
    },
    movieImg: {
        height: scaleSize(226),
        width: scaleSize(164)
    }
})