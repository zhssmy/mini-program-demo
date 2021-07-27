/**
 * 一键复制
 * @param {*} value 需要复制到剪贴板的值
 * @param {*} tips 复制成功的提示语
 */
export function copy(value, tips){
  wx.setClipboardData({
    data: value,
    success: function (res) {
      wx.getClipboardData({
        success: function (res) {
          wx.showToast({
            title: tips
          })
        }
      })
    }
  })
}