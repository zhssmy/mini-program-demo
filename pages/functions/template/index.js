import {
  toast
} from '../../../utils/modal.js'
import {
  component
} from '../../../utils/wx.js'
component({

  /**
   * 页面的初始数据
   */
  data: {
    popup: {
      show: false,
      title: '标题',
      footerText: '我知道了'
    },
    time: {},
    ifVibrate1: false,
    ifVibrate2: false,
  },

  methods: {
    openPopup() {
      this.vibrateShort()
      this.setData({
        'popup.show': true
      })
    },

    onClosePop() {
      this.setData({
        'popup.show': false
      })
    },

    alert() {
      this.vibrateShort()
      // 方法一：
      this.$alert({
        title: '标题',
        content: '内容'
      }).then(() => {
        this.vibrateShort()
      })
      // 方法二：
      //this.$alert('alert').then(() => {})
    },

    confirm() {
      this.vibrateShort()
      // 方法一：
      this.$confirm({
          title: '标题',
          content: '内容',
          cancelText: '算了',
        })
        .then(() => {
          this.vibrateShort()
          console.log('confirm')
        })
        .catch(() => {
          this.vibrateShort()
          console.log('cancel')
        })
      // 方法二：
      //this.$confirm('confirm').then(() => {}).catch(() => {})
    },
    toast() {
      this.vibrateShort()
      toast('toast', 1000, 'success')
    },
    vibrateShort() {
      wx.vibrateShort({
        type: 'light',
      })
    },
    noMove() {
      return false
    },
    changeSwitch1(e) {
      this.setData({
        ifVibrate1: e.detail.value
      })
    },
    changeSwitch2(e) {
      this.setData({
        ifVibrate2: e.detail.value
      })
    }
  }
})