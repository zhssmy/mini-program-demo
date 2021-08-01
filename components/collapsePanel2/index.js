import {
  component
} from '../../utils/wx.js'
component({
  /**
   * 页面的初始数据
   */
  data: {},

  properties: {
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