// pages/homepage/homepage.js
// const {
//   globalData
// } = getApp()


Page({
  // IP：192.168.43.122
  /**
   * 页面的初始数据
   */
  data: {
    // nvabarData: {
    //   showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
    //   white: true, // 是就显示白的，不是就显示黑的。
    //  // 加个背景 不加就是没有
    // },

    movies: [],
    commovies: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    var that = this;
    wx.cloud.callFunction({
      name: 'search',
      success: function (res) {
        // console.log(res.result)
        that.setData({
          movies: res.result.hotmovie.data,
          commovies: res.result.comemovie.data
        })
      },
    })
    wx.setNavigationBarTitle({
      title: '首页'
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#41bd55'
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})