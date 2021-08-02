import {
  toast
} from '../../../utils/modal.js'
import {
  component
} from '../../../utils/wx.js'

component({
  data: {
    startX: 0, //开始坐标
    startY: 0,
    addressList: [
      {
        name: '1'
      },
      {
        name: '2'
      }
    ],
    touchMove: false
  },
  methods: {
    //手指触摸动作开始 记录起点X坐标
    touchStart: function (e) {
      //开始触摸时 重置所有删除
      this.data.addressList.forEach(function (v, i) {
        if (v.isTouchMove) {
          v.isTouchMove = false
        }
      })
      this.setData({
        startX: e.changedTouches[0].clientX,
        startY: e.changedTouches[0].clientY,
        addressList: this.data.addressList
      })
    },
    //滑动事件处理
    touchMove: function (e) {
      var that = this,
        index = e.currentTarget.dataset.index, //当前索引
        startX = that.data.startX, //开始X坐标
        startY = that.data.startY, //开始Y坐标
        touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
        touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
        //获取滑动角度
        angle = that.angle({
          X: startX,
          Y: startY
        }, {
          X: touchMoveX,
          Y: touchMoveY
        })
      that.data.addressList.forEach(function (v, i) {
        v.isTouchMove = false
        //滑动超过30度角 return
        if (Math.abs(angle) > 10) {
          return
        }
        if (i === index) {
          that.setData({
            touchMove: true
          })
          if (touchMoveX > startX)
            //右滑
            v.isTouchMove = false
          //左滑
          else v.isTouchMove = true
        }
      })
      //更新数据
      that.setData({
        addressList: that.data.addressList
      })
    },
    //滑动结束事件
    touchEnd: function (e) {
      if (this.data.touchMove) {
        wx.vibrateShort({
          type: 'light',
        })
        this.setData({
          touchMove: false
        })
      }

    },
    /**
     * 计算滑动角度
     * @param {Object} start 起点坐标
     * @param {Object} end 终点坐标
     */
    angle: function (start, end) {
      var _X = end.X - start.X
      var _Y = end.Y - start.Y
      //返回角度 /Math.atan()返回数字的反正切值
      return (360 * Math.atan(_Y / _X)) / (2 * Math.PI)
    },
    onLoad(options) {

    },
    delete(e) {
      let index = e.currentTarget.dataset.index
      this.data.addressList.splice(index, 1)
      wx.showToast({
        title: '正在删除',
        icon: 'loading',
        duration: 200
      })
      setTimeout(() => {
        this.setData({
          addressList: this.data.addressList
        })
      }, 500)

    },

    slideButtonTap(e) {
      toast(e.detail.index + '')
    }
  },
  pageLifetimes: {
    show() {
      this.setData({
        slideButtons: [{
          text: '点赞',
          src: '/pages/functions/slideToDelete/icon_love.svg',
        }, {
          text: '收藏',
          extClass: 'test',
          src: '/pages/functions/slideToDelete/icon_star.svg',
        }, {
          type: 'warn',
          text: '删除',
          extClass: 'test',
          src: '/pages/functions/slideToDelete/icon_del.svg',
        }],
      });
    }
  },
  lifetimes: {
    attached: function () {}
  }
})