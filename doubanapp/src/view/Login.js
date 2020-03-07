import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity

} from 'react-native'
import { setSpText, scaleSize } from '../utlis/scale.js'


export default class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, borderWidth: scaleSize(1), justifyContent: 'space-between', paddingLeft: scaleSize(40), paddingRight: scaleSize(40) }}>
                <View style={styles.content}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.titley}>豆瓣账号密码登录</Text>
                    </View>
                    <TextInput style={styles.inputstyle} placeholder='手机号/邮箱'></TextInput>
                    <TextInput style={styles.inputstyle} secureTextEntry={true} placeholder='密码'></TextInput>
                    <TouchableOpacity>
                        <Text style={styles.btnlogin}>登录</Text>
                    </TouchableOpacity>
                    <View style={styles.xinxi}>
                        <Text style={styles.textlogin} >短信验证登录/注册</Text>
                        <Text style={styles.textlogin}>海外手机密码登录</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.forgetpsd}>忘记密码？找回密码</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    content: {
        marginTop: scaleSize(200),
    },
    titley: {
        fontSize: setSpText(60),
        marginBottom: scaleSize(100),
    },
    inputstyle: {
        height: scaleSize(80),
        borderWidth: scaleSize(1),
        borderColor: '#9f9f9f',
        borderRadius: scaleSize(15),
        marginBottom: scaleSize(20),
        paddingLeft: scaleSize(30)
    },
    btnlogin: {
        height: scaleSize(80),
        backgroundColor: '#a1deab',
        borderRadius: scaleSize(15),
        textAlign: 'center',
        lineHeight: scaleSize(80),
        color: '#ffffff'
    },
    xinxi: {
        marginTop: scaleSize(60),
        height: scaleSize(160),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textlogin: {
        color: "#a1deab"
    },
    forgetpsd: {
        color: 'blue',
        marginBottom: scaleSize(40)
    }
})
