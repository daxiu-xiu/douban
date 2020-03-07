// pages/searchmovie/searchmovie.js
// const { globalData } = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    searchmovies: []
  },

  changevalue(event) {
    // console.log(event.detail.value);
    // console.log(this)
    this.setData({
      title: event.detail.value
    }, () => {
      this.getmovies()
    })
  },

  getmovies() {
    const that=this

    wx.cloud.callFunction({
      name: 'mohusearch',
      data: {
        title: this.data.title
      },
      success: (res) => {
        console.log(res.result.data)
        that.setData({
          searchmovies: res.result.data
        })
      },
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索'
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor:'#41bd55'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(this.data.title)
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