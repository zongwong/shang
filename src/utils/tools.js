const _ = {
  getToday() {
    let now = new Date()
    return now.getFullYear() + '-' + _.addZero(now.getMonth() + 1) + '-' + _.addZero(now.getDate())
  },
  addZero(n) {
    return n.toString()[1] ? n : '0' + n
  }
}
export default _