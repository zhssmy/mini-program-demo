import util from './util.js'
import { alert, confirm, toast } from './modal.js'
import promisify from './promisify/index'

// 增强小程序原生Page和Component，在上面拓展更多的方法
export function page(config) {
  config.$wx = promisify
  config.data = config.data || {}
  config.$toast = toast
  config.$alert = alert
  config.$confirm = confirm
  Object.keys(util).forEach(key => {
    config['$' + key] = util[key]
  })
  return Page(config)
}

export function component(config) {
  config.methods = config.methods || {}
  Object.keys(promisify).forEach(key => {
    config.methods['$' + key] = promisify[key]
  })
  config.methods.$alert = alert
  config.methods.$confirm = confirm
  config.methods.$toast = toast
  Object.keys(util).forEach(key => {
    config.methods['$' + key] = util[key]
  })
  return Component(config)
}
