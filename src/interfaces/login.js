import wepy from 'wepy'
// import api from '../config'
const login = {
  // 获取用户信息
  async getUserInfo() {
    const res = await wepy.getUserInfo({
      withCredentials: true
    })
    const {
      code
    } = await wepy.login()
    await wepy.setStorage({
      key: 'userInfo',
      data: res.userInfo
    })
    return {
      userInfo: JSON.stringify(res),
      code: code
    }
  },
  // 登录
  async login() {
    let data = {}
    let userinfo = {}
    try {
      data = await login.getUserInfo()
      userinfo = await wepy.request({
        url: 'https://www.hdlwork.cn/api/token/create',
        data: data,
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      })
      await wepy.setStorage({
        key: 'token',
        data: userinfo.data.data.token
      })
      await wepy.setStorage({
        key: 'type',
        data: userinfo.data.data.type
        // data:'merchant'
      })
      console.log(userinfo.data.data.token)
    } catch (e) {
      wepy.showModal({
        title: '提示',
        content: `获取用户信息失败，请关闭重新进入。${e.message}`
      })

    }
  }
}
export default login
