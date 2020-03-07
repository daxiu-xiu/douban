/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'

// import Login from './src/view/Login';
// import Homepage from './src/view/Homepage';
// import HotShowMovie from "./src/view/HotShowMovie";
// import SearchMovie from "./src/view/SearchMovie";
import { View, Text } from 'react-native';
import Rootnav from "./src/nav/Rootnav.js";
//global是自带的全局变量。可以添加自己需要的属性
global.url = 'http://192.168.1.7:3000'
// console.log(global);
export default class App extends Component {
  render() {
    return (
      <>
        <Rootnav></Rootnav>
        {/* <Login></Login> */}
        {/* <Homepage></Homepage> */}
        {/* <SearchMovie></SearchMovie> */}
        {/* <HotShowMovie></HotShowMovie> */}
      </>)
  }
}


