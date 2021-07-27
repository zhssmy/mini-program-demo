// pages/home/index.js
import {
  component
} from "../../utils/wx.js";
component({
  /**
   * 页面的初始数据
   */
  data: {
    itemList: [{
        key: 0,
        name: "Button",
        path: "button",
        type: "components"
      },
      {
        key: 1,
        name: "CheckBox",
        path: "checkbox",
        type: "components"
      },
      {
        key: 2,
        name: "Editor",
        path: "editor",
        type: "components"
      },
      {
        key: 3,
        name: "Input",
        path: "input",
        type: "components"
      }
    ],
    functionList: [{
      key: 0,
      name: "左滑删除",
      path: "slideToDelete",
      type: "functions"
    }]
  },
  methods: {
    toDetail(e) {
      let path = e.currentTarget.dataset.path;
      let type = e.currentTarget.dataset.type;
      wx.navigateTo({
        url: "/pages/" + type + "/" + path + "/index",
      });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},
  },
});