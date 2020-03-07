// pages/hotmovie/hotmovie.js
const {
  globalData
} = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    movies: {
      start: 0,
      count: 18,
      total: 0,
      rows: []
    },
  },
  getmovies() {
    var that = this;
    wx.request({
      url: globalData.url + '/movies/hot',
      data: {
        start: that.data.movies.start,
        count: that.data.movies.count
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        that.setData({
          movies: {
            ...res.data,
            rows: [...that.data.movies.rows,
            ...res.data.rows
            ]
          }
        }, () => {
          // 隐藏加载框
          wx.hideLoading();
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.tt)
    //设置头部导航蓝栏的标题
    wx.setNavigationBarTitle({
      title: options.tt

    })
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })

    this.getmovies()
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
  onHide() {


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
    this.getmovies();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })

    this.setData({
      movies: {
        ...this.data.movies,
        start: this.data.movies.start - 0 + this.data.movies.count - 0
      }
    }, () => {
      this.getmovies();
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})