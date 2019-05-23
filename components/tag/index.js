// components/tag/index.js
Component({
  // 开启插槽
  options: {
    multipleSlots: true
  },
  // 外部样式
  externalClasses:['tag-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String
    },
    de: {
      type: Boolean,
      value: false
    },
    bg: {
      type: Boolean,
      value: false
    },
    bd: {
      type: Boolean,
      value: false
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
    onTap:function(event){
      this.triggerEvent("tapping",{
        text:this.properties.text
      });
    }
  }
})
