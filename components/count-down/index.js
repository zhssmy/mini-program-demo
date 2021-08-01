import {
  component
} from '../../utils/wx.js'
component({
  /**
   * 页面的初始数据
   */
  data: {
    dd: 0,
    hh: 0,
    mm: 0,
    ss: 0,
    endTime: 0
  },

  properties: {
    styleType: {
      type: Number,
      value: 1
    },
    deltaTime: {
      //单位：毫秒ms
      type: Number,
      value: 66000
    },
    ifVibrate: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    start() {
      const time = Math.floor(this.properties.deltaTime / 1000)
      this.setData({
        endTime: Math.floor(Date.now() / 1000 + time)
      })
      this.countDown()
    },
    countDown() {
      this.clearTimer()
      this.formatTime()
      this.timer = setInterval(() => {
        this.formatTime()
      }, 1000)
    },
    formatTime() {
      const deltaTime = Math.floor(this.data.endTime - Date.now() / 1000)
      let dd = ~~(deltaTime / 86400)
      let hh = ~~((deltaTime - dd * 86400) / 3600)
      let mm = ~~((deltaTime - dd * 86400 - hh * 3600) / 60)
      let ss = (deltaTime - dd * 86400 - hh * 3600 - mm * 60)
      this.setData({
        dd: dd,
        hh: hh,
        mm: mm,
        ss: ss
      })
      if (this.properties.ifVibrate) {
        this.vibrate(dd,hh,mm,ss)
      }
      if (deltaTime === 0) {
        this.clearTimer()
      }
    },
    clearTimer() {
      clearInterval(this.timer)
    },
    //是否开启震动
    vibrate(dd, hh, mm, ss) {
      if (ss === 0) {
        if (mm === 0) {
          wx.vibrateShort({
            type: 'heavy',
          })
        } else {
          wx.vibrateShort({
            type: 'heavy',
          })
        }
      } else if (dd === 0 && hh === 0 && mm === 0 && ss <= 10) {
        wx.vibrateShort({
          type: 'heavy',
        })
      }
    }
  },
  lifetimes: {
    attached() {},
    detached() {
      this.clearTimer()
    }
  },
  pageLifetimes: {
    show() {
      this.start()
    },
    hide() {
      this.clearTimer()
    }

  }
});