// pages/home/index.js
import {
  component
} from "../../utils/wx.js";
component({
  /**
   * 页面的初始数据
   */
  data: {
    layoutList: [{
      key: 0,
      name: "flex",
      path: "layout/flex",
      type: "layout"
    }],
    formComponentsList: [{
        key: 0,
        name: "Button",
        path: "components/form-components/button",
        type: "form-components"
      },
      {
        key: 1,
        name: "CheckBox",
        path: "components/form-components/checkbox",
        type: "form-components"
      },
      {
        key: 2,
        name: "Editor",
        path: "components/form-components/editor",
        type: "form-components"
      },
      {
        key: 3,
        name: "Input",
        path: "components/form-components/input",
        type: "form-components"
      }
    ],
    functionList: [{
        key: 0,
        name: "左滑删除",
        path: "functions/slideToDelete",
        type: "functions"
      },
      {
        key: 1,
        name: "折叠面板",
        path: "functions/collapsePanel",
        type: "functions"
      },
      {
        key: 2,
        name: "滑动吸顶",
        path: "functions/slideCeiling",
        type: "functions"
      },
      {
        key: 3,
        name: "模板",
        path: "functions/template",
        type: "functions"
      }
    ]
  },
  methods: {
    toDetail(e) {
      let path = e.currentTarget.dataset.path;
      wx.navigateTo({
        url: "/pages/" + path + "/index",
      });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log('onLoad')
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      console.log('onReady')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      console.log('onShow')
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
      console.log('onHide')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
      console.log('onUnload')
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
      console.log('onPullDownRefresh')
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
      console.log('onReachBottom')
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
      return {
        title: '我的小程序',
        path: '',
        imageUrl: '',
        success: function () {},
        fail: function () {}
      }
    },
    onTabItemTap(item) {
      wx.vibrateShort({
        type: 'light',
      })
    }
  },
  pageLifetimes: {
    show() {
      console.log('home')
    }
  }
});