// components/showSearch/index.js
import { KeywordModel } from '../../models/keyword.js'
const keywordModel = new KeywordModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    searchChing: false,
    q: ''
  },
  attached() {
    this.setData({
      historyWords: keywordModel.getHistory(),
      hotWords: keywordModel.getHot()
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 上发一个关闭搜索面板事件
    onCanel(event) {
     this.triggerEvent('cancel',{},{})
    },
    //返回搜索历史和热门
    onDelete () {
      this.setData({
        searchChing: false
      })
    },
    //写入历史搜索
    onConfirm (event) {
      this.setData({
        searchChing: true
      })
      const word = event.detail.value || event.detail.text
      keywordModel.addToHistory(word)
      this.setData({
        q: word
      })
    }
  }
})
