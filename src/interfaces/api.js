import wepy from 'wepy'
import base from '../interfaces/base'
export default class Api extends base {
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
    return await this.put(url, data)
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
    return await this.get(url, data)
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
    return await this.get(url, data)
  }
  // 我的评价统计
  static async rewardData() {
    const url = `${this.host}/reward/getdata`
    return await this.get(url)
  }
  // 我的收益
  static async profitList(data) {
    const url = `${this.host}/profit/getlist`
    return await this.get(url, data)
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
    return await this.get(url, data)
  }
  // (未绑定)获取验证码
  static async getSms(data) {
    const url = `${this.host}/bind/getBindCode`
    return await this.get(url, data)
  }
  // 绑定手机号
  static async bind(data) {
    const url = `${this.host}/bind/doBind`
    return await this.post(url, data)
  }
  // (已绑定)获取验证码
  static async getEditSms(data) {
    const url = `${this.host}/center/getNewCode`
    return await this.post(url, data)
  }
  // 修改绑定手机号
  static async editBind(data) {
    const url = `${this.host}/center/doChange`
    return await this.post(url, data)
  }
  // 设置签名
  static async setSignature(data) {
    const url = `${this.host}/center/setSignature`
    return await this.post(url, data)
  }
  // 设置个人信息
  static async setPersonalInfo(data) {
    const url = `${this.host}/center/setPersonalInfo`
    return await this.post(url, data)
  }
  // 获取的个人信息
  static async getPersonal(data) {
    const url = `${this.host}/center/getPersonalInfo`
    return await this.get(url, data)
  }
  // 获取个人信息
  static async getPersonalInfo() {
    const url = `${this.host}/center/getData`
    return await this.get(url)
  }
  // 反馈
  static async toFaceback(data) {
    const url = `${this.host}/feedback/save`
    return await this.post(url, data)
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
  // 我的代理(一级代理)
  static async myAgent() {
    const url = `${this.host}/agent/getList`
    return await this.get(url)
  }
  // 我的商家(代理)
  static async myMer() {
    const url = `${this.host}/merchant/getList`
    return await this.get(url)
  }
  // 查询提现密码
  static async checkMoneyLock() {
    const url = `${this.host}/cash/checkPwd`
    return await this.get(url)
  }
  // 设置提现密码
  static async setMoneyLock(data) {
    const url = `${this.host}/cash/setpwd`
    return await this.post(url, data)
  }
  // 我的打赏(游客)
  static async myDashang(data) {
    const url = `${this.host}/reward/getMyReward`
    return await this.get(url, data)
  }
  // 我的排名 (其他)
  static async getOtherTop(data) {
    const url = `${this.host}/rank/reward`
    return await this.get(url, data)
  }
  // 任务列表
  static async getTaskList(data) {
    const url = `${this.host}/task/getdata`
    return await this.get(url, data)
  }
  // 分享
  static async share(data) {
    const url = `${this.host}/task/share`
    return await this.get(url, data)
  }
  // 员工排名
  static async rankStaff(data) {
    const url = `${this.host}/staff/rank`
    return await this.get(url, data)
  }
  // 员工评价
  static async rewardStaff(data) {
    const url = `${this.host}/staff/reward`
    return await this.get(url, data)
  }
  // 获取名片信息
  static async getCardInfo(data) {
    const url = `${this.host}/bcard/getinfo`
    return await this.get(url, data)
  }
  // 新建或更新名片
  static async saveCardInfo(data) {
    const url = `${this.host}/bcard/save`
    return await this.post(url, data)
  }
  // 我的评价 非员工
  static async getMyRewardList(data) {
    const url = `${this.host}/reward/getActiveList`
    return await this.get(url, data)
  }
}
