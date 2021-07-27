// pages/component/pages/button/index.js
Page({
  data: {},

  /**
   * 提交表单按钮
   */
  formSubmit(e) {
    wx.showToast({
      title: "内容已输出至控制台",
    });
    console.log("form发生了submit事件，携带数据为：", e.detail.value);
  },

  /**
   * 重置表单按钮
   */
  formReset(e) {
    wx.showToast({
      title: "内容已输出至控制台",
    });
    console.log("form发生了reset事件，携带数据为：", e.detail.value);
  },

});
