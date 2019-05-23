// components/detailsSwiper/index.js
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
    imgUrls: [
      {
        "url":"../../images/text/w-1.jpg",
        "text":"房间"
      },
      {
        "url": "../../images/text/w-6.jpg",
        "text": "阳台"
      },
      {
        "url": "../../images/text/w-2.jpg",
        "text": "舞台"
      },
      {
        "url": "../../images/text/w-3.jpg",
        "text": "客厅"
      },
      {
        "url": "../../images/text/w-4.jpg",
        "text": "房间"
      },
      {
        "url": "../../images/text/w-5.jpg",
        "text": "阳台"
      },
    ],
    imgUrlsText: [],
    text:'',
    textBoolean: false,
    indicatorDots: false,
    autoplay: false,
    circular:true,
    interval: 5000,
    duration: 1000
  },
  created(){
  },
  attached(){
    this.filderLi()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onSriperTouchstart (e) {
      this.setData({
        text: e.currentTarget.dataset.text
      })
    },
    filderLi () {
      let temp = []
      if (this.data.imgUrls) {
        for (var i = 0; i < this.data.imgUrls.length; i++) {
          if (temp.indexOf(this.data.imgUrls[i].text) == -1) {
            temp.push(this.data.imgUrls[i].text);
            this.setData({
              test: this.data.imgUrls[0].text
            })
          }
        }
      }
      this.setData({
        imgUrlsText: temp
      })
    }
  }
})
