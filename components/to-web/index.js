import {component} from '../../utils/wx.js'
component({
  /**
   * 页面的初始数据
   */
  data: {
  },

  properties: {
    title: {
      type: String,
      value: '微信开发文档',
    },
    url:{
      type: String,
      value: 'https://developers.weixin.qq.com',
    }
  },
  methods:{
    toWeb: function (e) {
      //手机震动反馈
      wx.vibrateShort({
        type: 'light',
      })
      let url = encodeURIComponent(e.currentTarget.dataset.url)
      wx.navigateTo({
        url: '/pages/web/index?url='+url,
      })
    },
  }
});
