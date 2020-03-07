// pages/homepage/homepage.js
const {
  globalData
} = getApp()
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

    movies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this;
    wx.request({
      url: globalData.url + '/movies/hot',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        console.log(res.data)
        that.setData({
          movies: res.data.rows
        }
          // ,
          // ()=>{console.log(that.data)}
        )
      }
    })

    // that.setData({
    //   navH: App.globalData.navHeight
    // })

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