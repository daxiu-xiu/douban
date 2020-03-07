import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { scaleSize ,setSpText} from '../utlis/scale';

import Stars from "../components/Stars.js";
export default class DetailOneMovie extends Component {   

    render() {
        console.log(this.props.movies);
        const { stars, average, movieImg, title, year, genres, casts } = this.props.movies
        return (
            <View style={
                styles.detailOne}>
                <Image
                    style={styles.imgOne}
                    source={{ uri: movieImg }}
                ></Image>
                <View style={{ marginLeft: scaleSize(30),width:scaleSize(530) }}>
                    <Text style={{fontSize:setSpText(40),marginBottom: scaleSize(8)}} numberOfLines={1} >{title}</Text>
                    <View style={{ width: scaleSize(50) }}>
                        <Stars stars={stars} average={average}></Stars>
                    </View>
                    <Text style={{color:'#ababab',marginTop: scaleSize(8),
                    fontSize:setSpText(26)}} numberOfLines={3}
                    ellipsizeMode='clip'
                    >{year}/{genres}/{casts}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imgOne: {
        width: scaleSize(126),
        height: scaleSize(170),
    },
    detailOne: {
        flexDirection: 'row',
        paddingTop: scaleSize(30),
        paddingBottom: scaleSize(30),
        borderBottomColor: '#818181',
        borderBottomWidth: scaleSize(1)
    }
})