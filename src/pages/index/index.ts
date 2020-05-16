//index.js
import { hello, asyncHello, greet } from '@/lib/utils/hello'
import './index.scss'
import { test } from '@/lib/utils/test'
import { log } from '@/lib/common/index'
import {camelCase} from 'lodash'

//获取应用实例
const app = getApp()

interface IData {
  motto: string,
  userInfo: {
    [k: string]: any
  },
  hasUserInfo: boolean
  canIUse: boolean
}

interface IMethods {
  bindViewTap: (e: any) => any
  getUserInfo: (e: any) => any
}
Page<IData, IMethods>({
  data: {
    motto: '你好',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: async function () {
    console.log(`wait 2000ms ...`)
    await greet('test-id')
    log.debug(camelCase('hello-world-lodash'))
    test()
  },
  getUserInfo: function (e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
