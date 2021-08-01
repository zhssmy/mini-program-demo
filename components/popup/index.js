import {
  component
} from '../../utils/wx.js'

component({
  options: {
    addGlobalClass: true
  },
  properties: {
    zIndex: {
      type: Number,
      value: 1002
    },
    show: {
      type: Boolean,
      value: false,
      observer: 'observeShow'
    },
    title: {
      type: String,
      value: ''
    },
    isShowTitle: {
      type: Boolean,
      value: true
    },
    titleStyle: {
      type: String,
      value: ''
    },
    isShowFooter: {
      type: Boolean,
      value: true
    },
    footerText: {
      type: String,
      value: '确定'
    },
    footerStyle: {
      type: String,
      value: ''
    },
    isShowCloseIcon: {
      type: Boolean,
      value: true
    },
    isClickMaskClose: {
      type: Boolean,
      value: true
    },
    position: {
      type: String,
      value: 'bottom'
    },
    // 是否圆角
    isRound: {
      type: Boolean,
      value: true
    },
    // 自定义样式
    customStyle: {
      type: String
    }
  },

  data: {
    isInject: false,
    classes: '',
    maskClass: ''
  },

  methods: {
    observeShow(value, old) {
      if (value === old) {
        return
      }
      if (value) {
        this.enter()
      } else {
        this.leave()
      }
    },

    enter() {
      this.setData({
        isInject: true,
        classes: 'before-enter enter-active',
        maskClass: 'mask-before-enter mask-enter-active'
      })
    },

    leave() {
      this.setData({
        classes: 'before-leave leave-active',
        maskClass: 'mask-before-leave mask-leave-active'
      })
      setTimeout(() => {
        this.setData({
          isInject: false
        })
      }, 400)
    },

    onClose() {
      wx.vibrateShort({
        complete: (res) => {},
      })
      this.triggerEvent('close')
    },

    handleClickMask() {
      if (this.data.isClickMaskClose) {
        this.onClose()
      }
    },

    noMove() {
      return false
    }
  }
})