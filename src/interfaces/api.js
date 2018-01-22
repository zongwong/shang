import wepy from 'wepy'
import base from '../interfaces/base'
export default class Api extends base{
  // 地址列表
  static async addressList(data) {
    const url = `${this.host}/address/getlist`
    return await this.get(url, data)
  }
  // 地址详情
  static async addressInfo(data) {
    const url = `${this.host}/address/getinfo`
    return await this.get(url, data)
  }
  // 地址编辑
  static async addressEdit(data) {
    const url = `${this.host}/address/save`
    return await this.post(url, data)
  }
  // 设置默认收货地址
  static async addressDefault(data) {
    const url = `${this.host}/address/setdefault`
    return await this.put(url, data)
  }
  // 取消默认收货地址
  static async addressUndefault(data) {
    const url = `${this.host}/address/undefault`
    return await this.put(url,data)
  }
  // 删除地址
  static async addressDelete(data) {
    const url = `${this.host}/address/delete`
    return await this.put(url, data)
  }
  // 每日签到
  static async toSign() {
    const url = `${this.host}/sign/dosign`
    return await this.post(url)
  }
  // 月签到数据
  static async getSignData(data) {
    const url = `${this.host}/sign/getList`
    return await this.get(url,data)
  }
  // 连续签到数据
  static async signContinue() {
    const url = `${this.host}/sign/getContinuousDays`
    return await this.get(url)
  }
  // 积分明细?
  static async pointList() {
    const url = `${this.host}/point/getlist`
    return await this.get(url)
  }
  // 我的评价
  static async rewardList(data) {
    const url = `${this.host}/reward/getlist`
    return await this.get(url,data)
  }
  // 我的评价统计
  static async rewardData() {
    const url = `${this.host}/reward/getdata`
    return await this.get(url)
  }
  // 我的收益
  static async profitList(data) {
    const url = `${this.host}/profit/getlist`
    return await this.get(url,data)
  }
  // 我的收益数据
  static async profitData() {
    const url = `${this.host}/profit/getdata`
    return await this.get(url)
  }
  // 我的商家排名
  static async rankMer() {
    const url = `${this.host}/rank/merchant`
    return await this.get(url)
  }
  // 全平台排名
  static async rankPlatform() {
    const url = `${this.host}/rank/platform`
    return await this.get(url)
  }
  // 消息列表
  static async msgList() {
    const url = `${this.host}/msg/getlist`
    return await this.get(url)
  }
  // 消息详情
  static async msgInfo(data) {
    const url = `${this.host}/msg/detail`
    return await this.get(url,data)
  }
  // 修改绑定手机号
  static async bind(href,type, data) {
    const url = `${this.host}/${href}`
    return await this[type](url,data)
  }
  // 修改绑定手机号
  static async sms(href,type, data) {
    const url = `${this.host}/${href}`
    return await this[type](url,data)
  }
  // 设置签名
  static async setSignature(data) {
    const url = `${this.host}/center/setSignature`
    return await this.post(url,data)
  }
  // 设置个人信息
  static async setPersonalInfo(data) {
    const url = `${this.host}/center/setPersonalInfo`
    return await this.post(url,data)
  }
  // 获取个人信息
  static async getPersonalInfo() {
    const url = `${this.host}/center/getData`
    return await this.post(url)
  }
  // 反馈
  static async toFaceback(data){
    const url = `${this.host}/feedback/save`
    return await this.post(url,data)
  }
  // 抽奖
  static async toCj() {
    const url = `${this.host}/game/play`
    return await this.post(url)
  }
  // 抽奖记录
  static async cjList() {
    const url = `${this.host}/game/getList`
    return await this.post(url)
  }
}