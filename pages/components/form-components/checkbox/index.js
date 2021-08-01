// pages/component/pages/checkbox/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  checkboxChange(e) {
    //手机震动反馈
    wx.vibrateShort({
      type: 'light',
    })
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }

})