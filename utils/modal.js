function modal(opt) {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: opt.title,
      content: opt.content,
      cancelText: opt.cancelText,
      confirmText: opt.confirmText,
      showCancel: opt.showCancel,
      confirmColor: '#ffd500',
      success(res) {
        if (res.confirm) {
          resolve(true)
        } else if (res.cancel) {
          reject(false)
        }
      }
    })
  })
}

function handleModal(options = {}, type = 'alert') {
  let defaultOptions = {
    content: '操作提示',
    title: '',
    confirmText: '确定',
    cancelText: '取消'
  }
  if (typeof options === 'string') {
    options = {
      content: options
    }
  }
  Object.assign(defaultOptions, options)
  if (type === 'alert') {
    defaultOptions.showCancel = false
  } else if (type === 'confirm') {
    defaultOptions.showCancel = true
  }
  return modal(defaultOptions)
}

export function alert(options = {}) {
  return handleModal(options, 'alert')
}

export function confirm(options = {}) {
  return handleModal(options, 'confirm')
}

export function toast(...args) {
  const defaultOptions = {
    title: '',
    duration: 1500,
    icon: 'none',
    mask: false
  }
  let options = {}
  if (args[0] && typeof args[0] === 'string') {
    options = {
      title: args[0]
    }
  }
  if (args[0] && typeof args[0] === 'string' && args[1] && typeof args[1] === 'number') {
    options = {
      title: args[0],
      duration: args[1]
    }
  }
  Object.assign(defaultOptions, options)
  return new Promise((resolve, reject) => {
    defaultOptions.success = () => {
      resolve()
    }
    defaultOptions.fail = () => {
      reject()
    }
    wx.showToast(defaultOptions)
  })
}
