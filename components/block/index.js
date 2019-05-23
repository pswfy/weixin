// components/block/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    top: {
      type: String,
      value: '70rpx'
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
    onBlock (event) {
      wx.navigateBack()
    }
  }
})
