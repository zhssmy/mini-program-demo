import {component} from '../../utils/wx.js'
component({
  /**
   * 页面的初始数据
   */
  data: {
  },

  properties: {
    name: {
      type: String,
      value: '未知模块',
    },
    bgColor:{
      type: String,
      value: '#07c160'
    }
  },
  methods:{
    toDetail(){
      //手机震动反馈
      wx.vibrateShort({
        type: 'light',
      })
      this.triggerEvent('detail')
    }
  }
});
