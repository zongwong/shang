import wepy from 'wepy';
import Tips from './Tips';
import login from '../interfaces/login'
const TEST = false
// HTTP工具类
export default class http {
  static async request (method, url, data={}, loading = true , token = true) {
    if(TEST){
      const type = await wepy.getStorageSync('type')
      data.type = type
      data.act = 'test'
    }
    const param = {
      url: url,
      method: method,
      data: data
    };
    if (loading) {
      // Tips.loading();
    }
    if (token){
      const token = wepy.getStorageSync('token')
      param.header = {
        'content-type': 'application/x-www-form-urlencoded',
      }
      param.data['token'] = token
    }
    const res = await wepy.request(param);

    if (res.statusCode == 200) {
      if(res.data.code==400 && res.data.message=='token过期，请重新请求'){
        await login.login()
        return await this.request(method, url, data)
      }
      return res.data;
    } else {
      throw this.requestException(res);
    }
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess (res) {
    const wxCode = res.statusCode;
    // 微信请求错误
    if (wxCode !== 200) {
      return false;
    }
    const wxData = res.data;
    return !(wxData && wxData.code !== 0);
  }

  /**
   * 异常
   */
  static requestException (res) {
    const error = {};
    error.statusCode = res.statusCode;
    const wxData = res.data;
    const serverData = wxData.data;
    if (serverData) {
      error.serverCode = wxData.code;
      error.message = serverData.message;
      error.serverData = serverData;
    }
    return error;
  }

  static get (url, data, loading = true) {
    return this.request('GET', url, data, loading);
  }

  static put (url, data, loading = true) {
    return this.request('PUT', url, data, loading);
  }

  static post (url, data, loading = true) {
    return this.request('POST', url, data, loading);
  }

  static patch (url, data, loading = true) {
    return this.request('PATCH', url, data, loading);
  }

  static delete (url, data, loading = true) {
    return this.request('DELETE', url, data, loading);
  }
}