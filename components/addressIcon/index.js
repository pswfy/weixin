// components/addressIcon/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    longitude: {
      type: String,
      value: '118.13781452074183'
    },
    latitude: {
      type: String,
      value: '24.544054861203257'
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
    // 调到地图页面
    onGoMapInfo (evevt) {
      wx.navigateTo({
        url: `../../pages/maxInfo/index?lo=${this.properties.longitude}&la=${this.properties.latitude}`
      })
    }
  }
})
