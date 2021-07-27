import { component } from '../../utils/wx.js'

component({
  data: {
    url: ''
  },
  methods: {
    // 用来在小程序打开web网页
    onLoad(options) {
      if (options.url) {
        this.setData({
          url: decodeURIComponent(options.url)
        })
      }
    }
  }
})
