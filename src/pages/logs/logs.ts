//logs.js
import util from '@/lib/utils/util';
interface IData {
  logs: string[]
}
interface IMethods { }

Page<IData, IMethods>({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
