import { copy } from '../../utils/clipboard.js';
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
      value: '复制文档链接',
    },
    value:{
      type: String,
      value: '默认复制内容',
    },
    tips:{
      type: String,
      value: '复制成功',
    }
  },
  methods:{
    copyUrl: function (e) {
      console.log(e)
      //手机震动反馈
      wx.vibrateShort({
        type: 'light',
      })
      copy(e.currentTarget.dataset.text,this.properties.tips)
    },
  }
});
