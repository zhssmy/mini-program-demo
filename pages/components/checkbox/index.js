// pages/component/pages/checkbox/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  checkboxChange(e) {
    wx.showToast({
      title: "内容已输出至控制台",
    });
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }

})