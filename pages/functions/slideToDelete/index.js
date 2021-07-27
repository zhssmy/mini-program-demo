import {
  component
} from '../../../utils/wx.js'

component({
  data: {
    startX: 0, //开始坐标
    startY: 0,
    page: 1,
    addressList: [{
        id: 1,
        name: "朱聪",
        address: "湖北省武汉市江夏区光谷七路北大资源山水年华",
      },
      {
        id: 2,
        name: "朱聪",
        address: "湖北省武汉市江夏区光谷七路北大资源山水年华湖北省武汉市江夏区光谷七路北大资源山水年华",
      },
      {
        id: 3,
        name: "朱聪",
        address: "湖北省武汉市江夏区光谷七路北大资源山水年华",
      },
      {
        id: 4,
        name: "朱聪",
        address: "湖北省武汉市江夏区光谷七路北大资源山水年华",
      },
      {
        id: 5,
        name: "朱聪",
        address: "湖北省武汉市江夏区光谷七路北大资源山水年华",
      },
      {
        id: 6,
        name: "朱聪",
        address: "湖北省武汉市江夏区光谷七路北大资源山水年华",
      },
      {
        id: 7,
        name: "朱聪",
        address: "湖北省武汉市江夏区光谷七路北大资源山水年华",
      },
      {
        id: 8,
        name: "朱聪",
        address: "湖北省武汉市江夏区光谷七路北大资源山水年华",
      }
    ]
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
    delAddress(e) {
      this.$get('/addressBook/delete', {
        id: e.target.dataset.id
      }).then(res => {
        wx.showToast({
          title: '地址删除成功',
          icon: 'success'
        })
        this.getAddressList()
      })
    },
    edit(e) {
      wx.setStorageSync('addressList', this.data.addressList)
      this.$navigateTo('/pages/UserCenterPackage/address-detail/index?type=edit&id=' + e.target.dataset.id)
    },
    add() {
      wx.setStorageSync('addressList', this.data.addressList)
      this.$navigateTo('/pages/UserCenterPackage/address-detail/index?type=add')
    },
    onLoad(options) {
      if (options.from) {
        this.setData({
          pageParam: options.from
        })
      }
    },
  },
  pageLifetimes: {
    show() {

    }
  },
  lifetimes: {
    attached: function () {}
  }
})