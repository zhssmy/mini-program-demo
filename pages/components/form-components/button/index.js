// pages/component/pages/button/index.js
Page({
  data: {},

  /**
   * 提交表单按钮
   */
  formSubmit(e) {
    console.log("form发生了submit事件，携带数据为：", e.detail.value);
  },

  /**
   * 重置表单按钮
   */
  formReset(e) {
    console.log("form发生了reset事件，携带数据为：", e.detail.value);
  },

});
