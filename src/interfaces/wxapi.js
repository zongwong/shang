import wepy from 'wepy'
import base from '../interfaces/base'
var bmap = require('../interfaces/bmap-wx.min.js') 
const BaiduAk = 'H6CuxFQfHFhiK6noVqISHfs9YOiuA0Sn'
export default class wxApi extends base {
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
  // 获取用户信息
  static async getUser () {
    let Info
    try {
      Info = wepy.getStorageSync('userInfo')
      if (Info) {
          console.log(1)
          return Info
      }else{
         console.log(2)
         const { userInfo } = await wepy.getUserInfo()
         return userInfo
      }
    } catch (e) {
      console.log(3)
      const { userInfo } = await wepy.getUserInfo()
      return data
    }
  }
  // 获取设备信息
  static async getSystemInfo(){
    return wepy.getSystemInfo()
  }
  // 图片预览
  static previewImg() {
    
  }
}