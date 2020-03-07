Component({
  /**
   * 组件的属性列表
   */
  properties: {
    stars: {
      type: String
    },
    average: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // startarr: [],
    on: 0,
    half: 0,
    off: 5
  },
  // 生命周期函数
  lifetimes: {
    attached() {
      this.setStars()
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

    //方法2，星星
    setStars() {
      this.setData({
        on: this.properties.stars[0] - 0
      })
      if (this.properties.stars[1] === 5) {
        this.setData({
          half: 1
        })
      }
      this.setData({
        off: 5 - this.data.on - this.data.half
      })

    }



    //方法1，星星
    // setStars() {
    //   const on = '../assets/icons/rating_star_xsmall_on.png'
    //   const off = '../assets/icons/rating_star_xsmall_off.png'
    //   const half = '../assets/icons/rating_star_xsmall_half.png'
    //   const arr = [];
    //   const onnum = this.properties.stars[0];
    //   const halnum = this.properties.stars[1];
    //   //添加满星
    //   for (let i = 0; i < onnum; i++) {
    //     arr.push(on)
    //   }
    //   //添加半星
    //   if (halnum === 5) {
    //     arr.push(half)
    //   }
    //   for (let i = arr.length; i < 5; i++) {
    //     arr.push(off)
    //   }
    //   // 修改arr
    //   this.setData({
    //     startarr: arr
    //   })

    //   return arr
    // },





  }
})