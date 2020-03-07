import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import { setSpText, scaleSize } from '../utlis/scale.js'
const on = require('../picture/icons/rating_star_xsmall_on.png')
const off = require('../picture/icons/rating_star_xsmall_off.png')
const half = require('../picture/icons/rating_star_xsmall_half.png')
export default class Stars extends Component {
    setStars() {
        const arr = [];
        const onnum = this.props.stars[0];
        const halnum = this.props.stars[1];
        //添加满星
        for (let i = 0; i < onnum; i++) {
            arr.push(on)
        }
        //添加半星
        if (halnum === 5) {
            arr.push(half)
        }
        for (let i = arr.length; i < 5; i++) {
            arr.push(off)
        }
        return arr

    }
    render() {
        // console.log(this.props);
        return (
            <View style={{ flex: 1, flexDirection: 'row',justifyContent:"space-between" }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    {
                        this.setStars().map((item, index) => <Image
                            key={index}
                            style={{ height: scaleSize(22), width: scaleSize(22) }}
                            source={item}></Image>
                        )
                    }
                </View>
                <Text style={{ color: '#848484', fontSize: setSpText(16) }}>{this.props.average}分</Text>
            </View>
        )
    }
}
