// components/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: '贵阳'
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
    // 显示下拉选择面板
    onActionSheet(event) {
      this.triggerEvent('actionSheet', {}, {})
    },
    //显示搜索面板
    onSearch(event) {
      this.triggerEvent('search', {}, {})
    }
  }
})
