// components/search/index.js
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
    i:0,
    start: 0,
    end: 0,
    sriperData: [
      {
        "images":"../../images/text/w-1.jpg",
        "title":"小区式公寓，商住一体，楼下即商场",
        "titles":"稀缺一室一厅/两室一厅，可养宠物",
        "url":"../../pages/details/index"
      },
      {
        "images": "../../images/text/w-2.jpg",
        "title": "软二亲家|1700-2150元起/月",
        "titles": "前埔优质好房，公交直达软二",
        "url": "../../pages/details/index"
      },
      {
        "images": "../../images/text/w-3.jpg",
        "title": "软二亲家|1700-2150元起/月",
        "titles": "前埔优质好房，公交直达软二",
        "url": "../../pages/details/index"
      },
      {
        "images": "../../images/text/w-4.jpg",
        "title": "软二好加|特价888元",
        "titles": "直达软二，高新园 | 通勤首选",
        "url": "../../pages/details/index"
      },
      {
        "images": "../../images/text/w-5.jpg",
        "title": "特价房源限时1499元",
        "titles": "枋湖南路| 可养小型犬",
        "url": "../../pages/details/index"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSriper(e) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    },
    sriperTouchStartt (e) {
      this.setData({
        start: e.currentTarget.offsetLeft
      })
    },
    sriperTouchend (e) {
      this.setData({
        end: e.currentTarget.offsetLeft
      })
      if (this.data.start >= 0 && this.data.end < 274) {
        this.setData({
          i: 0
        })
      }
      if (this.data.start >= 274 && this.data.end < 548) {
        this.setData({
          i: 1
        })
      }
      if (this.data.start >= 548 && this.data.end < 822) {
        this.setData({
          i: 2
        })
      }
      if (this.data.start >= 822 && this.data.end < 1096) {
        this.setData({
          i: 3
        })
      }
      if (this.data.start >= 1096 && this.data.end < 2000) {
        this.setData({
          i: 4
        })
      }
    }
  } 
})
