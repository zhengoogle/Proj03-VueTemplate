// DataCenter.js
let DataCenter = {
  name: 'DataCenter'
}
DataCenter.install = function (Vue, options) {
  console.log('DataCenter install')
  // console.log(options)
  // Vue.dataCenter = DataCenter
  Vue.prototype.$dataCenter = DataCenter
}
export default DataCenter
