import React, { Component } from 'react'

import { Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
//引入底部导航栏需要跳转的页面组件
import HomepageScreen from "../view/Homepage.js";
import MineScreen from "../view/Mine.js";
import detailsMovieScreen from "../view/detailsMovie.js";

import { scaleSize } from "../utlis/scale.js";
//引入图片
import HomepageIcon from '../picture/icons/ic_tab_home_active.png';
import MineIcon from "../picture/icons/ic_tab_mine_active.png";
import detailsMovieIcon from "../picture/icons/ic_tab_top_active.png";


const TabNavigator = createBottomTabNavigator({
    Homepage: {
        screen: HomepageScreen,
        navigationOptions: {
            tabBarLabel: '首页',
        },

    },
    detailsMovie: {
        screen: detailsMovieScreen,
        navigationOptions: {
            tabBarLabel: '榜单'
        }
    },
    Mine: {
        screen: MineScreen,
        navigationOptions: {
            tabBarLabel: '我的'
        }
    },

}
    , {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                tabBarIcon: ({
                    focussed, horizontal, tintColor
                }) => {
                    const { routeName } = navigation.state;
                    let Icon = HomepageIcon;
                    if (routeName === 'detailsMovie') {
                        Icon = detailsMovieIcon
                    } else if (routeName === 'Mine') {
                        Icon = MineIcon
                    }
                    return <Image tintColor={tintColor} style={{ width: scaleSize(50), height: scaleSize(50) }} source={Icon} />
                }
            }
        },
        tabBarOptions: {
            activeTintColor: '#41db55',
            inactiveTintColor: 'gray',
            activeBackgroundColor: 'red',
            inactiveBackgroundColor: 'blue',
            tabStyle: {
                borderRadius: scaleSize(20),
            }
        }
    }
    )


export default createAppContainer(TabNavigator);