//index.js
import { hello, asyncHello, greet } from '@/lib/utils/hello'
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
    motto: 'Hello World',
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
