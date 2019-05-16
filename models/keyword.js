class KeywordModel {
  key = 'q'
  maxLength = 10
  // 获取历史搜索
  getHistory () {
    const words = wx.getStorageSync (this.key)
    if (!words) {
      return []
    } else {
      return words
    }
  }
  // 获取热门搜索
  getHot () {
    return ["精品公寓", "单身公寓", "岛内公寓", "房客行","一室一厅","两室一厅","宠物"]
  }
  // 写入缓冲中
  addToHistory (Keyword) {
    let words = this.getHistory()
    const has = words.includes(Keyword)
    if (!has) {
      const length = words.length
      if (length >= this.maxLength) {
        words.pop ()
      }
      words.unshift (Keyword)
    }
    //放在成功回调中写入本地存储
    wx.setStorageSync(this.key, words)
  }
}

export { KeywordModel }