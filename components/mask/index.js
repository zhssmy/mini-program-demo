import {component} from '../../utils/wx.js'

component({
  options: {
    addGlobalClass: true
  },
  properties: {
    zIndex: {
      type: Number,
      value: 1000
    },
    customStyle: {
      type: String,
      value: ''
    }
  }
})
