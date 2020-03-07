// pages/hotmovie/hotmovie.js
// const {
//   globalData
// } = getApp()
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
    text: '正在热映'
  },
  getmovies() {
    var that = this;
    wx.cloud.callFunction({
      name: 'hotany',
      data: {
        start: that.data.movies.start,
        count: that.data.movies.count,
        text: that.data.text
      },
      success: (res) => {
        that.setData({
          movies: {
            ...this.data.movies,
            rows: [...that.data.movies.rows, ...res.result.hot.data],
            total: res.result.hottotal.total,
            start: this.data.movies.start - 0 + this.data.movies.count - 0
          }
        }, () => {
          wx.hideLoading();
          wx.hideNavigationBarLoading()
        })

      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    
    wx.showNavigationBarLoading()
    this.setData({
      text: options.tt
    }, () => {
      this.getmovies();
    })
    //设置头部导航蓝栏的标题
    wx.setNavigationBarTitle({
      title: options.tt
    })
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })
   

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {


  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: () => {
    this.setData({
      movies: {
        start: 0,
        count: 18,
        total: 0,
        rows: []
      },
    }, () => {
      wx.showLoading({
        title: '玩命加载中',
      })
      this.getmovies();
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // console.log(this.data.movies.rows.length, this.data.movies.total)
    if (this.data.movies.rows.length == this.data.movies.total) {
      wx.showToast({
        title: '没有更多了'
      })
    } else {
      // 显示加载图标
      wx.showLoading({
        title: '玩命加载中',
      })
      this.getmovies();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  
})