//logs.js
import util from '@/lib/utils/util';
import './logs.scss'
import { log } from '@/lib/common/index'
import { kebabCase } from 'lodash'


interface IData {
  logs: string[]
}
interface IMethods { }

Page<IData, IMethods>({
  data: {
    logs: []
  },
  onLoad: function () {
    log.debug(kebabCase('kebabCaseLodash'))
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((item: string) => {
        log.debug(item)
        return util.formatTime(new Date(item))
      })
    })
  }
})
