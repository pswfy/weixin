Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchong: false, // 标识是否显示搜索页面
    showHideActionSheet: false, // 标识是否显示下拉区域
    sheetText:'厦门', // 默认区域选择
    ActionSheetText: [{ name: '厦门' }, { name: '北京' }]
  },
  // 展开搜索面板
  onSearch (event) {
    this.setData({
      searchong: true
    })
  },
  // 关闭区域选择
  onClose(event) {
    this.setData({
      showHideActionSheet: false
    })
  },
  // 获取区域选择内容
  onSelect(event) {
    this.setData({
      sheetText: event.detail.name,
      showHideActionSheet: false
    })
  },
  // 关闭搜索面板
  onCancel (event) {
    this.setData({
      searchong:false
    })
  },
  // 显示区域选择
  onActionSheet(event) {
    this.setData({
      showHideActionSheet: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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