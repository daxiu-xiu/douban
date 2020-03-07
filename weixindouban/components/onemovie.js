Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    DELmovie(e) {
      wx.setStorage({
        key: "detailsmovie",
        data: e.currentTarget.dataset
      })
    }
  }
})