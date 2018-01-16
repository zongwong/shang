import wepy from 'wepy'
import api from '../config'
import http from '../utils/request'
const interfaces = {
  // 获取用户信息
  async getUserInfo() {
    const {
      userInfo
    } = await wepy.getUserInfo()
    const {
      code
    } = await wepy.login()
    await wepy.setStorage({
      key: 'userInfo',
      data: userInfo
    })
    return {
      userInfo: JSON.stringify(userInfo),
      code: code
    }
  },
  // 登录
  async login() {
    let data = {}
    let userinfo = {}
    try {
      data = await interfaces.getUserInfo()
      userinfo = await wepy.request({
        url: api.users.login.url,
        data: data,
        method: api.users.login.method,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      })
      await wepy.setStorage({
        key: '_token',
        data: userinfo.data.info._token
      })
      console.log(userinfo)
    } catch (e) {
      wepy.showModal({
        title: '提示',
        content: `获取用户信息失败，请关闭重新进入。${e.message}`
      })
    }
  },
  // 上传图片
  async uploadImg() {
    const temp = await wepy.chooseImage()
    const {
      data
    } = await wepy.uploadFile({
      url: 'https://www.2p98.cn/api/public/uploadImg',
      filePath: temp.tempFilePaths[0],
      name: 'filename'
    })
    console.log(data)
    return data
  },
  // 支付
  async getPayinfo(data) {
    const res = await wepy.requestPayment({
      'timeStamp': data.timeStamp,
      'nonceStr': data.nonceStr,
      'package': data.package,
      'signType': 'MD5',
      'paySign': data.paySign
    })
    return res
  },
  // 剪贴板
  async copyText(data) {
    await wepy.setClipboardData({
      data: data
    })
    const res = await wepy.getClipboardData()
    if (res.data) {
      wepy.showToast({
        title: '复制成功'
      })
    }
    return res
  },
  // 全局配置
  async globalConfig() {
    const { data } = await http({
      url: api.public.global.url,
      method: api.public.global.method
    })
    return data
  },
  // 获取个人信息
  async getMyinfo() {
    const { data } = await http({
      url: api.users.get.url,
      method: api.users.get.method,
      data: { }
    }, true)
    return data
  },
  // 获取活动详情
  async getActivityInfo(id) {
    const { data } = await http({
      url: api.activity.info.url,
      method: api.activity.info.method,
      data: {
        aid: id
      }
    }, true)
    return data
  },
  // 图片预览
  previewImg(current, urls) {
    wepy.previewImage({
      current: current,
      urls: urls
    })
  },
  // 获取打卡记录
  async getProgress(id) {
    const { data } = await http({
      url: api.activity.myprogress.url,
      method: api.activity.myprogress.method,
      data: {
        aid: id
      }
    }, true)
    return data
  },
  // 下载图片
  async downFile(url) {
    const data = await wepy.downloadFile({
      url: url
    })
    // console.log(data)
    // data.onProgressUpdate((res) => {
    //   console.log(res)
    // })
    return data.tempFilePath
  },
  // 微信支付
  wxPay(data) {
    // const res = await wepy.requestPayment(data)
    // return res
    return new Promise((resolve, reject) => {
      wx.requestPayment({
        ...data,
        complete: res => {
          if (res.errMsg === 'requestPayment:ok') {
            resolve(res)
          } else {
            reject(res)
          }
        }
      })
    })
  },
  // 活动分享
  activityShare(title, id, url) {
    return {
      title: title,
      path: `/pages/index/pk?id=${id}`,
      imageUrl: url,
      success: (res) => {
        wepy.showToast({
          title: '分享成功'
        })
      }
    }
  }
}
export default interfaces
