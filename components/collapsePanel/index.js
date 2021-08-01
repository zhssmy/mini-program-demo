import {
  component
} from '../../utils/wx.js'
component({
  /**
   * 页面的初始数据
   */
  data: {},

  properties: {
    title: {
      type: String,
      value: '标题',
    },
    des: {
      type: String,
      value: '详细描述'
    },
    isShow: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    click() {
      wx.vibrateShort({
        type: 'light',
      })
      this.setData({
        isShow: !this.properties.isShow
      })
    }
  }
});