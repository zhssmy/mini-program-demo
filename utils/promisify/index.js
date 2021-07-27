/**
 * copy from taro https://github.com/NervJS/taro/blob/master/packages/taro-weapp/src/native-api.js
 */

import { onAndSyncApis, noPromiseApis, otherApis } from './wxApi'
import util from '../util.js'

const wxApiObj = {}
const wxApi = Object.assign({}, onAndSyncApis, noPromiseApis, otherApis)
Object.keys(wxApi).forEach(key => {
  if (!onAndSyncApis[key] && !noPromiseApis[key] && !(['reLaunch', 'redirectTo', 'navigateTo', 'switchTab'].indexOf(key) > -1)) {
    wxApiObj[key] = options => {
      options = options || {}
      let task = null
      const obj = Object.assign({}, options)
      if (typeof options === 'string') {
        return wx[key](options)
      }
      const p = new Promise((resolve, reject) => {
        ;['fail', 'success', 'complete'].forEach(k => {
          obj[k] = res => {
            if (options[k]) {
              options[k](res)
            }
            if (k === 'success') {
              resolve(res)
            } else if (k === 'fail') {
              reject(res)
            }
          }
        })
        task = wx[key](obj)
      })
      if (key === 'uploadFile' || key === 'downloadFile') {
        p.progress = cb => {
          task.onProgressUpdate(cb)
          return p
        }
        p.abort = cb => {
          if (cb) cb()
          task.abort()
          return p
        }
      }
      return p
    }
  /**
   * 让wx.reLaunch 支持 wx.reLaunch('/pages/home/index', { siteId: 23 }).then() 的模式
   */
  } else if (['reLaunch', 'redirectTo', 'navigateTo', 'switchTab'].indexOf(key) > -1) {
    wxApiObj[key] = (url, query) => {
      url = util.parseQueryToUrl(url, query)
      return new Promise((resolve, reject) => {
        wx[key]({
          url,
          success() {
            resolve()
          },
          fail() {
            reject()
          }
        })
      })
    }
  } else {
    wxApiObj[key] = (...args) => wx[key].apply(wx, args)
  }
})

export default wxApiObj
