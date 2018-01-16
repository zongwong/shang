const host = 'https://www.hdlwork.cn/api'
import http from '../utils/Http'
export default class Base {
  static host = host
  static get = http.get.bind(http)
  static post = http.post.bind(http)
  static put = http.put.bind(http)
  static delete = http.delete.bind(http)
}