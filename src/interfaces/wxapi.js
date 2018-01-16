import wepy from 'wepy'
import base from '../interfaces/base'
var bmap = require('../interfaces/bmap-wx.min.js') 
const BaiduAk = 'H6CuxFQfHFhiK6noVqISHfs9YOiuA0Sn'
export default class wxApi extends base {
  // 获取定位城市
  static async getLocation(type) {
    const data = await wepy.getLocation(type)
    // return this.BaiduMap(data.longitude, data.latitude)
  }
  // 百度接口
  static async BaiduMap() {
    let BMap = new bmap.BMapWX({  
      ak: BaiduAk
    })
    return new Promise((resolve, reject) => {
      BMap.regeocoding({  
        fail:function(res){
          reject(res)
        },  
        success:function(res){
          resolve(res)
        }  
      })
    })

  }
}